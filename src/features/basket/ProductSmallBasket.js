const ProductSmallBasket=(itemToShow)=>{
    let sumProduct=itemToShow.itemToShow.price*itemToShow.itemToShow.qty
     return(
        <div>
            <h4>{itemToShow.itemToShow.name} </h4>
            <h4>מחיר :{itemToShow.itemToShow.price}</h4>
            <h4>כמות: {itemToShow.itemToShow.qty}</h4>
            <h4>מחיר סה"כ:{sumProduct}</h4>        
        </div>
     )
}
export default ProductSmallBasket;