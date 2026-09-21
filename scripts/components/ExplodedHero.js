/**
 * ExplodedHero.js
 * Cinematic 3D Exploded View Hero Component.
 * Orchestrates 3D stage rendering, hardware-accelerated layer transitions,
 * orbit/gyroscope pointer tracking, layer HUD inspection, and auto-play tour.
 */

import { store } from '../core/Store.js';
import { MediaManager } from '../core/MediaManager.js';
import { AnimationEngine } from '../core/AnimationEngine.js';

export class ExplodedHero {
  constructor(container) {
    this.container = container;
    this.currentProduct = null;
    this.animationEngine = null;
    this.layerElements = [];

    this._renderModalContainer();
    this._bindStoreEvents();
  }

  _renderModalContainer() {
    this.container.innerHTML = `
      <div class="exploded-modal" id="exploded-modal-root" role="dialog" aria-modal="true" aria-hidden="true">
        <!-- Ambient Dynamic Color Lighting -->
        <div class="stage-ambient-glow" id="hero-ambient-glow"></div>

        <!-- Header Bar -->
        <header class="exploded-header">
          <div class="hero-product-meta">
            <span class="hero-product-category" id="hero-cat-tag">Category</span>
            <h2 class="hero-product-title" id="hero-product-title">Product Title</h2>
          </div>

          <div style="display: flex; align-items: center; gap: 16px;">
            <span class="hero-product-price" id="hero-product-price">$ 0</span>
            <button class="btn-close-hero" id="btn-close-hero-modal" aria-label="Close 3D View">✕</button>
          </div>
        </header>

        <!-- Orbit Controller Hint -->
        <div class="orbit-hint">
          <span>🔄</span>
          <span>Drag mouse or touch to orbit in 3D • Click any ingredient to inspect</span>
        </div>

        <!-- 3D Perspective Stage Viewport -->
        <div class="stage-viewport" id="hero-stage-viewport">
          <div class="stage-world-3d" id="hero-stage-world">
            <!-- Shadow Ground Disc -->
            <div class="stage-shadow-disc" id="hero-stage-shadow"></div>

            <!-- Statically/Dynamically Rendered Layers Stack -->
            <div class="layers-stack" id="hero-layers-stack"></div>
          </div>
        </div>

        <!-- Floating Ingredient Inspection Detail HUD -->
        <aside class="ingredient-inspect-hud" id="hero-inspect-hud">
          <div class="inspect-header">
            <div class="inspect-title-wrap">
              <span class="inspect-layer-type" id="hud-layer-type">Layer Role</span>
              <h3 class="inspect-title" id="hud-layer-title">Ingredient Name</h3>
            </div>
            <button class="btn-close-inspect" id="btn-close-hud" aria-label="Close Inspector">✕</button>
          </div>

          <p class="inspect-desc" id="hud-layer-desc">Detailed gastronomic description and culinary notes.</p>

          <div class="inspect-meta-grid">
            <div class="inspect-meta-item">
              <span class="inspect-meta-label">Origin</span>
              <span class="inspect-meta-value" id="hud-layer-origin">Local</span>
            </div>
            <div class="inspect-meta-item">
              <span class="inspect-meta-label">Preparation</span>
              <span class="inspect-meta-value" id="hud-layer-prep">Artisan</span>
            </div>
            <div class="inspect-meta-item">
              <span class="inspect-meta-label">Allergens</span>
              <span class="inspect-meta-value" id="hud-layer-allergens">None</span>
            </div>
          </div>
        </aside>

        <!-- Bottom Controls Toolbar -->
        <footer class="exploded-toolbar">
          <button class="control-btn btn-explode" id="btn-toggle-explode">
            <span id="explode-icon">⚡</span>
            <span id="explode-label">Explore Ingredients</span>
          </button>

          <button class="control-btn btn-secondary-control" id="btn-reassemble">
            <span>🧩</span>
            <span>Reassemble</span>
          </button>

          <button class="control-btn btn-secondary-control" id="btn-autoplay">
            <span id="autoplay-icon">▶</span>
            <span id="autoplay-label">Auto Play 3D</span>
          </button>

          <button class="control-btn btn-secondary-control" id="btn-reset-orbit">
            <span>🎯</span>
            <span>Reset Angle</span>
          </button>
        </footer>
      </div>
    `;

    this.modalRoot = this.container.querySelector('#exploded-modal-root');
    this.stageViewport = this.container.querySelector('#hero-stage-viewport');
    this.stageWorld = this.container.querySelector('#hero-stage-world');
    this.stageShadow = this.container.querySelector('#hero-stage-shadow');
    this.layersStack = this.container.querySelector('#hero-layers-stack');
    this.inspectHud = this.container.querySelector('#hero-inspect-hud');

    // Initialize animation engine
    this.animationEngine = new AnimationEngine({
      stageElement: this.stageViewport,
      worldElement: this.stageWorld,
      shadowElement: this.stageShadow
    });

    this._bindDOMEvents();
  }

  _bindDOMEvents() {
    // Close button
    const closeBtn = this.container.querySelector('#btn-close-hero-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => store.closeExplodedHero());
    }

    // Close HUD
    const closeHudBtn = this.container.querySelector('#btn-close-hud');
    if (closeHudBtn) {
      closeHudBtn.addEventListener('click', () => store.clearInspection());
    }

    // Toggle Explode / Reassemble
    const toggleExplodeBtn = this.container.querySelector('#btn-toggle-explode');
    if (toggleExplodeBtn) {
      toggleExplodeBtn.addEventListener('click', () => {
        store.setExploded(!store.isExploded);
      });
    }

    // Explicit Reassemble button
    const reassembleBtn = this.container.querySelector('#btn-reassemble');
    if (reassembleBtn) {
      reassembleBtn.addEventListener('click', () => {
        store.setExploded(false);
      });
    }

    // Reset Orbit button
    const resetOrbitBtn = this.container.querySelector('#btn-reset-orbit');
    if (resetOrbitBtn) {
      resetOrbitBtn.addEventListener('click', () => {
        this.animationEngine.resetOrbit(true);
      });
    }

    // Auto Play button
    const autoPlayBtn = this.container.querySelector('#btn-autoplay');
    if (autoPlayBtn) {
      autoPlayBtn.addEventListener('click', () => {
        this._toggleAutoPlay();
      });
    }

    // Clicking anywhere on stage outside a layer closes inspection
    this.stageViewport.addEventListener('click', (e) => {
      if (!e.target.closest('.product-layer') && !e.target.closest('.layer-tag-pill') && store.inspectedLayerId) {
        store.clearInspection();
      }
    });

    // Escape key to close modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalRoot.classList.contains('active')) {
        store.closeExplodedHero();
      }
    });
  }

  _bindStoreEvents() {
    store.on('heroOpened', (product) => this._openWithProduct(product));
    store.on('heroClosed', () => this._closeModal());
    store.on('explodeStateChanged', (isExploded) => this._onExplodeChanged(isExploded));
    store.on('layerInspected', (layerId) => this._onLayerInspected(layerId));
    store.on('inspectionCleared', () => this._onInspectionCleared());
    store.on('currencyChanged', () => {
      if (this.currentProduct) {
        const priceEl = this.container.querySelector('#hero-product-price');
        if (priceEl) priceEl.textContent = store.formatPrice(this.currentProduct.price);
      }
    });
  }

  _openWithProduct(product) {
    this.currentProduct = product;
    this.modalRoot.classList.add('active');
    this.modalRoot.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Update Header Metadata
    const cat = store.getCategories().find(c => c.id === product.categoryId);
    this.container.querySelector('#hero-cat-tag').textContent = cat ? `${cat.icon || ''} ${cat.name}` : 'Culinary Creation';
    this.container.querySelector('#hero-product-title').textContent = product.name;
    this.container.querySelector('#hero-product-price').textContent = store.formatPrice(product.price);

    // Update Ambient Color
    const glowEl = this.container.querySelector('#hero-ambient-glow');
    glowEl.style.background = `radial-gradient(circle, ${product.colorGlow || 'rgba(245, 158, 11, 0.45)'} 0%, transparent 70%)`;

    // Render 3D Layers
    this._renderLayers(product.layers || []);

    // Reset Engine & Assembly
    this.animationEngine.resetOrbit(false);
    this.animationEngine.applyAssembledState(product.layers, this.layerElements);
    this._updateToolbarLabels(false);
  }

  _closeModal() {
    this.modalRoot.classList.remove('active');
    this.modalRoot.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.animationEngine.stopAutoPlay();
    this.inspectHud.classList.remove('active');
    this._updateAutoPlayButton(false);
  }

  _renderLayers(layers) {
    this.layersStack.innerHTML = '';
    this.layerElements = [];

    layers.forEach((layer, idx) => {
      const layerEl = document.createElement('div');
      layerEl.className = 'product-layer';
      layerEl.dataset.layerId = layer.id;
      layerEl.dataset.layerIndex = idx;

      // Render Visual Graphic (Upload or Procedural SVG)
      const visualHtml = layer.customImageUrl
        ? `<img src="${layer.customImageUrl}" alt="${layer.name}" />`
        : MediaManager.getLayerSvg(layer.type, {
            label: layer.name,
            color: layer.color || '#f59e0b',
            width: 280,
            height: 280
          });

      layerEl.innerHTML = `
        <div class="layer-visual-wrap">
          ${visualHtml}
        </div>

        <!-- Floating 3D Connector Label -->
        <div class="layer-tag-anchor">
          <div class="layer-connector-line"></div>
          <button class="layer-tag-pill" data-layer-id="${layer.id}">
            <span class="layer-tag-dot"></span>
            <span>${layer.name}</span>
          </button>
        </div>
      `;

      // Layer click to inspect
      layerEl.addEventListener('click', (e) => {
        e.stopPropagation();
        store.inspectLayer(layer.id);
      });

      this.layersStack.appendChild(layerEl);
      this.layerElements.push(layerEl);
    });
  }

  _onExplodeChanged(isExploded) {
    if (!this.currentProduct) return;
    this._updateToolbarLabels(isExploded);

    if (isExploded) {
      this.modalRoot.classList.add('exploded');
      this.animationEngine.applyExplodedState(this.currentProduct.layers, this.layerElements);
    } else {
      this.modalRoot.classList.remove('exploded');
      this.inspectHud.classList.remove('active');
      this.animationEngine.applyAssembledState(this.currentProduct.layers, this.layerElements);
    }
  }

  _onLayerInspected(layerId) {
    if (!this.currentProduct) return;
    const layer = this.currentProduct.layers.find(l => l.id === layerId);
    if (!layer) return;

    // Apply 3D Inspector Transform in Engine
    this.animationEngine.inspectLayer(layerId, this.currentProduct.layers, this.layerElements);

    // Populate HUD
    this.container.querySelector('#hud-layer-type').textContent = `Role: ${layer.type || 'Culinary Element'}`;
    this.container.querySelector('#hud-layer-title').textContent = layer.name;
    this.container.querySelector('#hud-layer-desc').textContent = layer.tastingNotes || `Fresh and carefully selected ${layer.name}.`;
    this.container.querySelector('#hud-layer-origin').textContent = layer.origin || 'Selected Artisan Source';
    this.container.querySelector('#hud-layer-prep').textContent = layer.prepMethod || 'Handcrafted';
    this.container.querySelector('#hud-layer-allergens').textContent = this.currentProduct.allergens?.length ? this.currentProduct.allergens.join(', ') : 'None';

    this.inspectHud.classList.add('active');
  }

  _onInspectionCleared() {
    if (!this.currentProduct) return;
    this.inspectHud.classList.remove('active');
    this.animationEngine.clearInspection(this.currentProduct.layers, this.layerElements, store.isExploded);
  }

  _updateToolbarLabels(isExploded) {
    const icon = this.container.querySelector('#explode-icon');
    const label = this.container.querySelector('#explode-label');
    if (isExploded) {
      if (icon) icon.textContent = '🔄';
      if (label) label.textContent = 'Collapse Product';
    } else {
      if (icon) icon.textContent = '⚡';
      if (label) label.textContent = 'Explore Ingredients';
    }
  }

  _toggleAutoPlay() {
    if (this.animationEngine.isAutoPlaying) {
      this.animationEngine.stopAutoPlay();
      this._updateAutoPlayButton(false);
    } else {
      this._updateAutoPlayButton(true);
      this.animationEngine.startAutoPlay((step) => {
        if (step === 'explode') {
          store.setExploded(true);
        } else if (step === 'assemble') {
          store.setExploded(false);
        }
      });
    }
  }

  _updateAutoPlayButton(isActive) {
    const btn = this.container.querySelector('#btn-autoplay');
    const label = this.container.querySelector('#autoplay-label');
    const icon = this.container.querySelector('#autoplay-icon');
    if (!btn) return;

    btn.classList.toggle('active', isActive);
    if (isActive) {
      if (icon) icon.textContent = '⏸';
      if (label) label.textContent = 'Pause Tour';
    } else {
      if (icon) icon.textContent = '▶';
      if (label) label.textContent = 'Auto Play 3D';
    }
  }
}
