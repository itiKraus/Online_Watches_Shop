import { useEffect, useState, createRef, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, showSmallBasket } from "./productsSlice";
import Product from "./Product";
import SmallBasketList from "../basket/SmallBasketList";
import BigBasketList from "../basket/BigBasketList";
import { createAsyncThunk } from "@reduxjs/toolkit";
import "./ListProducts.css";
import { fetchAllUsers } from "../users/usersSlice";
import * as React from 'react';
import { UpdateProd } from "../maneger/UpdateProd";
import { Link } from "react-router-dom";



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// עיצוב אייקון סל קניות
// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px',
//   },
// }));

// 

const ListProducts = () => {
  let status = useSelector(state => state.products.status);
  let arrbasket = useSelector(state => state.basket.basketArr);
  let arr = useSelector(state => state.products.productsArr);
  let help = useSelector(state => state.products.showSmallBasket);
  let update = useSelector(state => state.products.update);
  let prodToUpdate = useSelector(state => state.products.prodToUpdate);
  let [flag, setflag] = useState(false);
  let [arrfilter,setArrFilter] = useState(arr);
  let [filterByPrice, setFilterByPrice] = useState(20000);
  let [filterByCompany, setFilterByCompany] = useState("");
  let disp = useDispatch();
  let showComponentUpdateprod=useSelector(state=>state.products.showComponentUpdateProd);
  useEffect(() => {
   setArrFilter( arr.filter(item => {
      if (item.price <= filterByPrice && (filterByCompany == item.company || !filterByCompany))
        return true;
      return false;
    }))
    
    console.log("arrfilter")
    console.log(arrfilter)
  },[filterByCompany,filterByPrice,showComponentUpdateprod,arr])

  function valuetext(value) {
    return `${value}`
  }
  return (<>

    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">company</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={filterByCompany}
        label={filterByCompany}
        onChange={(e) => {setFilterByCompany(e.target.value) }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Anne Klien"}>Anne Klien</MenuItem>
        <MenuItem value={"ice"}>ice</MenuItem>
        <MenuItem value={"Swatch"}>Swatch</MenuItem>
        <MenuItem value={"Tissot"}>Tissot</MenuItem>
        <MenuItem value={"Boss"}>Boss</MenuItem>

      </Select>
    </FormControl>

    <Box sx={{ width: 400 }}>
      <Slider
        aria-label="Custom marks"
        getAriaValueText={valuetext}
        step={100}
        min={0}
        max={1000}
        valueLabelDisplay="auto"
        marks
        onChange={(e) => { setFilterByPrice(e.target.value)}}
        valueLabelFormat={valuetext}
      />
    </Box>
    {arrfilter && <ul className="clocks-conrainer">
      {arrfilter.map(item => {
        return <li   key={item.id}>
          <Product itemToShow={item} />
        </li>
      })}
    </ul>}
    {/* <input type="button" value="לסל הקניות" onClick={() => {
      setflag(true);
      setTimeout(() => { setflag(false) }, 30000);
    }} /> */}
    {flag && <BigBasketList />}
    {showComponentUpdateprod&&<UpdateProd/>}

  </>);
}

export default ListProducts;
 