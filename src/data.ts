export const categories = [
  { id: 'bags', title: 'Bags', description: 'Timeless travel companions and professional bags, hand-shaped from top-grain leather.' },
  { id: 'gloves', title: 'Gloves', description: 'Perfectly-tailored leather gloves, lined with fine cashmere and stitched for a supple grip.' },
  { id: 'belts', title: 'Belts', description: 'Durable bridle leather and suede belts, completed with hand-burnished solid brass buckles.' }
];

export interface ShowroomProduct {
  id: string;
  name: string;
  category: 'bags' | 'gloves' | 'belts';
  description: string;
  image: string;
  features: string[];
}

type CategoryId = 'bags' | 'gloves' | 'belts';

const loadLocalImages = (folder: string) => {
  const imageEntries = Object.entries(
    import.meta.glob('../public/products/bags/*.jpg', { eager: true, import: 'default' }) as Record<string, string>
  );

  return imageEntries
    .map(([path, src]) => ({ path, src }))
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(({ src }) => src);
};

const bagImages = Object.entries(
  import.meta.glob('../public/products/bags/*.jpg', { eager: true, import: 'default' }) as Record<string, string>
)
  .map(([path, src]) => ({ path, src }))
  .sort((a, b) => a.path.localeCompare(b.path))
  .map(({ src }) => src);

const beltImages = Object.entries(
  import.meta.glob('../public/products/belts/*.jpg', { eager: true, import: 'default' }) as Record<string, string>
)
  .map(([path, src]) => ({ path, src }))
  .sort((a, b) => a.path.localeCompare(b.path))
  .map(({ src }) => src);

const gloveImages = Object.entries(
  import.meta.glob('../public/products/gloves/*.jpg', { eager: true, import: 'default' }) as Record<string, string>
)
  .map(([path, src]) => ({ path, src }))
  .sort((a, b) => a.path.localeCompare(b.path))
  .map(({ src }) => src);

const categoryImageMap: Record<CategoryId, string[]> = {
  bags: bagImages,
  gloves: gloveImages,
  belts: beltImages
};

const categoryTemplates: Record<CategoryId, Array<{ name: string; description: string; features: string[] }>> = {
  bags: [
    {
      name: 'The Classic Briefcase',
      description: 'Designed for modern professionals, this briefcase merges timeless structure with absolute utility. Featuring solid brass hardware and reinforced hand-burnished edges.',
      features: ['Solid brass buckles', 'Dedicated laptop compartment', 'Hand-stitched handles']
    },
    {
      name: 'Heritage Travel Duffle',
      description: 'A spacious, travel-ready companion crafted from rugged, oil-tanned leather. It features an adjustable shoulder strap and double-stitched stress points for a lifetime of journeying.',
      features: ['Water-resistant linen lining', 'YKK metal zippers', 'Reinforced leather base']
    },
    {
      name: 'Minimalist Leather Backpack',
      description: 'Combining structured clean lines with ergonomics, this top-grain leather backpack has cushioned straps and a secret external passport pocket.',
      features: ['Padded straps', 'Hidden magnetic closure', 'Anti-scuff metal feet']
    },
    {
      name: 'Sleek Document Portfolio',
      description: 'An understated leather envelope tailored to protect tablets, digital pens, and legal pads. Designed for the minimal and high-impact boardroom presentation.',
      features: ['Ultra-slim profile', 'Waxed linen thread details', 'Secure button-stud clasp']
    }
  ],
  gloves: [
    {
      name: 'Cashmere Driving Gloves',
      description: 'Supple lambskin leather is precisely shaped and combined with a 100% cashmere knit lining to provide both elegant flexibility and cold-weather insulation.',
      features: ['Touchscreen-compatible fingertips', 'Elastic wrist snugs', 'Hand-punched ventilation holes']
    },
    {
      name: 'Artisan Dress Gloves',
      description: 'Featuring hand-stitched points along the back and premium pique sewing, these gloves form perfectly to the contours of your hands over time.',
      features: ['Top-grade aniline leather', 'Silk-blend inner lining', 'Reinforced thumb seam']
    },
    {
      name: 'Winter Shearling Mittens',
      description: 'Fully natural merino sheepskin shearling mittens, offering ultimate plush insulation for cold mountain walks or blustery winter evenings.',
      features: ['100% genuine merino sheepskin', 'Turn-back shearling cuffs', 'Suede exterior treatment']
    }
  ],
  belts: [
    {
      name: 'Hand-Stitched Dress Belt',
      description: 'Tailored with precision, this belt boasts a feathered edge profile and beautiful wax-thread saddle stitching. Paired with a solid, polished brass buckle.',
      features: ['Full-grain English bridle leather', 'Saddle stitched by hand', 'Interchangeable buckle system']
    },
    {
      name: 'Rugged Utility Bridle Belt',
      description: 'Crafted from heavyweight, 10oz vegetable-tanned steerhide. Destined to develop an incredibly rich caramel patina as it adapts to your daily wear.',
      features: ['10oz heavy steerhide', 'Solid copper rivets', 'Hand-burnished wax edges']
    }
  ]
};

const createCategoryProducts = (category: CategoryId, images: string[]): ShowroomProduct[] =>
  images.map((image, index) => {
    const template = categoryTemplates[category][index % categoryTemplates[category].length];
    const productIndex = index + 1;

    return {
      id: `${category}-${productIndex}`,
      name: index < categoryTemplates[category].length ? template.name : `${template.name} ${productIndex}`,
      category,
      description: template.description,
      image,
      features: template.features
    };
  });

export const galleryImages = [...bagImages, ...gloveImages, ...beltImages];

export const showroomProducts: ShowroomProduct[] = (['bags', 'gloves', 'belts'] as CategoryId[]).flatMap((category) =>
  createCategoryProducts(category, categoryImageMap[category])
);
