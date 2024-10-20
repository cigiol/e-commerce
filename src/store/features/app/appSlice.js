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
      console.log(field, value);
    },
    addFilter: (state, action) => {
      console.log(action.payload);
      const { attribute, item } = action.payload;
      state.app.filters[attribute] = [...state.app.filters[attribute], item];
    },
    removeFilter: (state, action) => {
      const { attribute, item } = action.payload;
      state.app.filters[attribute] = state.app.filters[attribute].filter(
        (filter) => filter !== item
      );
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

export const { updateApp, updateAppField, addFilter, removeFilter } =
  appSlice.actions;

export const appSliceReducer = appSlice.reducer;
export const appSliceReducerName = appSlice.name;

export default appSlice.reducer;
