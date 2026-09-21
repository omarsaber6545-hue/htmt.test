/**
 * Navbar.js
 * Clean, horizontal luxury restaurant header.
 * Left: Restaurant Logo & Name ("الكوخ | EL KOKH")
 * Center: Category navigation links (all 13 categories from PDF)
 * Right: Search, Divider, Language Switcher (EN | عربي), Cart, and Studio Shortcut.
 */

import { store } from '../core/Store.js';
import { MediaManager } from '../core/MediaManager.js';

export class Navbar {
  constructor(container) {
    this.container = container;
    this._render();
    this._bindStoreEvents();
  }

  _render() {
    const categories = store.getCategories();
    const isAr = store.currentLang === 'ar';
    const cartCount = store.getCartCount();

    this.container.innerHTML = `
      <header class="header-navbar">
        <div class="header-container">
          <!-- Left: Brand Logo & Name -->
          <a class="header-brand" id="header-brand-logo" href="#">
            <div class="brand-monogram">ك</div>
            <div class="brand-titles">
              <span class="brand-main-title">${isAr ? 'الكوخ • EL KOKH' : 'EL KOKH • الكوخ'}</span>
              <span class="brand-sub-title">${isAr ? 'معدة بإتقان • قائمة الطعام الفاخرة' : 'Brewed to Perfect • Luxury Menu'}</span>
            </div>
          </a>

          <!-- Center: Dynamic Category Navigation (Scrollable for 13 categories) -->
          <nav class="header-nav-categories" id="header-category-nav" role="navigation" aria-label="Menu categories">
            ${categories.map(cat => `
              <button 
                class="cat-nav-link ${cat.id === store.activeCategoryId ? 'active' : ''}" 
                data-cat-id="${cat.id}"
              >
                ${isAr ? cat.nameAr || cat.name : cat.name}
              </button>
            `).join('')}
          </nav>

          <!-- Right: Actions & Cart -->
          <div class="header-actions">
            <!-- Search Icon -->
            <button class="btn-header-icon" id="btn-header-search" title="${isAr ? 'بحث في المنيو' : 'Search Menu'}" aria-label="Search">
              <span>🔍</span>
            </button>

            <!-- Language Toggle (EN / عربي) -->
            <button class="btn-lang-toggle" id="btn-lang-toggle" aria-label="Switch Language">
              <span>🌐</span>
              <span>${isAr ? 'English' : 'عربي'}</span>
            </button>

            <div class="header-v-divider"></div>

            <!-- Cart Button -->
            <button class="btn-header-cart" id="btn-header-cart" aria-label="Shopping Cart">
              <span>👜</span>
              <span>${isAr ? 'الطلب' : 'Cart'}</span>
              <span class="cart-count-badge" id="cart-badge-count">${cartCount}</span>
            </button>

            <!-- AI Studio Shortcut -->
            <button class="btn-open-studio-shortcut" id="btn-open-studio" title="AI Product Creator & Studio">
              <span>⚡</span>
              <span>${isAr ? 'استوديو الكوخ' : 'Studio'}</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Global Search Modal Overlay -->
      <div class="search-modal-overlay" id="search-modal-overlay" role="dialog" aria-modal="true">
        <div class="search-panel">
          <div class="search-bar-header">
            <span style="font-size: 1.2rem; color: var(--accent-copper);">🔍</span>
            <input 
              type="text" 
              class="search-modal-input" 
              id="search-modal-input" 
              placeholder="${isAr ? 'ابحث في المنيو (الاسم، القسم، المكونات)...' : 'Search full menu (Dish name, Arabic, Category, Ingredients)...'}" 
              autocomplete="off"
            />
            <button class="btn-close-search" id="btn-close-search" aria-label="Close search">✕</button>
          </div>
          <div class="search-results-list" id="search-results-container">
            <div style="padding: 32px 20px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
              ${isAr ? 'اكتب اسم أي صنف، مشروب، أو مكون للبحث في كامل منيو الكوخ...' : 'Type any dish, beverage, or ingredient to search all 70+ authentic menu items...'}
            </div>
          </div>
        </div>
      </div>

      <!-- Cart Drawer Backdrop & Panel -->
      <div class="cart-drawer-backdrop" id="cart-drawer-backdrop" role="dialog" aria-modal="true">
        <div class="cart-drawer-panel" id="cart-drawer-panel">
          <div class="cart-drawer-header">
            <div class="cart-header-title-wrap">
              <span class="cart-header-title">${isAr ? 'قائمة طلباتك' : 'Your Order'}</span>
              <span class="cart-header-title-ar">${isAr ? 'الكوخ • El Kokh' : 'El Kokh Luxury Dining'}</span>
            </div>
            <button class="btn-close-cart" id="btn-close-cart" aria-label="Close Cart">✕</button>
          </div>

          <div class="cart-drawer-body" id="cart-drawer-body"></div>
          <div class="cart-drawer-footer" id="cart-drawer-footer"></div>
        </div>
      </div>
    `;

    this._bindDOMEvents();
  }

  _bindDOMEvents() {
    // Category click
    const catNav = this.container.querySelector('#header-category-nav');
    if (catNav) {
      catNav.addEventListener('click', (e) => {
        const btn = e.target.closest('.cat-nav-link');
        if (!btn) return;
        store.setActiveCategory(btn.dataset.catId);
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    }

    // Language Toggle
    const langBtn = this.container.querySelector('#btn-lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        store.toggleLanguage();
      });
    }

    // Brand click returns to default meals-sandwiches
    const brandBtn = this.container.querySelector('#header-brand-logo');
    if (brandBtn) {
      brandBtn.addEventListener('click', (e) => {
        e.preventDefault();
        store.setActiveCategory('meals-sandwiches');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // AI Studio button
    const studioBtn = this.container.querySelector('#btn-open-studio');
    if (studioBtn) {
      studioBtn.addEventListener('click', () => {
        const modal = document.querySelector('#studio-modal-overlay');
        if (modal) modal.classList.add('active');
      });
    }

    // ==========================================
    // Search Modal Bindings
    // ==========================================
    const searchBtn = this.container.querySelector('#btn-header-search');
    const searchModal = this.container.querySelector('#search-modal-overlay');
    const searchInput = this.container.querySelector('#search-modal-input');
    const searchClose = this.container.querySelector('#btn-close-search');
    const resultsContainer = this.container.querySelector('#search-results-container');

    const openSearch = () => {
      if (!searchModal) return;
      searchModal.classList.add('active');
      setTimeout(() => searchInput?.focus(), 80);
    };

    const closeSearch = () => {
      if (!searchModal) return;
      searchModal.classList.remove('active');
      if (searchInput) searchInput.value = '';
      if (resultsContainer) {
        const isAr = store.currentLang === 'ar';
        resultsContainer.innerHTML = `
          <div style="padding: 32px 20px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
            ${isAr ? 'اكتب اسم أي صنف، مشروب، أو مكون للبحث في كامل منيو الكوخ...' : 'Type any dish, beverage, or ingredient to search all 70+ authentic menu items...'}
          </div>
        `;
      }
    };

    if (searchBtn) searchBtn.addEventListener('click', openSearch);
    if (searchClose) searchClose.addEventListener('click', closeSearch);

    if (searchModal) {
      searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearch();
      });
    }

    // Keydown escape to close search
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal?.classList.contains('active')) {
        closeSearch();
      }
    });

    // Live search query handling
    if (searchInput && resultsContainer) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        const isAr = store.currentLang === 'ar';

        if (!query) {
          resultsContainer.innerHTML = `
            <div style="padding: 32px 20px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
              ${isAr ? 'اكتب اسم أي صنف، مشروب، أو مكون للبحث في كامل منيو الكوخ...' : 'Type any dish, beverage, or ingredient to search all 70+ authentic menu items...'}
            </div>
          `;
          return;
        }

        const matches = store.searchProducts(query);

        if (matches.length === 0) {
          resultsContainer.innerHTML = `
            <div style="padding: 32px 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
              ${isAr ? `لا توجد نتائج مطابقة لـ "${query}"` : `No items found matching "${query}"`}
            </div>
          `;
          return;
        }

        resultsContainer.innerHTML = matches.map(prod => {
          const photoUrl = MediaManager.getProductPhoto(prod);
          const cat = store.getCategories().find(c => c.id === prod.categoryId);
          const catName = isAr ? (cat?.nameAr || prod.categoryId) : (cat?.name || prod.categoryId);

          return `
            <div class="search-result-item" data-id="${prod.id}">
              <div class="search-result-left">
                <div class="search-result-thumb">
                  <img src="${photoUrl}" alt="${prod.name}" style="width:100%; height:100%; object-fit:cover;" />
                </div>
                <div>
                  <div class="search-result-title">${prod.name}</div>
                  <div class="search-result-title-ar">${prod.nameAr || ''} &bull; <span style="font-size:0.75rem; color:var(--text-muted);">${catName}</span></div>
                </div>
              </div>
              <div class="search-result-price">
                ${store.formatPrice(prod.price)}
              </div>
            </div>
          `;
        }).join('');

        // Attach click handler on result items
        resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('click', () => {
            const pId = item.dataset.id;
            const targetProd = store.getProductById(pId);
            if (targetProd) {
              store.setHeroProduct(targetProd);
              closeSearch();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          });
        });
      });
    }

    // ==========================================
    // Cart Drawer Bindings
    // ==========================================
    const cartBtn = this.container.querySelector('#btn-header-cart');
    const cartBackdrop = this.container.querySelector('#cart-drawer-backdrop');
    const cartClose = this.container.querySelector('#btn-close-cart');

    if (cartBtn) cartBtn.addEventListener('click', () => this._openCart());
    if (cartClose) cartClose.addEventListener('click', () => this._closeCart());

    if (cartBackdrop) {
      cartBackdrop.addEventListener('click', (e) => {
        if (e.target === cartBackdrop) this._closeCart();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cartBackdrop?.classList.contains('active')) {
        this._closeCart();
      }
    });
  }

  _openCart() {
    const backdrop = this.container.querySelector('#cart-drawer-backdrop');
    if (!backdrop) return;
    backdrop.classList.add('active');
    this._renderCartItems();
  }

  _closeCart() {
    const backdrop = this.container.querySelector('#cart-drawer-backdrop');
    if (!backdrop) return;
    backdrop.classList.remove('active');
  }

  _renderCartItems() {
    const body = this.container.querySelector('#cart-drawer-body');
    const footer = this.container.querySelector('#cart-drawer-footer');
    if (!body || !footer) return;

    const isAr = store.currentLang === 'ar';
    const { items, grandTotal, totalCount } = store.getCartDetailed();

    if (items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty-state">
          <span class="cart-empty-icon">🛍️</span>
          <h4 style="font-size: 1.1rem; color: var(--text-heading); margin: 0;">${isAr ? 'قائمة طلباتك فارغة' : 'Your Order is Empty'}</h4>
          <p style="font-size: 0.88rem; max-width: 240px; margin: 0;">${isAr ? 'تصفح أشهى وجبات ومشروبات الكوخ وأضفها إلى طلبك الآن.' : 'Explore our chef selections and add your favorite dishes.'}</p>
        </div>
      `;
      footer.innerHTML = `
        <button class="btn-checkout-order" id="btn-explore-menu-cart" style="width: 100%;">
          <span>${isAr ? 'استكشف المنيو' : 'Browse Menu'}</span>
        </button>
      `;
      footer.querySelector('#btn-explore-menu-cart')?.addEventListener('click', () => this._closeCart());
      return;
    }

    body.innerHTML = items.map(entry => {
      const p = entry.product;
      const photoUrl = MediaManager.getProductPhoto(p);
      return `
        <div class="cart-item-card" data-id="${p.id}">
          <div class="cart-item-thumb">
            <img src="${photoUrl}" alt="${p.name}" />
          </div>
          <div class="cart-item-details">
            <span class="cart-item-name">${p.name}</span>
            <span class="cart-item-name-ar">${p.nameAr || ''}</span>
            <span class="cart-item-price">${store.formatPrice(p.price)}</span>
          </div>
          <div class="cart-item-stepper">
            <button class="btn-qty btn-qty-minus" data-id="${p.id}" aria-label="Decrease quantity">−</button>
            <span class="cart-qty-num">${entry.quantity}</span>
            <button class="btn-qty btn-qty-plus" data-id="${p.id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn-cart-remove" data-id="${p.id}" title="${isAr ? 'حذف' : 'Remove'}" aria-label="Remove item">🗑️</button>
        </div>
      `;
    }).join('');

    footer.innerHTML = `
      <div class="cart-totals-summary">
        <div class="cart-total-row">
          <span>${isAr ? 'عدد الأصناف' : 'Total Items'}</span>
          <span>${totalCount}</span>
        </div>
        <div class="cart-total-row grand-total">
          <span>${isAr ? 'الإجمالي النهائي' : 'Grand Total'}</span>
          <span class="grand-amount">${store.formatPrice(grandTotal)}</span>
        </div>
      </div>
      <div class="cart-actions-row">
        <button class="btn-clear-cart" id="btn-clear-cart-action" title="${isAr ? 'إفراغ السلة' : 'Clear Cart'}">
          ${isAr ? 'مسح' : 'Clear'}
        </button>
        <button class="btn-checkout-order" id="btn-submit-order-action">
          <span>✓</span>
          <span>${isAr ? 'تأكيد وإرسال الطلب' : 'Place Order'}</span>
        </button>
      </div>
    `;

    // Stepper listeners
    body.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const prod = store.getProductById(btn.dataset.id);
        if (prod) store.addToCart(prod);
      });
    });

    body.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        store.removeFromCart(btn.dataset.id);
      });
    });

    body.querySelectorAll('.btn-cart-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        store.removeAllFromCart(btn.dataset.id);
      });
    });

    footer.querySelector('#btn-clear-cart-action')?.addEventListener('click', () => {
      store.clearCart();
    });

    footer.querySelector('#btn-submit-order-action')?.addEventListener('click', () => {
      const orderBtn = footer.querySelector('#btn-submit-order-action');
      orderBtn.disabled = true;
      orderBtn.innerHTML = `<span>⏳</span> <span>${isAr ? 'جاري إرسال الطلب للمطبخ...' : 'Sending to kitchen...'}</span>`;
      setTimeout(() => {
        body.innerHTML = `
          <div class="cart-empty-state" style="padding: 40px 20px;">
            <span style="font-size: 3.5rem;">🎉</span>
            <h3 style="font-size: 1.3rem; color: var(--accent-copper); margin: 6px 0;">${isAr ? 'تم استلام طلبك بنجاح!' : 'Order Placed Successfully!'}</h3>
            <p style="font-size: 0.9rem; color: var(--text-heading); max-width: 280px; margin: 0;">
              ${isAr ? 'جاري تحضير أشهى أصناف الكوخ الطازجة لك بعناية فائقة. صحتين وهنا!' : 'Your fresh dishes are now being prepared by our executive chef. Bon Appétit!'}
            </p>
          </div>
        `;
        footer.innerHTML = `
          <button class="btn-checkout-order" id="btn-done-order" style="width: 100%;">
            <span>${isAr ? 'إغلاق ومتابعة التصفح' : 'Close & Continue'}</span>
          </button>
        `;
        footer.querySelector('#btn-done-order')?.addEventListener('click', () => {
          store.clearCart();
          this._closeCart();
        });
      }, 750);
    });
  }

  _bindStoreEvents() {
    store.on('categoryChanged', () => this._updateActiveCategoryLink());
    store.on('categoriesUpdated', () => this._render());
    store.on('languageChanged', () => this._render());
    store.on('cartUpdated', (count) => {
      const badge = this.container.querySelector('#cart-badge-count');
      if (badge) {
        badge.textContent = count;
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
      }
      const backdrop = this.container.querySelector('#cart-drawer-backdrop');
      if (backdrop && backdrop.classList.contains('active')) {
        this._renderCartItems();
      }
    });
  }

  _updateActiveCategoryLink() {
    const links = this.container.querySelectorAll('.cat-nav-link');
    links.forEach(link => {
      const isActive = link.dataset.catId === store.activeCategoryId;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }
}

