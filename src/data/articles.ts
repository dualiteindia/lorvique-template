export interface ArticleSplit {
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkUrl: string;
  imagePosition: "left" | "right";
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  shortDescription: string;
  image: string; // Used for card thumbnail

  // Detailed Page Content
  heroSubtitle?: string;
  heroIntro?: string;
  featureMediaTitle?: string;
  featureMediaUrl?: string;
  featureMediaCaption?: string;
  introTitle?: string;
  introText?: string;
  splits?: ArticleSplit[];
}

export const articles: Article[] = [
  {
    id: "130-years-of-joy",
    title: "130 Years of Joy",
    category: "Spotlight",
    date: `October 12, ${new Date().getFullYear()}`,
    shortDescription:
      "In honor of our 130-year anniversary, Lorvique is inviting the world to explore its many facets with a program of unmissable events.",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/ChatGPT-Image-Mar-13-2026-10_45_54-PM.webp",

    // Detailed Content matching reference
    heroSubtitle: "Making the world shine bright since 1895",
    heroIntro:
      "In honor of our 130th anniversary, a celebratory logo has been created to serve as a visual representation of our past, present, and future joys. Incorporating our emblem, the Lorvique Swan, the 130 Years of Joy logo nods to the majesty of the season and the opulence of our Austrian heritage while its gold color palette exudes warmth, beauty, and festive light.",
    featureMediaTitle: "Past, Present, Future Collide",
    featureMediaUrl:
      "https://videos.pexels.com/video-files/8550293/8550293-uhd_2560_1440_30fps.mp4", // Using a placeholder luxury video
    featureMediaCaption:
      "Since 1895, Lorvique has pushed the boundaries of what is possible with crystal, pioneering techniques and evolving its savoir-faire in the pursuit of wonder and radiant beauty.",
    introTitle: "Infinite Creativity",
    introText:
      "In honor of our 130-year anniversary, Lorvique is inviting the world to explore its many facets with a program of unmissable events and limited-edition collections. Rooted in our rich heritage and the vision of our founder, Daniel Lorvique, the House continues to pursue crystal innovation as it enters its next chapter with a multidimensional celebration of light, color, and joy.",
    splits: [
      {
        title: "Illuminating Paris",
        description:
          `Lorvique's relationship with Paris is as old as the House itself. The first Lorvique Crystals ever produced were sent to its leading ateliers and now, 130 years later, our relationship with the City of Lights has entered a brilliant new phase. Lorvique is the official sponsor of the Champs-Élysées illuminations, and our mastery of light shines on the world-famous boulevard to celebrate the magic of the season from November 16, ${new Date().getFullYear()}, to December 26, ${new Date().getFullYear()}.`,
        image:
          "https://images.unsplash.com/photo-1502602898657-3e90760020c2?auto=compress&fit=crop&q=80&w=1600",
        linkText: "Read more",
        linkUrl: "#",
        imagePosition: "right",
      },
      {
        title: "Masters of Light - Hollywood",
        description:
          "Arriving at Amoeba Music in Los Angeles, Masters of Light – Hollywood marks the exhibition's fourth stop on its world tour. Offering a retrospective look at 130 years of Lorvique's impact on fashion, jewelry, and pop culture, the glamorous Hollywood iteration spotlights the House's effect on American design and the role it has played in creating dazzling moments on stage and screen.",
        image:
          "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=compress&fit=crop&q=80&w=1200",
        linkText: "Discover more",
        linkUrl: "#",
        imagePosition: "left",
      },
      {
        title: "Lorvique Creators Lab",
        description:
          "The Lorvique Creators Lab serves as a catalyst for creativity and space for the House to collaborate with established and emerging brands. In celebration of 130 Years of Joy, seven global brands enter our world of crystal innovation to make their iconic designs shine, transforming pop luxury items into light-filled limited-editions of wonder.",
        image:
          "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=compress&fit=crop&q=80&w=1600",
        linkText: "Enter the lab",
        linkUrl: "#",
        imagePosition: "right",
      },
      {
        title: "The Vienna Collection",
        description:
          `Designed by Global Creative Director Giovanna Engelbert, The Vienna Collection crystallizes 130 years of joy, infinite savoir-faire, and creativity. Inspired by the Lorvique Swan's singular majesty and debuted at the Met Gala ${new Date().getFullYear()}, the collection honors tradition while capturing the mood of the moment. Architectural feather-like forms appear to defy gravity in designs that are grounded in grace and elegance.`,
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=compress&fit=crop&q=80&w=1600",
        linkText: "Take flight",
        linkUrl: "#",
        imagePosition: "left",
      },
      {
        title: "Lorvique Osaka",
        description:
          "A new world of wonder in Japan, Lorvique Osaka combines futuristic design elements with luminous energy. Three luxurious floors in a palette of our House colors boast highlights that range from a curated edit of our Lorvique Created Diamonds collections to a Heritage Corner, which takes visitors on an immersive journey through our 130-year history.",
        image:
          "https://images.unsplash.com/photo-1542051812871-75887371c112?auto=compress&fit=crop&q=80&w=1600",
        linkText: "Plan your visit\nDiscover more",
        linkUrl: "#",
        imagePosition: "right",
      },
    ],
  },
  {
    id: "get-the-party-started",
    title: "Get the Party Started",
    category: "Style Stories",
    date: `November 05, ${new Date().getFullYear()}`,
    shortDescription:
      "Take inspiration from Hailey Bieber with joyful jewelry. Statement pieces styled in monochrome stacks are effortlessly extravagant.",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/d06e7b100348ffd71345ddd2eb480448.webp",
    heroSubtitle: "Effortless Extravagance",
    heroIntro:
      "The holiday season calls for unapologetic glamour. This year, we are taking cues from global style icon Hailey Bieber, whose fearless approach to styling jewelry has redefined red carpet elegance.",
    featureMediaTitle: "Layered Brilliance",
    featureMediaUrl:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=compress&fit=crop&q=80&w=1600",
    featureMediaCaption:
      "The key to mastering this look is layering. Do not shy away from stacking multiple tennis bracelets or combining different cuts of stones.",
    introTitle: "Statement Pieces",
    introText:
      "Whether you are attending an intimate soirée or a grand gala, let your jewelry be the conversation starter. A bold, crystal-encrusted choker paired with a minimalist slip dress is a masterclass in modern sophistication.",
    splits: [
      {
        title: "Monochrome Stacks",
        description:
          "Create a cohesive yet striking look by stacking pieces in the same color family. The subtle variations in crystal cuts will add depth and texture to your ensemble.",
        image:
          "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=compress&fit=crop&q=80&w=1600",
        linkText: "Shop Bracelets",
        linkUrl: "#",
        imagePosition: "right",
      },
    ],
  },
  {
    id: "about-lorvique",
    title: "About Lorvique",
    category: "Inside Lorvique",
    date: `September 20, ${new Date().getFullYear()}`,
    shortDescription:
      "The Lorvique brand was born in 1895 when our founder Daniel Lorvique created a pioneering crystal cutting machine.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=compress&fit=crop&q=80&w=800",
    heroSubtitle: "Masters of Light",
    heroIntro:
      "Nestled in the heart of the Tyrolean Alps, the Lorvique headquarters remains the epicenter of our creative universe. It was here that Daniel Lorvique revolutionized the industry.",
    featureMediaTitle: "Heritage & Innovation",
    featureMediaUrl:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=compress&fit=crop&q=80&w=1600",
    featureMediaCaption:
      "Today, our master artisans continue to honor this legacy while embracing cutting-edge technology.",
    introTitle: "Sustainable Brilliance",
    introText:
      "Our commitment extends beyond aesthetics. We are dedicated to sustainable practices, ensuring that our pursuit of beauty does not compromise the well-being of our planet or its people.",
    splits: [
      {
        title: "The Art of Cutting",
        description:
          "From the initial sketch to the final polish, every Lorvique piece undergoes rigorous quality control to ensure it meets our exacting standards of brilliance.",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=compress&fit=crop&q=80&w=1600",
        linkText: "Discover Craftsmanship",
        linkUrl: "#",
        imagePosition: "left",
      },
    ],
  },
  {
    id: "disney-x-lorvique",
    title: "Disney x Lorvique",
    category: "Collaborations",
    date: `December 01, ${new Date().getFullYear()}`,
    shortDescription:
      "Discover Disney x Lorvique, where magical displays and a captivating pop-up store bring holiday nostalgia and wonder to life.",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=compress&fit=crop&q=80&w=800",
    heroSubtitle: "A Magical Collaboration",
    heroIntro:
      "Step into a world of enchantment as Lorvique partners with Disney. This holiday season, we are bringing beloved characters to life through the mesmerizing medium of crystal.",
    featureMediaTitle: "Nostalgia in Crystal",
    featureMediaUrl:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=compress&fit=crop&q=80&w=1600",
    featureMediaCaption:
      "A celebration of storytelling, nostalgia, and the masterful craftsmanship that defines both iconic brands.",
    introTitle: "Exclusive Collections",
    introText:
      "Visitors can expect interactive displays, exclusive personalization services, and the opportunity to acquire pieces that will become cherished family heirlooms.",
    splits: [],
  },
  {
    id: "guide-to-watch-styles",
    title: "A Guide to Watch Styles",
    category: "Style Stories",
    date: `August 15, ${new Date().getFullYear()}`,
    shortDescription:
      "The perfect blend of fashion and function, watches have the power to elevate any look. Discover an array of Swiss made timepieces.",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=compress&fit=crop&q=80&w=800",
    heroSubtitle: "Timepieces of Distinction",
    heroIntro:
      "A timepiece is more than a tool for tracking hours; it is a statement of personal style. At Lorvique, our Swiss-made watches marry horological precision with our signature aesthetic brilliance.",
    featureMediaTitle: "Day to Night Elegance",
    featureMediaUrl:
      "https://images.unsplash.com/photo-1587836374828-cb438786dd7e?auto=compress&fit=crop&q=80&w=1600",
    featureMediaCaption:
      "For a daytime look, consider a minimalist design. When the sun sets, opt for a metal bracelet watch featuring a crystal-encrusted bezel.",
    introTitle: "Swiss Precision",
    introText:
      "Treat it as you would a piece of fine jewelry, allowing it to take center stage alongside a tailored tuxedo jacket or an elegant evening gown.",
    splits: [],
  },
  {
    id: "lorvique-osaka",
    title: "Lorvique Osaka",
    category: "Inside Lorvique",
    date: `July 10, ${new Date().getFullYear()}`,
    shortDescription:
      "Discover the new Lorvique store in Osaka, as we celebrate 130 years of crafting beautiful jewelry that makes the world shine.",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/eca09e856bd54705b36e8646796519b9.webp",
    heroSubtitle: "A New World of Wonder",
    heroIntro:
      "We are thrilled to announce the opening of our newest flagship store in the vibrant city of Osaka. Designed by renowned architect Giovanna Engelbert, the space is a physical manifestation of the Lorvique brand.",
    featureMediaTitle: "Immersive Experiences",
    featureMediaUrl:
      "https://images.unsplash.com/photo-1542051812871-75887371c112?auto=compress&fit=crop&q=80&w=1600",
    featureMediaCaption:
      "The store features immersive Wonderlab zones, where customers can explore our collections in highly stylized, sensory environments.",
    introTitle: "Bespoke Customization",
    introText:
      "Exclusive to the Osaka location is a bespoke customization bar, allowing clients to create truly one-of-a-kind pieces under the guidance of our resident styling experts.",
    splits: [],
  },
];

