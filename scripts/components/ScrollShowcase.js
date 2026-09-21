/**
 * ScrollShowcase.js
 * Cinematic Scroll-driven Interactive Storytelling.
 * Scrubs through 3D product assembly, layer explosion, ingredient highlights,
 * and reassembly in direct response to user vertical scrolling.
 */

import { store } from '../core/Store.js';
import { MediaManager } from '../core/MediaManager.js';

export class ScrollShowcase {
  constructor(container) {
    this.container = container;
    this.showcaseProducts = [];
    this.currentProductIndex = 0;
    this.layerElements = [];
    this.scrollTicking = false;

    this._onScroll = this._onScroll.bind(this);
    this._init();
  }

  _init() {
    // Select signature items across categories for the showcase
    const products = store.getProducts();
    const burger = products.find(p => p.id === 'burger-royal-truffle') || products[0];
    const pizza = products.find(p => p.id === 'pizza-margherita') || products[1];
    const dessert = products.find(p => p.id === 'dessert-gold-sphere') || products[2];

    this.showcaseProducts = [burger, pizza, dessert].filter(Boolean);
    this._render();
    this._bindEvents();
  }

  _render() {
    const product = this.showcaseProducts[this.currentProductIndex] || this.showcaseProducts[0];
    if (!product) return;

    this.container.innerHTML = `
      <div class="scroll-showcase-view" id="scroll-showcase-root">
        <!-- Pinned Sticky 3D Screen -->
        <div class="scroll-sticky-stage" id="scroll-sticky-stage">
          <!-- Ambient Glow -->
          <div class="stage-ambient-glow" id="scroll-ambient-glow" style="background: ${product.colorGlow || 'rgba(245, 158, 11, 0.4)'};"></div>

          <!-- Top HUD Header -->
          <div class="scroll-hud-header">
            <div class="scroll-chapter-info">
              <span class="scroll-chapter-label" id="scroll-chapter-label">
                Course ${this.currentProductIndex + 1} of ${this.showcaseProducts.length} • Cinematic Journey
              </span>
              <h2 class="scroll-product-name" id="scroll-prod-name">${product.name}</h2>
            </div>

            <!-- Progress Bar -->
            <div class="scroll-progress-bar-wrap">
              <div class="scroll-progress-bar-fill" id="scroll-progress-fill"></div>
            </div>
          </div>

          <!-- Center 3D Stage -->
          <div class="scroll-3d-center">
            <div class="scroll-world-3d" id="scroll-world-3d">
              <div class="stage-shadow-disc" id="scroll-shadow-disc"></div>
              <div class="layers-stack" id="scroll-layers-stack"></div>
            </div>
          </div>

          <!-- Floating Story Note Card -->
          <aside class="scroll-story-card" id="scroll-story-card">
            <span class="scroll-story-tag" id="story-card-tag">Phase: Culinary Fusion</span>
            <h4 class="scroll-story-title" id="story-card-title">${product.name}</h4>
            <p class="scroll-story-body" id="story-card-body">${product.description}</p>
          </aside>

          <!-- Bottom Prompt -->
          <div class="scroll-footer-prompt">
            <div class="mouse-scroll-icon"></div>
            <span>Scroll down to deconstruct and explore the layers</span>
          </div>
        </div>

        <!-- Scroll Height Spacers (400vh for multi-phase scrub) -->
        <div class="scroll-track-spacer" id="scroll-track-spacer"></div>
      </div>
    `;

    this.stickyStage = this.container.querySelector('#scroll-sticky-stage');
    this.world3D = this.container.querySelector('#scroll-world-3d');
    this.shadowDisc = this.container.querySelector('#scroll-shadow-disc');
    this.layersStack = this.container.querySelector('#scroll-layers-stack');
    this.progressFill = this.container.querySelector('#scroll-progress-fill');
    this.storyCard = this.container.querySelector('#scroll-story-card');
    this.spacer = this.container.querySelector('#scroll-track-spacer');

    this._mountProductLayers(product);
  }

  _mountProductLayers(product) {
    this.layersStack.innerHTML = '';
    this.layerElements = [];

    product.layers.forEach((layer, idx) => {
      const layerEl = document.createElement('div');
      layerEl.className = 'product-layer';
      layerEl.dataset.layerId = layer.id;

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
      `;

      // Position initially assembled
      const init = layer.initial || {};
      layerEl.style.transform = `translate3d(${init.x || 0}px, ${init.y || 0}px, ${init.z || 0}px)`;
      layerEl.style.zIndex = 10 + idx;

      this.layersStack.appendChild(layerEl);
      this.layerElements.push(layerEl);
    });
  }

  _bindEvents() {
    window.addEventListener('scroll', this._onScroll, { passive: true });
    store.on('productsUpdated', () => this._init());
  }

  destroy() {
    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll() {
    if (!this.scrollTicking) {
      requestAnimationFrame(() => {
        this._updateScrub();
        this.scrollTicking = false;
      });
      this.scrollTicking = true;
    }
  }

  _updateScrub() {
    const spacer = this.container.querySelector('#scroll-track-spacer');
    if (!spacer) return;

    const rect = spacer.getBoundingClientRect();
    const totalHeight = spacer.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalHeight));

    // Update Progress Bar
    if (this.progressFill) {
      this.progressFill.style.width = `${(progress * 100).toFixed(1)}%`;
    }

    // Determine current product based on total progress across the 3 showcase products
    const numProducts = this.showcaseProducts.length;
    const segment = 1 / numProducts;
    const currentProductIndex = Math.min(numProducts - 1, Math.floor(progress / segment));

    if (currentProductIndex !== this.currentProductIndex) {
      this.currentProductIndex = currentProductIndex;
      const newProduct = this.showcaseProducts[currentProductIndex];
      this._updateProductMeta(newProduct);
      this._mountProductLayers(newProduct);
    }

    // Local segment progress (0 to 1 inside current product)
    const localProgress = (progress % segment) / segment;
    this._applyScrubPhysics(localProgress);
  }

  _updateProductMeta(product) {
    const label = this.container.querySelector('#scroll-chapter-label');
    const name = this.container.querySelector('#scroll-prod-name');
    const glow = this.container.querySelector('#scroll-ambient-glow');

    if (label) label.textContent = `Course ${this.currentProductIndex + 1} of ${this.showcaseProducts.length} • Cinematic Journey`;
    if (name) name.textContent = product.name;
    if (glow) glow.style.background = `radial-gradient(circle, ${product.colorGlow || 'rgba(245, 158, 11, 0.4)'} 0%, transparent 70%)`;
  }

  _applyScrubPhysics(t) {
    const product = this.showcaseProducts[this.currentProductIndex];
    if (!product || !product.layers || this.layerElements.length === 0) return;

    // Camera 3D Orbit sweep as user scrolls
    const rotX = -12 + Math.sin(t * Math.PI) * 10;
    const rotY = 15 - t * 30;
    if (this.world3D) {
      this.world3D.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    }

    // Story Note Card Updates
    const storyTag = this.container.querySelector('#story-card-tag');
    const storyTitle = this.container.querySelector('#story-card-title');
    const storyBody = this.container.querySelector('#story-card-body');

    // 4 Phases of Story Scrubbing:
    // Phase 1 (0.00 - 0.20): Entering & compact view
    // Phase 2 (0.20 - 0.70): Exploding & inspecting layers
    // Phase 3 (0.70 - 0.90): Reassembling
    // Phase 4 (0.90 - 1.00): Transitioning
    let explodeFactor = 0;

    if (t < 0.2) {
      explodeFactor = 0;
      if (storyTag) storyTag.textContent = 'Gourmet Composition';
      if (storyTitle) storyTitle.textContent = product.name;
      if (storyBody) storyBody.textContent = product.description;
    } else if (t >= 0.2 && t < 0.7) {
      // Linear ramp into full explosion
      const ramp = (t - 0.2) / 0.5;
      explodeFactor = Math.sin((ramp * Math.PI) / 2);

      // Pick an ingredient to highlight based on scroll position
      const layerIdx = Math.min(product.layers.length - 1, Math.floor(ramp * product.layers.length));
      const activeLayer = product.layers[layerIdx];

      if (storyTag) storyTag.textContent = `Ingredient Deconstruction [${layerIdx + 1}/${product.layers.length}]`;
      if (storyTitle) storyTitle.textContent = activeLayer?.name || product.name;
      if (storyBody) storyBody.textContent = activeLayer?.tastingNotes || `Freshly sourced from ${activeLayer?.origin || 'Artisan sources'}.`;
    } else if (t >= 0.7 && t < 0.9) {
      // Reassembly ramp down to 0
      const rampDown = (0.9 - t) / 0.2;
      explodeFactor = Math.max(0, rampDown);
      if (storyTag) storyTag.textContent = 'Reassembled Perfection';
      if (storyTitle) storyTitle.textContent = product.name;
      if (storyBody) storyBody.textContent = 'Harmonious culinary balance ready to be served.';
    } else {
      explodeFactor = 0;
    }

    // Interpolate each layer between initial and exploded coordinates
    product.layers.forEach((layer, idx) => {
      const el = this.layerElements[idx];
      if (!el) return;

      const init = layer.initial || {};
      const exp = layer.exploded || {};

      const currentX = (init.x || 0) + ((exp.x || 0) - (init.x || 0)) * explodeFactor;
      const currentY = (init.y || 0) + ((exp.y || 0) - (init.y || 0)) * explodeFactor;
      const currentZ = (init.z || 0) + ((exp.z || 0) - (init.z || 0)) * explodeFactor;
      const currentRx = (init.rx || 0) + ((exp.rx || 0) - (init.rx || 0)) * explodeFactor;
      const currentRy = (init.ry || 0) + ((exp.ry || 0) - (init.ry || 0)) * explodeFactor;
      const currentRz = (init.rz || 0) + ((exp.rz || 0) - (init.rz || 0)) * explodeFactor;
      const currentScale = 1 + ((exp.scale || 1) - 1) * explodeFactor;

      el.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, ${currentZ.toFixed(1)}px) rotateX(${currentRx.toFixed(1)}deg) rotateY(${currentRy.toFixed(1)}deg) rotateZ(${currentRz.toFixed(1)}deg) scale(${currentScale.toFixed(2)})`;
    });
  }
}
