import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
import SmallBasketList from "../basket/SmallBasketList"
import { maneger } from "../users/usersSlice";
import { useDispatch } from "react-redux";
import {fetchAllProductsApi,addProdToServerApi} from "./productApi"
import * as React from 'react';

let status =state => state.products.status;
export const fetchAllProducts =createAsyncThunk(
    'prodInSlice/fetchAllProducts', async (thunkAPI) => {
         let res= await fetchAllProductsApi();
         return res.data;
    }
)
export const addProdToServer = createAsyncThunk(
    'postInSlice/addProdToServer', async (prod, thunkAPI) => {
               let res =  await axios.post("http://localhost:4545/product", prod);          
            console.log(res);  
            return res.data;
    }
)
export const deleteProdFromServer = createAsyncThunk(
    'prodInSlice/deleteProdFromServer', async (prod, thunkAPI) => {
       let res =  await axios.delete("http://localhost:4545/product/"+prod.id);   
        status="deleteprod";
            console.log(res);  
            return res.data;
    })
    export const updateProdInServer = createAsyncThunk(
        'prodInSlice/updateProdInServer', async (prod, thunkAPI) => {
           let res =  await axios.put("http://localhost:4545/product/"+prod.id, prod);          
                console.log(res);  
                return res.data;
        }
)


const initialState = {
    status: "idle",
    message: "",
    productsArr: [],
    showSmallBasket:false,
    update:false,
    prodToUpdate:{},
    sortByCompany:null,
    showComponentUpdateProd:false,
 
}
   

const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        // addProduct: (state, action) => {
            
        //         action.payload.id = state.productsArr[state.productsArr.length - 1].id + 1;
        //         state.productsArr.push(action.payload);
            
        // },
        deleteProd:(state,action)=>{
        let ind=state.productsArr.findIndex(item=>item.id===action.payload.id);
            state.productsSlice=state.productsArr.splice(ind,1);
            state.message="מוצר "+action.payload.name+" נמחק בהצלחה";
            <p>{state.message}</p>
        },
        updateProd:(state,action)=>{
            state.showComponentUpdateProd=true;
            state.prodToUpdate=action.payload;
            // let ind=state.productsArr.findIndex(item=>item.id===action.payload.id);
            // state.prodToUpdate=state.productsArr[ind];
            // if( state.update==false){
            // state.update=true;
            // console.log("בקשת לעדכן מוצר")}
            // else{
            // state.update=false
            // console.log("המוצר עודכן בהצלחה")}
                    }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            // Add user to the state array
            state.productsArr = action.payload
            state.status = "fulfilled"
            console.log(state.productsArr)
        }).addCase(fetchAllProducts.rejected, (state, action) => {
            state.status = "error";
            state.message = action.payload.message;


        }).addCase(fetchAllProducts.pending, (state, action) => {
            state.status = "pending";

               
        }).addCase(addProdToServer.fulfilled, (state, action) => {
                state.productsArr.push(action.payload);
        
        }).addCase(addProdToServer.rejected, (state, action) => {
            // state.status = "error";
            state.message = action.payload.message;


        }).addCase(addProdToServer.pending, (state, action) => {
            // state.status = "pending"

        })
.addCase(updateProdInServer.fulfilled, (state, action) => {
    let ind=state.productsArr.findIndex((item )=>item.id==action.payload.id);
    state.productsArr[ind]=action.payload;
state.showComponentUpdateProd=false;
console.log(state.productsArr[ind]);
}).addCase(updateProdInServer.rejected, (state, action) => {
    // state.status = "error";
    state.message = action.payload.message;
    state.prodToUpdate=null
}).addCase(updateProdInServer.pending, (state, action) => {
    // state.status = "pending"

}).addCase(deleteProdFromServer.fulfilled, (state, action) => {
    
    // state.status = "fulfilled"
    let ind=state.productsArr.findIndex(item=>item.id==action.payload.id);
           state.productsArr.splice(ind,1);
            state.message="מוצר "+action.payload.name+" נמחק בהצלחה";
            <p>{state.message}</p>
}).addCase(deleteProdFromServer.rejected, (state, action) => {
    // state.status = "error";
    state.message = action.payload.message;


}).addCase(deleteProdFromServer.pending, (state, action) => {
    // state.status = "pending"

})
    }
    
})
export const { addProduct,deleteProd,updateProd } = productsSlice.actions;

export default productsSlice.reducer;