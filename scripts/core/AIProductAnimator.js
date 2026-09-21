/**
 * AIProductAnimator.js
 * Intelligent Culinary Layer Analyzer and 3D Physics Animation Planner.
 * Computes logical gravity stack orders, collision-free 3D coordinates,
 * organic rotational tilts, staggered timing curves, and tasting notes.
 */

export class AIProductAnimator {
  /**
   * Main generation engine: Takes raw user input and outputs
   * a fully configured product with 3D layers and animations.
   */
  static generateProductConfig(input = {}) {
    const {
      name = 'Signature Gourmet Burger',
      nameAr = '',
      category = 'burgers',
      description = '',
      ingredientsText = '',
      basePrice = 22,
    } = input;

    // 1. Parse ingredients list into array of clean strings
    const rawIngredients = this._parseIngredients(ingredientsText);

    // 2. Classify ingredients into culinary anatomy roles
    const analyzedLayers = this._classifyLayers(rawIngredients, category);

    // 3. Compute 3D physics, collision-free Y/Z spacing, and rotational dynamics
    const layersWith3D = this._compute3DCoordinates(analyzedLayers);

    // 4. Generate AI Image Prompts (for transparent PNG cutouts)
    const imagePrompts = this._generateImagePrompts(name, analyzedLayers);

    // 5. Generate reasoning log explaining the AI choices
    const reasoningLog = this._generateReasoningLog(name, layersWith3D);

    return {
      productConfig: {
        id: 'prod-' + Date.now(),
        name,
        nameAr: nameAr || name,
        categoryId: category,
        price: parseFloat(basePrice) || 20,
        currency: 'USD',
        description: description || `Handcrafted ${name} with ${rawIngredients.slice(0, 3).join(', ')}.`,
        descriptionAr: description || name,
        calories: this._estimateCalories(category, analyzedLayers.length),
        prepTime: '10-14 mins',
        spicyLevel: this._detectSpicyLevel(rawIngredients),
        isChefSpecial: true,
        isVegan: this._detectVegan(rawIngredients),
        allergens: this._detectAllergens(rawIngredients),
        colorGlow: this._getCategoryGlow(category),
        layers: layersWith3D
      },
      imagePrompts,
      reasoningLog
    };
  }

  /**
   * Generates AI animation coordinates for an existing list of layers
   */
  static recomputeAnimationForLayers(layers, category = 'burgers') {
    const count = layers.length;
    if (count === 0) return layers;

    // Spread calculations based on layer count
    const totalYSpread = Math.min(360, Math.max(220, count * 44));
    const stepY = totalYSpread / (count - 1 || 1);
    const startY = -totalYSpread / 2;

    const totalZSpread = Math.min(130, count * 18);
    const stepZ = totalZSpread / (count - 1 || 1);
    const startZ = totalZSpread / 2;

    return layers.map((layer, idx) => {
      // Alternating organic tilt & horizontal drift
      const isEven = idx % 2 === 0;
      const driftX = isEven ? (idx === 0 || idx === count - 1 ? 0 : -14) : 14;
      const tiltRy = isEven ? -8 : 10;
      const tiltRz = isEven ? 3 : -3;
      const tiltRx = 14 - (idx * 3);

      const targetY = Math.round(startY + (idx * stepY));
      const targetZ = Math.round(startZ - (idx * stepZ));

      const initialY = Math.round((idx - (count - 1) / 2) * 12);
      const initialZ = Math.round(((count - 1) / 2 - idx) * 5);

      return {
        ...layer,
        initial: {
          x: 0,
          y: initialY,
          z: initialZ,
          rx: Math.max(0, 8 - idx * 2),
          ry: 0,
          rz: 0,
          scale: 1,
          opacity: 1
        },
        exploded: {
          x: driftX,
          y: targetY,
          z: targetZ,
          rx: tiltRx,
          ry: tiltRy,
          rz: tiltRz,
          scale: idx === 0 || idx === count - 1 ? 1.05 : 1.02,
          opacity: 1,
          delay: idx * 75,
          duration: 720
        }
      };
    });
  }

  // ==========================================
  // Private Culinary Rules & Heuristics
  // ==========================================
  static _parseIngredients(rawText) {
    if (!rawText || !rawText.trim()) {
      return [
        'Brioche Bun',
        'Special Umami Sauce',
        'Aged Cheddar Cheese',
        'Angus Beef Patty',
        'Butter Lettuce',
        'Toasted Bottom Bun'
      ];
    }
    return rawText
      .split(/[\n,;]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);
  }

  static _classifyLayers(ingredients, category) {
    // Sort ingredients according to physical structural gravity
    // 0: Top (Crown/Garnish)
    // 1: Top Sauce / Relish
    // 2: Fresh Vegetal (Lettuce, Tomato, Pickles)
    // 3: Melt / Cheese
    // 4: Protein / Core Core
    // 5: Base Sauce
    // 6: Bottom Foundation
    const scored = ingredients.map((item, originalIndex) => {
      const lower = item.toLowerCase();
      let role = 'mid';
      let gravityRank = 30;
      let layerType = 'default';
      let color = '#f59e0b';

      if (lower.includes('top bun') || lower.includes('crown') || lower.includes('dome') || lower.includes('garnish') || lower.includes('rosemary') || lower.includes('basil') || lower.includes('gold')) {
        gravityRank = 10;
        role = 'top';
        layerType = lower.includes('dome') ? 'chocolate-dome' : lower.includes('bun') ? 'bun-top' : lower.includes('garnish') ? 'drink-garnish' : 'basil-garnish';
        color = '#f59e0b';
      } else if (lower.includes('sauce') || lower.includes('aioli') || lower.includes('bbq') || lower.includes('oil') || lower.includes('glaze')) {
        gravityRank = 20;
        role = 'sauce';
        layerType = category === 'pizza' ? 'pizza-sauce' : 'sauce-drip';
        color = '#ef4444';
      } else if (lower.includes('lettuce') || lower.includes('slaw') || lower.includes('spinach') || lower.includes('greens')) {
        gravityRank = 25;
        role = 'vegetable';
        layerType = 'lettuce';
        color = '#22c55e';
      } else if (lower.includes('tomato') || lower.includes('pickle')) {
        gravityRank = 30;
        role = 'crisp';
        layerType = lower.includes('tomato') ? 'tomato' : 'pickles';
        color = lower.includes('tomato') ? '#dc2626' : '#84cc16';
      } else if (lower.includes('cheese') || lower.includes('cheddar') || lower.includes('mozzarella') || lower.includes('fondant') || lower.includes('cream')) {
        gravityRank = 40;
        role = 'melt';
        layerType = category === 'pizza' ? 'pizza-cheese' : category === 'desserts' ? 'lava-core' : 'cheese-melt';
        color = '#facc15';
      } else if (lower.includes('patty') || lower.includes('beef') || lower.includes('chicken') || lower.includes('salami') || lower.includes('bacon') || lower.includes('bourbon') || lower.includes('tea') || lower.includes('brew')) {
        gravityRank = 50;
        role = 'core';
        layerType = lower.includes('chicken') ? 'patty-chicken' : lower.includes('salami') ? 'pepperoni' : lower.includes('bacon') ? 'bacon' : category === 'drinks' ? 'liquid-amber' : 'patty-beef';
        color = '#78350f';
      } else if (lower.includes('ice') || lower.includes('cold foam')) {
        gravityRank = 35;
        role = 'ice';
        layerType = 'crystal-ice';
        color = '#38bdf8';
      } else if (lower.includes('bottom bun') || lower.includes('heel') || lower.includes('crust') || lower.includes('glass') || lower.includes('pastry') || lower.includes('base')) {
        gravityRank = 70;
        role = 'base';
        layerType = category === 'pizza' ? 'pizza-crust' : category === 'drinks' ? 'glass-base' : category === 'desserts' ? 'pastry-base' : 'bun-bottom';
        color = '#b45309';
      }

      return {
        item,
        originalIndex,
        gravityRank,
        role,
        layerType,
        color
      };
    });

    // Sort by gravityRank (top down)
    scored.sort((a, b) => a.gravityRank - b.gravityRank);

    return scored.map((s, idx) => ({
      id: `layer-${idx + 1}-${s.item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      name: s.item,
      nameAr: s.item,
      type: s.layerType,
      color: s.color,
      tastingNotes: this._generateTastingNotes(s.item),
      origin: this._generateOrigin(s.item)
    }));
  }

  static _compute3DCoordinates(layers) {
    return this.recomputeAnimationForLayers(layers);
  }

  static _generateTastingNotes(ingredient) {
    const lower = ingredient.toLowerCase();
    if (lower.includes('bun') || lower.includes('crust')) return 'Toasted golden exterior with pillowy light interior aroma';
    if (lower.includes('truffle')) return 'Earth-rich fragrant umami with deep forest undertones';
    if (lower.includes('beef') || lower.includes('patty')) return 'High-heat seared crust locking in rich savory beef tallow';
    if (lower.includes('cheese') || lower.includes('cheddar')) return 'Creamy, decadent melt with a sharp aged finish';
    if (lower.includes('chicken')) return 'Ultra-crisp spiced crunch concealing tender moist meat';
    if (lower.includes('lettuce')) return 'Fresh watery snap bringing temperature and texture contrast';
    if (lower.includes('tomato')) return 'Juicy sweet acidity enhancing seasoning balance';
    if (lower.includes('pickle')) return 'Tangy vinegar and dill crunch cutting through fats';
    if (lower.includes('bacon')) return 'Wood-smoked savory crackle with lingering maple notes';
    if (lower.includes('sauce') || lower.includes('bbq')) return 'Complex blend of sweet, sour, and savory spice';
    if (lower.includes('ice')) return 'Pristine frozen crystal purity regulating chill and dilution';
    if (lower.includes('chocolate')) return 'Deep single-origin dark cocoa bean fruitiness and bitter snap';
    return `Signature notes of fresh ${ingredient} selected for optimal balance.`;
  }

  static _generateOrigin(ingredient) {
    const lower = ingredient.toLowerCase();
    if (lower.includes('truffle')) return 'Piedmont, Northern Italy';
    if (lower.includes('cheddar') || lower.includes('cheese')) return 'Artisan Dairy Reserve';
    if (lower.includes('beef') || lower.includes('angus')) return 'Grain-Fed Certified Angus';
    if (lower.includes('tomato')) return 'San Marzano volcanic soil';
    if (lower.includes('chocolate')) return 'Single-Origin Ecuadorian Cocoa';
    if (lower.includes('matcha')) return 'Uji, Kyoto shade-grown harvest';
    return 'Locally sourced farm-to-table';
  }

  static _estimateCalories(category, layerCount) {
    if (category === 'burgers') return 600 + layerCount * 45;
    if (category === 'pizza') return 550 + layerCount * 40;
    if (category === 'drinks') return 120 + layerCount * 20;
    return 450 + layerCount * 50;
  }

  static _detectSpicyLevel(ingredients) {
    const text = ingredients.join(' ').toLowerCase();
    if (text.includes('fire') || text.includes('ghost') || text.includes('habanero')) return 3;
    if (text.includes('spicy') || text.includes('calabrian') || text.includes('jalapeno') || text.includes('cayenne')) return 2;
    if (text.includes('chili') || text.includes('pepper') || text.includes('chipotle')) return 1;
    return 0;
  }

  static _detectVegan(ingredients) {
    const text = ingredients.join(' ').toLowerCase();
    const nonVegan = ['beef', 'chicken', 'bacon', 'cheese', 'mozzarella', 'cheddar', 'dairy', 'egg', 'cream', 'butter'];
    return !nonVegan.some(item => text.includes(item));
  }

  static _detectAllergens(ingredients) {
    const text = ingredients.join(' ').toLowerCase();
    const allergens = [];
    if (text.includes('cheese') || text.includes('cream') || text.includes('butter') || text.includes('milk')) allergens.push('Dairy');
    if (text.includes('bun') || text.includes('crust') || text.includes('flour') || text.includes('pastry') || text.includes('brioche')) allergens.push('Gluten');
    if (text.includes('egg') || text.includes('aioli') || text.includes('mayo')) allergens.push('Eggs');
    if (text.includes('pistachio') || text.includes('hazelnut') || text.includes('nut')) allergens.push('Nuts');
    return allergens;
  }

  static _getCategoryGlow(category) {
    if (category === 'burgers') return 'rgba(245, 158, 11, 0.45)';
    if (category === 'pizza') return 'rgba(239, 68, 68, 0.4)';
    if (category === 'drinks') return 'rgba(6, 182, 212, 0.45)';
    return 'rgba(168, 85, 247, 0.4)';
  }

  static _generateImagePrompts(productName, layers) {
    return layers.map(layer => ({
      layerName: layer.name,
      prompt: `Isolated culinary ingredient cutout, ${layer.name} for ${productName}, commercial high-end food photography, studio lighting, macro depth of field, pure white background, PNG cutout ready, 8k resolution, photorealistic, pristine styling --no background`
    }));
  }

  static generateArchetypeLayers(productName = '', categoryId = '', productNameAr = '') {
    const lowerName = (productName || '').toLowerCase();

    // 1. Shisha
    if (categoryId === 'shisha') {
      return [
        { id: 'l-coal', name: 'Glowing Natural Coconut Charcoal', nameAr: 'فحم طبيعي متوهج', subtitle: 'Even Heat Distribution', subtitleAr: 'حرارة متوازنة ومستمرة', type: 'bun-top', position: 'right', initial: { x: 0, y: -35, z: 30, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: -125, z: 55, rx: 16, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 720 } },
        { id: 'l-bowl', name: 'Glazed Clay Phunnel Bowl & Flavor', nameAr: 'حجر الفخار والمعسل الفاخر', subtitle: 'Premium Dark Leaf Tobacco', subtitleAr: 'معسل فاكهة طبيعي عالي الجودة', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -12, z: 20, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -16, y: -65, z: 35, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 720 } },
        { id: 'l-stem', name: 'Hand-Carved Brass Stem & Tray', nameAr: 'قلب الشيشة النحاسي والصينية', subtitle: 'Handcrafted Egyptian Brass', subtitleAr: 'نحاس مصري أصيل مطروق يدوياً', type: 'patty-beef', position: 'right', initial: { x: 0, y: 10, z: 10, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 16, y: 0, z: 15, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 740 } },
        { id: 'l-vase', name: 'Heavy Crystal Water Vase', nameAr: 'قاعدة الزجاج الكريستالي المثلج', subtitle: 'Filtered Ice-Cold Reservoir', subtitleAr: 'زجاج كريستالي بماء نقي ومثلج', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 35, z: -15, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 110, z: -35, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
      ];
    }

    // 2. Pasta
    if (categoryId === 'pasta') {
      const sauceName = lowerName.includes('alfredo') ? 'Velvety Alfredo Cream' : lowerName.includes('bolognese') ? 'Slow-Simmered Bolognese Ragù' : 'Spicy Arrabbiata Marinara';
      const sauceNameAr = lowerName.includes('alfredo') ? 'كريمة ألفريدو الغنية' : lowerName.includes('bolognese') ? 'لحم بولونيز مطهو ببطء' : 'صلصة أرابياتا الحارة';
      return [
        { id: 'l-garnish', name: 'Shaved Reggiano & Basil Leaf', nameAr: 'جبن بارميزان وأوراق الريحان', subtitle: 'Aged 24 Months', subtitleAr: 'بارميزان معتق 24 شهراً', type: 'bun-top', position: 'right', initial: { x: 0, y: -28, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -105, z: 50, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
        { id: 'l-sauce', name: sauceName, nameAr: sauceNameAr, subtitle: 'Chef House-Made Reduction', subtitleAr: 'صلصة الشيف الغنية المحضرة طازجة', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 15, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 30, rx: 6, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
        { id: 'l-pasta', name: 'Artisan Pasta Twirl', nameAr: 'باستا إيطالية أصيلة ألدينتي', subtitle: 'Al Dente Bronze-Cut', subtitleAr: 'عجينة باستا مسحوبة بالبرونز', type: 'patty-beef', position: 'right', initial: { x: 0, y: 12, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 22, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
        { id: 'l-bowl', name: 'Warm Ceramic Rim Platter', nameAr: 'طبق التقديم الخزفي الإيطالي', subtitle: 'Porcelain Heat Retention', subtitleAr: 'سيراميك يحتفظ بالحرارة المثالية', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 32, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 105, z: -30, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
      ];
    }

    // 3. Croissant
    if (categoryId === 'croissant') {
      return [
        { id: 'l-crust', name: 'Flaky Golden Butter Crown', nameAr: 'رقائق الكرواسون الذهبية المقرمشة', subtitle: 'French Tournage 72 Layers', subtitleAr: '72 طبقة زبدة فرنسية هشة', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -95, z: 45, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
        { id: 'l-filling', name: `${productName} Gourmet Filling`, nameAr: `حشوة ${productNameAr || productName} الفاخرة`, subtitle: 'Artisan Sliced Charcuterie / Cheeses', subtitleAr: 'أجبان ولحوم باردة محضرة بعناية', type: 'cheese-melt', position: 'left', initial: { x: 0, y: 5, z: 10, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 5, z: 15, rx: -4, ry: 8, rz: -2, scale: 1.04, opacity: 1, delay: 150, duration: 720 } },
        { id: 'l-heel', name: 'Honeycomb Pastry Heel', nameAr: 'قاعدة الكرواسون المحمصة', subtitle: 'Aerated Butter Base', subtitleAr: 'قاعدة هشة غنية بالزبدة', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
      ];
    }

    // 4. Fries
    if (categoryId === 'fries') {
      return [
        { id: 'l-garnish', name: 'Melted Cheddar & Chive Garnish', nameAr: 'صوص جبن شيدر ذائب وأعشاب', subtitle: 'Warm Liquid Gold Cheddar', subtitleAr: 'جبنة شيدر غنية وساخنة', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -95, z: 45, rx: 12, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
        { id: 'l-fries', name: 'Crispy Double-Fried Idaho Russet', nameAr: 'بطاطس مقرمشة ذهبية مقلية مرتين', subtitle: 'Sea Salt & Cracking Texture', subtitleAr: 'ملح بحري نقي وقرمشة خفيفة', type: 'patty-beef', position: 'left', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 0, z: 15, rx: -4, ry: 8, rz: -2, scale: 1.04, opacity: 1, delay: 150, duration: 720 } },
        { id: 'l-basket', name: 'Artisan Matte Serving Platter', nameAr: 'سلة التقديم الفاخرة', subtitle: 'Parchment Lined', subtitleAr: 'مبطنة بورق طهي صحي', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
      ];
    }

    // 5. Waffles & Extras
    if (categoryId === 'waffles') {
      return [
        { id: 'l-chocolate', name: 'Warm Belgian Hazelnut Drizzle', nameAr: 'شوكولاتة بلجيكية بالبندق مسكوبة', subtitle: 'Velvety Flowing Ganache', subtitleAr: 'جناش شوكولاتة فاخر مسكوب بسخاء', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -30, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -105, z: 50, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
        { id: 'l-fruit', name: 'Sweet Crushed Crisp Toppings', nameAr: 'إضافات مقرمشة وقطع الفراولة', subtitle: 'Gourmet Crushed Biscuits & Berries', subtitleAr: 'قطع بسكويت وفراولة طازجة', type: 'cheese-melt', position: 'left', initial: { x: 0, y: -8, z: 15, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 30, rx: 6, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
        { id: 'l-waffle', name: 'Crisp Honeycomb Belgian Waffle', nameAr: 'وافل بلجيكي ذهبي مقرمش', subtitle: 'Caramelized Pearl Sugar Crunch', subtitleAr: 'سكر اللؤلؤ المكرمل مع قرمشة خفيفة', type: 'patty-beef', position: 'right', initial: { x: 0, y: 12, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 22, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
        { id: 'l-plate', name: 'Porcelain Dessert Dish', nameAr: 'طبق الحلويات البورسلين الفاخر', subtitle: 'Slate Display Surface', subtitleAr: 'سطح تقديم رخامي أنيق', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 32, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 105, z: -30, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
      ];
    }

    // 6. Cold Drinks, Cocktails, Smoothies, Juices
    const isColdDrink = ['smoothies-cold', 'signature-drinks', 'cocktails', 'fresh-juices'].includes(categoryId);
    if (isColdDrink) {
      return [
        { id: 'l-garnish', name: 'Sun-Ripened Fruit Slice & Mint', nameAr: 'شريحة فواكه ونعناع طازج', subtitle: 'Artisan Garnish', subtitleAr: 'تزيين طبيعي منعش بأوراق النعناع', type: 'bun-top', position: 'right', initial: { x: 0, y: -30, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -110, z: 50, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
        { id: 'l-ice', name: 'Hand-Carved Crystal Ice', nameAr: 'ثلج كريستالي نقي وبطيء الذوبان', subtitle: 'Cold Slow-Melt Ice', subtitleAr: 'مكعبات ثلج نقية تحافظ على برودة المشروب', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -10, z: 15, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -50, z: 30, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
        { id: 'l-liquid', name: `${productName} Pure Nectar`, nameAr: `مستخلص ${productNameAr || productName} الطبيعي`, subtitle: 'Pure Pressed Juice / Blend', subtitleAr: 'مزيج طبيعي طازج بدون إضافات صناعية', type: 'cheese-melt', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 20, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
        { id: 'l-glass', name: 'Chilled Crystal Glass Vessel', nameAr: 'كأس التقديم الكريستالي المثلج', subtitle: 'Heavy-Base Glassware', subtitleAr: 'كأس زجاجي فاخر بقاعدة ثقيلة', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 105, z: -30, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
      ];
    }

    // 7. Hot Drinks & Coffee
    const isHotDrink = ['hot-coffee', 'hot-beverages'].includes(categoryId);
    if (isHotDrink) {
      return [
        { id: 'l-crema', name: 'Velvety Crema & Artisan Foam', nameAr: 'رغوة الكريما الذهبية الحريرية', subtitle: 'Aromatic Microfoam', subtitleAr: 'فوم حليبي ناعم وغني ومحضر بمهارة', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -22, z: 20, rx: 6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -90, z: 45, rx: 12, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
        { id: 'l-brew', name: `${productName} Fresh Extraction`, nameAr: `مستخلص ${productNameAr || productName} الساخن`, subtitle: '100% Arabica Roast', subtitleAr: 'حبوب أرابيكا محمصة ومطحونة طازجة', type: 'patty-beef', position: 'left', initial: { x: 0, y: 2, z: 10, rx: 2, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -25, z: 20, rx: 4, ry: 8, rz: -2, scale: 1.03, opacity: 1, delay: 150, duration: 700 } },
        { id: 'l-cup', name: 'Porcelain Demitasse & Saucer', nameAr: 'الفنجان الخزفي وطبق التقديم', subtitle: 'Thermal Ceramic Vessel', subtitleAr: 'خزف عازل يحتفظ بحرارة القهوة ورائحتها', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 26, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
      ];
    }

    // 8. Hawawshi & Meals
    if (lowerName.includes('hawawshi')) {
      return [
        { id: 'l-crust-top', name: 'Crisp Baladi Bread Crown', nameAr: 'خبز بلدي مقرمش بالردة محمص', subtitle: 'Stone-Baked Dough', subtitleAr: 'مخبوز على الحجر بسمن بلدي', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -95, z: 45, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
        { id: 'l-meat', name: 'Spiced Minced Beef Filling', nameAr: 'لحم بقري مفروم بالخلطة السرية', subtitle: 'House Spice Blend & Herbs', subtitleAr: 'توابل شرقية، فلفل وبصل طازج', type: 'patty-beef', position: 'left', initial: { x: 0, y: 5, z: 10, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 5, z: 15, rx: -4, ry: 8, rz: -2, scale: 1.04, opacity: 1, delay: 150, duration: 720 } },
        { id: 'l-crust-bottom', name: 'Golden Toasted Baladi Base', nameAr: 'قاعدة الخبز البلدي المحمرة', subtitle: 'Woodfire Crisp Base', subtitleAr: 'قاعدة مقرمشة بطعم الفحم', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
      ];
    }

    // 9. Default Gourmet Burger / Sandwich Stack
    return [
      { id: 'l-crown', name: 'Artisan Brioche Crown', nameAr: 'خبز البريوش الذهبي بالسمسم', subtitle: 'French Butter Brioche', subtitleAr: 'بريوش فرنسي مخبوز طازج', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -100, z: 50, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'l-sauce', name: 'El Kokh Secret Cream Sauce', nameAr: 'صلصة الكوخ الخاصة', subtitle: 'Savory Umami Glaze', subtitleAr: 'صلصة سرية مدخنة ومميزة', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -10, z: 15, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -50, z: 30, rx: 6, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'l-patty', name: `${productName} Prime Cut`, nameAr: `شريحة ${productNameAr || productName} المشوية`, subtitle: 'Flame-Grilled Searing', subtitleAr: 'مشوية على اللهب بعصارة كاملة', type: 'patty-beef', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 15, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'l-heel', name: 'Toasted Brioche Heel', nameAr: 'قاعدة الخبز المحمصة', subtitle: 'Sealed Butter Base', subtitleAr: 'محمصة بالزبدة لمنع تشرب الصلصة', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -30, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ];
  }
}
