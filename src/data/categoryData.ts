export interface PromoData {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface CategoryData {
  id: string;
  heroImage: string;
  breadcrumb: string;
  title: string;
  description: string;
  infoTitle1: string;
  infoText1: string;
  infoTitle2: string;
  infoText2: string;
  tags: string[];
  promo: PromoData;
}

export const categoryData: Record<string, CategoryData> = {
  jewelry: {
    id: "jewelry",
    heroImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=compress&fit=crop&q=80&w=2000",
    breadcrumb: "Home / Jewelry",
    title: "Jewelry: Earrings, Bracelets, Necklaces and Rings",
    description:
      "Looking for wear-forever fashion jewelry? You've come to the right place. Expect necklaces, earrings, rings, and everything in-between with exquisite design details that make a statement, day or night.",
    infoTitle1: "Lorvique Jewelry",
    infoText1:
      "Uncover our mesmerizing jewelry collections, which celebrate 130 years of master craftsmanship and visionary design. The Lorvique universe is where science and magic meet. Explore a selection of bold and playful earrings, bracelets, necklaces, rings, brooches, watches, and jewelry sets.",
    infoTitle2: "Expertly Crafted Jewelry",
    infoText2:
      "Whether you're looking for a gift that captures the imagination or a new piece to express yourself, our refined jewelry is here to inspire. Discover spellbinding designs that have been expertly crafted and finished, including chic cocktail rings, elegant pendants, and eye-catching earrings. Enter a wonderland of color from red and pink to green, yellow, and blue. Discover precision-cut stones, including cushion cut, pear cut, and baguette cut. Each piece is ready to turn fantasy into reality.",
    tags: [
      `Fall-Winter ${new Date().getFullYear()} earrings, necklaces, & rings`,
      "Halloween Jewelry",
      "Jewelry with Black Crystals",
      "Jewelry with Blue Crystals",
      "Jewelry with Green Crystals",
      "Jewelry with Pink Crystals",
      "Jewelry with Red Crystals",
      "Jewelry with White Crystals",
      "Jewelry with Yellow Crystals",
    ],
    promo: {
      image:
        "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=compress&fit=crop&q=80&w=800",
      title: "Charms Collection",
      description:
        "The joy of self-expression gets even more personal with Lorvique Charms",
      buttonText: "Discover more",
    },
  },
  watches: {
    id: "watches",
    heroImage:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=compress&fit=crop&q=80&w=2000",
    breadcrumb: "Home / Watches",
    title: "Watches: Swiss Made Precision & Crystal Brilliance",
    description:
      "Elevate your everyday style with our collection of Swiss-made watches. Fusing masterful craftsmanship with Lorvique's signature crystal brilliance, these timepieces are designed to make every second shine.",
    infoTitle1: "Lorvique Watches",
    infoText1:
      "Discover our exquisite collection of watches, where Swiss precision meets Lorvique’s unmistakable glamour. From sleek, minimalist designs to bold, crystal-encrusted statement pieces, our timepieces are crafted to elevate any outfit.",
    infoTitle2: "Timeless Elegance",
    infoText2:
      "Our watches are more than just timekeepers; they are pieces of jewelry. Featuring premium materials, including stainless steel, rose gold-tone plating, and genuine leather straps, each watch is meticulously assembled to ensure lasting beauty and reliable performance.",
    tags: [
      "Rose Gold Watches",
      "Silver-tone Watches",
      "Crystal Encrusted Watches",
      "Leather Strap Watches",
      "Chronograph Watches",
      "Minimalist Watches",
    ],
    promo: {
      image:
        "https://images.unsplash.com/photo-1587836374828-cb438786dd7e?auto=compress&fit=crop&q=80&w=800",
      title: "The Octea Collection",
      description:
        "Bold angles and brilliant facets define our most iconic watch silhouette.",
      buttonText: "Shop Octea",
    },
  },
  accessories: {
    id: "accessories",
    heroImage:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=compress&fit=crop&q=80&w=2000",
    breadcrumb: "Home / Accessories",
    title: "Accessories: Pens, Smartphone Cases & More",
    description:
      "Add a touch of luxury to your daily essentials. Explore our curated selection of crystal-embellished accessories, from sparkling smartphone cases to elegant writing instruments.",
    infoTitle1: "Lorvique Accessories",
    infoText1:
      "Transform the ordinary into the extraordinary with Lorvique accessories. Our collection brings signature brilliance to everyday items, ensuring you carry a touch of glamour wherever you go.",
    infoTitle2: "Brilliant Details",
    infoText2:
      "Whether you are gifting a loved one or treating yourself, our accessories offer the perfect blend of functionality and style. Discover our dazzling crystalline pens, chic key rings, and protective yet glamorous smartphone cases, all crafted with our renowned precision-cut crystals.",
    tags: [
      "Smartphone Cases",
      "Crystalline Pens",
      "Key Rings",
      "Hair Accessories",
      "Sunglasses",
      "Card Holders",
    ],
    promo: {
      image:
        "https://images.unsplash.com/photo-1542219550-4f8379af5d00?auto=compress&fit=crop&q=80&w=800",
      title: "Tech Accessories",
      description:
        "Protect your devices in brilliant style with our new crystal cases.",
      buttonText: "Shop Tech",
    },
  },
  decorations: {
    id: "decorations",
    heroImage:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=compress&fit=crop&q=80&w=2000",
    breadcrumb: "Home / Decorations",
    title: "Decorations: Home Accents & Crystal Ornaments",
    description:
      "Bring the magic of Lorvique into your home. Discover our enchanting collection of crystal figurines, home decor accents, and festive ornaments that capture the light beautifully.",
    infoTitle1: "Lorvique Home Decor",
    infoText1:
      "Illuminate your living space with our stunning crystal decorations. For over a century, Lorvique has been crafting exquisite figurines and home accents that add a touch of magic and refined elegance to any room.",
    infoTitle2: "Masterful Crystal Creations",
    infoText2:
      "From our iconic animal figurines to contemporary candle holders and intricate floral displays, every piece is a testament to our master cutting techniques. Create a captivating centerpiece or find the perfect collectible to cherish for generations.",
    tags: [
      "Animal Figurines",
      "Floral Decorations",
      "Candle Holders",
      "Festive Ornaments",
      "Disney Collection",
      "Star Wars Collection",
    ],
    promo: {
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=compress&fit=crop&q=80&w=800",
      title: "The Annual Edition",
      description:
        "Continue the tradition with this year’s exclusive crystal ornament.",
      buttonText: "Discover more",
    },
  },
  gifts: {
    id: "gifts",
    heroImage:
      "https://images.unsplash.com/photo-1599643478514-4a4204142abf?auto=compress&fit=crop&q=80&w=2000",
    breadcrumb: "Home / Gifts",
    title: "Gifts: Perfect Presents for Every Occasion",
    description:
      "Celebrate life's special moments with a gift that shines. Explore our curated selection of jewelry, watches, and accessories designed to delight and inspire.",
    infoTitle1: "The Art of Gifting",
    infoText1:
      "Finding the perfect gift is an art, and Lorvique makes it effortless. Whether you are celebrating an anniversary, a birthday, or simply showing someone you care, our brilliant creations are guaranteed to leave a lasting impression.",
    infoTitle2: "Unforgettable Moments",
    infoText2:
      "Explore our curated gift guides to find pieces that perfectly match their style. From timeless necklaces and elegant watches to playful crystal figurines, every Lorvique gift comes in our signature premium packaging, ready to create an unforgettable unboxing experience.",
    tags: [
      "Gifts for Her",
      "Gifts for Him",
      "Romantic Gifts",
      "Birthday Gifts",
      "Anniversary Gifts",
      "Wedding Gifts",
      "Corporate Gifts",
    ],
    promo: {
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=compress&fit=crop&q=80&w=800",
      title: "Gift Sets",
      description:
        "Beautifully paired jewelry sets for the ultimate gesture of love.",
      buttonText: "Shop Sets",
    },
  },
  diamonds: {
    id: "diamonds",
    heroImage:
      "https://images.unsplash.com/photo-1605100804763-247f66122228?auto=compress&fit=crop&q=80&w=2000",
    breadcrumb: "Home / Lorvique Created Diamonds",
    title: "Lorvique Created Diamonds: Lab-Grown Brilliance",
    description:
      "Experience the future of fine jewelry. Our lab-grown diamonds offer the same physical, chemical, and optical characteristics as mined diamonds, crafted with Lorvique's legendary precision.",
    infoTitle1: "Lorvique Created Diamonds",
    infoText1:
      "Step into a new era of luxury with Lorvique Created Diamonds. Grown in a laboratory using innovative technology, these diamonds are 100% real diamonds, offering spectacular brilliance and exceptional purity.",
    infoTitle2: "Conscious Luxury",
    infoText2:
      "Our created diamonds are a testament to our commitment to innovation and conscious luxury. Set in 14k or 18k gold, each piece in this fine jewelry collection is designed to be cherished forever. Discover breathtaking engagement rings, timeless tennis bracelets, and elegant stud earrings that radiate pure light.",
    tags: [
      "Engagement Rings",
      "Diamond Necklaces",
      "Diamond Earrings",
      "Tennis Bracelets",
      "18k Gold",
      "14k White Gold",
      "Cushion Cut Diamonds",
    ],
    promo: {
      image:
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=compress&fit=crop&q=80&w=800",
      title: "The Galaxy Collection",
      description:
        "Stellar designs featuring our most brilliant lab-grown diamonds.",
      buttonText: "Explore Galaxy",
    },
  },
};

