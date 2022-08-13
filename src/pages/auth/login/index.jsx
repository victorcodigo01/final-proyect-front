import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../core/auth/auth.hook";
import './style.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

 function Login (){
    // console.log('acceso al login');
    const [t, i18n] = useTranslation("global");
    //missing isLoading
    const { isAuth, login} = useAuth();
    const navigate = useNavigate();
    if(isAuth) navigate("/"); //si entro al registro logado no me lo debe permitir
                       //("/")
                       //https://pomoback-dev.onrender.com/
    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.pass.value,
        };
        login(user)
        .then(() => navigate("/user")); //despues de logarme tengo que navegar
       // https://pomoback-dev.onrender.com/user
        //("/user")
        
    }

        return (
        
        <form className="formulario" onSubmit={handleLogin}>
                    <input className="input"name="email" type="email" placeholder={t("placeholders.one")} />
                    <input className="input"name="pass" type="password" placeholder={t("placeholders.two")} />          
                    <button className="boton" type="submit">{t("buttons.one")}</button>
                    <button className="register" type="submit"><Link to="/auth/register">{t("buttons.two")}</Link></button>
                    
        </form>
        
    )
}

export default Login;