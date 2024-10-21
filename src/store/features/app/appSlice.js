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
    toggleBasket: false,
    toggleFilter: false,
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
    increaseBasket: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.app.basket.find((b) => b.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseBasket: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.app.basket.find((b) => b.id === id);
      if (existingProduct) {
        existingProduct.quantity === 1
          ? (state.app.basket = state.app.basket.filter((b) => b.id !== id))
          : (existingProduct.quantity -= 1);
      }
    },
    removeFromBasket: (state, action) => {
      const { id } = action.payload;
      state.app.basket = state.app.basket.filter((b) => b.id !== id);
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
export const toggleBasketSelector = (state) => state.app.app.toggleBasket;
export const toggleFilterSelector = (state) => state.app.app.toggleFilter;
export const totalPriceSelector = (state) => {
  return state.app.app.basket.reduce((total, product) => {
    return total + parseFloat(product.price) * product.quantity;
  }, 0);
};

export const {
  updateApp,
  updateAppField,
  addFilter,
  removeFilter,
  addToBasket,
  increaseBasket,
  decreaseBasket,
} = appSlice.actions;

export const appSliceReducer = appSlice.reducer;
export const appSliceReducerName = appSlice.name;

export default appSlice.reducer;
