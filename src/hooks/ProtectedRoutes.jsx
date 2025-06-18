import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Login } from "../components/Login"

const useAuth=()=>{

    const [authState, setauthState] = useState({isLoggedin:false,role:""})
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const id = localStorage.getItem("id")
        if(id){
            setauthState({isLoggedin:true,role:""})
        }
        setisLoading(false)
    
    }, [])
    
return {...authState,isLoading}

}

const ProtectedRoutes = ()=>{

    const auth = useAuth() //{}
    if(auth.isLoading){
        return <h1>LOADING....</h1>
    }
    return auth.isLoggedin? <Outlet></Outlet> :<Login/>
}
export default ProtectedRoutes