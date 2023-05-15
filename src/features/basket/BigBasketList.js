
import { useDispatch } from "react-redux"
import { decreaseQty, deleteProductFromBasket, increaseQty } from "./basketSlice";
import {saveThisOrder}from "../orders/orderSlice";
import ProductBigBasket from "./ProductBigBasket";
import { useSelector } from "react-redux";
import{Link}from 'react-router-dom' ;
import "./BigBasketList.css";
import {useNavigate} from 'react-router-dom';
import * as React from 'react';
     import Box from '@mui/material/Box';
     import Card from '@mui/material/Card';
     import CardActions from '@mui/material/CardActions';
     import CardContent from '@mui/material/CardContent';
     import Button from '@mui/material/Button';
     import Typography from '@mui/material/Typography';
     import CardHeader from '@mui/material/CardHeader';
      import CardMedia from '@mui/material/CardMedia';

    const BigBasketList=()=>{
    let disp=useDispatch();
    let order=useSelector(state=>state.orders.thisOrder);
    let arr=useSelector(state=>state.basket.basketArr);
    let cnt=useSelector(state=>state.basket.totalCnt);
    let sum=useSelector(state=>state.basket.totalSum);
    let arrOrders=useSelector(state=>state.orders.orderArr);
    let basket=useSelector(state=>state.basket.basketArr);
    let navigate= useNavigate();
    let save=()=>{
        let ordNum=arrOrders[arrOrders.length-1].id+1;
        let user=JSON.parse(localStorage.getItem('LocalUser'));
        let date=new Date();
        let newOrder=   {
            "id":ordNum ,
            "orderDate":date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
            "dueDate":date.getDate()+4+"/"+date.getMonth()+"/"+date.getFullYear(),
            "userId":user['tz'],
            "cart":basket||[] 
        };
        console.log(newOrder);
        disp(saveThisOrder(newOrder));
        navigate("/EndOrder");
        }
        const bull = (
            <Box
              component="span"
              sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
            >
            </Box>
          
          )
        //   className="clockDisign"
return (<>
    {arr&&<ul className="clocks-conrainer">
    {arr.map(item => {return<li  key={item.id}>
   
        {/* <ProductBigBasket itemToShow={item}/> */}
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        title= {item.name}       
        subheader={item.company}
      />
      <CardMedia
        component="img"
        height="194"
        width="200"
        image={item.imgUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <p>{item.price} מחיר:</p>
        </Typography>
        <Typography variant="body2">
             כמות:{item.qty}
               <br />
             </Typography>
             <Typography variant="body2">
             
מחיר סה''כ למוצר זה{item.price*item.qty}
               <br />
             </Typography>
             <input type="button" onClick={()=>{disp(increaseQty(item))}} value="+" />
        <input type="button" value="-" onClick={()=>{
            disp(decreaseQty(item))
        }}/>
        <input type="button" value="הסר" onClick={()=>{
            disp(deleteProductFromBasket(item))
        }}/>
      </CardContent>


      <CardActions disableSpacing>
     
      </CardActions>
    </Card>
         
       
    </li>})}

</ul>}
<h3>מחיר סך הכל לקנייה זו:{sum}</h3>
<h3> כמות מוצרים בעגלה:{cnt}</h3>
<button onClick={save}>לסיום ההזמנה</button>


</>
);
}
export default BigBasketList