import { useDispatch, useSelector } from "react-redux";
import {updateProdInServer}from "../products/productsSlice";




export  const UpdateProd=()=>{ 
    let arr = useSelector(state => state.products.productsArr) 
    let itemToUpdate = useSelector(state => state.products.prodToUpdate) 
    let update=useSelector(state=>state.products.update)
 let disp=useDispatch();
    let newProd= {
    id: itemToUpdate.id,
    name: itemToUpdate.name,
    imgUrl: itemToUpdate.imgUrl,
    price: itemToUpdate.price,
    company:itemToUpdate.company,
    prodDate: itemToUpdate.prodDate
}
    const save=()=>{
        console.log(newProd);
        disp(updateProdInServer(newProd));
        update=false;
      }
      
      const onChange=(e)=>{
      let inpvalue=e.target.value;
      let inpName=e.target.name;
      let prod={...newProd}
      prod[inpName]=inpvalue;
      newProd=prod;
      }
      
    return(
        <div>
            <div>
            <label>שם מוצר</label>
            <input type="text" name="name" onChange={onChange} defaultValue={newProd.name}></input></div>
            <div>
            <label>תמונת מוצר</label>
            <input type="text"  name="imgUrl" onChange={onChange} defaultValue={newProd.imgUrl}></input></div>
            <div>
           <label>מחיר</label>
            <input type="number"  name="price" onChange={onChange} defaultValue={newProd.price}></input> </div>
            <div>
            <label>חברת מוצר</label>
            <input type="text"  name="company"  onChange={onChange} defaultValue={newProd.company}></input></div>
            <div>
            <label>תאריך יצור</label>
            <input type="text" name="prodDate"  onChange={onChange} defaultValue={newProd.prodDate}></input></div>
            <input type="button" onClick={save} /> 
            <h1>update</h1>
        </div>

    )
}  