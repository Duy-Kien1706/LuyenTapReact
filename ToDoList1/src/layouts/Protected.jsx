import {Navigate,Outlet} from "react-router-dom"; 
import Header from "../components/Header";
export default function Protected({isLogged}){
    if(!isLogged){
        return <Navigate to = {"/login"}/>
    }
    return (
        <>
            <Header></Header>
            
            <div className="container py-4">
                <Outlet></Outlet>
            </div>
        </>
    )
}