/**
 * AnimationEngine.js
 * High-performance 3D matrix transform engine, spring physics,
 * pointer orbital tracking with inertia damping, gyroscope tilt,
 * staggered layer explode/reassemble, and auto-play choreography.
 */

export class AnimationEngine {
  constructor(options = {}) {
    this.stageElement = options.stageElement || null;
    this.worldElement = options.worldElement || null;
    this.shadowElement = options.shadowElement || null;

    // Orbit Rotational State
    this.rotX = -12;
    this.rotY = 18;
    this.targetRotX = -12;
    this.targetRotY = 18;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;

    // Auto Play Timer
    this.isAutoPlaying = false;
    this.autoPlayTimer = null;
    this.autoPlayPhase = 0;

    // Spring Easing Matrix Constants
    this.damping = 0.88;
    this.sensitivity = 0.28;

    // Bind event handlers
    this._onPointerDown = this._onPointerDown.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUp = this._onPointerUp.bind(this);
    this._onDeviceOrientation = this._onDeviceOrientation.bind(this);

    this.rafId = null;
    this._initListeners();
    this._startRenderLoop();
  }

  setElements(stageElement, worldElement, shadowElement) {
    this.stageElement = stageElement;
    this.worldElement = worldElement;
    this.shadowElement = shadowElement;
    this._initListeners();
  }

  _initListeners() {
    if (!this.stageElement) return;

    this.stageElement.removeEventListener('pointerdown', this._onPointerDown);
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);

    this.stageElement.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);

    // Mobile Gyroscope Support
    if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission !== 'function') {
      window.addEventListener('deviceorientation', this._onDeviceOrientation, true);
    }
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.stopAutoPlay();
    if (this.stageElement) {
      this.stageElement.removeEventListener('pointerdown', this._onPointerDown);
    }
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
    window.removeEventListener('deviceorientation', this._onDeviceOrientation);
  }

  // ==========================================
  // 3D Orbital Mouse / Touch Orbit Controller
  // ==========================================
  _onPointerDown(e) {
    // Only track primary clicks or touches on stage
    if (e.target.closest('.layer-tag-pill') || e.target.closest('.control-btn') || e.target.closest('.btn-close-inspect')) {
      return;
    }
    this.isDragging = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    if (this.stageElement) this.stageElement.style.cursor = 'grabbing';
  }

  _onPointerMove(e) {
    if (!this.isDragging) return;
    const deltaX = e.clientX - this.startX;
    const deltaY = e.clientY - this.startY;

    this.startX = e.clientX;
    this.startY = e.clientY;

    this.targetRotY += deltaX * this.sensitivity;
    this.targetRotX -= deltaY * this.sensitivity;

    // Clamp vertical tilt to prevent inverted tumbling
    this.targetRotX = Math.max(-42, Math.min(35, this.targetRotX));
    // Clamp horizontal tilt range
    this.targetRotY = Math.max(-75, Math.min(75, this.targetRotY));
  }

  _onPointerUp() {
    this.isDragging = false;
    if (this.stageElement) this.stageElement.style.cursor = 'grab';
  }

  _onDeviceOrientation(e) {
    if (this.isDragging || !e.gamma || !e.beta) return;
    // Map mobile device orientation gently to orbit angles
    const tiltX = (e.beta - 45) * 0.35;
    const tiltY = e.gamma * 0.45;
    this.targetRotX = Math.max(-30, Math.min(25, tiltX));
    this.targetRotY = Math.max(-45, Math.min(45, tiltY));
  }

  resetOrbit(smooth = true) {
    this.targetRotX = -12;
    this.targetRotY = 18;
    if (!smooth) {
      this.rotX = -12;
      this.rotY = 18;
      this._applyWorldTransform();
    }
  }

  // ==========================================
  // Render Loop: Physics Interpolation
  // ==========================================
  _startRenderLoop() {
    const loop = () => {
      // Smooth spring interpolation between current rot and target rot
      const diffX = this.targetRotX - this.rotX;
      const diffY = this.targetRotY - this.rotY;

      if (Math.abs(diffX) > 0.01 || Math.abs(diffY) > 0.01) {
        this.rotX += diffX * 0.12;
        this.rotY += diffY * 0.12;
        this._applyWorldTransform();
      }

      // If auto-playing and not dragging, apply gentle camera drift
      if (this.isAutoPlaying && !this.isDragging) {
        const time = Date.now() * 0.001;
        this.targetRotY = Math.sin(time * 0.8) * 25 + 5;
      }

      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  _applyWorldTransform() {
    if (!this.worldElement) return;
    this.worldElement.style.transform = `rotateX(${this.rotX.toFixed(2)}deg) rotateY(${this.rotY.toFixed(2)}deg)`;
    if (this.shadowElement) {
      this.shadowElement.style.transform = `translateX(-50%) rotateX(85deg) rotateZ(${(-this.rotY * 0.5).toFixed(1)}deg)`;
    }
  }

  // ==========================================
  // Layer Explosion & Assembly
  // ==========================================
  applyExplodedState(layers, layerDOMElements) {
    if (!layers || !layerDOMElements) return;

    layers.forEach((layerData, idx) => {
      const el = layerDOMElements[idx];
      if (!el) return;

      const exp = layerData.exploded || {};
      const x = exp.x || 0;
      const y = exp.y || 0;
      const z = exp.z || 0;
      const rx = exp.rx || 0;
      const ry = exp.ry || 0;
      const rz = exp.rz || 0;
      const scale = exp.scale || 1;
      const opacity = exp.opacity !== undefined ? exp.opacity : 1;
      const duration = exp.duration || 700;
      const delay = exp.delay || 0;

      el.style.transition = `transform ${duration}ms cubic-bezier(0.34, 1.4, 0.64, 1) ${delay}ms, opacity 400ms ease ${delay}ms, filter 350ms ease`;
      el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${scale})`;
      el.style.opacity = opacity;
      el.style.zIndex = 20 + idx;
    });

    if (this.shadowElement) {
      this.shadowElement.style.opacity = '0.35';
      this.shadowElement.style.filter = 'blur(20px)';
    }
  }

  applyAssembledState(layers, layerDOMElements) {
    if (!layers || !layerDOMElements) return;

    layers.forEach((layerData, idx) => {
      const el = layerDOMElements[idx];
      if (!el) return;

      const init = layerData.initial || {};
      const x = init.x || 0;
      const y = init.y || 0;
      const z = init.z || 0;
      const rx = init.rx || 0;
      const ry = init.ry || 0;
      const rz = init.rz || 0;
      const scale = init.scale || 1;
      const opacity = init.opacity !== undefined ? init.opacity : 1;
      // Faster assembly
      const delay = (layers.length - 1 - idx) * 35;

      el.style.transition = `transform 550ms cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms, opacity 350ms ease, filter 300ms ease`;
      el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${scale})`;
      el.style.opacity = opacity;
      el.style.filter = 'none';
      el.style.zIndex = 10 + idx;
    });

    if (this.shadowElement) {
      this.shadowElement.style.opacity = '0.75';
      this.shadowElement.style.filter = 'blur(14px)';
    }
  }

  // ==========================================
  // Layer Inspection (Forward in 3D + Dim Rest)
  // ==========================================
  inspectLayer(targetLayerId, layers, layerDOMElements) {
    if (!layers || !layerDOMElements) return;

    if (this.worldElement) {
      this.worldElement.classList.add('has-inspected-layer');
    }

    layers.forEach((layerData, idx) => {
      const el = layerDOMElements[idx];
      if (!el) return;

      if (layerData.id === targetLayerId) {
        el.classList.add('is-inspected');
        el.style.zIndex = '200';
        el.style.transform = `translate3d(0px, 0px, 150px) scale(1.18)`;
      } else {
        el.classList.remove('is-inspected');
        el.style.zIndex = `${10 + idx}`;
      }
    });
  }

  clearInspection(layers, layerDOMElements, isExploded) {
    if (this.worldElement) {
      this.worldElement.classList.remove('has-inspected-layer');
    }

    if (!layerDOMElements) return;
    layerDOMElements.forEach(el => {
      if (el) el.classList.remove('is-inspected');
    });

    if (isExploded) {
      this.applyExplodedState(layers, layerDOMElements);
    } else {
      this.applyAssembledState(layers, layerDOMElements);
    }
  }

  // ==========================================
  // Auto Play Mode (Cinema Tour)
  // ==========================================
  startAutoPlay(onStepCallback) {
    this.isAutoPlaying = true;
    this.autoPlayPhase = 0;

    const cycle = () => {
      if (!this.isAutoPlaying) return;

      if (this.autoPlayPhase === 0) {
        // Explode
        if (onStepCallback) onStepCallback('explode');
        this.targetRotX = -15;
        this.targetRotY = 25;
        this.autoPlayPhase = 1;
        this.autoPlayTimer = setTimeout(cycle, 3200);
      } else if (this.autoPlayPhase === 1) {
        // Orbit shift
        this.targetRotX = -5;
        this.targetRotY = -25;
        this.autoPlayPhase = 2;
        this.autoPlayTimer = setTimeout(cycle, 2800);
      } else {
        // Reassemble
        if (onStepCallback) onStepCallback('assemble');
        this.resetOrbit(true);
        this.autoPlayPhase = 0;
        this.autoPlayTimer = setTimeout(cycle, 3000);
      }
    };

    cycle();
  }

  stopAutoPlay() {
    this.isAutoPlaying = false;
    if (this.autoPlayTimer) {
      clearTimeout(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }
}
