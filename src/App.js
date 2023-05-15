import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ListProducts from './features/products/ListProducts';
import Login from './features/users/Login';
import NewUser from './features/users/NewUser';
import { UpdateProd } from './features/maneger/UpdateProd';
import { AddNewProd } from './features/maneger/AddNewProd';
import BigBasketList from './features/basket/BigBasketList';
import SmallBasketList from './features/basket/SmallBasketList';
import  {GusetNav} from './features/navBar/GuestNav';
import{Route, Routes,Link}from 'react-router-dom' ;
import {Exit}  from './features/users/Exit';
import {MenegerNav} from './features/navBar/MenegerNav';
import {UserNav} from './features/navBar/UserNav';
import {NavBar} from './features/navBar/NavBar';
import {ShowMyOrder} from './features/orders/ShowMyOrder';
import {Protected} from './features/Protected';
import {EndOrder}from './features/orders/EndOrder';
    import Button from '@mui/material/Button';
    import Menu from '@mui/material/Menu';
    import MenuItem from '@mui/material/MenuItem';



function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      
  return (
<div>{}
<NavBar/>
        <Routes>
        <Route path="Exit" element={<Exit/>}/>
        <Route path="ListProducts" element={<ListProducts/>}/>
        <Route path="BigBasketList" element={<BigBasketList/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="NavBar" element={<NavBar/>}/>
        <Route path="NewUser" element={<NewUser/>}/>
        <Route path="AddNewProd" element={<AddNewProd/>}/>
        <Route path="BigBasketList" element={<BigBasketList/>}/>
        <Route path="UpdateProd" element={<UpdateProd/>}/>
        <Route path="ShowMyOrder" element={<ShowMyOrder />}/>
        <Route path="EndOrder" element={<EndOrder />}/>
        </Routes>
</div>
      
     );
    }
 


export default App;
