/**
 * Store.js
 * Central reactive state manager with bilingual English/Arabic engine,
 * LocalStorage sync, cart counter, active hero product switcher, and pub-sub bus.
 */

import { DEMO_CATEGORIES, DEMO_PRODUCTS } from '../data/demoMenu.js';

const STORAGE_KEY_PRODUCTS = 'interactive_ai_menu_products_v7';
const STORAGE_KEY_CATEGORIES = 'interactive_ai_menu_categories_v7';
const STORAGE_KEY_LANG = 'interactive_ai_menu_lang_v3';

export class Store {
  constructor() {
    this.events = {};

    // Load persisted state or fallback
    this.categories = this._loadFromStorage(STORAGE_KEY_CATEGORIES, DEMO_CATEGORIES);
    this.products = this._loadFromStorage(STORAGE_KEY_PRODUCTS, DEMO_PRODUCTS);
    this.currentLang = localStorage.getItem(STORAGE_KEY_LANG) || 'en';

    // Active Category & Hero Product
    this.activeCategoryId = 'meals-sandwiches';
    this.heroProduct = this.products.find(p => p.id === 'beef-burger-300g') || this.products[0];
    this.isExploded = false;
    this.inspectedLayerId = null;

    // Cart Counter
    this.cartItems = [];

    // Currency Formatter (Default: LE)
    this.currencySymbol = 'LE';
    this.currencySymbolAr = 'ج.م';

    // Apply document direction
    document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLang;
  }

  // ==========================================
  // Event Bus (Pub-Sub)
  // ==========================================
  on(eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
    return () => this.off(eventName, callback);
  }

  off(eventName, callback) {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
  }

  emit(eventName, data) {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach(cb => {
      try {
        cb(data);
      } catch (err) {
        console.error(`Error in event listener for ${eventName}:`, err);
      }
    });
  }

  // ==========================================
  // Persistence Helpers
  // ==========================================
  _loadFromStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : JSON.parse(JSON.stringify(fallback));
    } catch (e) {
      return JSON.parse(JSON.stringify(fallback));
    }
  }

  _saveProducts() {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(this.products));
    this.emit('productsUpdated', this.products);
  }

  _saveCategories() {
    localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(this.categories));
    this.emit('categoriesUpdated', this.categories);
  }

  // ==========================================
  // Language & Direction Engine
  // ==========================================
  setLanguage(lang) {
    this.currentLang = lang === 'ar' ? 'ar' : 'en';
    localStorage.setItem(STORAGE_KEY_LANG, this.currentLang);
    document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLang;
    this.emit('languageChanged', this.currentLang);
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang === 'en' ? 'ar' : 'en');
  }

  formatPrice(amount) {
    if (this.currentLang === 'ar') {
      return `${amount} ${this.currencySymbolAr}`;
    }
    return `${amount} ${this.currencySymbol}`;
  }

  // ==========================================
  // Categories & Filtering
  // ==========================================
  getCategories() {
    return this.categories;
  }

  setActiveCategory(categoryId) {
    this.activeCategoryId = categoryId;
    const categoryProducts = this.getProductsByCategory(categoryId);
    if (categoryProducts.length > 0) {
      this.setHeroProduct(categoryProducts[0]);
    }
    this.emit('categoryChanged', categoryId);
  }

  // ==========================================
  // Product & Hero State
  // ==========================================
  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find(p => p.id === id) || null;
  }

  getProductsByCategory(categoryId) {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  searchProducts(query) {
    if (!query || !query.trim()) return [];
    const q = query.trim().toLowerCase();
    return this.products.filter(p => {
      const matchName = p.name?.toLowerCase().includes(q);
      const matchNameAr = p.nameAr?.includes(q);
      const matchCat = p.categoryId?.toLowerCase().includes(q);
      const matchDesc = p.description?.toLowerCase().includes(q);
      const matchDescAr = p.descriptionAr?.includes(q);
      const matchLayer = p.layers?.some(l => 
        l.name?.toLowerCase().includes(q) || 
        l.nameAr?.includes(q) || 
        l.subtitle?.toLowerCase().includes(q) ||
        l.subtitleAr?.includes(q)
      );
      return matchName || matchNameAr || matchCat || matchDesc || matchDescAr || matchLayer;
    });
  }

  approveProduct(productId) {
    const product = this.getProductById(productId);
    if (product) {
      product.status = 'ready';
      this._saveProducts();
      this.emit('productApproved', product);
    }
  }

  updateProductStatus(productId, status) {
    const product = this.getProductById(productId);
    if (product) {
      product.status = status;
      this._saveProducts();
      this.emit('productsUpdated', this.products);
    }
  }

  setHeroProduct(product) {
    this.heroProduct = product;
    this.activeCategoryId = product.categoryId;
    this.isExploded = false;
    this.inspectedLayerId = null;
    this.emit('heroProductChanged', product);
    this.emit('categoryChanged', product.categoryId);
  }

  setHeroExploded(isExploded) {
    this.isExploded = !!isExploded;
    if (!this.isExploded) {
      this.inspectedLayerId = null;
    }
    this.emit('explodeStateChanged', this.isExploded);
  }

  inspectLayer(layerId) {
    this.inspectedLayerId = layerId;
    this.emit('layerInspected', layerId);
  }

  clearInspection() {
    this.inspectedLayerId = null;
    this.emit('inspectionCleared');
  }

  // ==========================================
  // Cart Actions
  // ==========================================
  addToCart(product) {
    this.cartItems.push(product);
    this.emit('cartUpdated', this.cartItems.length);
  }

  removeFromCart(productId) {
    const idx = this.cartItems.findIndex(p => p.id === productId);
    if (idx >= 0) {
      this.cartItems.splice(idx, 1);
      this.emit('cartUpdated', this.cartItems.length);
    }
  }

  removeAllFromCart(productId) {
    this.cartItems = this.cartItems.filter(p => p.id !== productId);
    this.emit('cartUpdated', this.cartItems.length);
  }

  clearCart() {
    this.cartItems = [];
    this.emit('cartUpdated', 0);
  }

  getCartDetailed() {
    const map = new Map();
    for (const item of this.cartItems) {
      if (!map.has(item.id)) {
        map.set(item.id, {
          product: item,
          quantity: 0,
          unitPrice: Number(item.price) || 0,
          total: 0
        });
      }
      const entry = map.get(item.id);
      entry.quantity += 1;
      entry.total = entry.quantity * entry.unitPrice;
    }
    const items = Array.from(map.values());
    const grandTotal = items.reduce((sum, it) => sum + it.total, 0);
    return { items, grandTotal, totalCount: this.cartItems.length };
  }

  getCartCount() {
    return this.cartItems.length;
  }

  // ==========================================
  // Product CRUD (For Admin Studio)
  // ==========================================
  saveProduct(product) {
    const existingIndex = this.products.findIndex(p => p.id === product.id);
    if (existingIndex >= 0) {
      this.products[existingIndex] = JSON.parse(JSON.stringify(product));
    } else {
      if (!product.id) product.id = 'prod-' + Date.now();
      this.products.unshift(JSON.parse(JSON.stringify(product)));
    }
    this._saveProducts();
    if (this.heroProduct && this.heroProduct.id === product.id) {
      this.heroProduct = product;
      this.emit('heroProductChanged', product);
    }
    return product;
  }

  deleteProduct(productId) {
    this.products = this.products.filter(p => p.id !== productId);
    this._saveProducts();
    if (this.heroProduct && this.heroProduct.id === productId) {
      this.heroProduct = this.products[0] || null;
      this.emit('heroProductChanged', this.heroProduct);
    }
  }

  duplicateProduct(productId) {
    const original = this.getProductById(productId);
    if (!original) return null;
    const copy = JSON.parse(JSON.stringify(original));
    copy.id = 'prod-' + Date.now();
    copy.name = `${original.name} (Copy)`;
    copy.nameAr = `${original.nameAr} (نسخة)`;
    this.products.unshift(copy);
    this._saveProducts();
    return copy;
  }

  saveCategory(category) {
    const existingIndex = this.categories.findIndex(c => c.id === category.id);
    if (existingIndex >= 0) {
      this.categories[existingIndex] = { ...this.categories[existingIndex], ...category };
    } else {
      if (!category.id) category.id = 'cat-' + Date.now();
      this.categories.push(category);
    }
    this._saveCategories();
  }

  deleteCategory(categoryId) {
    this.categories = this.categories.filter(c => c.id !== categoryId);
    this.products = this.products.filter(p => p.categoryId !== categoryId);
    this._saveCategories();
    this._saveProducts();
    if (this.activeCategoryId === categoryId) {
      this.setActiveCategory(this.categories[0]?.id || 'burgers');
    }
  }

  resetToDefaults() {
    localStorage.removeItem(STORAGE_KEY_CATEGORIES);
    localStorage.removeItem(STORAGE_KEY_PRODUCTS);
    this.categories = JSON.parse(JSON.stringify(DEMO_CATEGORIES));
    this.products = JSON.parse(JSON.stringify(DEMO_PRODUCTS));
    this.heroProduct = this.products.find(p => p.id === 'burger-deluxe') || this.products[0];
    this.activeCategoryId = 'burgers';
    this.cartItems = [];
    this._saveCategories();
    this._saveProducts();
    this.emit('dataReset');
  }

  exportJSON() {
    return JSON.stringify({
      categories: this.categories,
      products: this.products
    }, null, 2);
  }

  importJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed.products) && Array.isArray(parsed.categories)) {
        this.categories = parsed.categories;
        this.products = parsed.products;
        this.heroProduct = this.products[0];
        this._saveCategories();
        this._saveProducts();
        this.emit('dataReset');
        return { success: true };
      }
      return { success: false, error: 'Invalid schema' };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }
}

export const store = new Store();
