import { createSlice } from "@reduxjs/toolkit";


const initialState = []


const cardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: {
            reducer: (state, action) => {
                const { product } = action.payload
                
                const exist = state.find(pro => pro.id === product.id)
                // console.log("🚀 ~ file: cardSlice.js:15 ~ exist", exist)
                
                if (!exist) {
                    console.log('first')
                    state.push({...product, qte: 1, total:product.price})
                } else {
                    console.log('secand')
                    const newList = state.filter(pro => pro.id !== product.id)
                    exist.qte += 1
                    exist.total = exist.qte * exist.price
                    state = [...newList, exist]
                    // console.log("🚀 ~ file: cardSlice.js:25 ~ state", [...newList, {exist, qte: 4}])
                }
                
            },
            prepare: ({ product }) => {
                return {payload:{product, qte : 1, total: product.price}}
            }
        },
            
    }
})
    


export default cardSlice.reducer;
export const { addToCart } = cardSlice.actions;
export const getAllCarts = state => state.carts

// ctrl + alt + L