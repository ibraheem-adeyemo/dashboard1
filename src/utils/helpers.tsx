export function cleanGlobals(globalSet: Record<string, any>) {
  const cleaned: Record<string, any> = {};
  for (const key in globalSet) {
    const trimmed = key.trim();
    if (trimmed) {
      cleaned[trimmed] = globalSet[key];
    }
  }
  return cleaned;
}

export const products = Array.from({ length: 100 }, (_, i) => {
  const id = String(i + 1).padStart(5, "0");
  const image = `/images/product-${(i % 10) + 1}.png`; // rotate 1–10 images
  const productNames = [
    "Adire Ankara Fabric",
    "Ofada Rice (Local)",
    "Palm Oil Bottle",
    "Yam Flour (Elubo)",
    "Efo Riro Seasoning Pack",
    "Fufu Powder",
    "Handwoven Aso Oke",
    "Kente Head Tie",
    "Electric Garri Blender",
    "Agbada Outfit Set",
    "Wooden Talking Drum",
    "Coconut Oil Jar",
    "Local Shea Butter (Ori)",
    "Beaded Yoruba Necklace",
    "Tigernut Drink Pack",
    "Portable Bluetooth Speaker",
    "Rechargeable Lantern",
    "Smartphone Power Bank",
    "Leather Palm Slippers",
    "Bata Yoruba Drum",
  ];

  const name = productNames[i % productNames.length];
  const sku = `NG-${10000 + i}`;
  const price = (Math.floor(Math.random() * 70_000) + 3_000).toString(); // ₦3,000–₦73,000
  const status = Math.random() > 0.1 ? "active" : "inactive"; // 90% active
  const qty = Math.floor(Math.random() * 500) + 50;
  const ratings = Math.floor(Math.random() * 5) + 1;
  const allOders = Math.floor(Math.random() * 1000) + 50;
  const successfulOrder = Math.floor(Math.random() * 100);
  const description = `Authentic ${name} made in Nigeria, perfect for Yoruba homes and markets.`;

  return {
    id,
    image,
    name,
    sku,
    price: `₦${price}`,
    status,
    qty,
    ratings,
    allOders,
    successfulOrder,
    description,
  };
});
  
export const CATEGORY_OPTIONS = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Beauty & Health',
    'Sports & Outdoors',
    'Automotive',
    'Toys & Games',
    'Books',
    'Office Supplies',
    'Groceries',
  ];
  
  export const BRAND_OPTIONS = [
    'Samsung',
    'Apple',
    'Sony',
    'LG',
    'Nike',
    'Adidas',
    'Dell',
    'HP',
    'Nestle',
    'Puma',
  ];
  
  export const TAX_STATUS_OPTIONS = ['Taxable', 'Shipping only', 'None'];
  
  export const TAX_CLASS_OPTIONS = [
    'Standard Rate',
    'Reduced Rate',
    'Zero Rate',
  ];

  
  export const mockProducts = Array.from({ length: 50 }, (_, i) => {
    const randomCategory =
      CATEGORY_OPTIONS[Math.floor(Math.random() * CATEGORY_OPTIONS.length)];
    const randomBrand =
      BRAND_OPTIONS[Math.floor(Math.random() * BRAND_OPTIONS.length)];
    const randomTaxStatus =
      TAX_STATUS_OPTIONS[Math.floor(Math.random() * TAX_STATUS_OPTIONS.length)];
    const randomTaxClass =
      TAX_CLASS_OPTIONS[Math.floor(Math.random() * TAX_CLASS_OPTIONS.length)];
  
    return {
      id: `prod-${i + 1}`,
      productName: `${randomBrand} ${randomCategory} Item ${i + 1}`,
      description: `High-quality ${randomCategory.toLowerCase()} product by ${randomBrand}. Durable, efficient, and ideal for daily use.`,
      category: randomCategory,
      brand: randomBrand,
      sku: `${randomBrand.slice(0, 3).toUpperCase()}-${i + 1000}`,
      stockQuantity: Math.floor(Math.random() * 500) + 1,
      regularPrice: parseFloat((Math.random() * 500 + 50).toFixed(2)),
      salePrice: parseFloat((Math.random() * 300 + 20).toFixed(2)),
      TaxStatus: randomTaxStatus,
      TaxClass: randomTaxClass,
      tags: [
        randomCategory.toLowerCase(),
        randomBrand.toLowerCase(),
        i % 2 === 0 ? 'featured' : 'new',
      ],
      imgUrl: [
        `https://picsum.photos/seed/product${i + 1}/600/400`,
        `https://picsum.photos/seed/product${i + 1}-alt/600/400`,
      ],
    };
  });
  