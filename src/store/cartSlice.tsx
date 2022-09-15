import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { Product } from "../data/products/_productType";

export interface CartState {
    cart: {product: Product, qty: number}[]
    items: number;
}

const initialstate: CartState = {
    cart: [],
    items: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialstate,
    reducers: {
        addProduct: (state, action) => {
            const product: Product = action.payload;
            const index: number = state.cart.findIndex(item => item.product.id === product.id)

            if (index !== -1) {
                state.cart[index].qty += 1;
                state.items += 1;
            } else {
                state.cart.push({product: action.payload, qty: 1});
                state.items += 1;
            }
        },
        removeProduct: (state, action) => {
            const product: Product = action.payload;
            const index: number = state.cart.findIndex(item => item.product.id === product.id);
            
            state.items -= state.cart[index].qty;
            state.cart.splice(index, 1)
        },
        increment: (state, action) => {},
        decrement: (state, action) => {},
        changeQty: (state, action) => {},
    }
});

export default cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart.cart;
export const selectItems = (state: RootState) => state.cart.items;

export const { 
    addProduct, 
    removeProduct, 
    increment, 
    decrement,  
    changeQty
} = cartSlice.actions;