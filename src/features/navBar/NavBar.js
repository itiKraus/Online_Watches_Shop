import { fetchAllUsers } from "../users/usersSlice";
import {useEffect,useState, createRef, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {GuestNav} from './GuestNav';
import {MenegerNav} from './MenegerNav';
import {UserNav} from './UserNav';
import { fetchAllProducts } from "../products/productsSlice";

import { Navigate } from "react-router-dom";
import { fetchAllOrders } from "../orders/orderSlice";
import NewUser from "../users/NewUser";


export  const NavBar=()=>{
    let disp = useDispatch();
    let statusUsers = useSelector(state => state.users.status);
    let user=useSelector(state=>state.users.using);
    let statusProducts = useSelector(state => state.products.status);
    let statusOrder=useSelector(state=>state.orders.status);
    let sortByCompany=useSelector(state=>state.products.sortByCompany);
    let sortByPrice=useSelector(state=>state.products.sortByPrice);
    useEffect(() => {
        
        if(statusProducts=="idle"){
          disp(fetchAllProducts())
        }if (statusUsers === "idle"){
          disp(fetchAllUsers())
      }
    if(statusOrder==="idle"){
      disp(fetchAllOrders())
      
    }
        let x=JSON.parse( localStorage.getItem('LocalUser'));
        console.log(x)
        if(x!=null){
        user=JSON.parse( localStorage.getItem('LocalUser'));
        console.log(user)
        console.log("you didnt make exit before so i know your details alone");}
      }, [statusUsers,statusProducts,statusOrder,user])

     
    
    
    
return(
<div>
  {user!=null&&user.tz!="123456789"&&<UserNav/>}
  {/* {user!=null&&user.tz==="123456789"&&<Navigate to="MenegerNav"/>} */}

  {user!=null&&user.tz==="123456789"&&<MenegerNav/>} 
  {user==null&&<GuestNav/>}

  </div>
)
}