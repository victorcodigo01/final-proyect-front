import { useAuth } from "../../../core/auth/auth.hook";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Register() {
  const [t, i18n] = useTranslation("global");
  console.log("register");

  const { register, isLoading, isAuth } = useAuth();
  const [showEmailConfirm, updateshowEmailConfirm] = useState(false);
  const navigate = useNavigate();
  if (isAuth) navigate("/"); //si entro al registro logado no me lo debe permitir

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.pass.value,
    };
    register({ user, to: process.env.REACT_APP_BASE_URL }).then(() => {
      updateshowEmailConfirm(true);
    });
  };
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <form className="formularios flex-fill" onSubmit={handleSubmit}>
            {showEmailConfirm ? (
              <p className="green">
                Te hemos enviado un email, revisa tu bandeja para validarlo
              </p>
            ) : (
              ""
            )}
            <h4>{t("formCards.twelve")}</h4>
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
              {t("buttons.two")}
            </button>
            <button type="button" className="login">
              <Link to="/auth/login">{t("buttons.one")}</Link>
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default Register;
