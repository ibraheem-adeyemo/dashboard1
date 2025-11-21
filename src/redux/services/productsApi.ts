import { baseApi } from "./base-api";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating?: number;
  reviews?: number;
  badge?: string;
  inStock: boolean;
  categoryId: string;
  category?: string;
  brand?: string;
  sku?: string;
  stock?: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

export interface ProductsQueryParams {
  page?: number;
  limit?: number;
  categoryId?: string;
  search?: string;
  sortBy?: 'price' | 'name' | 'rating' | 'newest';
  order?: 'asc' | 'desc';
  minPrice?: number;
  maxPrice?: number;
}

type Builder = ReturnType<typeof baseApi["injectEndpoints"]> extends {
    endpoints: (builder: infer T) => any;
  }
    ? T
    : never;

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, ProductsQueryParams>({
      query: (params) => ({
        url: '/products',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.products.map(({ id }) => ({ type: 'Products' as const, id })),
              { type: 'Products', id: 'LIST' },
            ]
          : [{ type: 'Products', id: 'LIST' }],
    }),

    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Products', id }],
    }),

    searchProducts: builder.query<ProductsResponse, string>({
      query: (searchTerm) => ({
        url: '/products/search',
        params: { q: searchTerm },
      }),
    }),

    getFeaturedProducts: builder.query<Product[], void>({
      query: () => '/products/featured',
      providesTags: [{ type: 'Products', id: 'FEATURED' }],
    }),

    getProductsByCategory: builder.query<ProductsResponse, string>({
      query: (categoryId) => `/products/category/${categoryId}`,
      providesTags: (result, error, categoryId) => [
        { type: 'Products', id: categoryId },
      ],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
  useGetFeaturedProductsQuery,
  useGetProductsByCategoryQuery,
} = productsApi;
