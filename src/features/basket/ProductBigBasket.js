import * as React from 'react';
     import Box from '@mui/material/Box';
     import Card from '@mui/material/Card';
     import CardActions from '@mui/material/CardActions';
     import CardContent from '@mui/material/CardContent';
     import Button from '@mui/material/Button';
     import Typography from '@mui/material/Typography';
     import CardHeader from '@mui/material/CardHeader';
      import CardMedia from '@mui/material/CardMedia';

const ProductBigBasket=(props)=>{
    let sumProduct=props.itemToShow.price*props.itemToShow.qty;     
     const bull = (
       <Box
         component="span"
         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
       >
       </Box>
     
     )
 
       return (<>
           <div>
           <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        title= {props.itemToShow.name}       
        subheader={props.itemToShow.company}
      />
      <CardMedia
        component="img"
        height="194"
        width="200"
        image={props.itemToShow.imgUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <p>{props.itemToShow.price} מחיר:</p>
        </Typography>
        <Typography variant="body2">
             כמות:{props.itemToShow.qty}
               <br />
             </Typography>
             <Typography variant="body2">
מחיר סה''ב למוצר זה{sumProduct}
               <br />
             </Typography>
      </CardContent>


      <CardActions disableSpacing>
     
      </CardActions>
    </Card>
         </div>
         </>
  
)}
export default ProductBigBasket;