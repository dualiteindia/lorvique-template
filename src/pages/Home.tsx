import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrandStatement from "../components/BrandStatement";
import CategoryGrid from "../components/CategoryGrid";
import ProductCarousel from "../components/ProductCarousel";
import FeatureSplit from "../components/FeatureSplit";
import CategoryShowcase from "../components/CategoryShowcase";
import EditorialSection from "../components/EditorialSection";
import Services from "../components/Services";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

// Mock Data for Carousels using extracted real Swarovski CDN links
const classicProducts = [
  {
    id: "1",
    name: "Kris Bear You and I",
    description: "Clear crystal",
    price: "$ 125.00",
    tag: "New",
    images: [
      "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5536772/kris-bear-you-and-i-swarovski-5536772.jpg",
    ],
  },
  {
    id: "2",
    name: "Lorvique Iconic Swan pendant",
    description: "Swan, Small, White",
    price: "$ 125.00",
    tag: "New",
    images: [
      "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5647553/swarovski-iconic-swan-pendant--swan--small--white--rose-gold-tone-plated-swarovski-5647553.jpg",
    ],
  },
  {
    id: "4",
    name: "Enchanted Rose",
    description: "Red crystal, Glass dome",
    price: "$ 215.00",
    images: [
      "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5230478/enchanted-rose-swarovski-5230478.jpg",
    ],
  },
  {
    id: "5",
    name: "Matrix Tennis bracelet",
    description: "Round cut, White",
    price: "$ 175.00",
    images: [
      "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5648937/matrix-tennis-bracelet--round-cut--white--rhodium-plated-swarovski-5648937.jpg",
    ],
  },
];

const haileyCollection = [
  {
    id: "6",
    name: "Dextera hoop earrings",
    description: "Octagon shape, White",
    price: "$ 165.00",
    images: [
      "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5618306/dextera-hoop-earrings--octagon-shape--white--gold-tone-plated-swarovski-5618306.jpg",
    ],
  },
  {
    id: "7",
    name: "Millenia necklace",
    description: "Octagon cut, White",
    price: "$ 145.00",
    images: [
      "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5599177/millenia-necklace--octagon-cut--white--rhodium-plated-swarovski-5599177.jpg",
    ],
  },
  {
    id: "8",
    name: "Constella stud earrings",
    description: "Round cut, White",
    price: "$ 85.00",
    images: [
      "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5636269/constella-stud-earrings--round-cut--white--rhodium-plated-swarovski-5636269.jpg",
    ],
  },
];

const shareTheLove = [
  {
    id: "10",
    name: "Volta bow pendant",
    description: "Bow, Small, White",
    price: "$ 145.00",
    tag: "New",
    images: [
      "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5647583/volta-pendant--bow--small--white--rhodium-plated-swarovski-5647583.jpg",
    ],
  },
  {
    id: "11",
    name: "Attract ring",
    description: "Round cut, White",
    price: "$ 95.00",
    tag: "New",
    images: [
      "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5032915/attract-ring--round-cut--white--rhodium-plated-swarovski-5032915.jpg",
    ],
  },
  {
    id: "12",
    name: "Sparkling Dance set",
    description: "Round cut, White",
    price: "$ 285.00",
    tag: "New",
    images: [
      "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5279018/sparkling-dance-set--round-cut--white--rhodium-plated-swarovski-5279018.jpg",
    ],
  },
];

const Home = () => {
  return (
    <div className="font-serif min-h-screen bg-lorvique-light selection:bg-lorvique-dark selection:text-white">
      <Navbar theme="dark" />
      <main>
        <Hero />

        {/* Divider Bar */}
        <div className="w-full h-[2px] bg-lorvique-beige"></div>

        <BrandStatement />
        <CategoryGrid />

        <ProductCarousel
          title="Eye-Catching Classics"
          products={classicProducts}
        />

        <FeatureSplit
          image="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/Luxury_Amber_Ring_Video_Generation-1.webm"
          isVideo={true}
          subtitle="ENTER THE FANTASY"
          title="Hailey Bieber x Lorvique"
          description={`Discover the new Hailey Bieber x Lorvique Capsule collection coming on March 17th, ${new Date().getFullYear()}. Become a Lorvique Club member to enjoy access to exclusive pieces from the new collection*. Sign up and get ready to shop. *Exclusive to Club members until June 17, ${new Date().getFullYear()}`}
          links={[{ label: "Sign up", url: "#" }]}
        />

        <ProductCarousel
          title="Hailey Bieber x Lorvique Capsule Collection"
          products={haileyCollection}
        />

        <ProductCarousel title="Share the Love" products={shareTheLove} />

        <FeatureSplit
          image="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/38bf64b86679767085b6c7820ef7d719.webp"
          subtitle="GIFT LOVE"
          title="Lorvique Created Diamonds"
          description="Say yes to the season of love with Lorvique Created Diamonds and gift heart-cut laboratory grown diamonds. Set in precious metal, each beautifully crafted piece is cut for brilliance."
          links={[
            { label: "Shop now", url: "#" },
            { label: "Gift Finder", url: "#" },
          ]}
        />

        <CategoryShowcase />
        <EditorialSection />
        <Services />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

