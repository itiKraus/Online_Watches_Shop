import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";
import { MenegerNav } from "./navBar/MenegerNav";

export const Protected=(props)=>{
    let user=useSelector(state=>state.users.using);
    return ( <div>  
    
{user.tz!='123456789'?<Navigate to="NavBar"replace/>:<MenegerNav/>}

</div> 
    );

    }