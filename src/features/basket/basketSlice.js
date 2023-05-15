import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";




import axios from 'axios';
const initialState={
basketArr:[],
totalCnt:0,
totalSum:0

}

const basketSlice=createSlice({

    name:"basketSlice",
    initialState,
    reducers:{ 
        addProductToBasket:(state,action) => {
            console.log(action.payload)
        let ind=state.basketArr.findIndex(item=>item.id===action.payload.id)
        if(ind===-1){
            let prod=action.payload
            console.log({prod});
            state.basketArr.push(prod)
           console.log(state.basketArr)
        }


        else{
        state.basketArr[ind].qty=parseInt(state.basketArr[ind].qty+action.payload.qty)
        }
       state.totalCnt=parseInt( state.totalCnt+action.payload.qty)
       state.totalSum=parseInt( state.totalSum+action.payload.price*action.payload.qty)
           
        },
        deleteProductFromBasket:(state,action)=>{
         console.log(action.payload);  
        let ind=state.basketArr.findIndex(item=>item.id===action.payload.id)
       state.basketSlice= state.basketArr.splice(ind,1)
       state.totalCnt=state.totalCnt-action.payload.qty
       state.totalSum=parseInt(state.totalSum-action.payload.price*action.payload.qty)
      
        },
        increaseQty:(state,action)=>{
            let ind=state.basketArr.findIndex(item=>item.id===action.payload.id);
            
          if(ind!=-1){
           let x= state.basketArr[ind].qty
           state.basketArr[ind].qty=x+1;
           console.log(state.basketArr[ind].qty);
            state.totalCnt=state.totalCnt+1;
            state.totalSum=state.totalSum+parseInt( action.payload.price);
           }
        },
        decreaseQty:(state,action)=>{
            let ind=state.basketArr.findIndex(item=>item.id===action.payload.id)
            if(ind!=-1){
            let x=state.basketArr[ind].qty
            state.basketArr[ind].qty= x-1;
            state.totalCnt=state.totalCnt-1;
            state.totalSum=state.totalSum-parseInt(action.payload.price) ;
            }
        }
        
    }

    })
    export const {addProductToBasket,decreaseQty,increaseQty,deleteProductFromBasket}=basketSlice.actions
    export default basketSlice.reducer
    