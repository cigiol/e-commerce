import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  app: {
    products: [],
    filters: {
      brand: [],
      model: [],
    },
    sort: "ascDate",
    searchTerm: "",
    basket: [],
    brands: [],
    models: [],
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateApp: (state, action) => {
      state.app = action.payload;
    },
    updateAppField: (state, action) => {
      const { field, value } = action.payload;
      state.app[field] = value;
    },
    addFilter: (state, action) => {
      const { attribute, item } = action.payload;
      state.app.filters[attribute] = [...state.app.filters[attribute], item];
    },
    removeFilter: (state, action) => {
      const { attribute, item } = action.payload;
      state.app.filters[attribute] = state.app.filters[attribute].filter(
        (filter) => filter !== item
      );
    },
    addToBasket: (state, action) => {
      const { item } = action.payload;
      state.app.basket = [...state.app.basket, item];
    },
    removeFromBasket: (state, action) => {
      const { idx } = action.payload;
      state.app.basket = state.app.basket.filter((b) => b.id !== idx);
    },
  },
});

export const appSelector = (state) => state.app.app;
export const productsSelector = (state) => state.app.app.products;
export const brandsSelector = (state) => state.app.app.brands;
export const modelsSelector = (state) => state.app.app.models;
export const filtersSelector = (state) => state.app.app.filters;
export const sortSelector = (state) => state.app.app.sort;
export const searchTermSelector = (state) => state.app.app.searchTerm;
export const basketSelector = (state) => state.app.app.basket;

export const {
  updateApp,
  updateAppField,
  addFilter,
  removeFilter,
  addToBasket,
} = appSlice.actions;

export const appSliceReducer = appSlice.reducer;
export const appSliceReducerName = appSlice.name;

export default appSlice.reducer;
