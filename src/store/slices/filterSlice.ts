import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  bank: string;
  category: string;
  minSalary: number;
  maxAnnualFee: number;
  loungeAccess: boolean | null;
  fuelSurcharge: boolean | null;
  sortBy: "rating" | "annualFee" | "cashbackRate" | "name";
  sortOrder: "asc" | "desc";
  learningCategory: string;
}

const initialState: FilterState = {
  bank: "",
  category: "",
  minSalary: 0,
  maxAnnualFee: 10000,
  loungeAccess: null,
  fuelSurcharge: null,
  sortBy: "rating",
  sortOrder: "desc",
  learningCategory: "All",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBank: (state, action: PayloadAction<string>) => {
      state.bank = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setMinSalary: (state, action: PayloadAction<number>) => {
      state.minSalary = action.payload;
    },
    setMaxAnnualFee: (state, action: PayloadAction<number>) => {
      state.maxAnnualFee = action.payload;
    },
    setLoungeAccess: (state, action: PayloadAction<boolean | null>) => {
      state.loungeAccess = action.payload;
    },
    setFuelSurcharge: (state, action: PayloadAction<boolean | null>) => {
      state.fuelSurcharge = action.payload;
    },
    setSortBy: (
      state,
      action: PayloadAction<"rating" | "annualFee" | "cashbackRate" | "name">
    ) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<"asc" | "desc">) => {
      state.sortOrder = action.payload;
    },
    setLearningCategory: (state, action: PayloadAction<string>) => {
      state.learningCategory = action.payload;
    },
    resetFilters: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setBank,
  setCategory,
  setMinSalary,
  setMaxAnnualFee,
  setLoungeAccess,
  setFuelSurcharge,
  setSortBy,
  setSortOrder,
  setLearningCategory,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
