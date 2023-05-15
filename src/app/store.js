import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../features/basket/basketSlice";
import productsSlice from "../features/products/productsSlice";
import usersSlice from "../features/users/usersSlice";
import orderSlice from "../features/orders/orderSlice";
export const store=configureStore({
    reducer:{
        users:usersSlice,
        products:productsSlice,
        basket:basketSlice,
        orders:orderSlice
    },
    
})
