import { baseApi as api } from "./base-api";

export const addTagTypes = ["auth-controller"] as const;

const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      logout: build.mutation({
        query: () => ({
          url: `/api/auth/logout`,
          method: "POST",
          responseHandler: (response: any) => response,
        }),

        invalidatesTags: ["auth-controller"],
      }),
      adminUserLogin: build.mutation({
        query: (queryArg) => ({
          url: `/api/auth/admin`,
          method: "POST",
          body: queryArg.authRequest,
        }),
        invalidatesTags: ["auth-controller"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as loginApi };

export const { useLogoutMutation, useAdminUserLoginMutation } = injectedRtkApi;
