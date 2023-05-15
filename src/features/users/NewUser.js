import {useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {addUserToServer,addUser,fetchAllUsers } from "./usersSlice";
import {useEffect}from 'react';
import {  useNavigate } from "react-router";
import "./Login.css";

const NewUser=()=>{
    let { register, getValues, handleSubmit, formState: { errors, dirtyFields, isDirty, isSubmitted, isValid } } = useForm({
        mode: "onBlur", defaultValues: {
            userName: ""
        }
        
    });
    let status = useSelector(state => state.users.status)
let arrUsers=useSelector(state=>state.users.userArr);
let navigate=useNavigate();
console.log(arrUsers);
let message=useSelector(state=>state.users.message);
let showComponentNewUser=useSelector(state=>state.users.showComponentNewUser);
    let disp = useDispatch();
    useEffect(() => {
        if (status === "idle")
          disp(fetchAllUsers())
        console.log("end");
      }, [showComponentNewUser])
    const submittion=(data)=>{
   
       let user= {
        "tz": data.tz,
        "name": data.firstName,
        "telphone":data.telphone,
        "mail":data.mail,
        "city":data.city,
        "street":data.street,
        "numHouse":data.numHouse,
        "role":"user"

       }
       console.log(arrUsers);
       console.log(user);
       navigate("/");
    disp(addUserToServer(user));

   }
   
    return (<>
    {message&& <h1>{message}</h1>}
    <form onSubmit={handleSubmit(submittion)} className="modal-content" >
        <div>
    <label>שם משתמש</label>
    <input type="text" name="name" {...register("firstName", { required: "first name is required" })} />
            {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}</div>
            <div>
    <label>סיסמא</label>
    <input type="password" {...register("password", { pattern: /[0-9A-Z]{6}/ })}/></div>
    <div>
    <label>תז</label>
    <input type="text" name="tz"{...register("tz", { pattern: /[0-9]{9}/ })}/></div>
    <div>
    <label>טלפון</label>
    <input type="text" {...register("telphone", { pattern: /[0-9]{9}/ })}/></div>
    <div>
    <label>מייל</label>
            <input type="email" {...register("mail")} /></div>
            <div>
            <label>אימות מייל</label>
            <input type="email" {...register("mailConfirm", {                validate: (val) => val === getValues("mail")
            })} /></div>
                {errors.mailConfirm?.type === "validate" && <p className="error-message">שגיאה מייל לא זהה</p>}
                 <div>
    <label>עיר</label>
    <input type="text" {...register("city", { required: "city is required" })} /></div>
    <div>
    <label>רחוב</label>
    <input type="text" {...register("street", { required: "srteet required" })} /></div>
    
    <div>
    <label>מספר בית</label>
    <input type="text" {...register("numHouse", { required: "numHouse required" })} /></div>
   

    <input type="submit" disabled={!isValid}  className="button"/>

    </form>
    
   </> )
}
export default NewUser











