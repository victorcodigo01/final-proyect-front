import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../core/auth/auth.hook";

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
        <form onSubmit={handleLogin}>
            <input name="email" type="email" placeholder="Email" />
            <input name="pass" type="password" placeholder="Password" />
            <button type="submit">Log In</button>
        </form>
    )
}

export default Login;