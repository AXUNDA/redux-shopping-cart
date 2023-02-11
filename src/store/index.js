import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cart.slice"
import uiSlice from "./ui-slice"



import authSlice from "./auth-slice"

const store = configureStore({
      reducer: {
            auth: authSlice.reducer,
            cart: cartSlice.reducer,
            ui: uiSlice.reducer
      }
})

export default store