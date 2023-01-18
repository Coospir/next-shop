import {configureStore} from "@reduxjs/toolkit";
import {ProductApi} from "./product/product.api";
import {CartReducer} from "./cart/cart.slice";


export const store = configureStore({
    reducer: { [ProductApi.reducerPath]: ProductApi.reducer, cart: CartReducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ProductApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>
