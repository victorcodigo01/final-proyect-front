import { useTranslation } from "react-i18next";
import Register from "../../pages/auth/register";
import Login from "../../pages/auth/login";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


function Home (){
    const [t, i18n] = useTranslation("global");

    return (
            <>
            <Register></Register>
            <Login></Login>

           {/* <button onClick={<Route path="auth/register" element={<Register />}></Route>}>Register</button>
           <button onClick={<Route path="auth/login" element={<Login />}></Route>}>Login</button> */}
            
            </>
        )
}

export default Home;