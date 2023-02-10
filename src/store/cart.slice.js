import { createSlice } from "@reduxjs/toolkit"









const cartSlice = createSlice({
      name: "cart",
      initialState: {
            itemList: [],
            totalQuantity: 0,
            showCart: false
      },
      reducers: {
            addToCart(state, action) {
                  const newItem = action.payload
                  const existingItem = state.itemList.find((item) => item.id === newItem.id)
                  if (existingItem) {
                        existingItem.quantity++
                        existingItem.totalPrice += newItem.price
                  } else {
                        state.itemList.push({
                              id: newItem.id,
                              price: newItem.price,
                              quantity: 1,
                              totalPrice: newItem.price,
                              name: newItem.name
                        })
                        state.totalQuantity++
                  }

            },
            removeFromCart(state, action) {
                  const item = state.itemList.find(item => item.id === action.payload)
                  if (item.quantity === 1) {
                        state.itemList = state.itemList.filter(item => item.id !== action.payload)
                        state.totalQuantity--

                  } else {
                        item.quantity--
                        item.totalPrice -= item.price
                  }

            },
            showCart(state) {

                  state.showCart = !state.showCart


            }
      }
})

export const cartActions = cartSlice.actions

export default cartSlice