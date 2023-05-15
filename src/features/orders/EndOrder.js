import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Order } from "./Order";
import { deleteOrderFromServer, AddOrderToServer } from "./orderSlice";
import { deleteProdFromServer } from "../products/productsSlice";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { IconButton } from "@mui/material";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export const EndOrder = () => {
  let navigate = useNavigate();
  let disp = useDispatch();
  let thisOrder = useSelector(state => state.orders.thisOrder);
  let user = JSON.parse(localStorage.getItem('LocalUser'));

  return (<>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div>
          <TextField id="outlined-search" label=" שם פרטי" type="search" defaultValue={user.name} color="secondary" focused />
        </div>
        <div>
          <TextField id="outlined-search" label="תעודת זהות" type="search" defaultValue={thisOrder.id} color="secondary" focused />
        </div>
        <div>
          <TextField id="outlined-search" label="עיר מגורים" type="search" defaultValue={user.city} color="secondary" focused />
        </div>
        <div>
          <TextField id="outlined-search" label="רחוב" type="search" defaultValue={user.street} color="secondary" focused />
        </div>
        <div>
          <TextField id="outlined-search" label="מס בית" type="search" defaultValue={user.numHouse} color="secondary" focused />
        </div>
        <div>
          <TextField id="outlined-search" label="טלפון" type="search" defaultValue={user.telphone} color="secondary" focused />
        </div>
        <div>
          <TextField id="outlined-search" label="תאריך הזמנה" type="search" defaultValue={thisOrder.orderDate} color="secondary" focused />
        </div>
        <div>
          <TextField id="outlined-search" label="תאריך יעד להגעת משלוח" defaultValue={thisOrder.dueDate} color="secondary" focused />
        </div>
      </div>

    </Box>
    <IconButton onClick={() => {
      disp(AddOrderToServer(thisOrder));
      navigate('/ShowMyOrder');
    }}
    ><DoneOutlineRoundedIcon/></IconButton>
    <Link to="/Listroducts">להמשך הזמנתך</Link>
  </>)
}