import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  app: {
    products: [],
    filters: {
      brand: [],
      model: [],
    },
    sort: "",
    searchTerm: "",
    basket: [],
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateAppProducts: (state, action) => {
      state.app.products = action.payload;
    },
  },
});

export const appSelector = (state) => state.app.app;
export const productsSelector = (state) => state.app.app.products;

export const { updateAppProducts } = appSlice.actions;

export const appSliceReducer = appSlice.reducer;
export const appSliceReducerName = appSlice.name;

export default appSlice.reducer;
