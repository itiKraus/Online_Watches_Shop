import Product from "../products/Product"
import { Link } from "@mui/material"
import { useSelector } from "react-redux";

export const Order=()=>{
  let order=useSelector(state=>state.orders.thisOrder);
  console.log(order);
    return(<>
    <h2>פרטי ההזמנה שלי</h2>
        <h2>{order.id}</h2>
    <h2>{order.orderDate}</h2>
    <h2>{order.dueDate}</h2>
    <h2>{order.userId}</h2>
    
   <div>
       <ul>{order.cart&&order.cart.map(item=> {
           return <li key={item.id}>
          <h1> {item.name}</h1>
          <h3>{item.company}</h3>
          <img src={item.imgUrl} width="90"height="100"/>
          <p>{item.price}</p>
        <p>{item.qty}</p></li>
      }  )}
       </ul>
    
   </div>
  </>  )
} 
