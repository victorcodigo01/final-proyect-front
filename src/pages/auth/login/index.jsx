import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../core/auth/auth.hook";
import "./style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login() {
  // console.log('acceso al login');
  const [t, i18n] = useTranslation("global");
  //missing isLoading
  const { isAuth, isLoading, login } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/"); //si entro al registro logado no me lo debe permitir
  }, [isAuth, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.pass.value,
    };

    //console.log(user.password);

    login(user).then(() => navigate("/")); //despues de logarme tengo que navegar
  };

  return (
    <>
      <form className="formulario flex-fill" onSubmit={handleLogin}>
        <input
          className="input"
          name="email"
          type="email"
          placeholder={t("placeholders.one")}
        />
        <input
          className="input"
          name="pass"
          type="password"
          placeholder={t("placeholders.two")}
        />
        <button className="boton" type="submit">
          {t("buttons.one")}
        </button>
        <button className="register">
          <Link to="/auth/register">{t("buttons.two")}</Link>
        </button>
      </form>
    </>
  );
}

export default Login;
