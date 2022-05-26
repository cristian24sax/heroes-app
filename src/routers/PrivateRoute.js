import { AuthContext } from "../auth/authContext"
import { useContext } from "react"
import { Navigate,useLocation } from "react-router-dom"
export const PrivateRoute=({children})=>{
    const location = useLocation();
    // console.log(location);
    localStorage.setItem('lastPath',location.pathname)
    const {user} = useContext(AuthContext)
    return(
        (user.logged)?children:<Navigate to='/login'/>  
    )
}