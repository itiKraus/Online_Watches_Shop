
import {useDispatch,useSelector} from "react-redux";
import { addProdToServer } from "../products/productsSlice";

export const AddNewProd=()=>{
  let arr = useSelector(state => state.products.productsArr);
  let x;
  let disp=useDispatch();
const save=()=>{
  newProd["price"]=parseInt(newProd["price"]);
  //x=(arr.length)-1
 // newProd.id=arr[x].id+1;
  console.log(arr);
  console.log(newProd);
  disp(addProdToServer(newProd));
}
const cancle=()=>{
  //להחזיר את כתובת ה url  ע''י  navigate  לעמוד הקודם  
}
const onChange=(e)=>{
let inpvalue=e.target.value;
let inpName=e.target.name;
let prod={...newProd}
if(inpName=="imgUrl"){
prod[inpName]="../image/"+inpvalue;
newProd=prod;
}
else{
prod[inpName]=inpvalue;
newProd=prod;
}
}

let newProd={
        id:null ,
        name: "",
        imgUrl: "",
        price:0,
        company: "",
        prodDate: ""
}

  return (<div>
    <div>
<label>שם מוצר</label>
<input type="name" name="name" onChange={onChange}></input>
</div>
<div>
<label>תמונת מוצר</label>      
<input type="text"  name="imgUrl" onChange={onChange}></input>
</div>
<div>
<label>מחיר</label>          
<input type="number"  name="price"onChange={onChange}></input>     
</div>
<div>
<label>חברת מוצר</label>
<input type="text"  name="company" onChange={onChange}></input>
</div>
<div>
<label>תאריך יצור</label>
<input type="text" name="prodDate"onChange={onChange} ></input>
</div>
<input type="button" value="שמירה" onClick={save}></input>
<input type="button"value="בטול" onClick={cancle}></input>

  </div>)
}

 







