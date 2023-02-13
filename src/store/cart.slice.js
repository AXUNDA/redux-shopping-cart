import { createSlice } from "@reduxjs/toolkit"
import { uiActions } from "./ui-slice"









const cartSlice = createSlice({
      name: "cart",
      initialState: {
            itemList: [],
            totalQuantity: 0,
            showCart: false,
            changed: false

      },
      reducers: {
            replaceData(state, action) {
                  state.itemList = action.payload.itemList
                  state.totalQuantity = action.payload.totalQuantity

            },
            addToCart(state, action) {
                  state.changed = true
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
                  state.changed = true

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

export const sendCart = (cart) => {
      return async (dispatch) => {
            dispatch(uiActions.showNotifications({
                  message: "sending",
                  open: "true",
                  type: "warning"
            }))
            try {
                  async function sendRequest() {






                        const response = await fetch("https://redux-e1523-default-rtdb.firebaseio.com/cartitems.json", {
                              method: 'PUT',
                              body: JSON.stringify(cart)

                        })
                        const data = await response.json()

                        dispatch(uiActions.showNotifications({
                              open: "true",
                              type: "success",
                              message: "cart sent successfully"
                        }))

                  }
                  await sendRequest()



            } catch (error) {
                  dispatch(uiActions.showNotifications({
                        open: "true",
                        type: "error",
                        message: "an error occurred while sending request"
                  }))

            }

      }
}

export const fetchCart = () => {
      return async (dispatch) => {
            async function fetchHandler() {
                  const response = await fetch("https://redux-e1523-default-rtdb.firebaseio.com/cartitems.json")

                  const data = await response.json()
                  console.log(data)

                  return data
            }
            try {
                  const cartData = await fetchHandler()
                  // console.log(JSON.stringify(cartData))
                  dispatch(cartActions.replaceData(cartData))

            } catch (error) {
                  dispatch(uiActions.showNotifications({
                        open: "true",
                        type: "error",
                        message: "an error occurred while sending request"
                  }))

            }

      }

}

export default cartSlice