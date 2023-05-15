import {useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import { comeAgain,maneger} from "./usersSlice";
import NewUser from "./NewUser";
import {Link} from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import {  useNavigate } from "react-router";
import "./Login.css";




const Login=()=>{
  <Link to="Login">כניסה כמשתמש</Link>
    let { register, getValues, handleSubmit, formState: { errors, dirtyFields, isDirty, isSubmitted, isValid } } = useForm({
        mode: "onBlur", defaultValues: {
            
        }
    });
let flag=useSelector(state => state.users.flag);
    let disp = useDispatch();
    let navigate=useNavigate();
    let using=useSelector(state=>state.users.using);
    const submittion=(data)=>{
       
        console.log(data)
        let user= {
         "tz":data.tz,
         "name": data.firstname,
     }
     navigate("/");
     if(user.tz==="123456789")
      disp(maneger(user));
   else{
     disp(comeAgain(user));
     if(using==null){
     navigate("/NewUser")
    }
     }
    }
   
    return (<div>
      <form onSubmit ={handleSubmit(submittion)} className="modal-content"> 
      
    <div>
    <label>שם משתמש</label>
    <input type="text"name="userName" {...register("firstname",{required:"first name is required"}) }/>
    {errors.firstname&&<p >{errors.firstname.message}</p>}
    </div>
   
    <div>
    <label>תעודת זהות</label>
    <input type="text"name="tz" {...register("tz",{required:"identity name is required"}) }/>
    {errors.tz&&<p >{errors.tz.message}</p>}
    </div>
    <div>
    <label>סיסמא</label>
    <input type="password" name="passWord"{...register("password", { pattern: /[0-9A-Z]{6}/ })}/>
    </div>
    <input type="submit" disabled={!isValid} className="button"/>
     </form>
    
    {flag&&<NewUser/>}
    </div>
  )
    
}
export default Login;




















