import react from "react"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {AddOrderToServerApi,fetchAllOrdersApi} from './OrdersApi';
 const initialState = {
    status: "idle",
    message: "",
    orderArr: [],
    thisOrder:null
 }
 export const fetchAllOrders=createAsyncThunk(
    'prodInSlice/fetchAllOrdersApi', async (thunkAPI) => {
         let res= await fetchAllOrdersApi();
         return res.data;
    }
)
export const AddOrderToServer=createAsyncThunk(
    'orderSlice/AddOrderToServerApi',async(ord,thunkAPI) => {
        let res= await AddOrderToServerApi(ord);
        
        return res.data;}
)

export const deleteOrderFromServer=createAsyncThunk(
    'orderSlice/deleteOrderFromServerApi',async(ord,thunkAPI) => {
        let res= await deleteOrderFromServer(ord);
        console.log("מחיקת הזמנה")
        return res.data;}
)
 const orderSlice = createSlice({

    name: "orderSlice",
    initialState,
    reducers: {
        saveThisOrder:(state,action)=>{
            state.thisOrder=action.payload;
}
    },
        
    extraReducers:(builder) => {
        builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
            // Add user to the state array
            console.log(action.payload);
            state.orderArr = action.payload;
            state.status = "fulfilled";
        }).addCase(fetchAllOrders.rejected, (state, action) => {
            state.status = "error";
            state.message = action.payload.message;


        }).addCase(fetchAllOrders.pending, (state, action) => {
            state.status = "pending"

        }).addCase(AddOrderToServer.fulfilled, (state, action) => {
           state.orderArr.push(action.payload);
            console.log(action.payload);
            state.status = "fulfilled"
        }).addCase(AddOrderToServer.rejected, (state, action) => {
            state.status = "error";
            state.message = action.payload.message;


        }).addCase(AddOrderToServer.pending, (state, action) => {
            state.status = "pending"

        })
    }
    
})
export const {saveThisOrder}= orderSlice.actions;

export default orderSlice.reducer;