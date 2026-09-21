/**
 * HeroEditorial.js
 * The 3-Column Luxury Restaurant Hero Component directly inspired by the reference layout.
 * Left: Product Information, bilingual titles, price (185 LE), buttons, trust badges.
 * Center: Exploded product with thin connecting lines and bilingual editorial labels.
 * Right: AI Powered branding, editorial typography, and large circular explore button.
 */

import { store } from '../core/Store.js';
import { MediaManager } from '../core/MediaManager.js';
import { AnimationEngine } from '../core/AnimationEngine.js';
import { AIProductAnimator } from '../core/AIProductAnimator.js';

export class HeroEditorial {
  constructor(container) {
    this.container = container;
    this.product = store.heroProduct;
    this.animationEngine = null;
    this.layerElements = [];

    this._render();
    this._initEngine();
    this._bindDOMEvents();
    this._bindStoreEvents();
  }

  _render() {
    const p = this.product || store.products[0];
    const isAr = store.currentLang === 'ar';
    const formattedPrice = store.formatPrice(p.price);
    const photoUrl = MediaManager.getProductPhoto(p);

    this.container.innerHTML = `
      <section class="hero-editorial-section" id="hero-editorial-root">
        <div class="hero-editorial-grid">
          <!-- ==========================================
               LEFT COLUMN: Dish Typography & Story
               ========================================== -->
          <div class="hero-col-info">
            <!-- Tagline Pill -->
            <div class="editorial-tag">
              <span>★</span>
              <span>${isAr ? (p.taglineAr || 'تخصص الكوخ الفاخر') : (p.tagline || 'HOUSE SPECIALTY')}</span>
            </div>

            <!-- Primary Dish Name -->
            <div class="product-hero-title-wrap">
              <h1 class="product-hero-title-en" id="hero-dish-title">${p.name}</h1>
              <h2 class="product-hero-title-ar" id="hero-dish-title-ar">${p.nameAr || ''}</h2>
            </div>

            <!-- Authentic Culinary Specs Pill Row -->
            <div class="hero-product-specs">
              <span class="spec-pill"><span class="spec-icon">🔥</span> ${p.calories || 680} kcal</span>
              <span class="spec-pill"><span class="spec-icon">⏱</span> ${p.prepTime || (isAr ? '15 دقيقة' : '15 mins')}</span>
              <span class="spec-pill"><span class="spec-icon">👨‍🍳</span> ${isAr ? 'تحضير طازج بالطلب' : 'Cooked Fresh'}</span>
            </div>

            <!-- Editorial Description -->
            <p class="product-hero-desc" id="hero-dish-desc">
              ${isAr ? (p.descriptionAr || p.description) : p.description}
            </p>

            <!-- Price & Action Buttons Group -->
            <div class="product-hero-price" id="hero-dish-price">${formattedPrice}</div>
            
            <div class="hero-action-buttons">
              <button class="btn-view-animation" id="btn-hero-view-animation" aria-label="View 3D Animation">
                <span>⚡</span>
                <span id="view-anim-text">${isAr ? 'استكشاف المكونات' : 'Explore Ingredients'}</span>
              </button>

              <button class="btn-hero-cart" id="btn-hero-add-cart" aria-label="Add to Cart">
                <span>+</span>
                <span>${isAr ? 'أضف للطلب' : 'Add to Order'}</span>
              </button>
            </div>

            <!-- Authentic Trust Badges -->
            <div class="hero-trust-badges">
              <div class="trust-badge-item">
                <span class="trust-badge-icon">🌿</span>
                <span>${isAr ? 'مكونات طازجة يومياً' : 'Fresh Ingredients'}</span>
              </div>
              <div class="trust-badge-item">
                <span class="trust-badge-icon">⭐</span>
                <span>${isAr ? 'توصية الشيف التنفيذي' : 'Chef Recommended'}</span>
              </div>
              <div class="trust-badge-item">
                <span class="trust-badge-icon">🏅</span>
                <span>${isAr ? 'جودة فاخرة معتمدة' : 'Premium Quality'}</span>
              </div>
            </div>
          </div>

          <!-- ==========================================
               CENTER COLUMN: 3D Exploded Product Stage
               ========================================== -->
          <div class="hero-col-stage" id="editorial-stage-viewport">
            <div class="stage-world-3d" id="editorial-stage-world">
              <!-- Soft Natural Contact Shadow -->
              <div class="stage-shadow-disc" id="editorial-stage-shadow"></div>

              <!-- REAL AUTHENTIC HERO PRODUCT PHOTOGRAPH -->
              <div class="hero-assembled-photo-wrap ${store.isExploded ? 'is-exploded' : ''}" id="hero-assembled-photo-wrap">
                <img src="${photoUrl}" alt="${p.name}" class="hero-real-food-img" id="hero-real-food-img" />
              </div>

              <!-- Stack of layers & connecting labels -->
              <div class="layers-stack ${store.isExploded ? 'is-exploded' : ''}" id="editorial-layers-stack"></div>
            </div>

            <!-- Floating Ingredient Detail Popover HUD -->
            <div class="stage-inspection-popover" id="stage-inspection-popover">
              <div class="popover-header-row">
                <div class="popover-title-wrap">
                  <span class="popover-tag" id="popover-layer-tag">Ingredient</span>
                  <h4 class="popover-title" id="popover-title-en">Ingredient Name</h4>
                  <span class="popover-title-ar" id="popover-title-ar">اسم المكون</span>
                </div>
                <button class="btn-close-popover" id="btn-close-popover" aria-label="Close">✕</button>
              </div>
              <p class="popover-desc" id="popover-desc-text">Culinary notes and flavor profile.</p>
              <div class="popover-origin-row">
                <span id="popover-origin-text">Origin: Artisan Reserve</span>
                <span id="popover-allergens-text">Fresh</span>
              </div>
            </div>
          </div>

          <!-- ==========================================
               RIGHT COLUMN: Editorial AI Interactive Branding
               ========================================== -->
          <div class="hero-col-branding">
            <span class="ai-powered-tag">AI POWERED</span>
            
            <div style="display: flex; flex-direction: column;">
              <h2 class="editorial-brand-title">Interactive<br />Menu</h2>
              <span class="editorial-brand-title-ar">قائمة تفاعلية</span>
            </div>

            <p class="editorial-brand-desc">
              ${isAr ? 'تتجمع الطبقات في تناغم وسحر' : 'Layers come together in magic'}
            </p>

            <!-- Large Circular Explore Button -->
            <button class="btn-circular-explore" id="btn-circular-explore" aria-label="Explore Ingredients in 3D">
              <span class="circle-explore-icon" id="circle-btn-icon">▶</span>
              <span class="circle-explore-text-en" id="circle-btn-text-en">EXPLORE<br />THE INGREDIENTS</span>
              <span class="circle-explore-text-ar" id="circle-btn-text-ar">استكشف المكونات</span>
            </button>
          </div>
        </div>
      </section>
    `;

    this._mountLayers();
  }

  _mountLayers() {
    const stackEl = this.container.querySelector('#editorial-layers-stack');
    if (!stackEl || !this.product) return;

    stackEl.innerHTML = '';
    this.layerElements = [];

    let layers = this.product.layers || [];
    if (layers.length === 0) {
      layers = AIProductAnimator.generateArchetypeLayers(this.product.name, this.product.categoryId, this.product.nameAr);
      this.product.layers = layers;
    }
    const isAr = store.currentLang === 'ar';

    layers.forEach((layer, idx) => {
      const layerEl = document.createElement('div');
      layerEl.className = 'product-layer';
      layerEl.dataset.layerId = layer.id;
      layerEl.dataset.layerIndex = idx;

      // Position alternating left and right for clean balance
      const sideClass = layer.position === 'left' ? 'layer-pos-left' : 'layer-pos-right';

      // Visual graphic
      const visualHtml = layer.customImageUrl
        ? `<img src="${layer.customImageUrl}" alt="${layer.name}" />`
        : MediaManager.getLayerSvg(layer.type, {
            label: layer.name,
            color: layer.color || '#c26a27',
            width: 260,
            height: 260
          });

      layerEl.innerHTML = `
        <div class="layer-visual-wrap">
          ${visualHtml}
        </div>

        <!-- Thin Connecting Line & Editorial Label Card -->
        <div class="layer-editorial-label-wrap ${sideClass}">
          <div class="editorial-connector-line">
            <span class="editorial-connector-dot"></span>
          </div>

          <div class="editorial-label-card" data-layer-id="${layer.id}">
            <span class="label-subtitle-en">${isAr ? (layer.subtitleAr || '') : (layer.subtitle || 'Fresh & Artisanal')}</span>
            <span class="label-title-en">${layer.name}</span>
            <span class="label-title-ar">${layer.nameAr || ''}</span>
          </div>
        </div>
      `;

      // Click to inspect ingredient
      layerEl.addEventListener('click', (e) => {
        e.stopPropagation();
        store.inspectLayer(layer.id);
      });

      stackEl.appendChild(layerEl);
      this.layerElements.push(layerEl);
    });
  }

  _initEngine() {
    if (this.animationEngine && typeof this.animationEngine.destroy === 'function') {
      this.animationEngine.destroy();
    }

    const stageViewport = this.container.querySelector('#editorial-stage-viewport');
    const stageWorld = this.container.querySelector('#editorial-stage-world');
    const stageShadow = this.container.querySelector('#editorial-stage-shadow');

    this.animationEngine = new AnimationEngine({
      stageElement: stageViewport,
      worldElement: stageWorld,
      shadowElement: stageShadow
    });

    // Apply assembled state by default
    this.animationEngine.applyAssembledState(this.product?.layers || [], this.layerElements);
  }

  _bindDOMEvents() {
    // 1. "View Animation" Button in Left Column
    const viewAnimBtn = this.container.querySelector('#btn-hero-view-animation');
    if (viewAnimBtn) {
      viewAnimBtn.addEventListener('click', () => {
        store.setHeroExploded(!store.isExploded);
      });
    }

    // 2. Big Circular Button in Right Column
    const circularBtn = this.container.querySelector('#btn-circular-explore');
    if (circularBtn) {
      circularBtn.addEventListener('click', () => {
        store.setHeroExploded(!store.isExploded);
      });
    }

    // 3. Add to Cart Button
    const addCartBtn = this.container.querySelector('#btn-hero-add-cart');
    if (addCartBtn) {
      addCartBtn.addEventListener('click', () => {
        store.addToCart(this.product);
        addCartBtn.style.transform = 'scale(0.95)';
        setTimeout(() => addCartBtn.style.transform = 'scale(1)', 150);
      });
    }

    // 4. Close Popover Button
    const closePopover = this.container.querySelector('#btn-close-popover');
    if (closePopover) {
      closePopover.addEventListener('click', () => {
        store.clearInspection();
      });
    }

    // 5. Stage click resets inspection
    const stageViewport = this.container.querySelector('#editorial-stage-viewport');
    if (stageViewport) {
      stageViewport.addEventListener('click', (e) => {
        if (!e.target.closest('.product-layer') && !e.target.closest('.editorial-label-card') && store.inspectedLayerId) {
          store.clearInspection();
        }
      });
    }
  }

  _bindStoreEvents() {
    // Listen for Hero Product switch (from Carousel or Category click)
    store.on('heroProductChanged', (newProduct) => {
      this.product = newProduct;
      this._render();
      this._initEngine();
      this._bindDOMEvents();
    });

    // Listen for Explode / Reassemble toggle
    store.on('explodeStateChanged', (isExploded) => {
      this._onExplodeChanged(isExploded);
    });

    // Listen for Layer Inspection
    store.on('layerInspected', (layerId) => {
      this._onLayerInspected(layerId);
    });

    store.on('inspectionCleared', () => {
      this._onInspectionCleared();
    });

    // Language changed
    store.on('languageChanged', () => {
      this._render();
      this._initEngine();
      this._bindDOMEvents();
    });
  }

  _onExplodeChanged(isExploded) {
    const stackEl = this.container.querySelector('#editorial-layers-stack');
    const photoWrap = this.container.querySelector('#hero-assembled-photo-wrap');
    const circleIcon = this.container.querySelector('#circle-btn-icon');
    const circleTextEn = this.container.querySelector('#circle-btn-text-en');
    const circleTextAr = this.container.querySelector('#circle-btn-text-ar');
    const viewText = this.container.querySelector('#view-anim-text');
    const isAr = store.currentLang === 'ar';

    if (isExploded) {
      if (photoWrap) photoWrap.classList.add('is-exploded');
      if (stackEl) {
        stackEl.classList.add('is-exploded');
        stackEl.classList.add('exploded');
      }
      this.animationEngine.applyExplodedState(this.product.layers, this.layerElements);

      if (circleIcon) circleIcon.textContent = '🔄';
      if (circleTextEn) circleTextEn.innerHTML = 'REASSEMBLE<br />PRODUCT';
      if (circleTextAr) circleTextAr.textContent = 'إعادة التجميع';
      if (viewText) viewText.textContent = isAr ? 'إعادة التجميع' : 'Reassemble';
    } else {
      if (photoWrap) photoWrap.classList.remove('is-exploded');
      if (stackEl) {
        stackEl.classList.remove('is-exploded');
        stackEl.classList.remove('exploded');
      }
      this.container.querySelector('#stage-inspection-popover')?.classList.remove('active');
      this.animationEngine.applyAssembledState(this.product.layers, this.layerElements);

      if (circleIcon) circleIcon.textContent = '▶';
      if (circleTextEn) circleTextEn.innerHTML = 'EXPLORE<br />THE INGREDIENTS';
      if (circleTextAr) circleTextAr.textContent = 'استكشف المكونات';
      if (viewText) viewText.textContent = isAr ? 'تفاصيل المكونات' : 'View Animation';
    }
  }

  _onLayerInspected(layerId) {
    if (!this.product || !this.product.layers) return;
    const layer = this.product.layers.find(l => l.id === layerId);
    if (!layer) return;

    this.animationEngine.inspectLayer(layerId, this.product.layers, this.layerElements);

    // Populate Popover
    const popover = this.container.querySelector('#stage-inspection-popover');
    if (!popover) return;

    this.container.querySelector('#popover-layer-tag').textContent = layer.subtitle || 'Artisan Element';
    this.container.querySelector('#popover-title-en').textContent = layer.name;
    this.container.querySelector('#popover-title-ar').textContent = layer.nameAr || '';
    this.container.querySelector('#popover-desc-text').textContent = layer.tastingNotes || `Signature handcrafted ${layer.name}.`;
    this.container.querySelector('#popover-origin-text').textContent = `Origin: ${layer.origin || 'Selected Farm'}`;
    this.container.querySelector('#popover-allergens-text').textContent = this.product.allergens?.length ? `Contains: ${this.product.allergens.join(', ')}` : 'Pure Freshness';

    popover.classList.add('active');
  }

  _onInspectionCleared() {
    this.container.querySelector('#stage-inspection-popover')?.classList.remove('active');
    this.animationEngine.clearInspection(this.product.layers, this.layerElements, store.isExploded);
  }
}
