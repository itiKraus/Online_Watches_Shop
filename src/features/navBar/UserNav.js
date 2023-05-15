

import{Link, useNavigate}from 'react-router-dom' 
import {useSelector, useDispatch} from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AddOrderToServer } from '../orders/orderSlice';
import {useState,useEffect} from "react";
import {exit} from "../users/usersSlice";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import "./disignAppbar.css";
export const UserNav=()=>{
    let user=useSelector(state=>state.users.using);
    let cnt=useSelector(state=>state.basket.totalCnt);
    let thisOrder=useSelector(state=>state.orders.thisorder);
    let [ShowMyOrder,setShowMyOrder]=useState(false);
    let navigate=useNavigate();
    let disp=useDispatch();
    let order=useSelector(state=>state.orders.thisOrder);
    let using=useSelector(state=>state.users.using);
    let basket=useSelector(state=>state.basket.basketArr);
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    useEffect(() => {
        
      
    }, [ShowMyOrder]);
    let name=JSON.parse(localStorage.getItem('LocalUser')) ;
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
      
      
    return (<>
    <Box sx={{ flexGrow: 1 }}  className="body">
    <img src="../image/לוגו-דיאמונד-טיים-שעונים.jpg"/>
      <FormGroup  onClick={
      ()=>{
        basket=[];
        order=null;
       disp(exit());
      navigate("/");
      }
    }>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static" className="AppBar">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            // color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        
          <IconButton onClick={()=>{
            navigate("/ListProducts");
          }}>רשימת מוצרים
          </IconButton>
        
           <IconButton aria-label="cart"  onClick={()=>{
            navigate("/BigBasketList");
          }}>
             <StyledBadge badgeContent={cnt} color="secondary" >    
                 <ShoppingCartIcon  />
             </StyledBadge>
            </IconButton>
             
            {name['name']}

        
        </Toolbar>
      </AppBar>
    </Box>
    
{ShowMyOrder&&<ShowMyOrder />}
     </>
   
    
    )
}
