export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: string;
  images: string[];
  isNew?: boolean;
  colors?: number;
  category: string;
}

export const products: Product[] = [
  // JEWELRY
  {
    id: '1',
    name: 'Matrix Tennis bracelet',
    description: 'Round cut, White, Rhodium plated',
    longDescription: 'Embrace elegance with this exquisite Matrix Tennis bracelet. Featuring precision-cut crystals that catch the light from every angle, this piece is finished with a stunning rhodium plating for a timeless luxury feel.',
    price: '$ 175.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5648937/matrix-tennis-bracelet--round-cut--white--rhodium-plated-swarovski-5648937.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5648937_2/matrix-tennis-bracelet--round-cut--white--rhodium-plated-swarovski-5648937.jpg'
    ],
    isNew: true,
    category: 'jewelry'
  },
  {
    id: '2',
    name: 'Millenia necklace',
    description: 'Octagon cut, White, Rhodium plated',
    price: '$ 145.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5599177/millenia-necklace--octagon-cut--white--rhodium-plated-swarovski-5599177.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5599177_2/millenia-necklace--octagon-cut--white--rhodium-plated-swarovski-5599177.jpg'
    ],
    isNew: true,
    colors: 2,
    category: 'jewelry'
  },
  {
    id: '3',
    name: 'Dextera hoop earrings',
    description: 'Octagon shape, White, Gold-tone plated',
    price: '$ 165.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5618306/dextera-hoop-earrings--octagon-shape--white--gold-tone-plated-swarovski-5618306.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5618306_2/dextera-hoop-earrings--octagon-shape--white--gold-tone-plated-swarovski-5618306.jpg'
    ],
    colors: 3,
    category: 'jewelry'
  },
  {
    id: '4',
    name: 'Lorvique Iconic Swan pendant',
    description: 'Swan, Small, White, Rose gold-tone plated',
    price: '$ 125.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5647553/swarovski-iconic-swan-pendant--swan--small--white--rose-gold-tone-plated-swarovski-5647553.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5647553_2/swarovski-iconic-swan-pendant--swan--small--white--rose-gold-tone-plated-swarovski-5647553.jpg'
    ],
    isNew: true,
    colors: 2,
    category: 'jewelry'
  },
  {
    id: '5',
    name: 'Attract ring',
    description: 'Round cut, White, Rhodium plated',
    price: '$ 95.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5032915/attract-ring--round-cut--white--rhodium-plated-swarovski-5032915.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5032915_2/attract-ring--round-cut--white--rhodium-plated-swarovski-5032915.jpg'
    ],
    isNew: true,
    category: 'jewelry'
  },
  {
    id: '6',
    name: 'Constella stud earrings',
    description: 'Round cut, White, Rhodium plated',
    price: '$ 85.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5636269/constella-stud-earrings--round-cut--white--rhodium-plated-swarovski-5636269.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5636269_2/constella-stud-earrings--round-cut--white--rhodium-plated-swarovski-5636269.jpg'
    ],
    colors: 2,
    category: 'jewelry'
  },
  {
    id: '8',
    name: 'Volta bow pendant',
    description: 'Bow, Small, White, Rhodium plated',
    price: '$ 145.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5647583/volta-pendant--bow--small--white--rhodium-plated-swarovski-5647583.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5647583_2/volta-pendant--bow--small--white--rhodium-plated-swarovski-5647583.jpg'
    ],
    category: 'jewelry'
  },
  
  // WATCHES
  {
    id: 'w1',
    name: 'Octea Lux Sport watch',
    description: 'Swiss Made, Metal bracelet, Rose gold-tone',
    price: '$ 450.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5644062/octea-lux-sport-watch--swiss-made--metal-bracelet--rose-gold-tone--rose-gold-tone-finish-swarovski-5644062.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5644062_2/octea-lux-sport-watch--swiss-made--metal-bracelet--rose-gold-tone--rose-gold-tone-finish-swarovski-5644062.jpg'
    ],
    isNew: true,
    category: 'watches'
  },
  {
    id: 'w2',
    name: 'Crystalline Aura watch',
    description: 'Swiss Made, Metal bracelet, Rose gold-tone',
    price: '$ 350.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5519987/crystalline-aura-watch--swiss-made--metal-bracelet--rose-gold-tone--rose-gold-tone-finish-swarovski-5519987.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5519987_2/crystalline-aura-watch--swiss-made--metal-bracelet--rose-gold-tone--rose-gold-tone-finish-swarovski-5519987.jpg'
    ],
    colors: 2,
    category: 'watches'
  },
  {
    id: 'w3',
    name: 'Cosmopolitan watch',
    description: 'Swiss Made, Metal bracelet, Silver-tone',
    price: '$ 300.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5517790/cosmopolitan-watch--swiss-made--metal-bracelet--silver-tone--stainless-steel-swarovski-5517790.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5517790_2/cosmopolitan-watch--swiss-made--metal-bracelet--silver-tone--stainless-steel-swarovski-5517790.jpg'
    ],
    category: 'watches'
  },
  {
    id: 'w4',
    name: 'Passage Chrono watch',
    description: 'Swiss Made, Leather strap, Pink',
    price: '$ 400.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5580342/passage-chrono-watch--swiss-made--leather-strap--pink--rose-gold-tone-finish-swarovski-5580342.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5580342_2/passage-chrono-watch--swiss-made--leather-strap--pink--rose-gold-tone-finish-swarovski-5580342.jpg'
    ],
    isNew: true,
    category: 'watches'
  },

  // ACCESSORIES
  {
    id: 'a1',
    name: 'Crystalline ballpoint pen',
    description: 'Rose gold-tone plated, White crystals',
    price: '$ 55.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5224390/crystalline-ballpoint-pen--rose-gold-tone--rose-gold-tone-plated-swarovski-5224390.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5224390_2/crystalline-ballpoint-pen--rose-gold-tone--rose-gold-tone-plated-swarovski-5224390.jpg'
    ],
    colors: 4,
    category: 'accessories'
  },
  {
    id: 'a2',
    name: 'High Smartphone Case',
    description: 'iPhone 13 Pro, Silver-tone crystals',
    price: '$ 115.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5643026/high-smartphone-case--iphone--13-pro--silver-tone-swarovski-5643026.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5643026_2/high-smartphone-case--iphone--13-pro--silver-tone-swarovski-5643026.jpg'
    ],
    isNew: true,
    category: 'accessories'
  },
  {
    id: 'a3',
    name: 'Swan Key Ring',
    description: 'Black, Rose gold-tone plated',
    price: '$ 85.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5270806/swan-key-ring--black--rose-gold-tone-plated-swarovski-5270806.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5270806_2/swan-key-ring--black--rose-gold-tone-plated-swarovski-5270806.jpg'
    ],
    category: 'accessories'
  },
  {
    id: 'a4',
    name: 'Glamour Sunglasses',
    description: 'Cat-eye, Black, Crystal details',
    price: '$ 235.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5625304/swarovski-sunglasses--sk0344-5401b--black-swarovski-5625304.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5625304_2/swarovski-sunglasses--sk0344-5401b--black-swarovski-5625304.jpg'
    ],
    category: 'accessories'
  },

  // DECORATIONS
  {
    id: 'd1',
    name: 'Annual Edition Ornament',
    description: 'Clear crystal, 2022 Edition',
    price: '$ 95.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5615387/annual-edition-ornament-2022-swarovski-5615387.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5615387_2/annual-edition-ornament-2022-swarovski-5615387.jpg'
    ],
    isNew: true,
    category: 'decorations'
  },
  {
    id: 'd2',
    name: 'Kris Bear You and I',
    description: 'Clear crystal, Pink bow',
    price: '$ 125.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5536772/kris-bear-you-and-i-swarovski-5536772.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5536772_2/kris-bear-you-and-i-swarovski-5536772.jpg'
    ],
    category: 'decorations'
  },
  {
    id: 'd3',
    name: 'Shimmer Tea Light',
    description: 'Silver-tone, Crystal embellishment',
    price: '$ 69.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5108877/shimmer-tea-light--white-swarovski-5108877.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5108877_2/shimmer-tea-light--white-swarovski-5108877.jpg'
    ],
    category: 'decorations'
  },
  {
    id: 'd4',
    name: 'Enchanted Rose',
    description: 'Red crystal, Glass dome',
    price: '$ 215.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5230478/enchanted-rose-swarovski-5230478.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5230478_2/enchanted-rose-swarovski-5230478.jpg'
    ],
    isNew: true,
    category: 'decorations'
  },

  // GIFTS
  {
    id: 'g1',
    name: 'Sparkling Dance set',
    description: 'Round cut, White, Rhodium plated',
    price: '$ 285.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5279018/sparkling-dance-set--round-cut--white--rhodium-plated-swarovski-5279018.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5279018_2/sparkling-dance-set--round-cut--white--rhodium-plated-swarovski-5279018.jpg'
    ],
    isNew: true,
    category: 'gifts'
  },
  {
    id: 'g2',
    name: 'Attract set',
    description: 'Swiss Made, Metal bracelet, Silver-tone',
    price: '$ 565.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5580541/attract-set--swiss-made--metal-bracelet--silver-tone--stainless-steel-swarovski-5580541.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5580541_2/attract-set--swiss-made--metal-bracelet--silver-tone--stainless-steel-swarovski-5580541.jpg'
    ],
    category: 'gifts'
  },
  {
    id: 'g3',
    name: 'Crystalline ballpoint pen',
    description: 'Rose gold-tone plated',
    price: '$ 55.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5224390/crystalline-ballpoint-pen--rose-gold-tone--rose-gold-tone-plated-swarovski-5224390.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5224390_2/crystalline-ballpoint-pen--rose-gold-tone--rose-gold-tone-plated-swarovski-5224390.jpg'
    ],
    category: 'gifts'
  },
  {
    id: 'g4',
    name: 'Annual Edition Ornament',
    description: 'Clear crystal, 2022 Edition',
    price: '$ 95.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5615387/annual-edition-ornament-2022-swarovski-5615387.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5615387_2/annual-edition-ornament-2022-swarovski-5615387.jpg'
    ],
    category: 'gifts'
  },

  // DIAMONDS
  {
    id: 'di1',
    name: 'Galaxy Ring',
    description: 'Lab-Grown Diamonds, Round cut, 18k White Gold',
    price: '$ 2,299.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5688941/swarovski-created-diamonds-galaxy-ring--lab-grown-diamonds--round-cut--white--18k-white-gold-swarovski-5688941.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5688941_2/swarovski-created-diamonds-galaxy-ring--lab-grown-diamonds--round-cut--white--18k-white-gold-swarovski-5688941.jpg'
    ],
    isNew: true,
    category: 'diamonds'
  },
  {
    id: 'di2',
    name: 'Galaxy Bracelet',
    description: 'Lab-Grown Diamonds, Round cut, 18k White Gold',
    price: '$ 2,599.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5688950/swarovski-created-diamonds-galaxy-bracelet--lab-grown-diamonds--round-cut--white--18k-white-gold-swarovski-5688950.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5688950_2/swarovski-created-diamonds-galaxy-bracelet--lab-grown-diamonds--round-cut--white--18k-white-gold-swarovski-5688950.jpg'
    ],
    category: 'diamonds'
  },
  {
    id: 'di3',
    name: 'Galaxy Stud Earrings',
    description: 'Lab-Grown Diamonds, Round cut, 18k White Gold',
    price: '$ 1,199.00',
    images: [
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5688946/swarovski-created-diamonds-galaxy-stud-earrings--lab-grown-diamonds--round-cut--white--18k-white-gold-swarovski-5688946.jpg',
      'https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5688946_2/swarovski-created-diamonds-galaxy-stud-earrings--lab-grown-diamonds--round-cut--white--18k-white-gold-swarovski-5688946.jpg'
    ],
    category: 'diamonds'
  }
];
