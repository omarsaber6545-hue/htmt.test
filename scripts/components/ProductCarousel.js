/**
 * ProductCarousel.js
 * Horizontal Luxury Product Carousel below the Hero.
 * Allows users to browse dishes in the current category.
 * Clicking any dish switches the Hero in-place with a cinematic transition!
 */

import { store } from '../core/Store.js';
import { MediaManager } from '../core/MediaManager.js';

export class ProductCarousel {
  constructor(container) {
    this.container = container;
    this._render();
    this._bindStoreEvents();
  }

  _render() {
    const activeCategory = store.getCategories().find(c => c.id === store.activeCategoryId) || store.getCategories()[0];
    const products = store.getProductsByCategory(store.activeCategoryId);
    const isAr = store.currentLang === 'ar';
    const heroId = store.heroProduct?.id;

    const catTitleEn = `Our ${activeCategory?.name || 'Creations'}`;
    const catTitleAr = activeCategory?.nameAr || 'مختاراتنا';

    this.container.innerHTML = `
      <section class="product-carousel-section" id="product-carousel-root">
        <div class="carousel-header-row">
          <div class="carousel-title-wrap">
            <h3 class="carousel-title">${isAr ? catTitleAr : catTitleEn}</h3>
            <span class="carousel-title-ar">${isAr ? catTitleEn : catTitleAr}</span>
          </div>

          <!-- Navigation Arrows -->
          <div class="carousel-arrows">
            <button class="btn-carousel-arrow" id="btn-carousel-prev" aria-label="Previous Products">‹</button>
            <button class="btn-carousel-arrow" id="btn-carousel-next" aria-label="Next Products">›</button>
          </div>
        </div>

        <!-- Carousel Track -->
        <div class="carousel-track-wrapper" id="carousel-track-wrapper">
          <div class="carousel-track" id="carousel-track">
            ${products.map(product => {
              const isActive = product.id === heroId;
              const formattedPrice = store.formatPrice(product.price);
              const photoUrl = MediaManager.getProductPhoto(product);
              const visualHtml = `<img src="${photoUrl}" alt="${product.name}" class="carousel-card-img" loading="lazy" />`;

              return `
                <div 
                  class="carousel-card ${isActive ? 'active' : ''}" 
                  data-product-id="${product.id}"
                  role="button"
                  tabindex="0"
                  aria-label="${product.name}"
                >
                  <div class="carousel-card-img-wrap">
                    ${visualHtml}
                  </div>

                  <div class="carousel-card-meta">
                    <span class="carousel-card-title">${product.name}</span>
                    <span class="carousel-card-title-ar">${product.nameAr || ''}</span>
                    <span class="carousel-card-price">${formattedPrice}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>
    `;

    this._bindDOMEvents();
  }

  _bindDOMEvents() {
    // Card click switches hero in-place
    const track = this.container.querySelector('#carousel-track');
    if (track) {
      track.addEventListener('click', (e) => {
        const card = e.target.closest('.carousel-card');
        if (!card) return;
        const productId = card.dataset.productId;
        const product = store.getProductById(productId);
        if (product) {
          store.setHeroProduct(product);
        }
      });
    }

    // Scroll arrows with RTL awareness
    const wrapper = this.container.querySelector('#carousel-track-wrapper');
    const prevBtn = this.container.querySelector('#btn-carousel-prev');
    const nextBtn = this.container.querySelector('#btn-carousel-next');

    if (prevBtn && wrapper) {
      prevBtn.addEventListener('click', () => {
        const step = store.currentLang === 'ar' ? 260 : -260;
        wrapper.scrollBy({ left: step, behavior: 'smooth' });
      });
    }

    if (nextBtn && wrapper) {
      nextBtn.addEventListener('click', () => {
        const step = store.currentLang === 'ar' ? -260 : 260;
        wrapper.scrollBy({ left: step, behavior: 'smooth' });
      });
    }
  }

  _bindStoreEvents() {
    // Category changed -> re-render with new products
    store.on('categoryChanged', () => this._render());

    // Hero Product changed -> highlight active card
    store.on('heroProductChanged', (hero) => {
      const cards = this.container.querySelectorAll('.carousel-card');
      cards.forEach(card => {
        card.classList.toggle('active', card.dataset.productId === hero.id);
      });
    });

    store.on('productsUpdated', () => this._render());
    store.on('languageChanged', () => this._render());
  }
}
