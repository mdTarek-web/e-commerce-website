import { createSlice } from '@reduxjs/toolkit'

const initialState = {
products: [],
userInfo: null,
};

export const orebiSlice = createSlice({
    name: "orebi",
    initialState,
    reducers: {
        addToCart: ( state, action) => {
            state.products.push({...action.payload, quantity: 1});
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.products.find((item) => 
            item?._id === action.payload
        );
            if(existingProduct){
                existingProduct.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.products.find((item) => 
            item?._id === action.payload
        );
            if(existingProduct){
                existingProduct.quantity--;
            }
        }
    },
});

export const {addToCart, increaseQuantity, decreaseQuantity} = orebiSlice.actions;
export default orebiSlice.reducer;