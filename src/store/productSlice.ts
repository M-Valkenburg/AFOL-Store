import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { Product } from "../data/products/_productType";

export const fetchThemes = createAsyncThunk(
    'themes/fetchThemes',
    async () => {
        const response = await fetch('../data/themes.ts');
        return response;
    }
);

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('../data/products.ts');
        return response;
    }
);

export interface ProductState {
    themes: {}[],
    products: Product[],
    loading: boolean,
    loadingError: boolean,
    searchTerm: string,
};

const initialstate: ProductState = {
    themes: [],
    products: [],
    loading: false,
    loadingError: false,
    searchTerm: '',
};

const productSlice = createSlice({
    name: 'products',
    initialState: initialstate,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: {}
});

export default productSlice.reducer;
export const selectProducts = (state: RootState) => state.products.products;
export const selectSearchTerm = (state: RootState) => state.products.searchTerm;

export const { setSearchTerm } = productSlice.actions;