import { StorageKeys } from '@/constants/enums';
import { storageService } from '@/helpers/helpers';
import { ApiResponse } from '@/types/requests';
import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_APP_API_SERVICE_BASE_URL,
  prepareHeaders: (headers) => {
    const token = storageService().getSessionItem(StorageKeys.SESSION_TOKEN);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const authProtectedBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  const responseData = result.data as ApiResponse | undefined;
  const statusCode = result?.error?.status;

  const isInvalidSession =
    responseData?.code === 30 && responseData.description === 'Invalid Session';

  const isUnauthorized = statusCode === 401;

  if (isInvalidSession || isUnauthorized) {
    storageService().clearLoginData();

    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: authProtectedBaseQuery,
  tagTypes: ['Products', 'Cart', 'Wishlist', 'User', 'Orders'],
  endpoints: () => ({}),
});
