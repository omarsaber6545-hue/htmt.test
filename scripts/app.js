/**
 * app.js
 * Main Application Bootstrapper for L'AURA Haute Gastronomy Interactive Menu.
 * 
 * Layout Hierarchy matching exact specification:
 * 1. Clean Horizontal Luxury Header Navbar (#nav-mount)
 * 2. 3-Column Luxury Hero Experience (#hero-mount)
 *    - Left: Product info, bilingual titles, price (185 LE), action buttons, trust badges
 *    - Center: 3D Exploded Food Product with connecting lines HUD and bilingual labels
 *    - Right: AI Powered Interactive Menu branding with large circular explore button
 * 3. Horizontal Product Carousel directly below Hero (#carousel-mount)
 *    - In-place instant Hero switching with cinematic transitions
 * 4. Slide-over Creator Studio & AI Product Animator (#studio-modal-mount)
 */

import { store } from './core/Store.js';
import { Navbar } from './components/Navbar.js';
import { HeroEditorial } from './components/HeroEditorial.js';
import { ProductCarousel } from './components/ProductCarousel.js';
import { AdminStudio } from './components/AdminStudio.js';

class App {
  constructor() {
    this.navContainer = document.querySelector('#nav-mount');
    this.heroContainer = document.querySelector('#hero-mount');
    this.carouselContainer = document.querySelector('#carousel-mount');
    this.studioContainer = document.querySelector('#studio-modal-mount');

    this.navbar = null;
    this.heroEditorial = null;
    this.productCarousel = null;
    this.adminStudio = null;

    this.init();
  }

  init() {
    // 1. Mount Persistent Header Navbar
    if (this.navContainer) {
      this.navbar = new Navbar(this.navContainer);
    }

    // 2. Mount 3-Column Hero Section
    if (this.heroContainer) {
      this.heroEditorial = new HeroEditorial(this.heroContainer);
    }

    // 3. Mount Product Carousel Directly Below Hero
    if (this.carouselContainer) {
      this.productCarousel = new ProductCarousel(this.carouselContainer);
    }

    // 4. Mount Slide-over Creator Studio Modal
    if (this.studioContainer) {
      this.adminStudio = new AdminStudio(this.studioContainer);
    }

    // 5. Global Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Ignore shortcuts if user is typing in form inputs
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }

      // Space or 'E': Toggle Explode / Reassemble
      if (e.key === ' ' || e.key.toLowerCase() === 'e') {
        e.preventDefault();
        store.setHeroExploded(!store.isExploded);
      }

      // 'S': Toggle Creator Studio Drawer
      if (e.key.toLowerCase() === 's') {
        const modal = document.querySelector('#studio-modal-overlay');
        if (modal) modal.classList.toggle('active');
      }

      // 'L': Toggle Language (EN ⇄ عربي)
      if (e.key.toLowerCase() === 'l') {
        store.toggleLanguage();
      }

      // 'Escape': Clear Layer Inspection or Close Studio Drawer
      if (e.key === 'Escape') {
        const modal = document.querySelector('#studio-modal-overlay');
        if (modal?.classList.contains('active')) {
          modal.classList.remove('active');
        } else if (store.inspectedLayerId) {
          store.clearInspection();
        }
      }
    });

    console.log(
      "%c✨ L'AURA Gastronomy • Luxury 3D Exploded AI Menu Initialized ✨",
      "color: #c26a27; font-weight: bold; font-size: 14px; background: #fbf8f2; padding: 4px 8px; border-radius: 4px;"
    );
  }
}

// Bootstrap once DOM content is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
