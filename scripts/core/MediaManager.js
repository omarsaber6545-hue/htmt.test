/**
 * MediaManager.js
 * High-definition procedural food layer graphics, SVG generators,
 * custom image upload handling, and fallback slice renderers.
 */

export class MediaManager {
  /**
   * Reads a user-uploaded file and converts to Base64 Data URL
   */
  static readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      if (!file) return reject(new Error('No file provided'));
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  }

  /**
   * Generates a high-fidelity SVG visual for a specific layer.
   * Uses realistic organic gradients, shadows, textures, and details.
   */
  static getLayerSvg(layerType, options = {}) {
    const {
      color = '#e2e8f0',
      label = '',
      variant = 'default',
      width = 280,
      height = 280,
    } = options;

    switch (layerType) {
      /* BURGER LAYERS */
      case 'bun-top':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bunGradTop" cx="45%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="50%" stop-color="#d97706" />
              <stop offset="100%" stop-color="#78350f" />
            </radialGradient>
            <radialGradient id="bunShine" cx="40%" cy="20%" r="35%">
              <stop offset="0%" stop-color="#fef08a" stop-opacity="0.7" />
              <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
            </radialGradient>
            <filter id="bunShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#000" flood-opacity="0.4" />
            </filter>
          </defs>
          <g filter="url(#bunShadow)">
            <!-- Top Bun Dome -->
            <path d="M 35 150 C 35 70, 85 45, 140 45 C 195 45, 245 70, 245 150 C 245 162, 235 168, 140 168 C 45 168, 35 162, 35 150 Z" fill="url(#bunGradTop)" />
            <!-- Specular Glaze Highlight -->
            <ellipse cx="130" cy="85" rx="75" ry="32" fill="url(#bunShine)" />
            <!-- Golden Sesame Seeds -->
            <g fill="#fef3c7" opacity="0.95">
              <ellipse cx="100" cy="80" rx="3.5" ry="2" transform="rotate(-15 100 80)" />
              <ellipse cx="135" cy="70" rx="3.5" ry="2" transform="rotate(10 135 70)" />
              <ellipse cx="170" cy="85" rx="3.5" ry="2" transform="rotate(25 170 85)" />
              <ellipse cx="85" cy="110" rx="3.5" ry="2" transform="rotate(-20 85 110)" />
              <ellipse cx="120" cy="105" rx="3.5" ry="2" transform="rotate(5 120 105)" />
              <ellipse cx="155" cy="115" rx="3.5" ry="2" transform="rotate(-10 155 115)" />
              <ellipse cx="195" cy="110" rx="3.5" ry="2" transform="rotate(30 195 110)" />
              <ellipse cx="140" cy="130" rx="3.5" ry="2" transform="rotate(15 140 130)" />
            </g>
          </g>
        </svg>`;

      case 'bun-bottom':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bunGradBottom" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="60%" stop-color="#b45309" />
              <stop offset="100%" stop-color="#78350f" />
            </linearGradient>
            <filter id="bottomShadow">
              <feDropShadow dx="0" dy="12" stdDeviation="9" flood-color="#000" flood-opacity="0.5" />
            </filter>
          </defs>
          <g filter="url(#bottomShadow)">
            <path d="M 40 135 C 40 120, 70 120, 140 120 C 210 120, 240 120, 240 135 C 240 165, 205 180, 140 180 C 75 180, 40 165, 40 135 Z" fill="url(#bunGradBottom)" />
            <!-- Toasted Grill Core Line -->
            <ellipse cx="140" cy="128" rx="85" ry="12" fill="#78350f" opacity="0.6" />
          </g>
        </svg>`;

      case 'patty-beef':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="beefGrad" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stop-color="#5c2d13" />
              <stop offset="60%" stop-color="#3b1a08" />
              <stop offset="100%" stop-color="#1f0c03" />
            </radialGradient>
            <filter id="pattyFilter">
              <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000" flood-opacity="0.6" />
            </filter>
          </defs>
          <g filter="url(#pattyFilter)">
            <!-- Irregular Juicy Patty Base -->
            <path d="M 30 145 C 28 125, 48 115, 140 115 C 232 115, 252 125, 250 145 C 248 168, 225 178, 140 178 C 55 178, 32 168, 30 145 Z" fill="url(#beefGrad)" />
            <!-- Sear & Char Marks -->
            <path d="M 50 140 Q 90 145 130 138 Q 180 142 225 136" stroke="#170802" stroke-width="6" stroke-linecap="round" opacity="0.75" />
            <path d="M 60 155 Q 110 160 160 152 Q 200 156 220 150" stroke="#170802" stroke-width="5" stroke-linecap="round" opacity="0.7" />
            <!-- Juicy Highlights -->
            <ellipse cx="100" cy="130" rx="35" ry="6" fill="#854d0e" opacity="0.4" />
            <ellipse cx="170" cy="132" rx="40" ry="7" fill="#854d0e" opacity="0.4" />
          </g>
        </svg>`;

      case 'patty-chicken':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="chickGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#d97706" />
              <stop offset="50%" stop-color="#b45309" />
              <stop offset="100%" stop-color="#78350f" />
            </linearGradient>
            <filter id="crispyFilter">
              <feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#000" flood-opacity="0.5" />
            </filter>
          </defs>
          <g filter="url(#crispyFilter)">
            <!-- Crispy Flaky Silhouette -->
            <path d="M 32 140 C 30 120, 60 112, 140 112 C 220 112, 250 120, 248 140 C 245 168, 220 178, 140 178 C 60 178, 35 168, 32 140 Z" fill="url(#chickGrad)" />
            <!-- Crispy Panko Flakes & Texture -->
            <g fill="#fef08a" opacity="0.8">
              <polygon points="60,130 68,126 64,134" />
              <polygon points="90,122 98,118 94,127" />
              <polygon points="140,120 148,116 144,125" />
              <polygon points="180,124 189,119 184,129" />
              <polygon points="210,132 218,127 214,136" />
              <polygon points="75,148 83,143 79,152" />
              <polygon points="120,145 128,140 124,149" />
              <polygon points="165,146 174,141 169,151" />
              <polygon points="200,150 209,146 205,155" />
            </g>
          </g>
        </svg>`;

      case 'cheese-melt':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cheeseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fde047" />
              <stop offset="40%" stop-color="#facc15" />
              <stop offset="100%" stop-color="#eab308" />
            </linearGradient>
            <filter id="cheeseGlow">
              <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#ca8a04" flood-opacity="0.4" />
            </filter>
          </defs>
          <g filter="url(#cheeseGlow)">
            <!-- Square Slice with Dripping Corners -->
            <path d="M 45 130 C 50 120, 100 115, 140 115 C 180 115, 230 120, 235 130 C 238 135, 230 150, 232 165 C 234 180, 222 188, 215 170 C 210 158, 200 152, 175 152 C 160 152, 155 178, 145 185 C 138 190, 130 180, 128 152 C 110 152, 95 160, 85 175 C 78 185, 68 182, 65 165 C 62 152, 42 142, 45 130 Z" fill="url(#cheeseGrad)" />
            <!-- Melty Cheese Drip Highlight -->
            <path d="M 70 135 Q 140 128 210 135" stroke="#fef08a" stroke-width="4" fill="none" opacity="0.7" />
          </g>
        </svg>`;

      case 'lettuce':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="lettuceGrad" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stop-color="#86efac" />
              <stop offset="60%" stop-color="#22c55e" />
              <stop offset="100%" stop-color="#15803d" />
            </radialGradient>
            <filter id="lettuceFilter">
              <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#000" flood-opacity="0.3" />
            </filter>
          </defs>
          <g filter="url(#lettuceFilter)">
            <!-- Ruffled Wavy Crisp Leaf -->
            <path d="M 30 140 C 25 125, 45 115, 75 125 C 100 112, 130 118, 150 112 C 180 115, 210 108, 235 122 C 255 130, 252 148, 230 152 C 205 162, 175 152, 145 165 C 120 155, 85 168, 55 156 C 35 152, 32 148, 30 140 Z" fill="url(#lettuceGrad)" />
            <!-- Veins -->
            <path d="M 60 140 Q 140 132 220 138" stroke="#bbf7d0" stroke-width="3" fill="none" opacity="0.6" />
            <path d="M 90 137 Q 110 128 120 122" stroke="#bbf7d0" stroke-width="2" fill="none" opacity="0.5" />
            <path d="M 160 135 Q 180 126 195 120" stroke="#bbf7d0" stroke-width="2" fill="none" opacity="0.5" />
          </g>
        </svg>`;

      case 'tomato':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="tomatoSkin" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="70%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </radialGradient>
            <radialGradient id="tomatoFlesh" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#b91c1c" />
              <stop offset="100%" stop-color="#7f1d1d" />
            </radialGradient>
            <filter id="tomatoShadow">
              <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000" flood-opacity="0.35" />
            </filter>
          </defs>
          <g filter="url(#tomatoShadow)">
            <!-- Sliced Tomato Disc -->
            <ellipse cx="140" cy="140" rx="98" ry="32" fill="url(#tomatoSkin)" />
            <ellipse cx="140" cy="140" rx="84" ry="24" fill="url(#tomatoFlesh)" />
            <!-- Seed Pockets & Gelatin -->
            <ellipse cx="110" cy="138" rx="14" ry="6" fill="#f87171" opacity="0.8" />
            <ellipse cx="170" cy="138" rx="14" ry="6" fill="#f87171" opacity="0.8" />
            <circle cx="108" cy="138" r="2.5" fill="#fef08a" />
            <circle cx="114" cy="137" r="2.5" fill="#fef08a" />
            <circle cx="168" cy="138" r="2.5" fill="#fef08a" />
            <circle cx="174" cy="137" r="2.5" fill="#fef08a" />
          </g>
        </svg>`;

      case 'sauce-drip':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sauceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fb923c" />
              <stop offset="60%" stop-color="#ea580c" />
              <stop offset="100%" stop-color="#c2410c" />
            </linearGradient>
            <filter id="sauceGlow">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#9a3412" flood-opacity="0.4" />
            </filter>
          </defs>
          <g filter="url(#sauceGlow)">
            <!-- Umami Drizzling Sauce Pattern -->
            <path d="M 50 135 C 70 128, 90 148, 110 136 C 130 125, 145 152, 160 135 C 180 120, 200 145, 230 132 C 220 148, 195 155, 175 146 C 150 162, 130 148, 105 158 C 80 162, 60 148, 50 135 Z" fill="url(#sauceGrad)" />
            <circle cx="95" cy="162" r="4" fill="#ea580c" />
            <circle cx="185" cy="160" r="5" fill="#ea580c" />
          </g>
        </svg>`;

      case 'pickles':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pickleSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#65a30d" />
              <stop offset="100%" stop-color="#3f6212" />
            </linearGradient>
          </defs>
          <g>
            <!-- 3 Artisan Pickle Chips -->
            <g transform="translate(70, 130) rotate(-15)">
              <ellipse cx="25" cy="12" rx="28" ry="14" fill="url(#pickleSkin)" stroke="#84cc16" stroke-width="2" />
              <circle cx="20" cy="11" r="1.5" fill="#ecfccb" />
              <circle cx="28" cy="13" r="1.5" fill="#ecfccb" />
            </g>
            <g transform="translate(130, 132) rotate(8)">
              <ellipse cx="25" cy="12" rx="28" ry="14" fill="url(#pickleSkin)" stroke="#84cc16" stroke-width="2" />
              <circle cx="20" cy="11" r="1.5" fill="#ecfccb" />
              <circle cx="28" cy="13" r="1.5" fill="#ecfccb" />
            </g>
            <g transform="translate(180, 125) rotate(-8)">
              <ellipse cx="25" cy="12" rx="28" ry="14" fill="url(#pickleSkin)" stroke="#84cc16" stroke-width="2" />
              <circle cx="22" cy="12" r="1.5" fill="#ecfccb" />
            </g>
          </g>
        </svg>`;

      case 'bacon':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="baconGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#7f1d1d" />
              <stop offset="30%" stop-color="#991b1b" />
              <stop offset="50%" stop-color="#fecaca" />
              <stop offset="70%" stop-color="#991b1b" />
              <stop offset="100%" stop-color="#450a0a" />
            </linearGradient>
          </defs>
          <!-- 2 Crispy Wavy Strips -->
          <path d="M 40 135 Q 70 120 100 138 Q 130 152 160 132 Q 190 118 230 136 C 220 148 190 130 160 144 C 130 162 100 132 70 148 Z" fill="url(#baconGrad)" />
          <path d="M 55 145 Q 85 130 115 148 Q 145 162 175 142 Q 205 128 245 146 C 235 158 205 140 175 154 C 145 172 115 142 85 158 Z" fill="url(#baconGrad)" opacity="0.9" />
        </svg>`;

      /* PIZZA LAYERS */
      case 'pizza-crust':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="crustGrad" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stop-color="#d97706" />
              <stop offset="88%" stop-color="#b45309" />
              <stop offset="100%" stop-color="#78350f" />
            </radialGradient>
            <filter id="crustShadow">
              <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#000" flood-opacity="0.5" />
            </filter>
          </defs>
          <g filter="url(#crustShadow)">
            <!-- Wood-fired Charred Rim Circle -->
            <ellipse cx="140" cy="140" rx="120" ry="85" fill="url(#crustGrad)" />
            <!-- Leopard Char Blisters -->
            <circle cx="45" cy="130" r="5" fill="#1c0a00" opacity="0.8" />
            <circle cx="70" cy="90" r="6" fill="#1c0a00" opacity="0.75" />
            <circle cx="130" cy="65" r="4.5" fill="#1c0a00" opacity="0.85" />
            <circle cx="210" cy="95" r="6" fill="#1c0a00" opacity="0.7" />
            <circle cx="235" cy="145" r="5" fill="#1c0a00" opacity="0.8" />
            <circle cx="190" cy="195" r="7" fill="#1c0a00" opacity="0.75" />
            <circle cx="100" cy="205" r="5" fill="#1c0a00" opacity="0.8" />
          </g>
        </svg>`;

      case 'pizza-sauce':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sanMarzano" cx="48%" cy="46%" r="50%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="75%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </radialGradient>
          </defs>
          <ellipse cx="140" cy="140" rx="102" ry="70" fill="url(#sanMarzano)" />
          <!-- Swirl Marks & Crushed Oregano -->
          <path d="M 75 140 Q 140 100 205 140 Q 140 180 75 140" fill="none" stroke="#b91c1c" stroke-width="4" opacity="0.5" />
          <circle cx="110" cy="120" r="1.5" fill="#166534" />
          <circle cx="160" cy="130" r="1.5" fill="#166534" />
          <circle cx="130" cy="155" r="1.5" fill="#166534" />
          <circle cx="180" cy="150" r="1.5" fill="#166534" />
        </svg>`;

      case 'pizza-cheese':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="mozzGrad" cx="40%" cy="40%" r="50%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="60%" stop-color="#fef08a" />
              <stop offset="100%" stop-color="#fde047" />
            </radialGradient>
          </defs>
          <!-- Melted Fior di Latte Pools -->
          <ellipse cx="100" cy="125" rx="30" ry="18" fill="url(#mozzGrad)" opacity="0.95" />
          <ellipse cx="165" cy="120" rx="28" ry="16" fill="url(#mozzGrad)" opacity="0.95" />
          <ellipse cx="135" cy="155" rx="34" ry="20" fill="url(#mozzGrad)" opacity="0.95" />
          <ellipse cx="80" cy="155" rx="22" ry="14" fill="url(#mozzGrad)" opacity="0.9" />
          <ellipse cx="195" cy="148" rx="24" ry="15" fill="url(#mozzGrad)" opacity="0.9" />
        </svg>`;

      case 'pepperoni':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="pepGrad" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#b91c1c" />
              <stop offset="80%" stop-color="#7f1d1d" />
              <stop offset="100%" stop-color="#450a0a" />
            </radialGradient>
          </defs>
          <!-- Crispy Cupping Pepperoni Slices -->
          <ellipse cx="90" cy="115" rx="20" ry="12" fill="url(#pepGrad)" stroke="#450a0a" stroke-width="2" />
          <ellipse cx="150" cy="105" rx="20" ry="12" fill="url(#pepGrad)" stroke="#450a0a" stroke-width="2" />
          <ellipse cx="190" cy="130" rx="20" ry="12" fill="url(#pepGrad)" stroke="#450a0a" stroke-width="2" />
          <ellipse cx="130" cy="145" rx="20" ry="12" fill="url(#pepGrad)" stroke="#450a0a" stroke-width="2" />
          <ellipse cx="80" cy="150" rx="20" ry="12" fill="url(#pepGrad)" stroke="#450a0a" stroke-width="2" />
          <ellipse cx="165" cy="165" rx="20" ry="12" fill="url(#pepGrad)" stroke="#450a0a" stroke-width="2" />
        </svg>`;

      case 'basil-garnish':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="basilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#22c55e" />
              <stop offset="100%" stop-color="#14532d" />
            </linearGradient>
          </defs>
          <!-- Fresh Curved Basil Leaves -->
          <g transform="translate(100, 110) rotate(-25)">
            <path d="M 0 0 C 15 -15, 35 -10, 40 5 C 35 20, 15 15, 0 0 Z" fill="url(#basilGrad)" />
            <path d="M 0 0 Q 20 0 40 5" stroke="#86efac" stroke-width="1.5" fill="none" opacity="0.6" />
          </g>
          <g transform="translate(150, 135) rotate(40)">
            <path d="M 0 0 C 15 -15, 35 -10, 40 5 C 35 20, 15 15, 0 0 Z" fill="url(#basilGrad)" />
            <path d="M 0 0 Q 20 0 40 5" stroke="#86efac" stroke-width="1.5" fill="none" opacity="0.6" />
          </g>
          <g transform="translate(115, 160) rotate(-10)">
            <path d="M 0 0 C 15 -15, 35 -10, 40 5 C 35 20, 15 15, 0 0 Z" fill="url(#basilGrad)" />
          </g>
        </svg>`;

      /* DRINKS LAYERS */
      case 'glass-base':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(255,255,255,0.4)" />
              <stop offset="25%" stop-color="rgba(255,255,255,0.1)" />
              <stop offset="75%" stop-color="rgba(255,255,255,0.15)" />
              <stop offset="100%" stop-color="rgba(255,255,255,0.5)" />
            </linearGradient>
          </defs>
          <!-- Heavy Crystal Rocks Glass -->
          <path d="M 70 60 L 85 220 C 86 230, 95 235, 140 235 C 185 235, 194 230, 195 220 L 210 60 Z" fill="url(#glassGrad)" stroke="rgba(255,255,255,0.6)" stroke-width="2.5" />
          <!-- Thick Glass Base Rim -->
          <ellipse cx="140" cy="225" rx="50" ry="10" fill="rgba(255,255,255,0.3)" />
        </svg>`;

      case 'crystal-ice':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="iceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255,255,255,0.8)" />
              <stop offset="50%" stop-color="rgba(186,230,253,0.5)" />
              <stop offset="100%" stop-color="rgba(125,211,252,0.3)" />
            </linearGradient>
          </defs>
          <!-- Hand-carved 3D Ice Rock Cube -->
          <g transform="translate(100, 110)">
            <polygon points="40,0 80,20 40,40 0,20" fill="rgba(255,255,255,0.85)" stroke="rgba(255,255,255,0.9)" />
            <polygon points="0,20 40,40 40,90 0,70" fill="url(#iceGrad)" stroke="rgba(255,255,255,0.6)" />
            <polygon points="40,40 80,20 80,70 40,90" fill="rgba(186,230,253,0.4)" stroke="rgba(255,255,255,0.6)" />
          </g>
        </svg>`;

      case 'liquid-amber':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bourbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8" />
              <stop offset="50%" stop-color="#d97706" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#92400e" stop-opacity="0.95" />
            </linearGradient>
          </defs>
          <path d="M 76 110 L 87 215 C 90 226, 110 230, 140 230 C 170 230, 190 226, 193 215 L 204 110 C 170 120, 110 120, 76 110 Z" fill="url(#bourbonGrad)" />
          <ellipse cx="140" cy="115" rx="64" ry="12" fill="#fbbf24" opacity="0.6" />
        </svg>`;

      case 'drink-garnish':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <!-- Flamed Orange Peel Twist & Rosemary -->
          <g transform="translate(130, 55) rotate(25)">
            <path d="M 0 0 C 30 -20, 50 10, 80 5" stroke="#f97316" stroke-width="12" stroke-linecap="round" fill="none" />
            <path d="M 2 -1 C 30 -21, 50 9, 78 4" stroke="#fdba74" stroke-width="4" stroke-linecap="round" fill="none" />
          </g>
          <g transform="translate(85, 45) rotate(-35)">
            <line x1="0" y1="50" x2="35" y2="0" stroke="#713f12" stroke-width="4" stroke-linecap="round" />
            <line x1="15" y1="28" x2="30" y2="22" stroke="#15803d" stroke-width="3" stroke-linecap="round" />
            <line x1="18" y1="24" x2="5" y2="18" stroke="#15803d" stroke-width="3" stroke-linecap="round" />
            <line x1="25" y1="14" x2="40" y2="8" stroke="#15803d" stroke-width="3" stroke-linecap="round" />
          </g>
        </svg>`;

      /* DESSERT LAYERS */
      case 'chocolate-dome':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="chocDome" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stop-color="#451a03" />
              <stop offset="50%" stop-color="#270e02" />
              <stop offset="100%" stop-color="#0f0501" />
            </radialGradient>
            <linearGradient id="goldLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fef08a" />
              <stop offset="50%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#b45309" />
            </linearGradient>
            <filter id="domeShadow">
              <feDropShadow dx="0" dy="14" stdDeviation="10" flood-color="#000" flood-opacity="0.6" />
            </filter>
          </defs>
          <g filter="url(#domeShadow)">
            <path d="M 45 150 C 45 75, 85 55, 140 55 C 195 55, 235 75, 235 150 C 235 165, 195 175, 140 175 C 85 175, 45 165, 45 150 Z" fill="url(#chocDome)" />
            <!-- Mirror Glaze Sheen -->
            <ellipse cx="125" cy="85" rx="55" ry="20" fill="rgba(255,255,255,0.18)" />
            <!-- 24K Edible Gold Leaf Flakes -->
            <polygon points="120,95 135,90 138,102 125,108" fill="url(#goldLeaf)" />
            <polygon points="150,110 162,104 158,118" fill="url(#goldLeaf)" />
            <polygon points="105,120 114,115 110,126" fill="url(#goldLeaf)" />
          </g>
        </svg>`;

      case 'lava-core':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="lavaGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#78350f" />
              <stop offset="70%" stop-color="#451a03" />
              <stop offset="100%" stop-color="#1c0700" />
            </radialGradient>
          </defs>
          <!-- Molten Chocolate Fondant Core -->
          <ellipse cx="140" cy="140" rx="65" ry="35" fill="url(#lavaGrad)" />
          <path d="M 110 145 C 120 165, 130 170, 140 168 C 150 172, 160 160, 170 145" fill="#451a03" />
          <ellipse cx="140" cy="135" rx="45" ry="18" fill="#92400e" opacity="0.6" />
        </svg>`;

      case 'pastry-base':
        return `
        <svg viewBox="0 0 280 280" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pastryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fbbf24" />
              <stop offset="70%" stop-color="#d97706" />
              <stop offset="100%" stop-color="#92400e" />
            </linearGradient>
          </defs>
          <ellipse cx="140" cy="140" rx="100" ry="40" fill="url(#pastryGrad)" />
          <!-- Caramelized Feuilletine Shards -->
          <ellipse cx="140" cy="135" rx="85" ry="28" fill="#b45309" opacity="0.5" />
          <circle cx="90" cy="135" r="3" fill="#fde68a" />
          <circle cx="130" cy="140" r="2.5" fill="#fde68a" />
          <circle cx="180" cy="132" r="3" fill="#fde68a" />
        </svg>`;

      /* DEFAULT PROCEDURAL FALLBACK LAYER */
      default:
        return this.generateProceduralLayerSvg(label || 'Ingredient Layer', color);
    }
  }

  /**
   * Procedural dynamic SVG generator for arbitrary custom layers
   */
  static generateProceduralLayerSvg(name, baseColor = '#f59e0b') {
    return `
    <svg viewBox="0 0 280 280" width="280" height="280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="customGrad-${name.replace(/\s+/g, '')}" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stop-color="${baseColor}" stop-opacity="0.9" />
          <stop offset="70%" stop-color="${baseColor}" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#0b0f19" stop-opacity="0.8" />
        </radialGradient>
        <filter id="customShadow">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000" flood-opacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#customShadow)">
        <ellipse cx="140" cy="140" rx="90" ry="45" fill="url(#customGrad-${name.replace(/\s+/g, '')})" stroke="${baseColor}" stroke-width="2" />
        <ellipse cx="140" cy="132" rx="75" ry="25" fill="rgba(255, 255, 255, 0.15)" />
        <text x="140" y="145" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="1">
          ${name}
        </text>
      </g>
    </svg>`;
  }

  /**
   * Returns the authentic commercial food photography image URL for a product.
   */
  static getProductPhoto(product) {
    if (!product) return './assets/products/beef_burger_300g_real.jpg';
    if (product.customImageUrl) return product.customImageUrl;
    if (product.hero_image) return product.hero_image;

    const id = (product.id || '').toLowerCase();
    const name = (product.name || '').toLowerCase();
    const cat = (product.categoryId || '').toLowerCase();

    // 1. Meals & Sandwiches
    if (id.includes('burger') || name.includes('burger')) {
      return './assets/products/beef_burger_300g_real.jpg';
    }
    if (id.includes('hawawshi') || name.includes('hawawshi')) {
      return './assets/products/hawawshi_real.jpg';
    }
    if (id.includes('cordon') || name.includes('cordon')) {
      return './assets/products/cordon_bleu.jpg';
    }
    if (id.includes('strip') || name.includes('strip')) {
      return './assets/products/chicken_strips.jpg';
    }

    // 2. Pasta
    if (cat === 'pasta' || name.includes('pasta')) {
      if (name.includes('alfredo')) return './assets/products/pasta_alfredo_real.jpg';
      return './assets/products/pasta_bolognese.jpg';
    }

    // 3. Croissant
    if (cat === 'croissant' || name.includes('croissant')) {
      return './assets/products/croissant_roastbeef.jpg';
    }

    // 4. Fries
    if (cat === 'fries' || name.includes('fries')) {
      return './assets/products/french_fries.jpg';
    }

    // 5. Waffles
    if (cat === 'waffles' || name.includes('waffle')) {
      return './assets/products/belgian_waffle_real.jpg';
    }

    // 6. Ice Cream & Desserts
    if (cat === 'ice-cream-desserts' || name.includes('ice') || name.includes('dessert') || name.includes('cake')) {
      if (name.includes('molten')) return './assets/products/molten_cake.jpg';
      if (name.includes('banana')) return './assets/products/banana_boat.jpg';
      if (name.includes('sundae')) return './assets/products/sundae_nuts.jpg';
      if (name.includes('cheese')) return './assets/products/cheesecake.jpg';
      if (name.includes('brownie')) return './assets/products/brownies.jpg';
      return './assets/products/chocolate_on_ice.jpg';
    }

    // 7. Shisha
    if (cat === 'shisha' || name.includes('shisha') || name.includes('hookah')) {
      return './assets/products/shisha_fruit_real.jpg';
    }

    // 8. Smoothies & Cold Drinks
    if (cat === 'smoothies-cold') {
      if (name.includes('lemon')) return './assets/products/smoothie_lemon.jpg';
      if (name.includes('kiwi')) return './assets/products/smoothie_kiwi.jpg';
      if (name.includes('mango')) return './assets/products/smoothie_mango.jpg';
      if (name.includes('strawberry')) return './assets/products/smoothie_strawberry.jpg';
      if (name.includes('watermelon')) return './assets/products/smoothie_watermelon.jpg';
      return './assets/products/smoothie_mango.jpg';
    }

    // 9. Signature Drinks & Cocktails
    if (cat === 'signature-drinks' || cat === 'cocktails') {
      if (name.includes('blue')) return './assets/products/blue_hawaii_real.jpg';
      if (name.includes('colada')) return './assets/products/pina_colada.jpg';
      if (name.includes('mojito')) return './assets/products/mojito.jpg';
      if (name.includes('yogurt')) return './assets/products/el_kokh_yogurt.jpg';
      if (name.includes('florida')) return './assets/products/cocktail_florida.jpg';
      if (name.includes('sunshine')) return './assets/products/cocktail_sunshine.jpg';
      if (name.includes('tropical')) return './assets/products/cocktail_tropical.jpg';
      return './assets/products/cocktail_el_kokh.jpg';
    }

    // 10. Fresh Juices
    if (cat === 'fresh-juices') {
      if (name.includes('orange')) return './assets/products/juice_orange.jpg';
      if (name.includes('mango')) return './assets/products/juice_mango.jpg';
      if (name.includes('kiwi')) return './assets/products/juice_kiwi.jpg';
      return './assets/products/juice_orange.jpg';
    }

    // 11. Hot Beverages & Coffee
    if (cat === 'hot-beverages' || cat === 'hot-coffee') {
      if (name.includes('turkish') || name.includes('french') || name.includes('hazelnut')) {
        return './assets/products/turkish_coffee_real.jpg';
      }
      if (name.includes('special')) return './assets/products/special_el_kokh_coffee.jpg';
      return './assets/products/iced_latte_glass.jpg';
    }

    return './assets/products/beef_burger_300g_real.jpg';
  }

  /**
   * Generates a composite food mockup for the product card
   */
  static getCompositeSvg(category, name = '') {
    const lowerName = (name || '').toLowerCase();

    switch (category) {
      case 'meals-sandwiches':
      case 'burgers':
        if (lowerName.includes('hawawshi')) {
          return `
          <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="130" cy="180" rx="95" ry="30" fill="rgba(45,25,15,0.12)" />
            <!-- Crispy Baladi Hawawshi Triangles -->
            <path d="M 40 140 L 130 50 L 220 140 C 220 165, 40 165, 40 140 Z" fill="#92400e" stroke="#78350f" stroke-width="2" />
            <path d="M 55 135 L 130 65 L 205 135 Z" fill="#b45309" />
            <!-- Toasted Grill & Char Specks -->
            <ellipse cx="110" cy="110" rx="15" ry="8" fill="#451a03" opacity="0.6" />
            <ellipse cx="150" cy="115" rx="18" ry="9" fill="#451a03" opacity="0.6" />
            <ellipse cx="130" cy="85" rx="10" ry="5" fill="#451a03" opacity="0.7" />
            <path d="M 70 142 Q 130 135 190 142" stroke="#d97706" stroke-width="4" fill="none" opacity="0.8" />
          </svg>`;
        }
        if (lowerName.includes('cordon') || lowerName.includes('strip')) {
          return `
          <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="130" cy="185" rx="90" ry="25" fill="rgba(45,25,15,0.14)" />
            <!-- Golden Crispy Breaded Cutlet/Strips -->
            <path d="M 45 130 C 40 100, 80 80, 135 80 C 190 80, 225 100, 220 130 C 215 160, 185 175, 135 175 C 80 175, 50 160, 45 130 Z" fill="#d97706" />
            <path d="M 60 125 C 75 100, 120 95, 175 95 C 205 95, 210 115, 205 130 C 190 155, 150 160, 95 160 C 65 160, 55 145, 60 125 Z" fill="#b45309" />
            <!-- Panko Texture & Parsley -->
            <circle cx="90" cy="115" r="3" fill="#fde68a" />
            <circle cx="130" cy="110" r="3.5" fill="#fde68a" />
            <circle cx="165" cy="120" r="3" fill="#fde68a" />
            <ellipse cx="125" cy="105" rx="8" ry="3" fill="#166534" />
          </svg>`;
        }
        // Flagship 300g Burger
        return `
        <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(0, -10)">
            <path d="M 40 180 C 40 170, 70 170, 130 170 C 190 170, 220 170, 220 180 C 220 205, 190 215, 130 215 C 70 215, 40 205, 40 180 Z" fill="#b45309" />
            <path d="M 32 165 C 30 150, 50 142, 130 142 C 210 142, 230 150, 228 165 C 225 180, 205 188, 130 188 C 55 188, 35 180, 32 165 Z" fill="#3b1a08" />
            <path d="M 40 152 Q 130 142 220 152 C 222 168, 205 178, 195 160 C 185 145, 165 170, 150 172 C 140 174, 130 155, 115 175 C 95 175, 75 160, 55 170 Z" fill="#eab308" />
            <path d="M 30 140 C 25 125, 55 125, 80 130 C 110 120, 140 122, 160 118 C 190 122, 225 116, 235 130 C 225 145, 185 138, 140 146 C 95 138, 55 148, 30 140 Z" fill="#22c55e" />
            <ellipse cx="130" cy="126" rx="88" ry="18" fill="#dc2626" />
            <path d="M 35 120 C 35 55, 80 35, 130 35 C 180 35, 225 55, 225 120 C 225 130, 215 136, 130 136 C 45 136, 35 130, 35 120 Z" fill="#d97706" />
            <ellipse cx="120" cy="70" rx="60" ry="22" fill="#fef08a" opacity="0.4" />
            <circle cx="100" cy="65" r="2" fill="#fef3c7" />
            <circle cx="130" cy="55" r="2" fill="#fef3c7" />
            <circle cx="160" cy="70" r="2" fill="#fef3c7" />
            <circle cx="115" cy="85" r="2" fill="#fef3c7" />
            <circle cx="145" cy="90" r="2" fill="#fef3c7" />
          </g>
        </svg>`;

      case 'pasta':
        return `
        <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="190" rx="90" ry="25" fill="rgba(45,25,15,0.12)" />
          <!-- Ceramic White Bowl -->
          <ellipse cx="130" cy="150" rx="105" ry="60" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" />
          <ellipse cx="130" cy="140" rx="92" ry="48" fill="#ffffff" />
          <!-- Pasta Nest & Sauce -->
          <ellipse cx="130" cy="135" rx="80" ry="40" fill="${lowerName.includes('alfredo') ? '#fef08a' : '#dc2626'}" />
          <!-- Ribbons / Penne -->
          <path d="M 75 130 Q 130 110 185 130 Q 130 150 75 130" fill="none" stroke="${lowerName.includes('alfredo') ? '#ffffff' : '#b91c1c'}" stroke-width="5" />
          <path d="M 90 140 Q 130 125 170 140" fill="none" stroke="${lowerName.includes('alfredo') ? '#fef9c3' : '#991b1b'}" stroke-width="4" />
          <!-- Parmesan & Basil Leaf -->
          <circle cx="115" cy="130" r="2" fill="#ffffff" />
          <circle cx="140" cy="125" r="2.5" fill="#ffffff" />
          <circle cx="155" cy="135" r="2" fill="#ffffff" />
          <ellipse cx="130" cy="120" rx="10" ry="5" fill="#166534" transform="rotate(-15 130 120)" />
        </svg>`;

      case 'croissant':
        return `
        <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="185" rx="95" ry="25" fill="rgba(45,25,15,0.12)" />
          <!-- Crescent Shaped Flaky Croissant -->
          <path d="M 40 145 C 50 80, 105 75, 130 75 C 155 75, 210 80, 220 145 C 205 160, 165 140, 130 140 C 95 140, 55 160, 40 145 Z" fill="#d97706" />
          <path d="M 60 135 C 75 95, 110 90, 130 90 C 150 90, 185 95, 200 135 C 185 145, 155 130, 130 130 C 105 130, 75 145, 60 135 Z" fill="#b45309" />
          <!-- Flaky Lamination Ribs -->
          <path d="M 95 95 Q 110 130 95 145" stroke="#f59e0b" stroke-width="3" fill="none" />
          <path d="M 130 90 Q 130 130 130 142" stroke="#f59e0b" stroke-width="3.5" fill="none" />
          <path d="M 165 95 Q 150 130 165 145" stroke="#f59e0b" stroke-width="3" fill="none" />
        </svg>`;

      case 'fries':
        return `
        <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="190" rx="85" ry="22" fill="rgba(45,25,15,0.12)" />
          <!-- French Fries Box / Cup -->
          <path d="M 75 120 L 85 200 C 86 210, 174 210, 175 200 L 185 120 Z" fill="#b91c1c" />
          <ellipse cx="130" cy="120" rx="55" ry="14" fill="#991b1b" />
          <!-- Golden Crispy French Fries -->
          <g fill="#facc15" stroke="#ca8a04" stroke-width="1.5">
            <rect x="90" y="60" width="12" height="75" rx="3" transform="rotate(-15 90 60)" />
            <rect x="110" y="50" width="12" height="85" rx="3" transform="rotate(-5 110 50)" />
            <rect x="130" y="45" width="12" height="90" rx="3" transform="rotate(8 130 45)" />
            <rect x="150" y="55" width="12" height="80" rx="3" transform="rotate(18 150 55)" />
            <rect x="100" y="70" width="12" height="70" rx="3" transform="rotate(3 100 70)" />
            <rect x="140" y="65" width="12" height="75" rx="3" transform="rotate(-8 140 65)" />
          </g>
          ${lowerName.includes('cheddar') ? '<path d="M 80 115 Q 130 95 180 115 Q 130 135 80 115" fill="#fde047" opacity="0.9" />' : ''}
        </svg>`;

      case 'waffles':
        return `
        <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="185" rx="90" ry="25" fill="rgba(45,25,15,0.12)" />
          <!-- Golden Deep Grid Waffle -->
          <rect x="55" y="70" width="150" height="110" rx="14" fill="#d97706" stroke="#b45309" stroke-width="3" />
          <!-- Waffle Pockets Grid -->
          <g fill="#92400e">
            <rect x="70" y="85" width="24" height="20" rx="3" />
            <rect x="104" y="85" width="24" height="20" rx="3" />
            <rect x="138" y="85" width="24" height="20" rx="3" />
            <rect x="172" y="85" width="20" height="20" rx="3" />
            <rect x="70" y="115" width="24" height="20" rx="3" />
            <rect x="104" y="115" width="24" height="20" rx="3" />
            <rect x="138" y="115" width="24" height="20" rx="3" />
            <rect x="172" y="115" width="20" height="20" rx="3" />
            <rect x="70" y="145" width="24" height="20" rx="3" />
            <rect x="104" y="145" width="24" height="20" rx="3" />
            <rect x="138" y="145" width="24" height="20" rx="3" />
            <rect x="172" y="145" width="20" height="20" rx="3" />
          </g>
          <!-- Chocolate / Nutella Drizzle -->
          <path d="M 60 90 Q 130 160 200 95" stroke="#451a03" stroke-width="7" fill="none" stroke-linecap="round" />
          <path d="M 80 145 Q 130 110 180 155" stroke="#451a03" stroke-width="5" fill="none" stroke-linecap="round" />
          <!-- Strawberry Slice -->
          <polygon points="120,70 145,70 132,95" fill="#dc2626" />
        </svg>`;

      case 'ice-cream-desserts':
        return `
        <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="195" rx="85" ry="20" fill="rgba(45,25,15,0.12)" />
          <!-- Glass Stem & Bowl -->
          <path d="M 125 150 L 125 190 L 105 195 L 155 195 L 135 190 L 135 150 Z" fill="#cbd5e1" />
          <path d="M 75 90 C 75 145, 185 145, 185 90 Z" fill="rgba(255,255,255,0.3)" stroke="#94a3b8" stroke-width="2" />
          <!-- Multi Ice Cream Scoops -->
          <circle cx="110" cy="85" r="32" fill="#fef08a" />
          <circle cx="150" cy="85" r="32" fill="#581c87" />
          <circle cx="130" cy="60" r="30" fill="#dc2626" />
          <!-- Whipped Cream & Cherry -->
          <ellipse cx="130" cy="40" rx="16" ry="10" fill="#ffffff" />
          <circle cx="130" cy="30" r="7" fill="#b91c1c" />
          <!-- Chocolate Fudge Drizzle -->
          <path d="M 115 50 Q 130 75 145 55" stroke="#451a03" stroke-width="4" fill="none" />
        </svg>`;

      case 'smoothies-cold':
      case 'fresh-juices':
        return `
        <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="205" rx="75" ry="20" fill="rgba(45,25,15,0.12)" />
          <!-- Tall Glass Tumbler -->
          <path d="M 80 50 L 92 195 C 93 205, 167 205, 168 195 L 180 50 Z" fill="rgba(255,255,255,0.2)" stroke="#cbd5e1" stroke-width="2" />
          <!-- Vibrant Juice/Smoothie Fluid -->
          <path d="M 83 75 L 94 193 C 95 200, 165 200, 166 193 L 177 75 Z" fill="${lowerName.includes('orange') || lowerName.includes('mango') || lowerName.includes('peach') ? '#ea580c' : lowerName.includes('kiwi') || lowerName.includes('mint') ? '#16a34a' : '#e11d48'}" />
          <!-- Straw & Fruit Slice -->
          <line x1="140" y1="120" x2="160" y2="25" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" />
          <circle cx="95" cy="50" r="24" fill="#facc15" stroke="#eab308" stroke-width="2" />
          <circle cx="95" cy="50" r="18" fill="#fef08a" />
        </svg>`;

      case 'signature-drinks':
      case 'cocktails':
        return `
        <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="205" rx="75" ry="20" fill="rgba(45,25,15,0.12)" />
          <!-- Hurricane Cocktail Glass -->
          <path d="M 80 50 C 95 100, 75 140, 100 185 L 105 195 L 155 195 L 160 185 C 185 140, 165 100, 180 50 Z" fill="rgba(255,255,255,0.25)" stroke="#94a3b8" stroke-width="2" />
          <!-- Tropical Cocktail Liquid Gradient -->
          <path d="M 85 70 C 95 110, 80 140, 105 180 L 155 180 C 180 140, 165 110, 175 70 Z" fill="${lowerName.includes('blue') ? '#0284c7' : lowerName.includes('colada') ? '#fef9c3' : '#f97316'}" />
          <!-- Mint & Umbrella -->
          <ellipse cx="130" cy="50" rx="12" ry="5" fill="#15803d" />
          <line x1="130" y1="50" x2="145" y2="20" stroke="#f43f5e" stroke-width="4" stroke-linecap="round" />
        </svg>`;

      case 'hot-beverages':
      case 'hot-coffee':
        return `
        <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="195" rx="85" ry="22" fill="rgba(45,25,15,0.12)" />
          <!-- Saucer -->
          <ellipse cx="130" cy="175" rx="90" ry="25" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2" />
          <!-- Porcelain Coffee Cup -->
          <path d="M 75 90 C 75 160, 185 160, 185 90 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          <!-- Cup Handle -->
          <path d="M 180 100 C 215 100, 215 145, 175 145" fill="none" stroke="#cbd5e1" stroke-width="8" stroke-linecap="round" />
          <!-- Coffee Crema & Latte Art -->
          <ellipse cx="130" cy="92" rx="52" ry="24" fill="#78350f" />
          <ellipse cx="130" cy="92" rx="42" ry="18" fill="#d97706" />
          <path d="M 115 92 Q 130 80 145 92 Q 130 104 115 92" fill="#fef3c7" />
          <!-- Steam Lines -->
          <path d="M 110 60 Q 115 45 110 30" stroke="#a8a29e" stroke-width="2" fill="none" opacity="0.6" />
          <path d="M 130 55 Q 135 40 130 25" stroke="#a8a29e" stroke-width="2" fill="none" opacity="0.6" />
          <path d="M 150 60 Q 155 45 150 30" stroke="#a8a29e" stroke-width="2" fill="none" opacity="0.6" />
        </svg>`;

      case 'shisha':
        return `
        <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="215" rx="80" ry="20" fill="rgba(45,25,15,0.15)" />
          <!-- Glass Water Vase -->
          <path d="M 100 150 C 75 180, 75 205, 130 205 C 185 205, 185 180, 160 150 Z" fill="rgba(255,255,255,0.3)" stroke="#b45309" stroke-width="2.5" />
          <ellipse cx="130" cy="180" rx="35" ry="12" fill="#0284c7" opacity="0.6" />
          <!-- Brass Downstem & Tray -->
          <rect x="124" y="55" width="12" height="100" fill="#d97706" stroke="#92400e" stroke-width="1.5" />
          <ellipse cx="130" cy="55" rx="45" ry="12" fill="#b45309" />
          <!-- Clay Phunnel Bowl & Glowing Charcoal -->
          <path d="M 115 28 L 145 28 L 140 50 L 120 50 Z" fill="#78350f" />
          <circle cx="126" cy="22" r="5" fill="#ea580c" />
          <circle cx="134" cy="22" r="5" fill="#f97316" />
          <!-- Hose Silhouette -->
          <path d="M 120 145 Q 60 160 65 210 Q 70 230 110 225" stroke="#1c1917" stroke-width="6" fill="none" stroke-linecap="round" />
        </svg>`;

      default:
        return this.generateProceduralLayerSvg(name || 'Gourmet Item', '#f59e0b');
    }
  }
}
