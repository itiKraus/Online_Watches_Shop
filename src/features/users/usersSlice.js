import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { formToJSON } from 'axios';
import NewUser from "./NewUser";
import { json } from "react-router-dom";
import { useDispatch } from "react-redux";


export const fetchAllUsers = createAsyncThunk(
    'userInSlice/getAllusers', async (thunkAPI) => {
        const response = await axios.get('http://localhost:4545/user');
        console.log(response);
        return response.data;
    }
)
export const addUserToServer = createAsyncThunk(
    'postInSlice/addUserToServer', async (user, thunkAPI) => {
               let res =  await axios.post("http://localhost:4545/user", user);          
            console.log(res);  
            return res.data;
    }
)

const initialState = {
    status: "idle",
    flag:false,
    message: "",
    userArr: [],
    using:JSON.parse(localStorage.getItem("LocalUser")),
    showComponentNewUser:false,
    showComponentLogin:false
 }
const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
          
            let ind=state.userArr.findIndex(item=>item.tz===action.payload.tz)
            if(ind==-1) {
             let user=action.payload;
            state.userArr.push(user);
            localStorage.setItem('LocalUser', JSON.stringify(action.payload));
           console.log(JSON.parse(localStorage.getItem('LocalUser')));
           let currentUser=JSON.parse(localStorage.getItem('LocalUser'));
           state.using=action.payload;
           console.log(state.using);
           state.message=currentUser.name+" "+currentUser.tz+"ברוך הבא לאתרינו";
           console.log(state.userArr);
           <p>{state.message}</p>
               }
           else{
           console.log("לקוח כבר קיים במערך")
           localStorage.setItem('LocalUser',JSON.stringify(state.userArr[ind]));
           state.using=action.payload;
           state.message="תודה שחזרת שוב נשמח לעמוד לשרותך";
           
           <p>{state.message}</p>
}
        },
        deleteUser:(state,action)=>{
           let ind=state.userArr.findIndex(item=>item.tz===action.payload.tz)
        if(ind!=-1)
        state.userArr=state.userArr.slice(ind,1);
        if(localStorage.getItem==action.payload)
           localStorage=[]
        },
        comeAgain:(state,action)=>{
            let ind=state.userArr.findIndex(item=>item.tz===action.payload.tz)
                if(ind!=-1){
            console.log(state.userArr[ind]);
            localStorage.setItem('LocalUser', JSON.stringify(state.userArr[ind]));
            state.using=state.userArr[ind]
            state.message="שלום ל"+action.payload.name;
            console.log(state.message);
            <p>{state.message}</p>
            // state.showComponentLogin=!state.showComponentLogin
                }
            else{
                console.log(state.userArr);
                state.flag=true;
                state.showComponentNewUser=!state.showComponentNewUser;
                state.message="אינך קיים במערכת יש להרשם בטופס";
                <p>{state.message}</p>
                console.log(state.message);
            
            }}
            ,maneger:(state,action)=>{
                action.payload.role="maneger";
                let ind=state.userArr.findIndex(item=>item.tz===action.payload.tz)
                localStorage.setItem('LocalUser',JSON.stringify( state.userArr[ind]))
                state.using=state.userArr[ind];
                state.message="שלום ל"+action.payload.name;
                console.log(state.message);
                console.log(state.using);
                <p>{state.message}</p>
            },
            exit:(state,action)=>{
            state.using=null;
            localStorage.setItem('LocalUser',null);
            }
        },
        
    extraReducers:(builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.showComponentNewUser=!state.showComponentNewUser;
            state.userArr = action.payload
            state.status = "fulfilled"
        }).addCase(fetchAllUsers.rejected, (state, action) => {
            state.status = "error";
            state.message = action.payload.message;


        }).addCase(fetchAllUsers.pending, (state, action) => {
            state.status = "pending"

        }).addCase(addUserToServer.pending, (state, action) => {
            state.savingStatus = "pending";
        }).addCase(addUserToServer.fulfilled, (state, action) => {
            state.savingStatus = "fullfiled";
            console.log(action.payload)
            let ind=state.userArr.findIndex(item=>item.tz===action.payload.tz)
            if(ind==-1) {
             let   user=action.payload;
            state.userArr.push(user);
            localStorage.setItem('LocalUser', JSON.stringify(action.payload));
           console.log(JSON.parse(localStorage.getItem('LocalUser')));
           let currentUser=JSON.parse(localStorage.getItem('LocalUser'));
           state.using=action.payload;
           console.log(state.using);
           state.message=currentUser.name+" "+currentUser.tz+"ברוך הבא לאתרינו";
           console.log(state.userArr);
           state.showComponentNewUser=!state.showComponentNewUser;
        //    <p>{state.message}</p>
    }
        }).addCase(addUserToServer.rejected, (state, action) => {
            state.savingStatus = "error";
            state.message = "saving user in server failed";
        })



    }
    
})
export const { addUser,comeAgain,deleteUser,maneger,exit } = usersSlice.actions;

export default usersSlice.reducer;