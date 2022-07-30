import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../core/auth/auth.hook";
import './style.css';
import { Link } from "react-router-dom";

 function Login (){
    //missing isLoading
    const { isAuth, login} = useAuth();
    const navigate = useNavigate();
    if(isAuth) navigate("/"); //si entro al registro logado no me lo debe permitir
    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.pass.value,
        };
        login(user)
        .then(() => navigate("/user")); //despues de logarme tengo que navegar

    }

        
      

      

      


    return (
        
        <form className="formulario" onSubmit={handleLogin}>
                    <input className="input"name="email" type="email" placeholder="Email" />
                    <input className="input"name="pass" type="password" placeholder="Contraseña" />          
                    <button className="boton" type="submit">Log In</button>
                    <button className="register" type="submit"><Link to="/auth/register">Register</Link></button>
                    
        </form>
        
    )
}

export default Login;