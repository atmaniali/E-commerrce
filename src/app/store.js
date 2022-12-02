import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../feautures/product/productSlice'
import cartReducer from '../feautures/card/cardSlice'


const store = configureStore({
    reducer: {
        products: productReducer,
        carts: cartReducer,
    },
})


export default store