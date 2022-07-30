import { useAuth } from "../../../core/auth/auth.hook";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './style.css';
import { Link } from "react-router-dom";

function Register (){

    const {register, isLoading, isAuth} = useAuth();
    const [showEmailConfirm, updateshowEmailConfirm] = useState(false);
    const navigate = useNavigate();
    if(isAuth) navigate("/"); //si entro al registro logado no me lo debe permitir

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.pass.value,
        };
        register(user).then(() => updateshowEmailConfirm(true));
    }
    

    return (
        <>
            {isLoading ? <h1>Loading...</h1> :
                <>
                    {showEmailConfirm ? <p>Te hemos enviado un email, revisa tu bandeja para validarlo</p>: ''}
                    <form className="formularios" onSubmit={handleSubmit}>
                        <input className="input"name="email" type="email" placeholder="Email" />
                        <input className="input"name="pass" type="password" placeholder="Contraseña" />          
                        <button className="boton" type="submit">Registrarse</button>
                        <button className="login" type="submit"><Link to="/auth/login">Login</Link></button>
                    </form>
                    </>
            }
        </>
    )
}

export default Register;