import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Order} from "./Order";
import{deleteOrderFromServer}from "./orderSlice";
import { deleteProdFromServer } from "../products/productsSlice";
import {exit} from "../users/usersSlice";

export const ShowMyOrder=()=>{
    let disp=useDispatch();
    let navigate=useNavigate();
    let order=useSelector(state=>state.orders.thisOrder);
    let using=useSelector(state=>state.users.using);
    let basket=useSelector(state=>state.basket.basketArr)
    let isAble=()=>{
        let date=Date();
    }
    return(<>
    <Order />
    <button onClick={()=>{
          basket=[];
          order=null;
         disp(exit());
        navigate("/");}}>תפריט ראשי</button>
    </>)
}