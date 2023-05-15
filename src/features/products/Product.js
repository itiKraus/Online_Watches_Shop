import {useRef, useState }from "react";
import { addProductToBasket,} from "../basket/basketSlice";
import { deleteProdFromServer, updateProdInServer,deleteProd,updateProd } from "../products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import SmallBasketList from "../basket/SmallBasketList";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { Divider, iconButtonClasses } from "@mui/material";
import{Link}from 'react-router-dom' ;
import { TaskAbortError } from "@reduxjs/toolkit";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


 
const Product=({itemToShow})=>{
    let disp=useDispatch();
    let inpRefqty=useRef();
    let help=useSelector(state=>state.products.showSmallBasket);
    let update=useSelector(state=>state.products.update);
    let [showSmallBasket,setshowSmallBasket]=useState(help);
    let user=useSelector(state=>state.users.using);
    let prodToUpdate=useSelector(state=>state.products.prodToUpdate);
    let showComponentUpdateProd=useSelector(state=>state.products.showComponentUpdateProd);
    let amount=0;
    let left="left";
    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const { enqueueSnackbar } = useSnackbar();
  
    const handleClick = () => {
      enqueueSnackbar('I love snacks.');
    };
  
    const handleClickVariant = (variant) => () => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar('This is a success message!', { variant });
    };
  
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
     
return(<div>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        title={itemToShow.name}
        subheader={itemToShow.company}
      />
      <CardMedia
        component="img"
        height="194"
        width="200"
        image={itemToShow.imgUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <p>{itemToShow.price} מחיר:</p>
        </Typography>
      </CardContent>


      <CardActions disableSpacing>
      {user!=null&&
      user.tz=="123456789"?<div>
        <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete"onClick={()=>{
          disp(deleteProdFromServer(itemToShow))}} >
        <DeleteIcon/>
      </IconButton>   
    </Stack>
<IconButton onClick={()=>{
   disp(updateProd(itemToShow))
}}>לעדכון המוצר</IconButton>
   </div>:
  <div> 

    
    <IconButton defaultValue="0"  onClick={() => {
      
      amount=1;
          console.log("qty to add")
          console.log(amount);
     let   newitem={...itemToShow,qty:parseInt( amount)}
      console.log(newitem);
      amount=0;
          disp(addProductToBasket(newitem));
setshowSmallBasket(true)
setTimeout(()=>{setshowSmallBasket(false)},3000);
     }}>
  <AddShoppingCartIcon/>
    </IconButton>
   {showSmallBasket&&<SmallBasketList/>}
      </div>
}
      </CardActions>
    </Card>
    <div>
    </div>
 </div>
     )
}
export default Product;



