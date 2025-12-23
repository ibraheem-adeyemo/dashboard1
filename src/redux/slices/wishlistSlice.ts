import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: string[]; // Product IDs
}

const initialState: WishlistState = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state: WishlistState, action: PayloadAction<string>) => {
      const index = state.items.indexOf(action.payload);

      if (index > -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },

    addToWishlist: (state: WishlistState, action: PayloadAction<string>) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },

    removeFromWishlist: (
      state: WishlistState,
      action: PayloadAction<string>,
    ) => {
      state.items = state.items.filter((id) => id !== action.payload);
    },

    clearWishlist: (state: WishlistState) => {
      state.items = [];
    },
  },
});

export const {
  toggleWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
