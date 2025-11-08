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
