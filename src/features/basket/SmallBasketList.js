import { useSelector } from "react-redux"
import ProductSmallBasket from './ProductSmallBasket'

const SmallBasketList=()=>{
let arr=useSelector(state=>state.basket.basketArr)
let cnt=useSelector(state=>state.basket.totalCnt)
let sum=useSelector(state=>state.basket.totalSum)

return (
    <>{arr&&<ul>
    {arr.map(item => {return<li key={item.id}><ProductSmallBasket itemToShow={item}/></li>})}

</ul>}
<h3>סכום מוצרים בסל שלך:{sum}</h3>
<h3>כמות מוצרים:{cnt}</h3>
        </>
);
}
export default SmallBasketList