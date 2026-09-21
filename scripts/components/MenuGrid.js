/**
 * MenuGrid.js
 * Luxury restaurant menu grid with interactive cards, 3D hover effects,
 * dynamic category tabs, dietary filter tags, and real-time search.
 */

import { store } from '../core/Store.js';
import { MediaManager } from '../core/MediaManager.js';

export class MenuGrid {
  constructor(container) {
    this.container = container;
    this._render();
    this._bindStoreEvents();
    this._bindDOMEvents();
  }

  _render() {
    const categories = store.getCategories();
    const products = store.getFilteredProducts();

    this.container.innerHTML = `
      <div class="menu-view-wrapper">
        <!-- Hero Introduction -->
        <header class="hero-banner">
          <div class="hero-tag">
            <span>✨</span>
            <span>Next-Generation Dining Experience</span>
          </div>
          <h1 class="hero-title">
            Deconstruct Your Dish in <span>Interactive 3D</span>
          </h1>
          <p class="hero-subtitle">
            Experience culinary craftsmanship from the inside out. Click any gourmet creation to explode it into its artisan layers, inspect single-origin ingredients, and witness gastronomy in motion.
          </p>
        </header>

        <!-- Category & Filter Bar -->
        <section class="filter-section">
          <!-- Category Pills -->
          <div class="category-bar-wrapper">
            <div class="category-bar" id="category-pills-bar">
              <button class="category-pill ${store.activeCategory === 'all' ? 'active' : ''}" data-cat="all">
                <span>✨</span>
                <span>All Creations</span>
                <span class="cat-badge">${store.getProducts().length}</span>
              </button>
              ${categories.map(cat => {
                const count = store.getProducts().filter(p => p.categoryId === cat.id).length;
                return `
                  <button class="category-pill ${store.activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
                    <span>${cat.icon || '🍽️'}</span>
                    <span>${cat.name}</span>
                    <span class="cat-badge">${count}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Sub-filters: Search, Dietary Badges -->
          <div class="subfilter-bar">
            <!-- Search -->
            <div class="search-box">
              <span class="search-icon">🔍</span>
              <input 
                type="text" 
                class="search-input" 
                id="menu-search-input" 
                placeholder="Search by name, ingredient, or spice..." 
                value="${store.searchQuery}"
              />
            </div>

            <!-- Dietary Toggles -->
            <div class="dietary-tags">
              <button class="tag-btn ${store.activeDietaryFilters.has('chef') ? 'active' : ''}" data-filter="chef">
                <span>⭐</span>
                <span>Chef's Reserve</span>
              </button>
              <button class="tag-btn ${store.activeDietaryFilters.has('spicy') ? 'active' : ''}" data-filter="spicy">
                <span>🌶️</span>
                <span>Spicy Heat</span>
              </button>
              <button class="tag-btn ${store.activeDietaryFilters.has('vegan') ? 'active' : ''}" data-filter="vegan">
                <span>🌱</span>
                <span>Vegan / Plant-based</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Product Cards Grid -->
        <main class="menu-grid-container">
          ${products.length > 0 ? `
            <div class="product-grid" id="product-cards-grid">
              ${products.map(p => this._renderProductCard(p)).join('')}
            </div>
          ` : `
            <div class="empty-state">
              <div class="empty-state-icon">🍽️</div>
              <h3>No matching culinary creations found</h3>
              <p>Try refining your search or selecting another category filter.</p>
            </div>
          `}
        </main>
      </div>
    `;
  }

  _renderProductCard(product) {
    const formattedPrice = store.formatPrice(product.price);
    const layerCount = product.layers ? product.layers.length : 0;
    const spicyFlames = product.spicyLevel > 0 ? '🌶️'.repeat(product.spicyLevel) : '';

    return `
      <article class="product-card" data-product-id="${product.id}" tabindex="0" role="button" aria-label="${product.name}">
        <!-- Media Showcase -->
        <div class="card-media-wrapper">
          <div class="product-ambient-glow" style="background: ${product.colorGlow || 'rgba(245, 158, 11, 0.4)'};"></div>
          
          <!-- Badges -->
          <div class="card-badges">
            ${product.isChefSpecial ? `<span class="chef-badge">Chef's Signature</span>` : '<span></span>'}
            ${product.spicyLevel > 0 ? `<span class="spicy-badge">${spicyFlames}</span>` : ''}
          </div>

          <!-- Product Graphic -->
          <div class="card-product-visual">
            ${product.customImageUrl 
              ? `<img src="${product.customImageUrl}" alt="${product.name}" loading="lazy" />` 
              : MediaManager.getCompositeSvg(product.categoryId, product.name)}
          </div>
        </div>

        <!-- Details -->
        <div class="card-details">
          <div class="card-header-row">
            <h3 class="card-title">${product.name}</h3>
            <span class="card-price">${formattedPrice}</span>
          </div>

          <p class="card-description">${product.description}</p>

          <!-- Quick Layer preview tags -->
          <div class="card-layer-tags">
            <span class="layer-chip-pill">${layerCount} Interactive Layers</span>
            ${product.layers?.slice(0, 3).map(l => `<span class="layer-chip-pill">${l.name}</span>`).join('') || ''}
            ${layerCount > 3 ? `<span class="layer-chip-pill">+${layerCount - 3} more</span>` : ''}
          </div>

          <div class="card-meta-row">
            <span class="card-calories">🔥 ${product.calories} kcal</span>
            <span>⏱️ ${product.prepTime || '10-12 mins'}</span>
            ${product.isVegan ? '<span style="color: #34d399;">🌱 Vegan</span>' : ''}
          </div>

          <!-- Action Button -->
          <div class="card-actions-row">
            <button class="btn-card-explode" data-action="explode" data-id="${product.id}">
              <span>⚡</span>
              <span>Explore in 3D</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  _bindDOMEvents() {
    // Category tabs
    const catBar = this.container.querySelector('#category-pills-bar');
    if (catBar) {
      catBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.category-pill');
        if (!btn) return;
        store.setActiveCategory(btn.dataset.cat);
      });
    }

    // Search input
    const searchInput = this.container.querySelector('#menu-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        store.setSearchQuery(e.target.value);
      });
    }

    // Dietary filter buttons
    const dietaryButtons = this.container.querySelectorAll('.tag-btn');
    dietaryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        store.toggleDietaryFilter(btn.dataset.filter);
      });
    });

    // Card click or Explode button click
    const grid = this.container.querySelector('#product-cards-grid');
    if (grid) {
      grid.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;
        const productId = card.dataset.productId;
        const product = store.getProductById(productId);
        if (product) {
          store.openExplodedHero(product);
          // If the user specifically clicked "Explore in 3D", auto-explode
          if (e.target.closest('.btn-card-explode')) {
            setTimeout(() => {
              store.setExploded(true);
            }, 300);
          }
        }
      });
    }
  }

  _bindStoreEvents() {
    store.on('productsUpdated', () => this._render());
    store.on('categoriesUpdated', () => this._render());
    store.on('categoryChanged', () => this._render());
    store.on('searchChanged', () => this._updateGridOnly());
    store.on('filtersChanged', () => this._updateGridOnly());
    store.on('currencyChanged', () => this._updateGridOnly());
    store.on('dataReset', () => this._render());
  }

  _updateGridOnly() {
    const mainContainer = this.container.querySelector('.menu-grid-container');
    if (!mainContainer) return this._render();
    const products = store.getFilteredProducts();

    if (products.length > 0) {
      mainContainer.innerHTML = `
        <div class="product-grid" id="product-cards-grid">
          ${products.map(p => this._renderProductCard(p)).join('')}
        </div>
      `;
    } else {
      mainContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🍽️</div>
          <h3>No matching culinary creations found</h3>
          <p>Try refining your search or selecting another category filter.</p>
        </div>
      `;
    }

    // Rebind grid click listener
    const grid = this.container.querySelector('#product-cards-grid');
    if (grid) {
      grid.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;
        const productId = card.dataset.productId;
        const product = store.getProductById(productId);
        if (product) {
          store.openExplodedHero(product);
          if (e.target.closest('.btn-card-explode')) {
            setTimeout(() => store.setExploded(true), 300);
          }
        }
      });
    }
  }
}
