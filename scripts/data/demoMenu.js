/**
 * demoMenu.js
 * Authentic Restaurant Menu Database extracted from all 13 pages of the official PDF:
 * "الكوخ | El Kokh - Brewed to Perfect"
 * 
 * Every category and product is represented with exact Arabic & English names,
 * prices in LE, custom layer anatomy for 3D exploded view, and status flags.
 */

export const DEMO_CATEGORIES = [
  { id: 'meals-sandwiches', name: 'Meals & Sandwiches', nameAr: 'وجبات وسندوتشات', icon: '🍔' },
  { id: 'pasta', name: 'Pasta', nameAr: 'باستا', icon: '🍝' },
  { id: 'croissant', name: 'Croissant', nameAr: 'كرواسون', icon: '🥐' },
  { id: 'fries', name: 'Fries & Sides', nameAr: 'بطاطس', icon: '🍟' },
  { id: 'waffles', name: 'Waffle & Extras', nameAr: 'الوافل والإضافات', icon: '🧇' },
  { id: 'ice-cream-desserts', name: 'Ice Cream & Desserts', nameAr: 'آيس كريم وحلو', icon: '🍨' },
  { id: 'smoothies-cold', name: 'Smoothies & Cold Drinks', nameAr: 'سموذي ومشروبات باردة', icon: '🥤' },
  { id: 'signature-drinks', name: 'Signature Drinks', nameAr: 'مشروبات مميزة', icon: '🍹' },
  { id: 'cocktails', name: 'Cocktails', nameAr: 'كوكتيلات', icon: '🍸' },
  { id: 'fresh-juices', name: 'Fresh Juices', nameAr: 'عصائر طازجة', icon: '🍊' },
  { id: 'hot-beverages', name: 'Hot Beverages', nameAr: 'مشروبات ساخنة', icon: '☕' },
  { id: 'hot-coffee', name: 'Espresso & Coffee', nameAr: 'قهوة وإسبريسو', icon: '🫘' },
  { id: 'shisha', name: 'Shisha', nameAr: 'الشيشة', icon: '💨' }
];

export const DEMO_PRODUCTS = [
  /* =========================================================================
     PAGE 1: MEALS & SANDWICHES | وجبات وسندوتشات
     ========================================================================= */
  {
    id: 'beef-burger-300g',
    categoryId: 'meals-sandwiches',
    name: '300g Beef Burger',
    nameAr: 'برجر 300 جرام لحمة',
    price: 190,
    currency: 'LE',
    tagline: 'HOUSE SPECIALTY',
    taglineAr: 'تخصص الكوخ المميز',
    description: 'A massive 300g prime char-grilled beef patty with melted cheese, crisp lettuce, ripe tomato and signature secret sauce.',
    descriptionAr: 'قطعة لحم بقري مشوية على اللهب بوزن 300 جرام مع جبنة ذائبة، خس طازج، طماطم وصلصة الكوخ الخاصة.',
    calories: 890,
    prepTime: '15 mins',
    status: 'ready',
    archetype: 'burger',
    layers: [
      {
        id: 'bun-top',
        name: 'Brioche Top Bun',
        nameAr: 'الخبز العلوي بالسمسم',
        subtitle: 'Freshly Baked Brioche',
        subtitleAr: 'خبز بريوش طازج ومحمص',
        type: 'bun-top',
        position: 'right',
        initial: { x: 0, y: -45, z: 25, rx: 10, ry: 0, rz: 0, scale: 1, opacity: 1 },
        exploded: { x: 0, y: -160, z: 65, rx: 16, ry: -8, rz: 3, scale: 1.05, opacity: 1, delay: 0, duration: 750 }
      },
      {
        id: 'special-sauce',
        name: 'El Kokh Special Sauce',
        nameAr: 'صلصة الكوخ الخاصة',
        subtitle: 'Signature Herb Recipe',
        subtitleAr: 'خلطة أعشاب استثنائية',
        type: 'sauce-drip',
        position: 'left',
        initial: { x: 0, y: -30, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 },
        exploded: { x: -15, y: -115, z: 45, rx: 12, ry: 10, rz: -3, scale: 1.02, opacity: 1, delay: 80, duration: 700 }
      },
      {
        id: 'lettuce',
        name: 'Crisp Butter Lettuce',
        nameAr: 'خس مقرمش طازج',
        subtitle: 'Organic Crisp Leaves',
        subtitleAr: 'أوراق خس طازجة ومنعشة',
        type: 'lettuce',
        position: 'right',
        initial: { x: 0, y: -18, z: 15, rx: 6, ry: 0, rz: 0, scale: 1, opacity: 1 },
        exploded: { x: 18, y: -70, z: 30, rx: 8, ry: -10, rz: 4, scale: 1.04, opacity: 1, delay: 160, duration: 720 }
      },
      {
        id: 'tomato',
        name: 'Vine Ripe Tomatoes',
        nameAr: 'طماطم طازجة ناضجة',
        subtitle: 'Sun-ripened Slices',
        subtitleAr: 'شرائح طماطم غنية بالعصارة',
        type: 'tomato',
        position: 'left',
        initial: { x: 0, y: -5, z: 10, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 },
        exploded: { x: -16, y: -25, z: 18, rx: 6, ry: 12, rz: -3, scale: 1.02, opacity: 1, delay: 240, duration: 700 }
      },
      {
        id: 'cheese',
        name: 'Aged Cheddar Melt',
        nameAr: 'جبنة شيدر ذائبة',
        subtitle: 'Rich Sharp Cheddar',
        subtitleAr: 'شيدر معتق كريمي وذائب',
        type: 'cheese-melt',
        position: 'right',
        initial: { x: 0, y: 8, z: 5, rx: 3, ry: 0, rz: 0, scale: 1, opacity: 1 },
        exploded: { x: 14, y: 20, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.02, opacity: 1, delay: 320, duration: 720 }
      },
      {
        id: 'patty-300g',
        name: '300g Beef Patty',
        nameAr: 'قطعة لحم 300 جرام',
        subtitle: 'Prime Flame-Grilled Beef',
        subtitleAr: 'لحم بقري فاخر مشوي على اللهب',
        type: 'patty-beef',
        position: 'left',
        initial: { x: 0, y: 22, z: 0, rx: 2, ry: 0, rz: 0, scale: 1, opacity: 1 },
        exploded: { x: -12, y: 65, z: -10, rx: -8, ry: 8, rz: -2, scale: 1.05, opacity: 1, delay: 400, duration: 750 }
      },
      {
        id: 'pickles',
        name: 'Tangy House Pickles',
        nameAr: 'مخلل خيار متبل',
        subtitle: 'Crunchy Dill Pickles',
        subtitleAr: 'قرمشة متوازنة بنكهة الشبت',
        type: 'pickles',
        position: 'right',
        initial: { x: 0, y: 34, z: -5, rx: 1, ry: 0, rz: 0, scale: 1, opacity: 1 },
        exploded: { x: 16, y: 110, z: -25, rx: -10, ry: -6, rz: 3, scale: 1.02, opacity: 1, delay: 480, duration: 700 }
      },
      {
        id: 'bun-bottom',
        name: 'Toasted Bottom Bun',
        nameAr: 'الخبز السفلي المحمص',
        subtitle: 'Golden Butter Toasted',
        subtitleAr: 'قاعدة بريوش ذهبية دافئة',
        type: 'bun-bottom',
        position: 'left',
        initial: { x: 0, y: 45, z: -10, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 },
        exploded: { x: 0, y: 155, z: -40, rx: -14, ry: 5, rz: -2, scale: 1.03, opacity: 1, delay: 560, duration: 750 }
      }
    ]
  },
  {
    id: 'cordon-bleu',
    categoryId: 'meals-sandwiches',
    name: 'Cordon Bleu',
    nameAr: 'كوردن بلو',
    price: 160,
    currency: 'LE',
    tagline: 'CHEF SELECTION',
    taglineAr: 'اختيار الشيف',
    description: 'Crispy golden fried chicken breast stuffed with premium smoked beef, melted mozzarella and fine herbs.',
    descriptionAr: 'صدور دجاج مقرمشة محشوة باللحم البقري المدخن وجبنة الموتزاريلا الذائبة مع بطاطس وصوص كريمي.',
    status: 'ready',
    archetype: 'meal',
    layers: [
      { id: 'cb-garnish', name: 'Herbed Garlic Butter', nameAr: 'زبدة الثوم والأعشاب', subtitle: 'Aromatic Finish', subtitleAr: 'لمسة عطرية أخيرة', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -20, z: 15, rx: 5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 10, y: -100, z: 40, rx: 12, ry: -6, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'cb-crust', name: 'Golden Panko Crust', nameAr: 'طبقة البانكو المقرمشة', subtitle: 'Ultra Crisp Exterior', subtitleAr: 'قرمشة ذهبية مثالية', type: 'patty-beef', position: 'left', initial: { x: 0, y: -5, z: 10, rx: 2, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -15, y: -50, z: 25, rx: 6, ry: 8, rz: -3, scale: 1.03, opacity: 1, delay: 100, duration: 700 } },
      { id: 'cb-chicken', name: 'Tender Chicken Breast', nameAr: 'صدر دجاج طري', subtitle: 'Prime Poultry Cut', subtitleAr: 'دجاج متبل ومطهو بعناية', type: 'bun-top', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 15, y: 10, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.02, opacity: 1, delay: 200, duration: 720 } },
      { id: 'cb-filling', name: 'Smoked Beef & Swiss Melt', nameAr: 'لحم مدخن وموتزاريلا', subtitle: 'Rich Stuffed Core', subtitleAr: 'حشوة غنية وجبنة ذائبة', type: 'cheese-melt', position: 'left', initial: { x: 0, y: 25, z: -5, rx: -2, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -10, y: 70, z: -15, rx: -8, ry: 6, rz: -2, scale: 1.04, opacity: 1, delay: 300, duration: 720 } },
      { id: 'cb-plate', name: 'Ceramic Serving Base', nameAr: 'قاعدة التقديم الفاخرة', subtitle: 'Warm Platter Base', subtitleAr: 'طبق تقديم مع البطاطس', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 40, z: -15, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 130, z: -35, rx: -14, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 400, duration: 750 } }
    ]
  },
  {
    id: 'chicken-strips',
    categoryId: 'meals-sandwiches',
    name: 'Chicken Strips',
    nameAr: 'ستربس',
    price: 100,
    currency: 'LE',
    tagline: 'CRISPY & FRESH',
    taglineAr: 'مقرمش ولذيذ',
    description: 'Golden fried crispy chicken tenders seasoned with house spices, served with honey mustard and garlic dip.',
    descriptionAr: 'قطع ستربس دجاج مقرمشة ومتبلة بخلطة التوابل الذهبية تقدم مع صوصات خاصة.',
    status: 'ready',
    archetype: 'meal',
    layers: [
      { id: 'cs-dip', name: 'Honey Mustard Dip', nameAr: 'صوص هاني ماسترد', subtitle: 'Tangy Sweet Dip', subtitleAr: 'صلصة خردل بالعسل', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -20, z: 15, rx: 5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -90, z: 35, rx: 10, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'cs-tenders', name: 'Crisp Strips Stack', nameAr: 'أصابع الستربس الذهبية', subtitle: 'Triple Golden Tenders', subtitleAr: 'قطع دجاج مقرمشة ومتبلة', type: 'patty-beef', position: 'left', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -15, y: 0, z: 15, rx: -4, ry: 8, rz: -2, scale: 1.05, opacity: 1, delay: 150, duration: 720 } },
      { id: 'cs-basket', name: 'Serving Basket', nameAr: 'سلة التقديم الحرفية', subtitle: 'Artisan Paper & Basket', subtitleAr: 'سلة تقديم خشبية مع ورقة شيف', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -30, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
    ]
  },
  {
    id: 'hawawshi',
    categoryId: 'meals-sandwiches',
    name: 'Hawawshi',
    nameAr: 'حواوشي',
    price: 105,
    currency: 'LE',
    tagline: 'TRADITIONAL RECIPE',
    taglineAr: 'وصفة شرقية أصيلة',
    description: 'Authentic Egyptian minced beef spiced with onions, peppers and oriental seasoning baked in crispy baladi bread.',
    descriptionAr: 'حواوشي بلدي أصيل باللحم البقري المتبل بالبصل والفلفل الحار والتوابل الشرقية مخبوز حتى القرمشة.',
    status: 'ready',
    archetype: 'meal',
    layers: [
      { id: 'hw-crust-top', name: 'Crispy Baladi Bread Top', nameAr: 'الخبز البلدي المقرمش العلوي', subtitle: 'Stone-Oven Baked', subtitleAr: 'مخبوز بفرن حجري', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: -110, z: 50, rx: 14, ry: -6, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 720 } },
      { id: 'hw-meat', name: 'Spiced Minced Beef Filling', nameAr: 'حشوة اللحم المفروم المتبلة', subtitle: 'House Spice Blend', subtitleAr: 'لحم بقري مفروم بخلطة الكوخ', type: 'patty-beef', position: 'left', initial: { x: 0, y: 0, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 0, z: 15, rx: 0, ry: 8, rz: -2, scale: 1.03, opacity: 1, delay: 150, duration: 700 } },
      { id: 'hw-crust-bot', name: 'Toasted Baladi Base', nameAr: 'قاعدة الخبز البلدي المحمصة', subtitle: 'Golden Crunchy Base', subtitleAr: 'قاعدة مقرمشة محمصة', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 25, z: -10, rx: -6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 110, z: -30, rx: -12, ry: 4, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 720 } }
    ]
  },
  {
    id: 'el-kokh-hawawshi',
    categoryId: 'meals-sandwiches',
    name: 'El Kokh Hawawshi',
    nameAr: 'حواوشي الكوخ',
    price: 200,
    currency: 'LE',
    tagline: 'SIGNATURE FEAST',
    taglineAr: 'توقيع الكوخ الفاخر',
    description: 'Our deluxe Hawawshi loaded with double spiced meat, savory sujuk bites, and molten melted mozzarella.',
    descriptionAr: 'حواوشي الكوخ الفاخر بحشوة لحم مضاعفة مع قطع السجق الإسكندراني وجبنة موتزاريلا ذائبة.',
    status: 'ready',
    archetype: 'meal',
    layers: [
      { id: 'ekh-bread-top', name: 'Artisan Bread Top', nameAr: 'الخبز البلدي الذهبي العلوي', subtitle: 'Ghee Brushed & Baked', subtitleAr: 'مدهون بالسمن البلدي الفاخر', type: 'bun-top', position: 'right', initial: { x: 0, y: -30, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: -130, z: 60, rx: 15, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 750 } },
      { id: 'ekh-cheese', name: 'Molten Mozzarella Melt', nameAr: 'موتزاريلا ذائبة مطاطية', subtitle: 'Rich Stretchy Cheese', subtitleAr: 'طبقة غنية من الجبنة الذائبة', type: 'cheese-melt', position: 'left', initial: { x: 0, y: -12, z: 15, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -16, y: -65, z: 30, rx: 8, ry: 10, rz: -3, scale: 1.02, opacity: 1, delay: 120, duration: 700 } },
      { id: 'ekh-sujuk', name: 'Smoked Alexandrian Sujuk', nameAr: 'سجق إسكندراني مدخن', subtitle: 'Bold Spiced Bites', subtitleAr: 'قطع سجق متبلة بتوابل الكوخ', type: 'patty-beef', position: 'right', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 15, y: 5, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.03, opacity: 1, delay: 240, duration: 720 } },
      { id: 'ekh-meat', name: 'Prime Spiced Minced Beef', nameAr: 'لحم بلدي فاخر ومتبل', subtitle: 'Double Minced Patty', subtitleAr: 'لحم مفروم غني بالعصارة والنكهة', type: 'patty-beef', position: 'left', initial: { x: 0, y: 20, z: -5, rx: -3, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -12, y: 70, z: -15, rx: -8, ry: 6, rz: -2, scale: 1.04, opacity: 1, delay: 360, duration: 720 } },
      { id: 'ekh-bread-bot', name: 'Crunchy Bread Base', nameAr: 'الخبز البلدي السفلي المقرمش', subtitle: 'Crispy Oven Bottom', subtitleAr: 'قاعدة محمرة ومقرمشة', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 35, z: -15, rx: -6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 140, z: -35, rx: -14, ry: 0, rz: 0, scale: 1.03, opacity: 1, delay: 480, duration: 750 } }
    ]
  },

  /* =========================================================================
     PAGE 3: PASTA | باستا
     ========================================================================= */
  {
    id: 'pasta-bolognese',
    categoryId: 'pasta',
    name: 'Bolognese',
    nameAr: 'بولونيز',
    price: 150,
    currency: 'LE',
    tagline: 'ITALIAN CLASSIC',
    taglineAr: 'كلاسيكية إيطالية',
    description: 'Slow-simmered rich minced beef in sun-ripened tomato ragù tossed with al dente pasta and parmesan cheese.',
    descriptionAr: 'باستا إيطالية بصلصة البولونيز الكلاسيكية مع اللحم المفروم المطهو ببطء والريحان وجبنة البارميزان.',
    status: 'ready',
    archetype: 'pasta',
    layers: [
      { id: 'bg-parm', name: 'Fresh Shaved Parmesan', nameAr: 'جبنة بارميزان طازجة', subtitle: 'Aged 24-Month Reggiano', subtitleAr: 'بارميزان معتق مبشور', type: 'cheese-melt', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -110, z: 45, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'bg-sauce', name: 'Slow-Cooked Beef Ragù', nameAr: 'صوص البولونيز باللحم', subtitle: 'San Marzano Tomato Sauce', subtitleAr: 'صوص طماطم إيطالية باللحم', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -10, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -15, y: -50, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'bg-pasta', name: 'Al Dente Penne Pasta', nameAr: 'باستا بيني مسلوقة بإتقان', subtitle: 'Artisan Durum Wheat', subtitleAr: 'باستا قمح صلب إيطالية', type: 'lettuce', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 20, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'bg-bowl', name: 'Artisan Ceramic Bowl', nameAr: 'طبق التقديم الإيطالي', subtitle: 'Heated Ceramic Dish', subtitleAr: 'وعاء تقديم بورسلين دافئ', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 110, z: -30, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'pasta-arrabbiata',
    categoryId: 'pasta',
    name: 'Arrabbiata',
    nameAr: 'أرابياتا',
    price: 120,
    currency: 'LE',
    tagline: 'SPICY & ZEFTY',
    taglineAr: 'حارة ومميزة',
    description: 'Spicy garlic tomato sauce with crushed chili peppers, extra virgin olive oil and fresh Italian parsley.',
    descriptionAr: 'باستا بصلصة الطماطم الحارة مع الثوم المحمص، الفلفل الأحمر الحار، زيت الزيتون البكر والبقدونس.',
    status: 'ready',
    archetype: 'pasta',
    layers: [
      { id: 'ar-parsley', name: 'Fresh Basil & Chili Flakes', nameAr: 'ريحان وفلفل حار مجروش', subtitle: 'Spicy Herb Garnish', subtitleAr: 'لمسة بهارات حارة وعطرية', type: 'lettuce', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: -100, z: 40, rx: 12, ry: -6, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'ar-sauce', name: 'Fiery Arrabbiata Sauce', nameAr: 'صلصة الأرابياتا الحارة', subtitle: 'Garlic & Red Pepper Tomato', subtitleAr: 'طماطم متبلة بالثوم والفلفل', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -15, y: -45, z: 20, rx: 6, ry: 8, rz: -2, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'ar-pasta', name: 'Al Dente Penne', nameAr: 'باستا بيني طازجة', subtitle: 'Tender Italian Penne', subtitleAr: 'باستا إيطالية مستوردة', type: 'lettuce', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: 15, z: 10, rx: -4, ry: -6, rz: 2, scale: 1.02, opacity: 1, delay: 240, duration: 720 } },
      { id: 'ar-bowl', name: 'Warm Ceramic Bowl', nameAr: 'وعاء التقديم الخزفي', subtitle: 'Chef Platter', subtitleAr: 'طبق تقديم كلاسيكي', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'pasta-alfredo',
    categoryId: 'pasta',
    name: 'Alfredo',
    nameAr: 'ألفريدو',
    price: 185,
    currency: 'LE',
    tagline: 'RICH & CREAMY',
    taglineAr: 'كريمية وغنية',
    description: 'Velvety cream sauce made with European butter, aged parmesan cheese and sliced garlic butter mushrooms.',
    descriptionAr: 'باستا فيتوتشيني بصوص الكريمة الأبيض الغني مع الزبدة وجبنة البارميزان والمشروم الطازج.',
    status: 'ready',
    archetype: 'pasta',
    layers: [
      { id: 'al-parm', name: 'Grated Parmigiano Reggiano', nameAr: 'جبنة بارميزان إيطالية', subtitle: 'Creamy Salty Shavings', subtitleAr: 'بارميزان مبشور على الساخن', type: 'cheese-melt', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -110, z: 45, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'al-sauce', name: 'Velvet Alfredo Cream Sauce', nameAr: 'صلصة الكريمة والزبدة', subtitle: 'Heavy Cream & Garlic Butter', subtitleAr: 'كريمة طهي غنية بالزبدة والثوم', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -10, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -50, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'al-pasta', name: 'Fettuccine Ribbons', nameAr: 'باستا فيتوتشيني إيطالية', subtitle: 'Silky Egg Fettuccine', subtitleAr: 'شرائط مكرونة ناعمة ولذيذة', type: 'lettuce', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 15, y: 20, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'al-bowl', name: 'Deep Pasta Bowl', nameAr: 'طبق الباستا العميق', subtitle: 'Porcelain Vessel', subtitleAr: 'وعاء تقديم فاخر', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 110, z: -30, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'pasta-beef-stroganoff',
    categoryId: 'pasta',
    name: 'Beef Stroganoff',
    nameAr: 'بيف ستروجانوف',
    price: 190,
    currency: 'LE',
    tagline: 'PREMIUM ENTREE',
    taglineAr: 'طبق لحم فاخر',
    description: 'Sautéed tender beef fillet strips with fresh button mushrooms in creamy Dijon sour cream gravy over pasta.',
    descriptionAr: 'شرائح لحم بتلو طرية مطهوة مع المشروم الطازج بصوص الكريمة والمستردة الفاخرة فوق الباستا.',
    status: 'ready',
    archetype: 'pasta',
    layers: [
      { id: 'bs-parsley', name: 'Fresh Italian Chives', nameAr: 'أعشاب خضراء طازجة', subtitle: 'Herb Garnish', subtitleAr: 'تزيين بالأعشاب الإيطالية', type: 'lettuce', position: 'right', initial: { x: 0, y: -30, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -120, z: 50, rx: 14, ry: -6, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'bs-beef', name: 'Seared Beef Fillet Strips', nameAr: 'شرائح لحم بقري بتلو', subtitle: 'Prime Seared Tenderloin', subtitleAr: 'شرائح لحم طرية ومشوية', type: 'patty-beef', position: 'left', initial: { x: 0, y: -12, z: 15, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -16, y: -60, z: 30, rx: 8, ry: 10, rz: -3, scale: 1.04, opacity: 1, delay: 120, duration: 700 } },
      { id: 'bs-sauce', name: 'Creamy Mushroom Gravy', nameAr: 'صلصة المشروم بالكريمة', subtitle: 'Dijon & Cream Infusion', subtitleAr: 'صوص كريمة ديجون مع المشروم', type: 'sauce-drip', position: 'right', initial: { x: 0, y: 5, z: 8, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 5, z: 12, rx: -4, ry: -8, rz: 2, scale: 1.03, opacity: 1, delay: 240, duration: 720 } },
      { id: 'bs-pasta', name: 'Buttered Pasta Bed', nameAr: 'قاعدة الباستا المتبلة بالزبدة', subtitle: 'Al Dente Ribbons', subtitleAr: 'مكرونة مسلوقة بالزبدة والأعشاب', type: 'lettuce', position: 'left', initial: { x: 0, y: 22, z: -5, rx: -3, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -12, y: 70, z: -15, rx: -8, ry: 6, rz: -2, scale: 1.03, opacity: 1, delay: 360, duration: 720 } },
      { id: 'bs-bowl', name: 'Chef Serving Platter', nameAr: 'وعاء التقديم الخزفي', subtitle: 'Artisan Ceramic Vessel', subtitleAr: 'طبق تقديم كلاسيكي', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 38, z: -15, rx: -6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 135, z: -35, rx: -14, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 480, duration: 750 } }
    ]
  },

  /* =========================================================================
     PAGE 3: CROISSANT | كرواسون
     ========================================================================= */
  {
    id: 'croissant-plain',
    categoryId: 'croissant',
    name: 'Plain Croissant',
    nameAr: 'كرواسون سادة',
    price: 60,
    currency: 'LE',
    tagline: 'FRENCH BAKERY',
    taglineAr: 'مخبوزات فرنسية',
    description: 'Authentic French laminated butter pastry with crispy golden flaky crust and airy honeycomb interior.',
    descriptionAr: 'كرواسون فرنسي أصيل مخبوز بالزبدة الطبيعية بقشرة ذهبية مقرمشة وقلب هش ومورق.',
    status: 'ready',
    archetype: 'croissant',
    layers: [
      { id: 'cr-top', name: 'Golden Flaky Crust', nameAr: 'القشرة الذهبية الهشة', subtitle: 'Laminated French Pastry', subtitleAr: 'طبقات مورقة ومقرمشة', type: 'bun-top', position: 'right', initial: { x: 0, y: -15, z: 15, rx: 6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: -70, z: 35, rx: 12, ry: -6, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'cr-honeycomb', name: 'Buttery Airy Core', nameAr: 'قلب الكرواسون المورق', subtitle: 'Pure Normandy Butter Layers', subtitleAr: 'عجين مورق بالزبدة الطبيعية', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 15, z: -5, rx: -4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 70, z: -25, rx: -10, ry: 4, rz: 0, scale: 1.03, opacity: 1, delay: 200, duration: 720 } }
    ]
  },
  {
    id: 'croissant-mixed-cheese',
    categoryId: 'croissant',
    name: 'Mixed Cheese Croissant',
    nameAr: 'كرواسون مكس جبن',
    price: 100,
    currency: 'LE',
    tagline: 'SAVORY DELIGHT',
    taglineAr: 'مذاق مالح فاخر',
    description: 'Freshly baked flaky croissant stuffed with aged cheddar, creamy mozzarella and yellow gouda melt.',
    descriptionAr: 'كرواسون فرنسي طازج محشو بتشكيلة أجبان فاخرة من الشيدر والموتزاريلا والجودا الذائبة.',
    status: 'ready',
    archetype: 'croissant',
    layers: [
      { id: 'cc-top', name: 'Flaky Golden Croissant Top', nameAr: 'الطبقة العلوية المقرمشة', subtitle: 'Crispy Butter Laminate', subtitleAr: 'قشرة ذهبية مورقة ومحمصة', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: -100, z: 45, rx: 14, ry: -6, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 720 } },
      { id: 'cc-cheese', name: 'Triple Melted Cheese', nameAr: 'تشكيلة الأجبان الثلاثية الذائبة', subtitle: 'Cheddar, Mozzarella & Gouda', subtitleAr: 'شيدر، موتزاريلا وجودا هولندية', type: 'cheese-melt', position: 'left', initial: { x: 0, y: 0, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 0, z: 15, rx: 0, ry: 8, rz: -2, scale: 1.04, opacity: 1, delay: 150, duration: 700 } },
      { id: 'cc-bot', name: 'Toasted Croissant Base', nameAr: 'قاعدة الكرواسون المحمصة', subtitle: 'Buttery Laminated Bottom', subtitleAr: 'قاعدة هشة غنية بالزبدة', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 25, z: -10, rx: -6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -25, rx: -12, ry: 4, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 720 } }
    ]
  },
  {
    id: 'croissant-mixed-meats',
    categoryId: 'croissant',
    name: 'Mixed Roast Beef, Chicken & Turkey Croissant',
    nameAr: 'كرواسون مكس روز بيف تشكن تركي',
    price: 125,
    currency: 'LE',
    tagline: 'GOURMET CLUB',
    taglineAr: 'كلوب جورميه',
    description: 'Laminated croissant layered with delicate slices of roast beef, smoked chicken breast, turkey deli and melted cheese.',
    descriptionAr: 'كرواسون محشو بشرائح الروز بيف اللذيذ والدجاج المدخن والتركي مع الجبنة والخردل الفرنسي.',
    status: 'ready',
    archetype: 'croissant',
    layers: [
      { id: 'cm-top', name: 'Golden Croissant Crust', nameAr: 'طبقة الكرواسون العلوية', subtitle: 'Flaky French Pastry', subtitleAr: 'قشرة ذهبية هشة', type: 'bun-top', position: 'right', initial: { x: 0, y: -30, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: -120, z: 55, rx: 14, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 750 } },
      { id: 'cm-turkey', name: 'Smoked Turkey Deli', nameAr: 'شرائح تركي مدخن', subtitle: 'Delicate Smoked Breast', subtitleAr: 'تركي متبل ومدخن', type: 'tomato', position: 'left', initial: { x: 0, y: -12, z: 15, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -15, y: -60, z: 30, rx: 8, ry: 10, rz: -3, scale: 1.02, opacity: 1, delay: 120, duration: 700 } },
      { id: 'cm-beef', name: 'Thin Sliced Roast Beef', nameAr: 'شرائح روز بيف فاخرة', subtitle: 'Slow Roasted Beef Tenderloin', subtitleAr: 'لحم بقري روستو مقطع رفيع', type: 'patty-beef', position: 'right', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 15, y: 0, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.03, opacity: 1, delay: 240, duration: 720 } },
      { id: 'cm-cheese', name: 'Melted Cheddar Slice', nameAr: 'جبنة شيدر ذائبة', subtitle: 'Aged Sharp Cheese', subtitleAr: 'شيدر دافئ يربط المكونات', type: 'cheese-melt', position: 'left', initial: { x: 0, y: 20, z: -5, rx: -3, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -12, y: 60, z: -15, rx: -8, ry: 6, rz: -2, scale: 1.02, opacity: 1, delay: 360, duration: 720 } },
      { id: 'cm-bot', name: 'Buttery Croissant Base', nameAr: 'قاعدة الكرواسون السفلية', subtitle: 'Oven Toasted Lamination', subtitleAr: 'قاعدة هشة ومحمصة', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 35, z: -15, rx: -6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 125, z: -35, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 480, duration: 750 } }
    ]
  },

  /* =========================================================================
     PAGE 3: FRIES | بطاطس
     ========================================================================= */
  {
    id: 'french-fries',
    categoryId: 'fries',
    name: 'French Fries',
    nameAr: 'بطاطس سادة',
    price: 60,
    currency: 'LE',
    tagline: 'CRISPY & GOLDEN',
    taglineAr: 'مقرمشة وذهبية',
    description: 'Golden crispy potato fries seasoned with sea salt and rosemary spices.',
    descriptionAr: 'أصابع بطاطس مقلية ذهبية مقرمشة ومتبلة بملح البحر والتوابل الخاصة.',
    status: 'ready',
    archetype: 'fries',
    layers: [
      { id: 'ff-seasoning', name: 'Sea Salt & Herb Dust', nameAr: 'توابل ملح البحر والأعشاب', subtitle: 'Aromatic Sprinkles', subtitleAr: 'رشة بهارات مميزة', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -20, z: 15, rx: 5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 10, y: -80, z: 35, rx: 10, ry: -6, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'ff-fries', name: 'Crispy Potato Fries', nameAr: 'أصابع البطاطس الذهبية', subtitle: 'Double-Fried Russets', subtitleAr: 'بطاطس مقرمشة من الخارج طرية من الداخل', type: 'lettuce', position: 'left', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -12, y: 0, z: 15, rx: -4, ry: 6, rz: -2, scale: 1.05, opacity: 1, delay: 150, duration: 720 } },
      { id: 'ff-dish', name: 'Serving Dish', nameAr: 'وعاء التقديم الخزفي', subtitle: 'Modern Cafe Dish', subtitleAr: 'طبق تقديم أنيق', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 28, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 90, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
    ]
  },
  {
    id: 'cheddar-cheese-fries',
    categoryId: 'fries',
    name: 'Cheddar Cheese Fries',
    nameAr: 'بطاطس جبنة شيدر',
    price: 100,
    currency: 'LE',
    tagline: 'MELTY INDULGENCE',
    taglineAr: 'غارقة في الشيدر',
    description: 'Crispy golden fries smothered in warm velvety aged cheddar cheese sauce and smoked paprika.',
    descriptionAr: 'بطاطس مقرمشة مغطاة بصوص جبنة الشيدر الذهبية الكريمية الذائبة مع رشة بابريكا مدخنة.',
    status: 'ready',
    archetype: 'fries',
    layers: [
      { id: 'cf-sauce', name: 'Warm Cheddar Melt', nameAr: 'صوص جبنة شيدر ساخن', subtitle: 'Creamy Velvety Cheese Dip', subtitleAr: 'جبنة شيدر كريمية ذائبة غنية', type: 'cheese-melt', position: 'right', initial: { x: 0, y: -20, z: 20, rx: 6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: -90, z: 40, rx: 12, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'cf-fries', name: 'Crunchy Golden Fries', nameAr: 'بطاطس ذهبية مقرمشة', subtitle: 'Golden Russet Cut', subtitleAr: 'أصابع بطاطس طازجة ومقرمشة', type: 'lettuce', position: 'left', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 0, z: 15, rx: -4, ry: 6, rz: -2, scale: 1.05, opacity: 1, delay: 150, duration: 720 } },
      { id: 'cf-dish', name: 'Ceramic Serving Bowl', nameAr: 'طبق التقديم', subtitle: 'Modern Serving Bowl', subtitleAr: 'وعاء تقديم بورسلين', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
    ]
  },

  /* =========================================================================
     PAGE 4: WAFFLE & EXTRAS | قائمة الوافل والإضافات
     ========================================================================= */
  {
    id: 'waffle-belgian',
    categoryId: 'waffles',
    name: 'Belgian Waffle',
    nameAr: 'وافل بلجيكي',
    price: 65, // Base item flagged for review in PDF
    currency: 'LE',
    tagline: 'BRUSSELS STYLE',
    taglineAr: 'على الطريقة البلجيكية',
    description: 'Crisp outside and soft inside authentic Belgian waffle with deep pockets, served with powdered sugar.',
    descriptionAr: 'وافل بلجيكي أصيل مقرمش من الخارج وهش من الداخل مع سكر بودرة، أساس لجميع الإضافات.',
    status: 'needs_review',
    archetype: 'waffle',
    layers: [
      { id: 'wf-sugar', name: 'Powdered Sugar & Butter', nameAr: 'سكر بودرة وزبدة ناعمة', subtitle: 'Sweet Velvet Dusting', subtitleAr: 'رشة سكر ناعم للتزيين', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -20, z: 15, rx: 5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 10, y: -80, z: 35, rx: 10, ry: -6, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'wf-waffle', name: 'Crisp Deep-Grid Belgian Waffle', nameAr: 'الوافل البلجيكي الذهبي', subtitle: 'Caramelized Pearl Sugar Crust', subtitleAr: 'شبكة وافل مقرمشة وهشة', type: 'patty-beef', position: 'left', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 0, z: 15, rx: -4, ry: 8, rz: -2, scale: 1.04, opacity: 1, delay: 150, duration: 720 } },
      { id: 'wf-plate', name: 'Artisan Dessert Platter', nameAr: 'طبق الحلويات الفاخر', subtitle: 'Ceramic Serving Base', subtitleAr: 'طبق تقديم كلاسيكي', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
    ]
  },
  {
    id: 'waffle-nutella',
    categoryId: 'waffles',
    name: 'Waffle Nutella',
    nameAr: 'وافل نوتيلا',
    price: 45, // Listed as Extra 45 LE
    currency: 'LE',
    tagline: 'HAZELNUT DREAM',
    taglineAr: 'بشوكولاتة النوتيلا',
    description: 'Warm crisp Belgian waffle generously covered with creamy Italian Nutella hazelnut spread.',
    descriptionAr: 'وافل بلجيكي ساخن ومقرمش مغطى بصلصة شوكولاتة نوتيلا بالبندق الإيطالية الفاخرة.',
    status: 'ready',
    archetype: 'waffle',
    layers: [
      { id: 'wn-nutella', name: 'Warm Creamy Nutella', nameAr: 'شوكولاتة نوتيلا دافئة', subtitle: 'Rich Hazelnut Cocoa Spread', subtitleAr: 'صلصة نوتيلا غنية بالبندق', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -20, z: 20, rx: 6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: -90, z: 45, rx: 12, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'wn-waffle', name: 'Golden Belgian Waffle', nameAr: 'وافل بلجيكي ذهبي مقرمش', subtitle: 'Fluffy Honeycomb Grid', subtitleAr: 'شبكة وافل مكرملة ولذيذة', type: 'patty-beef', position: 'left', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 0, z: 15, rx: -4, ry: 8, rz: -2, scale: 1.04, opacity: 1, delay: 150, duration: 720 } },
      { id: 'wn-dish', name: 'Porcelain Dessert Dish', nameAr: 'طبق التقديم الخزفي', subtitle: 'Dessert Base', subtitleAr: 'طبق تقديم أنيق', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
    ]
  },
  {
    id: 'waffle-chocolate',
    categoryId: 'waffles',
    name: 'Waffle Chocolate',
    nameAr: 'وافل شوكولاتة',
    price: 35,
    currency: 'LE',
    tagline: 'SWEET COCOA',
    taglineAr: 'صلصة كاكاو بلجيكية',
    description: 'Golden waffle drizzled with smooth melted milk chocolate sauce.',
    descriptionAr: 'وافل بلجيكي مقرمش مغطى بصوص الشوكولاتة بالحليب اللذيذة.',
    status: 'ready',
    archetype: 'waffle',
    layers: [
      { id: 'wc-sauce', name: 'Melted Milk Chocolate', nameAr: 'صوص شوكولاتة بالحليب', subtitle: 'Belgian Cocoa Drizzle', subtitleAr: 'صلصة كاكاو ناعمة', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -20, z: 20, rx: 6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -85, z: 40, rx: 12, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'wc-waffle', name: 'Crisp Belgian Grid', nameAr: 'وافل بلجيكي مقرمش', subtitle: 'Golden Honeycomb Grid', subtitleAr: 'وافل هش ومحمص', type: 'patty-beef', position: 'left', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 0, z: 15, rx: -4, ry: 8, rz: -2, scale: 1.04, opacity: 1, delay: 150, duration: 720 } },
      { id: 'wc-dish', name: 'Serving Dish', nameAr: 'طبق التقديم', subtitle: 'Dessert Platter', subtitleAr: 'طبق فاخر', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
    ]
  },
  {
    id: 'waffle-white-chocolate',
    categoryId: 'waffles',
    name: 'Waffle White Chocolate',
    nameAr: 'وافل شوكولاتة بيضاء',
    price: 35,
    currency: 'LE',
    tagline: 'CREAMY VANILLA',
    taglineAr: 'شوكولاتة بيضاء كريمية',
    description: 'Crispy Belgian waffle covered in sweet melted white chocolate and vanilla notes.',
    descriptionAr: 'وافل بلجيكي ساخن مع صلصة الشوكولاتة البيضاء الغنية بنكهة الفانيليا.',
    status: 'ready',
    archetype: 'waffle',
    layers: [
      { id: 'wwc-sauce', name: 'Velvety White Chocolate', nameAr: 'شوكولاتة بيضاء مذابة', subtitle: 'Creamy Cocoa Butter', subtitleAr: 'صوص شوكولاتة بيضاء ناعم', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -20, z: 20, rx: 6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -85, z: 40, rx: 12, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'wwc-waffle', name: 'Golden Belgian Grid', nameAr: 'وافل بلجيكي ساخن', subtitle: 'Fresh Baked Grid', subtitleAr: 'وافل بلجيكي مقرمش', type: 'patty-beef', position: 'left', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 0, z: 15, rx: -4, ry: 8, rz: -2, scale: 1.04, opacity: 1, delay: 150, duration: 720 } },
      { id: 'wwc-dish', name: 'Serving Dish', nameAr: 'طبق التقديم', subtitle: 'Dessert Platter', subtitleAr: 'طبق كلاسيكي', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
    ]
  },
  {
    id: 'waffle-kit-kat',
    categoryId: 'waffles',
    name: 'Waffle Kit Kat',
    nameAr: 'وافل كيت كات',
    price: 70,
    currency: 'LE',
    tagline: 'CRUNCHY BREAK',
    taglineAr: 'قرمشة الكيت كات',
    description: 'Golden waffle smothered with chocolate sauce and crushed crispy Kit Kat wafer fingers.',
    descriptionAr: 'وافل بلجيكي مغطى بصوص الشوكولاتة وقطع أصابع ويفر كيت كات المقرمشة.',
    status: 'ready',
    archetype: 'waffle',
    layers: [
      { id: 'wk-wafer', name: 'Kit Kat Crisp Wafers', nameAr: 'أصابع ويفر كيت كات', subtitle: 'Crunchy Chocolate Fingers', subtitleAr: 'قطع كيت كات مقرمشة', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -100, z: 45, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'wk-sauce', name: 'Milk Chocolate Sauce', nameAr: 'صلصة شوكولاتة الحليب', subtitle: 'Warm Chocolate Drizzle', subtitleAr: 'صوص شوكولاتة ساخن', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'wk-waffle', name: 'Golden Belgian Grid', nameAr: 'وافل بلجيكي مقرمش', subtitle: 'Crispy Warm Waffle', subtitleAr: 'شبكة وافل بلجيكية', type: 'patty-beef', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 15, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'wk-dish', name: 'Porcelain Platter', nameAr: 'طبق التقديم الخزفي', subtitle: 'Dessert Platter', subtitleAr: 'طبق فاخر', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'waffle-oreo',
    categoryId: 'waffles',
    name: 'Waffle Oreo',
    nameAr: 'وافل أوريو',
    price: 70,
    currency: 'LE',
    tagline: 'COOKIES & CREAM',
    taglineAr: 'كوكيز وكريمة',
    description: 'Crisp waffle topped with crushed Oreo cookies, white vanilla drizzle and milk chocolate.',
    descriptionAr: 'وافل بلجيكي مغطى بقطع بسكويت الأوريو المحشو بالكريمة مع صوص الشوكولاتة والفانيليا.',
    status: 'ready',
    archetype: 'waffle',
    layers: [
      { id: 'wo-cookies', name: 'Crushed Oreo Cookies', nameAr: 'قطع بسكويت أوريو', subtitle: 'Dark Chocolate Cookie Chunks', subtitleAr: 'بسكويت كاكاو محشو بالكريمة', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -100, z: 45, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'wo-sauce', name: 'White & Dark Chocolate Drizzle', nameAr: 'صوص شوكولاتة مزدوج', subtitle: 'Vanilla & Cocoa Swirl', subtitleAr: 'مزيج شوكولاتة بيضاء وداكنة', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'wo-waffle', name: 'Golden Belgian Grid', nameAr: 'وافل بلجيكي ساخن', subtitle: 'Fresh Baked Waffle', subtitleAr: 'وافل ذهبي هش', type: 'patty-beef', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 15, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'wo-dish', name: 'Porcelain Platter', nameAr: 'طبق التقديم', subtitle: 'Dessert Base', subtitleAr: 'طبق كلاسيكي', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'waffle-mars',
    categoryId: 'waffles',
    name: 'Waffle Mars',
    nameAr: 'وافل مارس',
    price: 70,
    currency: 'LE',
    tagline: 'CARAMEL NOUGAT',
    taglineAr: 'كراميل ونوجا',
    description: 'Warm waffle covered with rich melted caramel, nougat chocolate chunks and Mars bar slices.',
    descriptionAr: 'وافل بلجيكي مغطى بقطع شوكولاتة مارس مع صوص الكراميل الساخن والشوكولاتة.',
    status: 'ready',
    archetype: 'waffle',
    layers: [
      { id: 'wm-chunks', name: 'Sliced Mars Bar Bites', nameAr: 'قطع شوكولاتة مارس', subtitle: 'Caramel Nougat Candy', subtitleAr: 'شوكولاتة نوجا وكراميل دافئة', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -100, z: 45, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'wm-sauce', name: 'Golden Salted Caramel', nameAr: 'صوص الكراميل والشوكولاتة', subtitle: 'Warm Gooey Caramel Drizzle', subtitleAr: 'كراميل ذائب يغمر الوافل', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'wm-waffle', name: 'Golden Belgian Grid', nameAr: 'وافل بلجيكي مقرمش', subtitle: 'Deep Honeycomb Waffle', subtitleAr: 'وافل بلجيكي هش', type: 'patty-beef', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 15, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'wm-dish', name: 'Porcelain Platter', nameAr: 'طبق التقديم', subtitle: 'Dessert Base', subtitleAr: 'طبق أنيق', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },

  /* =========================================================================
     PAGE 5: ICE CREAM & DESSERTS | قائمة الآيس كريم والحلو
     ========================================================================= */
  {
    id: 'chocolate-on-ice',
    categoryId: 'ice-cream-desserts',
    name: 'Chocolate on Ice',
    nameAr: 'شوكولاتة أون آيس',
    price: 130,
    currency: 'LE',
    tagline: 'PREMIUM COUPE',
    taglineAr: 'كأس الشوكولاتة الفاخر',
    description: 'Decadent chocolate gelato scoops topped with hot chocolate fudge, whipped cream and wafer roll.',
    descriptionAr: 'بولات آيس كريم شوكولاتة فاخرة مع صوص الشوكولاتة الساخن، كريمة الخفق وويفر مقرمش.',
    status: 'ready',
    archetype: 'dessert',
    layers: [
      { id: 'ci-wafer', name: 'Crisp Rolled Wafer & Cherry', nameAr: 'رول ويفر وكرز مسكر', subtitle: 'Artisan Garnish', subtitleAr: 'ويفر مقرمش ولمسة كرز', type: 'bun-top', position: 'right', initial: { x: 0, y: -30, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -120, z: 50, rx: 14, ry: -6, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'ci-cream', name: 'Chantilly Whipped Cream', nameAr: 'كريمة شانتيه مخفوقة', subtitle: 'Sweet Vanilla Cloud', subtitleAr: 'كريمة خفق ناعمة ولذيذة', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -12, z: 15, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -65, z: 30, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'ci-scoops', name: 'Rich Chocolate Gelato Scoops', nameAr: 'بولات آيس كريم شوكولاتة بلجيكية', subtitle: 'Creamy Dark & Milk Chocolate', subtitleAr: 'آيس كريم شوكولاتة كريمي غني', type: 'patty-beef', position: 'right', initial: { x: 0, y: 8, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 15, y: 10, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'ci-glass', name: 'Crystal Sundae Coupe', nameAr: 'كأس الآيس كريم الكريستالي', subtitle: 'Chilled Crystal Glass', subtitleAr: 'كأس تقديم زجاجي مثلج', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 32, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 110, z: -30, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'sundae-nuts',
    categoryId: 'ice-cream-desserts',
    name: 'Sundae Nuts',
    nameAr: 'صنداي بالمكسرات',
    price: 75,
    currency: 'LE',
    tagline: 'CRUNCHY SUNDAE',
    taglineAr: 'صنداي مكسرات كلاسيكي',
    description: 'Classic vanilla and chocolate ice cream sundae layered with toasted hazelnuts, almonds and caramel drizzle.',
    descriptionAr: 'صنداي آيس كريم فانيليا وشوكولاتة مغطى بالمكسرات المحمصة من البندق واللوز وصوص الكراميل.',
    status: 'ready',
    archetype: 'dessert',
    layers: [
      { id: 'sn-nuts', name: 'Toasted Hazelnuts & Almonds', nameAr: 'بندق ولوز محمص مقرمش', subtitle: 'Toasted Crunch Dusting', subtitleAr: 'مكسرات محمصة طازجة', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -100, z: 45, rx: 14, ry: -6, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'sn-caramel', name: 'Golden Caramel Sauce', nameAr: 'صلصة الكراميل الذهبية', subtitle: 'Warm Salted Caramel', subtitleAr: 'كراميل ذائب كريمي', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'sn-ice', name: 'Twin Ice Cream Scoops', nameAr: 'بولات آيس كريم فانيليا وشوكولاتة', subtitle: 'Artisan Gelato Duo', subtitleAr: 'آيس كريم طبيعي فاخر', type: 'patty-beef', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 15, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'sn-cup', name: 'Glass Sundae Dish', nameAr: 'كوب الصنداي الكريستالي', subtitle: 'Chilled Glassware', subtitleAr: 'كأس تقديم زجاجي أنيق', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'banana-boat',
    categoryId: 'ice-cream-desserts',
    name: 'Banana Boat',
    nameAr: 'بنانا بوت',
    price: 85,
    currency: 'LE',
    tagline: 'ALL-TIME FAVORITE',
    taglineAr: 'المفضلة دائماً',
    description: 'Split fresh ripe banana with three scoops of ice cream, whipped cream, chocolate syrup and toasted nuts.',
    descriptionAr: 'موز طازج مقسوم نصفين مع 3 بولات آيس كريم، كريمة مخفوقة، صوص شوكولاتة ومكسرات محمصة.',
    status: 'ready',
    archetype: 'dessert',
    layers: [
      { id: 'bb-garnish', name: 'Whipped Cream & Cherry', nameAr: 'كريمة خفق وكرز أحمر', subtitle: 'Topping & Nuts', subtitleAr: 'كريمة ومكسرات وكرز مسكر', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -100, z: 45, rx: 14, ry: -6, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'bb-sauce', name: 'Rich Chocolate Drizzle', nameAr: 'صوص شوكولاتة وكراميل', subtitle: 'Fudge Drizzle', subtitleAr: 'شوكولاتة سائلة تغطي الآيس كريم', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'bb-scoops', name: 'Trio of Gelato Scoops', nameAr: '3 بولات آيس كريم متنوعة', subtitle: 'Vanilla, Chocolate & Strawberry', subtitleAr: 'فانيليا، شوكولاتة، وفراولة', type: 'patty-beef', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 15, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'bb-banana', name: 'Split Fresh Banana & Dish', nameAr: 'الموز الطازج وطبق البوت', subtitle: 'Sweet Ripe Banana Halves', subtitleAr: 'موز طازج مقسوم في طبق البوت', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'brownies',
    categoryId: 'ice-cream-desserts',
    name: 'Brownies',
    nameAr: 'براونيز',
    price: 110,
    currency: 'LE',
    tagline: 'FUDGY HEAVEN',
    taglineAr: 'براونيز الشوكولاتة الغنية',
    description: 'Warm fudgy chocolate walnut brownie served with a scoop of vanilla bean gelato.',
    descriptionAr: 'كيكة براونيز دافئة وغنية بالشوكولاتة وعين الجمل تقدم مع بولة آيس كريم فانيليا.',
    status: 'ready',
    archetype: 'dessert',
    layers: [
      { id: 'br-gelato', name: 'Vanilla Bean Gelato Scoop', nameAr: 'بولة آيس كريم فانيليا طبيعية', subtitle: 'Cool Contrasting Scoop', subtitleAr: 'فانيليا مثلجة ناعمة تذوب على الكيك', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -100, z: 45, rx: 14, ry: -6, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'br-sauce', name: 'Warm Chocolate Fudge', nameAr: 'صوص شوكولاتة فادج دافئ', subtitle: 'Dark Chocolate Ganache', subtitleAr: 'جناش شوكولاتة داكنة', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'br-cake', name: 'Warm Fudgy Walnut Brownie', nameAr: 'كيك البراونيز الغني بعين الجمل', subtitle: 'Dense Cocoa Walnut Cake', subtitleAr: 'براونيز شوكولاتة طري ودافي', type: 'patty-beef', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 20, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'br-dish', name: 'Dessert Platter', nameAr: 'طبق التقديم الفاخر', subtitle: 'Serving Base', subtitleAr: 'طبق تقديم كلاسيكي', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'molten-cake',
    categoryId: 'ice-cream-desserts',
    name: 'Molten Cake',
    nameAr: 'مولتن كيك',
    price: 120,
    currency: 'LE',
    tagline: 'LAVA CORE',
    taglineAr: 'قلب الشوكولاتة البركاني',
    description: 'Warm chocolate sponge cake with an oozing liquid chocolate lava center, served with vanilla ice cream.',
    descriptionAr: 'كيكة الشوكولاتة الساخنة بقلب بركاني سائل من الشوكولاتة الغنية تقدم مع آيس كريم فانيليا.',
    status: 'ready',
    archetype: 'dessert',
    layers: [
      { id: 'mc-ice', name: 'Vanilla Ice Cream Scoop', nameAr: 'بولة آيس كريم فانيليا', subtitle: 'Melting Ice Cream Cloud', subtitleAr: 'آيس كريم فانيليا يذوب بالحرارة', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -100, z: 45, rx: 14, ry: -6, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'mc-lava', name: 'Flowing Liquid Chocolate Lava', nameAr: 'حمم الشوكولاتة السائلة الساخنة', subtitle: 'Warm Oozing Center', subtitleAr: 'شوكولاتة بلجيكية سائلة تتدفق', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'mc-cake', name: 'Baked Cocoa Sponge Crust', nameAr: 'كيكة الشوكولاتة المخبوزة الهشة', subtitle: 'Warm Outer Shell', subtitleAr: 'كيك كاكاو غني مخبوز طازج', type: 'patty-beef', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 20, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'mc-plate', name: 'Dessert Platter', nameAr: 'طبق التقديم الخزفي', subtitle: 'Ceramic Base', subtitleAr: 'طبق تقديم أنيق', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'cheesecake',
    categoryId: 'ice-cream-desserts',
    name: 'Cheesecake',
    nameAr: 'تشيز كيك',
    price: 115,
    currency: 'LE',
    tagline: 'NEW YORK STYLE',
    taglineAr: 'على الطريقة النيويوركية',
    description: 'Creamy smooth baked cream cheese filling over buttery biscuit crust, topped with strawberry coulis.',
    descriptionAr: 'تشيز كيك كريمية غنية وناعمة مخبوزة على قاعدة بسكويت بالزبدة مع صوص الفراولة الطازج.',
    status: 'ready',
    archetype: 'dessert',
    layers: [
      { id: 'ck-topping', name: 'Strawberry Fruit Coulis', nameAr: 'صوص الفراولة الطبيعي وقطع التوت', subtitle: 'Sweet Berry Glaze', subtitleAr: 'مربى فراولة طبيعية لامعة', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -90, z: 45, rx: 12, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'ck-cheese', name: 'Velvety Cream Cheese Layer', nameAr: 'طبقة الجبنة الكريمية الناعمة', subtitle: 'Philadelphia Cream Filling', subtitleAr: 'جبنة كريمية فاخرة مخفوقة بالفانيليا', type: 'cheese-melt', position: 'left', initial: { x: 0, y: -5, z: 10, rx: 3, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -30, z: 20, rx: 6, ry: 8, rz: -2, scale: 1.03, opacity: 1, delay: 150, duration: 700 } },
      { id: 'ck-crust', name: 'Buttery Graham Cracker Crust', nameAr: 'قاعدة البسكويت بالزبدة', subtitle: 'Golden Crunchy Biscuit', subtitleAr: 'بسكويت دايجستف مقرمش ومحمص بالزبدة', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 20, z: -5, rx: -4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 80, z: -20, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 720 } }
    ]
  },
  {
    id: 'molten-nutella',
    categoryId: 'ice-cream-desserts',
    name: 'Molten Nutella',
    nameAr: 'مولتن نوتيلا',
    price: 130,
    currency: 'LE',
    tagline: 'HAZELNUT LAVA',
    taglineAr: 'حمم النوتيلا الساخنة',
    description: 'Hot chocolate cake with an explosion of liquid Nutella hazelnut cream, served with ice cream.',
    descriptionAr: 'مولتن كيك محشوة بحمم نوتيلا غنية بالبندق تتدفق بسخونة مع آيس كريم الفانيليا البارد.',
    status: 'ready',
    archetype: 'dessert',
    layers: [
      { id: 'mn-ice', name: 'Vanilla Gelato Scoop', nameAr: 'بولة آيس كريم فانيليا', subtitle: 'Chilled Contrast', subtitleAr: 'آيس كريم فانيليا طبيعية', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -100, z: 45, rx: 14, ry: -6, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'mn-nutella', name: 'Liquid Nutella Core', nameAr: 'قلب النوتيلا السائل المتدفق', subtitle: 'Hot Hazelnut Cocoa Flow', subtitleAr: 'نوتيلا إيطالية أصلية ذائبة', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'mn-cake', name: 'Cocoa Sponge Shell', nameAr: 'كيكة الشوكولاتة المخبوزة', subtitle: 'Moist Chocolate Sponge', subtitleAr: 'سبونج شوكولاتة داكنة', type: 'patty-beef', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 20, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'mn-dish', name: 'Dessert Platter', nameAr: 'طبق التقديم', subtitle: 'Serving Base', subtitleAr: 'طبق فاخر', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'ice-fruit-salad',
    categoryId: 'ice-cream-desserts',
    name: 'Ice Fruit Salad',
    nameAr: 'سلطة فواكه بالآيس كريم',
    price: 110,
    currency: 'LE',
    tagline: 'FRESH & SWEET',
    taglineAr: 'انتعاش الفواكه الطبيعية',
    description: 'Assorted seasonal fresh diced fruits topped with artisanal vanilla ice cream and sweet mango puree.',
    descriptionAr: 'تشكيلة فواكه طازجة من الفراولة والموز والكيوي والتفاح مع بولة آيس كريم فانيليا وصوص مانجو.',
    status: 'ready',
    archetype: 'dessert',
    layers: [
      { id: 'fs-ice', name: 'Vanilla Gelato Scoop', nameAr: 'بولة آيس كريم فانيليا', subtitle: 'Creamy Gelato Crown', subtitleAr: 'آيس كريم فانيليا غني', type: 'bun-top', position: 'right', initial: { x: 0, y: -25, z: 20, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -100, z: 45, rx: 14, ry: -6, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'fs-sauce', name: 'Natural Mango Puree', nameAr: 'بيوريه مانجو طبيعي', subtitle: 'Sweet Fruit Glaze', subtitleAr: 'عصير مانجو مركز يغمر الفواكه', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -8, z: 12, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -45, z: 25, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'fs-fruits', name: 'Diced Fresh Seasonal Fruits', nameAr: 'قطع الفواكه الطازجة', subtitle: 'Strawberries, Kiwi, Banana, Apples', subtitleAr: 'مكعبات فراولة، كيوي، موز وتفاح', type: 'tomato', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 20, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'fs-bowl', name: 'Crystal Coupe Bowl', nameAr: 'كأس التقديم الكريستالي', subtitle: 'Chilled Glass Dish', subtitleAr: 'كأس زجاجي مثلج', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 100, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  {
    id: 'tajin-molten-nutella',
    categoryId: 'ice-cream-desserts',
    name: 'Tajin Molten Nutella',
    nameAr: 'طاجن مولتن نوتيلا',
    price: 130,
    currency: 'LE',
    tagline: 'EASTERN HOT POT',
    taglineAr: 'طاجن الكوخ الشهير',
    description: 'Sizzling traditional clay tajin filled with warm chocolate cake immersed in boiling melted Nutella.',
    descriptionAr: 'طاجن فخاري ساخن محشو بكيك الشوكولاتة الداكنة وغارق في بحر من شوكولاتة النوتيلا الذائبة.',
    status: 'ready',
    archetype: 'dessert',
    layers: [
      { id: 'tm-nutella', name: 'Boiling Nutella Lava Lake', nameAr: 'بحر النوتيلا الذائبة الساخنة', subtitle: 'Piping Hot Hazelnut Spread', subtitleAr: 'طبقة سميكة من النوتيلا المذابة', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -20, z: 20, rx: 6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -80, z: 40, rx: 12, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'tm-cake', name: 'Warm Chocolate Cake Chunks', nameAr: 'قطع كيك الشوكولاتة المشربة', subtitle: 'Cocoa Sponge Chunks', subtitleAr: 'كيك شوكولاتة مشبع بالنوتيلا', type: 'patty-beef', position: 'left', initial: { x: 0, y: 5, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: 0, z: 15, rx: -4, ry: 8, rz: -2, scale: 1.04, opacity: 1, delay: 150, duration: 720 } },
      { id: 'tm-tajin', name: 'Traditional Earthenware Tajin', nameAr: 'الطاجن الفخاري الحرفي', subtitle: 'Clay Oven Baked Vessel', subtitleAr: 'طاجن فخار يحفظ الحرارة', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 30, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
    ]
  },

  /* =========================================================================
     PAGE 6: SMOOTHIES & COLD DRINKS | قائمة السموذي والمشروبات الباردة
     ========================================================================= */
  { id: 'smoothie-lemon', categoryId: 'smoothies-cold', name: 'Lemon Smoothie', nameAr: 'سموذي ليمون', price: 69, currency: 'LE', tagline: 'ZESTY CHILL', taglineAr: 'انتعاش الليمون المثلج', description: 'Fresh squeezed lemon blended with crushed ice and cane sugar syrup for ultimate refreshing zest.', descriptionAr: 'عصير ليمون طازج مثلج ومخفوق بعناية مع الثلج المجروش وسيرب القصب.', status: 'ready', archetype: 'drink' },
  { id: 'smoothie-lemon-mint', categoryId: 'smoothies-cold', name: 'Lemon Mint Smoothie', nameAr: 'سموذي ليمون بالنعناع', price: 76, currency: 'LE', tagline: 'HERBAL CITRUS', taglineAr: 'ليمون ونعناع منعش', description: 'Classic iced lemon mint smoothie made with fresh garden mint leaves and whole lemons.', descriptionAr: 'سموذي الليمون المنعش بأوراق النعناع الأخضر الطازج والثلج المجروش.', status: 'ready', archetype: 'drink' },
  { id: 'smoothie-kiwi', categoryId: 'smoothies-cold', name: 'Kiwi Smoothie', nameAr: 'سموذي كيوي', price: 94, currency: 'LE', tagline: 'TANGY GREEN', taglineAr: 'كيوي طبيعي مثلج', description: 'Tangy fresh green kiwi fruit crushed with ice and honey nectar.', descriptionAr: 'سموذي الكيوي الطازج الغني بفيتامين سي المخفوق مع الثلج والعسل.', status: 'ready', archetype: 'drink' },
  { id: 'smoothie-peach', categoryId: 'smoothies-cold', name: 'Peach Smoothie', nameAr: 'سموذي خوخ', price: 76, currency: 'LE', tagline: 'SWEET ORCHARD', taglineAr: 'خوخ صيفي حلو', description: 'Velvety sweet summer peaches blended into an icy refreshing smoothie.', descriptionAr: 'سموذي الخوخ الصيفي المنعش بنكهته الطبيعية الحلوة وقوامه الحريري.', status: 'ready', archetype: 'drink' },
  { id: 'smoothie-mango', categoryId: 'smoothies-cold', name: 'Mango Smoothie', nameAr: 'سموذي مانجو', price: 76, currency: 'LE', tagline: 'TROPICAL GOLD', taglineAr: 'مانجو إسمعلاوي فاخر', description: 'Rich Egyptian mango pulp blended with crushed ice for a thick tropical treat.', descriptionAr: 'سموذي مانجو طبيعي ثقيل ولذيذ محضر من أجود أنواع المانجو المصرية.', status: 'ready', archetype: 'drink' },
  { id: 'smoothie-strawberry', categoryId: 'smoothies-cold', name: 'Strawberry Smoothie', nameAr: 'سموذي فراولة', price: 76, currency: 'LE', tagline: 'BERRY CRUSH', taglineAr: 'فراولة طازجة مثلجة', description: 'Sweet ripe strawberries blended with crushed ice and natural strawberry nectar.', descriptionAr: 'سموذي الفراولة الطازجة الغني بالنكهة الطبيعية واللون الأحمر الجذاب.', status: 'ready', archetype: 'drink' },
  { id: 'smoothie-mix-berry', categoryId: 'smoothies-cold', name: 'Mix Berry Smoothie', nameAr: 'سموذي ميكس بيري', price: 79, currency: 'LE', tagline: 'WILD FOREST', taglineAr: 'توت مشكل غني', description: 'Wild blueberries, blackberries and raspberries blended into a vibrant antioxidant-rich smoothie.', descriptionAr: 'مزيج منعش من التوت الأزرق والتوت البري والفراولة المخفوقة مع الثلج.', status: 'ready', archetype: 'drink' },
  { id: 'smoothie-watermelon', categoryId: 'smoothies-cold', name: 'Watermelon Smoothie', nameAr: 'سموذي بطيخ', price: 76, currency: 'LE', tagline: 'SUMMER COOLER', taglineAr: 'بطيخ مثلج صيفي', description: 'Juicy chilled watermelon chunks blended into a pure hydration refresher.', descriptionAr: 'سموذي البطيخ الطازج المثلج والخالي من البذور للانتعاش في أيام الصيف.', status: 'ready', archetype: 'drink' },
  { id: 'mineral-water', categoryId: 'smoothies-cold', name: 'Mineral Water', nameAr: 'مياه معدنية صغيرة', price: 25, currency: 'LE', tagline: 'PURE REFRESHMENT', taglineAr: 'مياه طبيعية نقية', description: 'Chilled pure natural mineral water bottle.', descriptionAr: 'زجاجة مياه معدنية طبيعية نقية ومثلجة.', status: 'ready', archetype: 'drink' },
  { id: 'soft-drinks', categoryId: 'smoothies-cold', name: 'Pepsi - 7UP - Mirinda', nameAr: 'بيبسي، سفن، ميرندا', price: 41, currency: 'LE', tagline: 'CHILLED CAN', taglineAr: 'مشروبات غازية مثلجة', description: 'Ice cold carbonated soda served with a glass of ice and lemon wedge.', descriptionAr: 'مشروب غازي مثلج يقدم مع كأس ثلج وشريحة ليمون.', status: 'ready', archetype: 'drink' },
  { id: 'birell-fayrouz', categoryId: 'smoothies-cold', name: 'Birell - Fayrouz', nameAr: 'بيريل، فيروز', price: 43, currency: 'LE', tagline: 'MALT BEVERAGE', taglineAr: 'شعير وفواكه منعشة', description: 'Crisp chilled malt beverage or flavored pineapple/apple Fayrouz.', descriptionAr: 'مشروب شعير نقي مثلج أو فيروز بنكهة الأناناس والتفاح المنعش.', status: 'ready', archetype: 'drink' },
  { id: 'red-bull', categoryId: 'smoothies-cold', name: 'Red Bull', nameAr: 'ريد بول', price: 76, currency: 'LE', tagline: 'ENERGY BOOST', taglineAr: 'طاقة وحيوية', description: 'Original Austrian energy drink can served with ice and lemon.', descriptionAr: 'مشروب الطاقة الأصلي يقدم مثلجاً في كأس كريستال مع ليمون.', status: 'ready', archetype: 'drink' },

  /* =========================================================================
     PAGES 7 & 8: SIGNATURE DRINKS | مشروبات مميزة
     ========================================================================= */
  {
    id: 'pina-colada',
    categoryId: 'signature-drinks',
    name: 'Pina Colada',
    nameAr: 'بينا كولادا',
    price: 95,
    currency: 'LE',
    tagline: 'TROPICAL BLISS',
    taglineAr: 'سحر الكاريبي الاستوائي',
    description: 'Velvety blend of fresh pineapple juice, rich coconut cream, crushed ice and maraschino cherry garnish.',
    descriptionAr: 'مزيج كاريبي فاخر من عصير الأناناس الطبيعي مع كريمة جوز الهند والثلج المجروش ولمسة كرز مسكر.',
    status: 'ready',
    archetype: 'drink',
    layers: [
      { id: 'pc-garnish', name: 'Pineapple Slice & Cherry', nameAr: 'شريحة أناناس وكرز مسكر', subtitle: 'Tropical Garnish', subtitleAr: 'تزيين استوائي أنيق', type: 'bun-top', position: 'right', initial: { x: 0, y: -30, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -120, z: 50, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 700 } },
      { id: 'pc-cream', name: 'Sweet Coconut Cream Foam', nameAr: 'رغوة كريمة جوز الهند الناعمة', subtitle: 'Rich Creamy Crown', subtitleAr: 'كريمة جوز هند غنية وكثيفة', type: 'sauce-drip', position: 'left', initial: { x: 0, y: -12, z: 15, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -65, z: 30, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'pc-juice', name: 'Chilled Pineapple Nectar', nameAr: 'عصير أناناس طبيعي مع ثلج', subtitle: 'Pure Golden Tropical Juice', subtitleAr: 'عصير أناناس مصفى مع ثلج مجروش', type: 'cheese-melt', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 15, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 240, duration: 720 } },
      { id: 'pc-glass', name: 'Hurricane Crystal Glass', nameAr: 'كأس الهوريكان الكريستالي', subtitle: 'Curved Cocktail Glass', subtitleAr: 'كأس كوكتيل كلاسيكي مثلج', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 32, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 110, z: -30, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  { id: 'el-kokh-yogurt', categoryId: 'signature-drinks', name: 'El Kokh Yogurt', nameAr: 'زبادي الكوخ', price: 85, currency: 'LE', tagline: 'HOUSE RECIPE', taglineAr: 'خلطة الكوخ الخاصة', description: 'Creamy artisanal yogurt smoothie blended with wildflower honey, fresh berries and crushed pistachios.', descriptionAr: 'مشروب الزبادي المنعش على طريقة الكوخ مع عسل النحل النقي والمكسرات ولمسة فواكه طازجة.', status: 'ready', archetype: 'drink' },
  { id: 'hawaii', categoryId: 'signature-drinks', name: 'Hawaii', nameAr: 'هاواي', price: 80, currency: 'LE', tagline: 'ISLAND BREEZE', taglineAr: 'نسيم الجزر الاستوائية', description: 'Exotic blend of passion fruit, orange, pineapple and sweet strawberry syrup over crushed ice.', descriptionAr: 'كوكتيل هاواي الاستوائي بمزيج الباشن فروت، البرتقال، الأناناس والفراولة المثلجة.', status: 'ready', archetype: 'drink' },
  { id: 'blue-hawaii', categoryId: 'signature-drinks', name: 'Blue Hawaii', nameAr: 'بلو هاواي', price: 60, currency: 'LE', tagline: 'AZURE OCEAN', taglineAr: 'أزرق المحيط المنعش', description: 'Vibrant Blue Curaçao flavor layered with pineapple juice, sweet soda and fresh lime wedge.', descriptionAr: 'مشروب المحيط الأزرق المنعش بنكهة الكوراساو مع عصير الأناناس والليمون والصودا.', status: 'ready', archetype: 'drink' },
  { id: 'blue-red', categoryId: 'signature-drinks', name: 'Blue Red', nameAr: 'بلو ريد', price: 100, currency: 'LE', tagline: 'SUNSET GRADIENT', taglineAr: 'تدرج الغروب المذهل', description: 'Stunning layered cocktail featuring deep blue curaçao, sweet pomegranate and cranberry red nectar.', descriptionAr: 'كوكتيل مميز بطبقات ثنائية ساحرة من الأزرق والأحمر بنكهة الرمان والتوت والليمون.', status: 'ready', archetype: 'drink' },
  { id: 'mojito', categoryId: 'signature-drinks', name: 'Mojito', nameAr: 'موخيتو', price: 90, currency: 'LE', tagline: 'CUBAN CRISP', taglineAr: 'موخيتو النعناع الأصلي', description: 'Freshly muddled lime wedges, aromatic spearmint leaves, pure cane sugar and sparkling soda over crushed ice.', descriptionAr: 'موخيتو كلاسيكي منعش بالليمون والنعناع الطازج المهروس مع السكر البني والصودا والثلج المجروش.', status: 'ready', archetype: 'drink' },

  /* =========================================================================
     PAGE 9: COCKTAILS | الكوكتيلات
     ========================================================================= */
  { id: 'cocktail-florida', categoryId: 'cocktails', name: 'Florida', nameAr: 'فلوريدا', price: 87, currency: 'LE', tagline: 'CITRUS SUNSET', taglineAr: 'غروب فلوريدا المنعش', description: 'Bright tropical mix of fresh orange juice, sweet strawberry puree and peach syrup.', descriptionAr: 'كوكتيل فلوريدا الكلاسيكي بمزيج عصير البرتقال الطازج مع الفراولة والخوخ والثلج.', status: 'ready', archetype: 'drink' },
  { id: 'cocktail-sunshine', categoryId: 'cocktails', name: 'Sunshine', nameAr: 'صن شاين', price: 81, currency: 'LE', tagline: 'GOLDEN RAY', taglineAr: 'إشراقة الشمس الذهبية', description: 'A sparkling sunrise blend of fresh orange, mango, lemon zest and sweet grenadine.', descriptionAr: 'كوكتيل صن شاين المنعش بطبقات البرتقال والمانجو مع الليمون والجرينادين الأحمر.', status: 'ready', archetype: 'drink' },
  { id: 'el-kokh-cocktail', categoryId: 'cocktails', name: 'El Kokh Cocktail', nameAr: 'كوكتيل الكوخ', price: 94, currency: 'LE', tagline: 'MASTER MIX', taglineAr: 'خلطة الكوخ السرية', description: 'Our signature house cocktail blending seasonal fresh fruits, rich cream, honey and roasted nuts.', descriptionAr: 'كوكتيل الكوخ الفاخر الغني بقطع الفواكه الطبيعية، الكريمة، عسل النحل والمكسرات الفاخرة.', status: 'ready', archetype: 'drink' },
  { id: 'el-kokh-love', categoryId: 'cocktails', name: 'El Kokh Love', nameAr: 'لاف الكوخ', price: 80, currency: 'LE', tagline: 'SWEET ROMANCE', taglineAr: 'رومانسية التوت والفراولة', description: 'Smooth romantic concoction of strawberries, sweet cream, white chocolate and fresh fruit chunks.', descriptionAr: 'مشروب لاف الكوخ المميز بالفراولة والكريمة والشوكولاتة البيضاء المنعشة.', status: 'ready', archetype: 'drink' },
  { id: 'coco-choco', categoryId: 'cocktails', name: 'Coco Choco', nameAr: 'كوكو شوكو', price: 80, currency: 'LE', tagline: 'CHOCO COCONUT', taglineAr: 'شوكولاتة بجوز الهند', description: 'Rich chocolate shake infused with shredded coconut, milk cream and dark chocolate drizzle.', descriptionAr: 'ميلك شيك الشوكولاتة الغني بجوز الهند والكريمة وصوص الشوكولاتة الداكنة.', status: 'ready', archetype: 'drink' },
  { id: 'cocktail-tropical', categoryId: 'cocktails', name: 'Tropical', nameAr: 'تروبيكا', price: 84, currency: 'LE', tagline: 'EXOTIC TROPICS', taglineAr: 'فواكه استوائية نادرة', description: 'Mango, guava, pineapple and kiwi puree shaken with crushed ice for an exotic fruit explosion.', descriptionAr: 'مزيج استوائي رائع يجمع بين المانجو والجوافة والأناناس والكيوي المثلج.', status: 'ready', archetype: 'drink' },
  { id: 'mojito-red-bull', categoryId: 'cocktails', name: 'Mojito Red Bull', nameAr: 'موخيتو ريدبول', price: 110, currency: 'LE', tagline: 'ENERGY INFUSION', taglineAr: 'موخيتو الطاقة والانتعاش', description: 'Classic muddled mint and lime mojito charged with ice-cold Red Bull energy drink.', descriptionAr: 'موخيتو النعناع والليمون الطازج مع كان ريد بول النمساوي المثلج لطاقة وانتعاش فوري.', status: 'ready', archetype: 'drink' },

  /* =========================================================================
     PAGE 10: FRESH JUICES | العصائر الطازجة
     ========================================================================= */
  { id: 'juice-orange', categoryId: 'fresh-juices', name: 'Fresh Orange Juice', nameAr: 'عصير برتقال فريش', price: 75, currency: 'LE', tagline: '100% PURE', taglineAr: 'طبيعي معصور طازج', description: 'Pure freshly squeezed sweet Egyptian oranges packed with natural vitamin C.', descriptionAr: 'برتقال طبيعي معصور طازج بدون أي إضافات صناعية أو سكر مضاف.', status: 'ready', archetype: 'drink' },
  { id: 'juice-mango', categoryId: 'fresh-juices', name: 'Fresh Mango Juice', nameAr: 'عصير مانجو فريش', price: 75, currency: 'LE', tagline: 'GOLDEN PULP', taglineAr: 'مانجو طبيعي مركز', description: 'Thick and rich natural mango juice made from select ripe mangoes.', descriptionAr: 'عصير مانجو طبيعي ثقيل ولذيذ محضر من أجود الثمار الناضجة.', status: 'ready', archetype: 'drink' },
  { id: 'juice-strawberry', categoryId: 'fresh-juices', name: 'Fresh Strawberry Juice', nameAr: 'عصير فراولة فريش', price: 70, currency: 'LE', tagline: 'SWEET BERRY', taglineAr: 'فراولة طازجة ولذيذة', description: 'Freshly blended hand-picked strawberries with natural sweetness.', descriptionAr: 'عصير فراولة طازجة ولذيذة محضرة يومياً بأعلى معايير الجودة.', status: 'ready', archetype: 'drink' },
  { id: 'juice-guava', categoryId: 'fresh-juices', name: 'Fresh Guava Juice', nameAr: 'عصير جوافة فريش', price: 70, currency: 'LE', tagline: 'AROMATIC NECTAR', taglineAr: 'جوافة طبيعية نقية', description: 'Creamy natural Egyptian guava nectar, silky smooth and fragrant.', descriptionAr: 'عصير جوافة بيضاء طبيعية غنية بالعصارة والرائحة العطرية الزكية.', status: 'ready', archetype: 'drink' },
  { id: 'juice-lemon', categoryId: 'fresh-juices', name: 'Fresh Lemon Juice', nameAr: 'عصير ليمون فريش', price: 55, currency: 'LE', tagline: 'CRISP CITRUS', taglineAr: 'ليمون صافي منعش', description: 'Pure fresh squeezed lemon with light cane sugar syrup over ice.', descriptionAr: 'عصير ليمون بلدي طازج ومثلج ينعش الحواس.', status: 'ready', archetype: 'drink' },
  { id: 'juice-lemon-mint', categoryId: 'fresh-juices', name: 'Fresh Lemon Mint Juice', nameAr: 'عصير ليمون بالنعناع', price: 65, currency: 'LE', tagline: 'SIGNATURE REFRESH', taglineAr: 'ليمون ونعناع فريش', description: 'Fresh lemon juice blended with green mint leaves and ice cubes.', descriptionAr: 'عصير ليمون طازج مخفوق مع النعناع الأخضر المنعش.', status: 'ready', archetype: 'drink' },
  { id: 'juice-guava-mint', categoryId: 'fresh-juices', name: 'Fresh Guava Mint Juice', nameAr: 'عصير جوافة بالنعناع', price: 75, currency: 'LE', tagline: 'TROPICAL HERB', taglineAr: 'جوافة بالنعناع المنعش', description: 'Rich guava nectar blended with refreshing fresh mint sprigs.', descriptionAr: 'مزيج مبتكر من عصير الجوافة الطبيعي والنعناع الأخضر المنعش.', status: 'ready', archetype: 'drink' },
  { id: 'juice-banana-milk', categoryId: 'fresh-juices', name: 'Banana with Milk', nameAr: 'موز باللبن', price: 75, currency: 'LE', tagline: 'CREAMY CLASSIC', taglineAr: 'موز بالحليب الطبيعي', description: 'Sweet fresh bananas blended with full cream milk and pure honey.', descriptionAr: 'موز طازج مخفوق مع الحليب الطبيعي كامل الدسم وعسل النحل.', status: 'ready', archetype: 'drink' },
  { id: 'juice-watermelon', categoryId: 'fresh-juices', name: 'Fresh Watermelon Juice', nameAr: 'عصير بطيخ فريش', price: 75, currency: 'LE', tagline: 'PURE HYDRATION', taglineAr: 'بطيخ طبيعي مثلج', description: 'Freshly pressed cold sweet watermelon juice.', descriptionAr: 'عصير بطيخ أحمر طبيعي مثلج وخالٍ من الإضافات.', status: 'ready', archetype: 'drink' },
  { id: 'juice-kiwi', categoryId: 'fresh-juices', name: 'Fresh Kiwi Juice', nameAr: 'عصير كيوي فريش', price: 80, currency: 'LE', tagline: 'VIBRANT TANG', taglineAr: 'كيوي طبيعي طازج', description: 'Fresh green kiwi juice full of flavor and vitamins.', descriptionAr: 'عصير كيوي طبيعي طازج يتميز بطعمه الحامض الحلو المنعش.', status: 'ready', archetype: 'drink' },
  { id: 'juice-avocado', categoryId: 'fresh-juices', name: 'Fresh Avocado with Honey & Nuts', nameAr: 'عصير أفوكادو بالعسل والمكسرات', price: 110, currency: 'LE', tagline: 'ROYAL NOURISH', taglineAr: 'أفوكادو ملكي بالعسل والمكسرات', description: 'Rich creamy ripe avocado blended with milk, pure bee honey and topped with roasted nuts.', descriptionAr: 'عصير أفوكادو كريمي فاخر مخفوق مع الحليب وعسل النحل الطبيعي ومغطى بالمكسرات الفاخرة.', status: 'ready', archetype: 'drink' },

  /* =========================================================================
     PAGE 11: HOT BEVERAGES | المشروبات الساخنة
     ========================================================================= */
  {
    id: 'turkish-coffee',
    categoryId: 'hot-beverages',
    name: 'Turkish Coffee',
    nameAr: 'قهوة تركية',
    price: 46,
    currency: 'LE',
    tagline: 'AUTHENTIC CEZVE',
    taglineAr: 'قهوة تركية على الرمالة',
    description: 'Traditional slow-brewed Turkish coffee with thick velvety hazelnut crema, prepared in an engraved brass cezve.',
    descriptionAr: 'قهوة تركية أصيلة مطهوة ببطء على الرمالة برغوة كثيفة ووش ذهبي غني بالنكهة.',
    status: 'ready',
    archetype: 'coffee',
    layers: [
      { id: 'tc-crema', name: 'Golden Crema Foam (Wesh)', nameAr: 'وش القهوة الذهبي الكثيف', subtitle: 'Velvety Roasted Foam', subtitleAr: 'رغوة ناعمة غنية بالزيوت العطرية', type: 'sauce-drip', position: 'right', initial: { x: 0, y: -20, z: 20, rx: 6, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 12, y: -90, z: 45, rx: 12, ry: -8, rz: 2, scale: 1.04, opacity: 1, delay: 0, duration: 700 } },
      { id: 'tc-coffee', name: 'Slow-Brewed Turkish Coffee', nameAr: 'مستخلص البن التركي الفاخر', subtitle: 'Fine Ground Arabica & Cardamom', subtitleAr: 'بن أرابيكا مطحون ناعم مع لمسة حبهان', type: 'patty-beef', position: 'left', initial: { x: 0, y: 0, z: 10, rx: 2, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -30, z: 20, rx: 4, ry: 8, rz: -2, scale: 1.03, opacity: 1, delay: 150, duration: 700 } },
      { id: 'tc-cup', name: 'Engraved Brass Cezve & Cup', nameAr: 'الفنجان والكنكة النحاسية', subtitle: 'Artisan Porcelain & Saucer', subtitleAr: 'فنجان بورسلين وطبق تقديم أنيق', type: 'bun-bottom', position: 'right', initial: { x: 0, y: 25, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 95, z: -25, rx: -10, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 300, duration: 750 } }
    ]
  },
  { id: 'double-turkish-coffee', categoryId: 'hot-beverages', name: 'Double Turkish Coffee', nameAr: 'قهوة تركية دبل', price: 56, currency: 'LE', tagline: 'DOUBLE SHOT', taglineAr: 'دبل لتركيز مضاعف', description: 'Double portion of slow-brewed Turkish coffee with thick rich foam.', descriptionAr: 'قهوة تركية دبل شوت بتركيز مضاعف ورغوة كريمية لعشاق القهوة الأصيلة.', status: 'ready', archetype: 'coffee' },
  { id: 'french-coffee', categoryId: 'hot-beverages', name: 'French Coffee', nameAr: 'قهوة فرنسية', price: 54, currency: 'LE', tagline: 'SILKY MILK BREW', taglineAr: 'قهوة باللبن الفرنسي', description: 'Aromatic coffee brewed gently with fresh steamed milk and vanilla hints.', descriptionAr: 'قهوة فرنسية ناعمة مطهوة بالحليب الطازج مع لمسة فانيليا عطرية.', status: 'ready', archetype: 'coffee' },
  { id: 'hazelnut-coffee', categoryId: 'hot-beverages', name: 'Hazelnut Coffee', nameAr: 'قهوة بندق', price: 66, currency: 'LE', tagline: 'NUTTY ROAST', taglineAr: 'قهوة بنكهة البندق', description: 'Turkish coffee infused with roasted European hazelnut essence.', descriptionAr: 'قهوة تركية فاخرة ممزوجة بمستخلص البندق المحمص ذي الرائحة الذكية.', status: 'ready', archetype: 'coffee' },
  { id: 'tea', categoryId: 'hot-beverages', name: 'Tea', nameAr: 'شاي', price: 38, currency: 'LE', tagline: 'BLACK & HERBAL', taglineAr: 'شاي أسود مع النعناع', description: 'Classic hot Ceylon black tea served in crystal glass with fresh mint sprigs.', descriptionAr: 'شاي سيلاني فاخر يقدم في كوب زجاجي كلاسيكي مع النعناع الأخضر.', status: 'ready', archetype: 'drink' },
  { id: 'hot-cider', categoryId: 'hot-beverages', name: 'Hot Cider', nameAr: 'عصير تفاح ساخن بالقرفة', price: 54, currency: 'LE', tagline: 'CINNAMON WARMTH', taglineAr: 'تفاح بالقرفة الساخن', description: 'Spiced hot apple cider simmered with natural cinnamon bark and cloves.', descriptionAr: 'عصير تفاح طبيعي ساخن مطهو على نار هادئة مع أعواد القرفة والقرنفل.', status: 'ready', archetype: 'drink' },
  { id: 'hot-chocolate', categoryId: 'hot-beverages', name: 'Hot Chocolate', nameAr: 'شوكولاتة ساخنة', price: 69, currency: 'LE', tagline: 'VELVET COCOA', taglineAr: 'كاكاو ساخن غني', description: 'Thick velvety Belgian hot chocolate made with steamed whole milk.', descriptionAr: 'شوكولاتة بلجيكية ساخنة كثيفة ومصنوعة بالحليب الطازج مع رغوة كاكاو.', status: 'ready', archetype: 'drink' },
  { id: 'hot-nutella', categoryId: 'hot-beverages', name: 'Hot Nutella', nameAr: 'نوتيلا ساخنة', price: 74, currency: 'LE', tagline: 'NUTTY STEAM', taglineAr: 'مشروب نوتيلا ساخن', description: 'Steamed milk melted with rich Italian Nutella and hazelnut froth.', descriptionAr: 'مشروب النوتيلا الإيطالية الساخن والممزوج بالحليب الطازج مع رغوة البندق.', status: 'ready', archetype: 'drink' },
  { id: 'hot-oreo', categoryId: 'hot-beverages', name: 'Hot Oreo', nameAr: 'أوريو ساخن', price: 74, currency: 'LE', tagline: 'CRUSHED COOKIE', taglineAr: 'أوريو بالحليب الساخن', description: 'Steamed milk cocoa infused with crushed Oreo cookie crumbs.', descriptionAr: 'مشروب الأوريو الساخن مع الحليب ورغوة الكريمة وبسكويت الأوريو المفتت.', status: 'ready', archetype: 'drink' },
  { id: 'sahlab-nuts', categoryId: 'hot-beverages', name: 'Sahlab with Nuts', nameAr: 'سحلب بالمكسرات', price: 74, currency: 'LE', tagline: 'ORIENTAL WINTER', taglineAr: 'سحلب شتوي بالمكسرات', description: 'Thick traditional Middle Eastern warm milk pudding topped with toasted nuts, coconut and cinnamon.', descriptionAr: 'سحلب بلدي دافئ وكثيف محلى بعناية ومزين بالمكسرات المحمصة والزبيب وجوز الهند والقرفة.', status: 'ready', archetype: 'dessert' },
  { id: 'sahlab-fruit', categoryId: 'hot-beverages', name: 'Sahlab with Fruit', nameAr: 'سحلب فواكه', price: 74, currency: 'LE', tagline: 'FRUITY WARMTH', taglineAr: 'سحلب قطع الفواكه', description: 'Warm creamy Sahlab topped with fresh seasonal diced fruits and honey.', descriptionAr: 'سحلب غني وكريمي مغطى بقطع الفواكه الطازجة ولمسة عسل نحل.', status: 'ready', archetype: 'dessert' },
  { id: 'hummus-al-sham', categoryId: 'hot-beverages', name: 'Hummus Al-Sham', nameAr: 'حمص الشام (حلبسة)', price: 64, currency: 'LE', tagline: 'TRADITIONAL SPICE', taglineAr: 'حلبسة الكوخ الساخنة', description: 'Classic spiced chickpea broth simmered with tomato, garlic, cumin, lemon juice and chili.', descriptionAr: 'حمص الشام المصري الأصيل بمرقة الطماطم الحارة والكمون والثوم والليمون والشطة.', status: 'ready', archetype: 'meal' },
  { id: 'spanish-latte-hot', categoryId: 'hot-beverages', name: 'Spanish Latte', nameAr: 'سبانش لاتيه ساخن', price: 79, currency: 'LE', tagline: 'SWEET CONDENSED', taglineAr: 'لاتيه بالحليب المكثف', description: 'Rich espresso poured over silky steamed milk and sweetened condensed milk.', descriptionAr: 'سبانش لاتيه ساخن يجمع بين إسبريسو الكوخ الغني والحليب المبخر والحليب المكثف المحلى.', status: 'ready', archetype: 'coffee' },
  { id: 'pistachio-latte-hot', categoryId: 'hot-beverages', name: 'Pistachio Latte', nameAr: 'بيستاشيو لاتيه ساخن', price: 79, currency: 'LE', tagline: 'NUTTY LUXURY', taglineAr: 'لاتيه الفستق الفاخر', description: 'Espresso latte blended with pure Mediterranean pistachio paste and crushed nuts.', descriptionAr: 'لاتيه ساخن ممزوج بصوص الفستق الحلبي الطبيعي مع رغوة الحليب ورشة فستق.', status: 'ready', archetype: 'coffee' },

  /* =========================================================================
     PAGE 12: HOT COFFEE & MILK COFFEE | قهوة ساخنة وبالحليب
     ========================================================================= */
  { id: 'espresso', categoryId: 'hot-coffee', name: 'Espresso', nameAr: 'إسبريسو سنجل', price: 49, currency: 'LE', tagline: 'PURE CONCENTRATE', taglineAr: 'شوت إسبريسو نقي', description: 'Single shot of extracted 100% Arabica beans with dense hazelnut crema.', descriptionAr: 'شوت إسبريسو نقي مستخلص من أجود حبوب الأرابيكا برغوة ذهبية متماسكة.', status: 'ready', archetype: 'coffee' },
  { id: 'double-espresso', categoryId: 'hot-coffee', name: 'Double Espresso', nameAr: 'دبل إسبريسو', price: 59, currency: 'LE', tagline: 'DOUBLE DOSE', taglineAr: 'دبل شوت مركز', description: 'Double shot of rich full-bodied espresso.', descriptionAr: 'شوت مزدوج من الإسبريسو المركز لعشاق القوة والنكهة المركزة.', status: 'ready', archetype: 'coffee' },
  { id: 'cortado', categoryId: 'hot-coffee', name: 'Cortado', nameAr: 'كورتادو', price: 64, currency: 'LE', tagline: 'EQUAL BALANCE', taglineAr: 'توازن الإسبريسو والحليب', description: 'Equal parts rich espresso and warm silky textured milk served in a glass.', descriptionAr: 'كورتادو متوازن بنسب متساوية من الإسبريسو الغني والحليب المبخر الحريري.', status: 'ready', archetype: 'coffee' },
  { id: 'macchiato', categoryId: 'hot-coffee', name: 'Macchiato', nameAr: 'ماكياتو', price: 59, currency: 'LE', tagline: 'STAINED ESPRESSO', taglineAr: 'إسبريسو بنقطة حليب', description: 'Espresso marked with a dollop of dense foamed milk.', descriptionAr: 'شوت إسبريسو مركز يعلوه لمسة خفيفة من رغوة الحليب الساخن.', status: 'ready', archetype: 'coffee' },
  { id: 'americano-coffee', categoryId: 'hot-coffee', name: 'Americano Coffee', nameAr: 'القهوة الأمريكية', price: 69, currency: 'LE', tagline: 'CLEAN ROAST', taglineAr: 'أمريكانو كلاسيك', description: 'Espresso shots diluted with hot water for a smooth, aromatic black coffee.', descriptionAr: 'قهوة أمريكية كلاسيكية محضرة من شوتات الإسبريسو مع الماء الساخن.', status: 'ready', archetype: 'coffee' },
  { id: 'nescafe', categoryId: 'hot-coffee', name: 'Nescafé', nameAr: 'نسكافيه كلاسيك', price: 59, currency: 'LE', tagline: 'INSTANT COMFORT', taglineAr: 'نسكافيه بالحليب', description: 'Classic instant roast coffee with warm foamed milk.', descriptionAr: 'كوب نسكافيه كلاسيكي محضر بالحليب الساخن ورغوة خفيفة.', status: 'ready', archetype: 'coffee' },
  { id: 'cappuccino', categoryId: 'hot-coffee', name: 'Cappuccino', nameAr: 'كابتشينو', price: 74, currency: 'LE', tagline: 'VELVET FOAM', taglineAr: 'رغوة الكابتشينو الإيطالية', description: 'Equal parts espresso, steamed milk and thick micro-foam dusted with cocoa.', descriptionAr: 'كابتشينو إيطالي متقن بنسب متساوية من الإسبريسو والحليب ورغوة كثيفة مع رشة كاكاو.', status: 'ready', archetype: 'coffee' },
  { id: 'flat-white', categoryId: 'hot-coffee', name: 'Flat White', nameAr: 'فلات وايت', price: 69, currency: 'LE', tagline: 'MICROFOAM PERFECTION', taglineAr: 'فلات وايت أسترالي', description: 'Double ristretto espresso folded with velvety textured microfoam milk.', descriptionAr: 'فلات وايت ناعم بدبل ريستريتو وحليب مبخر فائق النعومة.', status: 'ready', archetype: 'coffee' },
  { id: 'latte', categoryId: 'hot-coffee', name: 'Caffè Latte', nameAr: 'كافيه لاتيه', price: 64, currency: 'LE', tagline: 'MILK HARMONY', taglineAr: 'لاتيه ناعم', description: 'Espresso combined with generous steamed milk and delicate foam layer.', descriptionAr: 'إسبريسو ناعم مع الحليب المبخر وطبقة رقيقة من الفوم.', status: 'ready', archetype: 'coffee' },
  { id: 'dark-mocha', categoryId: 'hot-coffee', name: 'Dark Mocha', nameAr: 'دارك موكا', price: 79, currency: 'LE', tagline: 'DARK COCOA ROAST', taglineAr: 'موكا بالشوكولاتة الداكنة', description: 'Espresso mixed with dark Belgian chocolate syrup and steamed milk.', descriptionAr: 'موكا ساخنة تجمع بين الإسبريسو الغني والشوكولاتة الداكنة والحليب المخفوق.', status: 'ready', archetype: 'coffee' },
  { id: 'white-mocha', categoryId: 'hot-coffee', name: 'White Mocha', nameAr: 'وايت موكا', price: 79, currency: 'LE', tagline: 'WHITE CHOCOLATE', taglineAr: 'موكا بالشوكولاتة البيضاء', description: 'Espresso with sweet white chocolate sauce and velvety steamed milk.', descriptionAr: 'وايت موكا ناعمة بالشوكولاتة البيضاء الذائبة مع الإسبريسو والحليب.', status: 'ready', archetype: 'coffee' },
  { id: 'special-el-kokh-coffee', categoryId: 'hot-coffee', name: 'Special El Kokh Coffee', nameAr: 'إسبيشيال الكوخ', price: 74, currency: 'LE', tagline: 'SECRET BLEND', taglineAr: 'قهوة الكوخ الخاصة', description: 'Our master barista blend of espresso, condensed milk, caramel and roasted hazelnut.', descriptionAr: 'خلطة قهوة الكوخ السرية بالإسبريسو والحليب المكثف والكراميل والبندق المحمص.', status: 'ready', archetype: 'coffee' },
  { id: 'karak-tea', categoryId: 'hot-coffee', name: 'Karak Tea', nameAr: 'شاي كرك', price: 54, currency: 'LE', tagline: 'AROMATIC SPICE', taglineAr: 'شاي كرك بالهيل والزعفران', description: 'Slow-simmered strong black tea with evaporated milk, cardamom and saffron.', descriptionAr: 'شاي كرك أصيل مطهو بالحليب المبخر والهيل والزعفران لنكهة غنية ودافئة.', status: 'ready', archetype: 'coffee' },

  /* =========================================================================
     PAGE 2: SHISHA | الشيشة
     ========================================================================= */
  {
    id: 'fruit-hookah',
    categoryId: 'shisha',
    name: 'Fruit Hookah',
    nameAr: 'شيشة فواكه',
    price: 115.99,
    currency: 'LE',
    tagline: 'PREMIUM FLAVORS',
    taglineAr: 'نكهات فواكه فاخرة',
    description: 'Artisanal Egyptian hookah served with natural fruit flavors (Apple, Grape Mint, Watermelon, Peach) and coconut coals.',
    descriptionAr: 'شيشة فاخرة بأجود أنواع معسل الفواكه الطبيعي (تفاحتين، عنب بالنعناع، بطيخ، خوخ) مع فحم جوز الهند الطبيعي.',
    status: 'ready',
    archetype: 'shisha',
    layers: [
      { id: 'sh-coals', name: 'Natural Coconut Charcoal', nameAr: 'فحم جوز الهند الطبيعي المشتعل', subtitle: 'Clean Smokeless Heat', subtitleAr: 'فحم نقي بطيء الاشتعال', type: 'bun-top', position: 'right', initial: { x: 0, y: -35, z: 25, rx: 8, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: -130, z: 55, rx: 14, ry: -8, rz: 2, scale: 1.05, opacity: 1, delay: 0, duration: 750 } },
      { id: 'sh-bowl', name: 'Glazed Clay Phunnel Bowl', nameAr: 'حجر الفخار المزجج بالمعسل', subtitle: 'Natural Molasses Infusion', subtitleAr: 'حجر فخار محشو بمعسل الفواكه الفاخر', type: 'patty-beef', position: 'left', initial: { x: 0, y: -15, z: 15, rx: 4, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: -14, y: -65, z: 30, rx: 8, ry: 10, rz: -3, scale: 1.03, opacity: 1, delay: 120, duration: 700 } },
      { id: 'sh-stem', name: 'Carved Brass Stem & Tray', nameAr: 'قلب الشيشة النحاسي وصينية الرماد', subtitle: 'Engraved Stainless Downstem', subtitleAr: 'عمود نحاسي محفور بحرفية عالية', type: 'cheese-melt', position: 'right', initial: { x: 0, y: 10, z: 5, rx: 0, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 14, y: 15, z: 10, rx: -4, ry: -8, rz: 2, scale: 1.03, opacity: 1, delay: 240, duration: 720 } },
      { id: 'sh-vase', name: 'Crystal Glass Water Vase', nameAr: 'قارورة الماء الكريستالية المنقوشة', subtitle: 'Handblown Glass Base', subtitleAr: 'قاعدة زجاجية منقوشة بالذهب والفضة', type: 'bun-bottom', position: 'left', initial: { x: 0, y: 35, z: -10, rx: -5, ry: 0, rz: 0, scale: 1, opacity: 1 }, exploded: { x: 0, y: 120, z: -30, rx: -12, ry: 0, rz: 0, scale: 1.02, opacity: 1, delay: 360, duration: 750 } }
    ]
  },
  { id: 'disposable-hose', categoryId: 'shisha', name: 'Disposable Hose', nameAr: 'لي طبي', price: 19.99, currency: 'LE', tagline: 'HYGIENIC SEALED', taglineAr: 'استخدام شخصي معقم', description: 'Single-use hygienic medical grade silicone hookah hose.', descriptionAr: 'خرطوم شيشة طبي معقم ذو استخدام فردي لضمان أقصى درجات النظافة.', status: 'ready', archetype: 'shisha' },
  { id: 'salloom-kass', categoryId: 'shisha', name: 'Salloom, Kass', nameAr: 'شيشة معسل (سلوم، قص)', price: 33.99, currency: 'LE', tagline: 'TRADITIONAL TOBACCO', taglineAr: 'معسل سلوم وقص بلدي', description: 'Traditional Egyptian dark molasses tobacco served with charcoal.', descriptionAr: 'شيشة معسل بلدي أصيل (سلوم وقص) مطهوة على الفحم الطبيعي.', status: 'ready', archetype: 'shisha' },
  { id: 'tasaly', categoryId: 'shisha', name: 'Tasaly', nameAr: 'تسالي الكوخ', price: 97.00, currency: 'LE', tagline: 'SEEDS & NUTS', taglineAr: 'مكسرات وتسالي مشكلة', description: 'Mixed roasted Egyptian seeds, lupini beans and salted peanuts.', descriptionAr: 'تشكيلة تسالي مشكلة من اللب المحمص، الحمص، والترمس والفول السوداني.', status: 'ready', archetype: 'meal' }
];
