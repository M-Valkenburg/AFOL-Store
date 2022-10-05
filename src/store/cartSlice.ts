import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product } from "../data/products/_productType";

export interface CartState {
    cart: {product: Product, qty: number}[]
    items: number,
    value: number,
    VAT: number
    shipping: number,
    total: number
}

const initialstate: CartState = {
    cart: [],
    items: 0,
    value: 0,
    VAT: 0,
    shipping: 5.95,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialstate,
    reducers: {
        addProduct: (state, action: PayloadAction<[item: Product, qty: number]>) => {
            const product: Product = action.payload[0];
            const quantity: number = action.payload[1];
            const index: number = state.cart.findIndex(item => item.product.id === product.id);

            if (index !== -1) {
                const stock = state.cart[index].product.stock;

                if (state.cart[index].qty === stock) {
                    return;
                } else if (state.cart[index].qty + quantity > stock) {
                    state.items += (stock - state.cart[index].qty);
                    state.value += (product.sale ? (product.salePrice * (stock - state.cart[index].qty)) : (product.price * (stock - state.cart[index].qty)));
                    state.cart[index].qty += (stock - state.cart[index].qty);
                    state.VAT = Number((state.value * 0.21).toFixed(2));
                    state.total = state.value + state.shipping;
                } else {
                    state.items += quantity;
                    state.cart[index].qty += quantity;
                    state.value += (product.sale ? (product.salePrice * quantity) : (product.price * quantity));
                    state.VAT = Number((state.value * 0.21).toFixed(2));
                    state.total = state.value + state.shipping;
                }
            } else {
                state.cart.push({product: action.payload[0], qty: quantity});
                state.items += quantity;
                state.value += (product.sale ? (product.salePrice * quantity) : (product.price * quantity));
                state.VAT = Number((state.value * 0.21).toFixed(2));
                state.total = state.value + state.shipping;
            }
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            const product: Product = action.payload;
            const index: number = state.cart.findIndex(item => item.product.id === product.id);
            
            state.items -= state.cart[index].qty;
            state.cart.splice(index, 1)
            state.value -= (product.sale ? product.salePrice : product.price);
            state.VAT = Number((state.value * 0.21).toFixed(2));
            state.total = state.value + state.shipping;
        },
        increment: (state, action: PayloadAction<Product>) => {
            const product: Product = action.payload;
            const index: number = state.cart.findIndex(item => item.product.id === product.id);

            if (state.cart[index].qty === product.stock) return;
            
            state.cart[index].qty += 1;
            state.items += 1;
            state.value += (product.sale ? product.salePrice : product.price);
            state.VAT = Number((state.value * 0.21).toFixed(2));
            state.total = state.value + state.shipping;
        },
        decrement: (state, action: PayloadAction<Product>) => {
            const product: Product = action.payload;
            const index: number = state.cart.findIndex(item => item.product.id === product.id);
            
            if (state.cart[index].qty === 1) return;

            state.cart[index].qty -= 1;
            state.items -= 1;
            state.value -= (product.sale ? product.salePrice : product.price);
            state.VAT = Number((state.value * 0.21).toFixed(2));
            state.total = state.value + state.shipping; 
        },
        selectQty: (state, action: PayloadAction<[item: Product, qty: number]>) => {
            const product: Product = action.payload[0];
            const quantity: number = action.payload[1];
            const index: number = state.cart.findIndex(item => item.product.id === product.id);

            if (quantity === state.cart[index].qty) {
                return;
            } else if (quantity > state.cart[index].qty) {
                const diff = quantity - state.cart[index].qty;

                state.cart[index].qty += diff;
                state.items += diff;
                state.value += (product.sale ? (product.salePrice * diff) : (product.price * diff));
                state.VAT = Number((state.value * 0.21).toFixed(2));
                state.total = state.value + state.shipping;
            } else {
                const diff = state.cart[index].qty - quantity;

                state.cart[index].qty -= diff;
                state.items -= diff;
                state.value -= (product.sale ? (product.salePrice * diff) : (product.price * diff));
                state.VAT = Number((state.value * 0.21).toFixed(2));
                state.total = state.value + state.shipping;    
            }
        }
    }
});

export default cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart.cart;
export const selectItems = (state: RootState) => state.cart.items;
export const selectValue = (state: RootState) => state.cart.value;
export const selectVAT = (state: RootState) => state.cart.VAT;
export const selectShipping = (state: RootState) => state.cart.shipping;
export const selectTotal = (state: RootState) => state.cart.total;

export const { 
    addProduct, 
    removeProduct, 
    increment, 
    decrement,
    selectQty
} = cartSlice.actions;