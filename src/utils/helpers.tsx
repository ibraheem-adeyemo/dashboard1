import { deleteCookie, setCookie } from 'cookies-next';
import { format, getDate } from 'date-fns';
import dayjs from 'dayjs';
import { StorageKeys } from '@/constants/enums';
import StatusPill from '@/components/ui/table/status-pill';

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
    {value: 'Electronics', label: 'Electronics'},
    {value: 'Fashion', label: 'Fashion'},
    {value: 'Home & Kitchen', label: 'Home & Kitchen'},
    {value: 'Beauty & Health', label: 'Beauty & Health'},
    {value: 'Sports & Outdoors', label: 'Sports & Outdoors'},
    {value: 'Automotive', label: 'Automotive'},
    {value:'Toys & Games', label:'Toys & Games'},
    {value:'Books', label:'Books'},
    {value:'Office Supplies', label:'Office Supplies'},
    {value:'Groceries', label:'Groceries'},
  ];
  
  export const BRAND_OPTIONS = [
    {value:'Samsung', label: 'Samsung'},
    {value: 'Apple', label: 'Apple'},
    {value:'Sony', label: 'Sony'},
    {value: 'LG', label: 'LG'},
    {value: 'Nike', label: 'Nike'},
    {value: 'Adidas', label: 'Adidas'},
    {value: 'Dell', label: 'Dell'},
    {value: 'HP', label: 'HP'},
    {value: 'Nestle', label: 'Nestle'},
    {value: 'Puma', label: 'Puma'},
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
      description: `High-quality ${randomCategory.value.toLowerCase()} product by ${randomBrand}. Durable, efficient, and ideal for daily use.`,
      category: randomCategory,
      brand: randomBrand,
      sku: `${randomBrand.value.slice(0, 3).toUpperCase()}-${i + 1000}`,
      stockQuantity: Math.floor(Math.random() * 500) + 1,
      regularPrice: parseFloat((Math.random() * 500 + 50).toFixed(2)),
      salePrice: parseFloat((Math.random() * 300 + 20).toFixed(2)),
      TaxStatus: randomTaxStatus,
      TaxClass: randomTaxClass,
      tags: [
        randomCategory.value.toLowerCase(),
        randomBrand.value.toLowerCase(),
        i % 2 === 0 ? 'featured' : 'new',
      ],
      imgUrl: [
        `https://picsum.photos/seed/product${i + 1}/600/400`,
        `https://picsum.photos/seed/product${i + 1}-alt/600/400`,
      ],
    };
  });
  

export const getNameInitials = (name: string) =>
  name
    ?.trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

export function getDaySuffix(day: number): string {
  if ([1, 21, 31].includes(day)) return 'st';
  if ([2, 22].includes(day)) return 'nd';
  if ([3, 23].includes(day)) return 'rd';
  return 'th';
}

export function getDayWithSuffix(date: Date) {
  const day = getDate(date);
  return `${day}${getDaySuffix(day)}`;
}

export const formatDate = (date: Date) => {
  const dayWithSuffix = getDayWithSuffix(date);
  return `${format(date, 'MMM')} ${dayWithSuffix}, ${format(date, 'yyyy')}`;
};

export const formatLabel = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/Id$/i, ' ID')
    .replace(/Pan$/i, ' PAN');
};

export const formatValue = (key: string, val: unknown) => {
  if (key.toLowerCase().includes('status') || key.toLowerCase() === 'changetype') {
    return <StatusPill text={String(val)} isLoading={false} />;
  }
  if (key.toLowerCase() === 'country') {
    return getCountryFullName(val as string);
  }
  if (val instanceof Date) {
    return dayjs(val).format('DD/MM/YYYY, HH:mm:ss');
  }
  if (typeof val === 'boolean') {
    return val ? 'Yes' : 'No';
  }
  if (val === null || val === undefined) {
    return 'N/A';
  }
  return String(val);
};

export const storageService = () => {
  return {
    setLoginData: (token: string) => {
      sessionStorage.setItem(StorageKeys.SESSION_TOKEN, token);
      setCookie(StorageKeys.SESSION_TOKEN, token);
    },
    clearLoginData: () => {
      sessionStorage.removeItem(StorageKeys.SESSION_TOKEN);
      deleteCookie(StorageKeys.SESSION_TOKEN);
    },
    setSessionItem: (key: string, value: string) => {
      sessionStorage.setItem(key, value);
    },
    getSessionItem: (key: string) => {
      return sessionStorage?.getItem(key);
    },
    removeSessionItem: (key: string) => {
      sessionStorage.removeItem(key);
    },
    setLocalItem: (key: string, value: string) => {
      localStorage.setItem(key, value);
    },
    getLocalItem: (key: string) => {
      return localStorage.getItem(key);
    },
    removeLocalItem: (key: string) => {
      localStorage.removeItem(key);
    },
  };
};

export function getCountryFullName(abbreviation: string): string {
  const countryMap: Record<string, string> = {
    UG: 'Uganda',
    NG: 'Nigeria',
    GH: 'Ghana',
    KY: 'Kenya',
  };

  return countryMap[abbreviation.toUpperCase()] || 'Unknown Country';
}

export const formatDateToDDMMYYYY = (
  date: string | undefined,
  options?: {
    includeTime?: boolean;
    timeFormat?: string;
  },
): string | undefined => {
  if (!date) return undefined;
  try {
    // Parse the date assuming it's in ISO format or similar
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return undefined;

    // Format to dd-MM-yyyy
    let formatString = 'dd-MM-yyyy';

    // Add time format if includeTime is true
    if (options?.includeTime) {
      formatString += ` ${options.timeFormat || 'HH:mm:ss'}`;
    }

    return format(parsedDate, formatString);
  } catch {
    return undefined;
  }
};

export const formatDateForBackend = (date: Date) => {
  // dd-MM-yyyy HH:mm:ss format
  if (!date) return '';

  const parsed = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(parsed.getTime())) return ''; // invalid date fallback

  const pad = (n: number) => n.toString().padStart(2, '0');

  const day = pad(parsed.getDate());
  const month = pad(parsed.getMonth() + 1);
  const year = parsed.getFullYear();
  const hours = pad(parsed.getHours());
  const minutes = pad(parsed.getMinutes());
  const seconds = pad(parsed.getSeconds());

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};



export function convertDate(input: string): string {
  // Parse input string
  const [datePart, timePart] = input.split(' ');
  const [day, month, year] = datePart.split('-').map(Number);
  const [hours, minutes, seconds] = timePart.split(':').map(Number);

  // Create date object in UTC
  const date = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));

  // Validate date
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format: DD-MM-YYYY HH:mm:ss');
  }
  date.setUTCDate(date.getUTCDate() + 32);
  date.setUTCHours(date.getUTCHours() + 23);
  date.setUTCMilliseconds(date.getUTCMilliseconds() + 228);

  return date.toISOString();
}

export function isIpAddress(value: string): boolean {
  // IPv4 pattern
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;

  // IPv6 pattern (including zone index like %0)
  const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}(%\w+)?$/;

  // IPv6 compressed format (::1)
  const ipv6CompressedPattern = /^::1(%\w+)?$/;

  // IPv6 loopback with zone index (0:0:0:0:0:0:0:1%0)
  const ipv6LoopbackWithZone = /^0{1,4}(:0{1,4}){5,7}%\d+$/;

  return (
    ipv4Pattern.test(value) ||
    ipv6Pattern.test(value) ||
    ipv6CompressedPattern.test(value) ||
    ipv6LoopbackWithZone.test(value)
  );
}


/**
 * Converts an action type constant (e.g., "VIEW_ACTIONS_LOGS")
 * into a capitalized string (e.g., "View Actions Logs").
 */
export function formatActionType(action: string): string {
  if (!action) return "";

  return action
    .toLowerCase()
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

