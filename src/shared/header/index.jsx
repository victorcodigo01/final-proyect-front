import "./style.css";
import React from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation("global");
  // const {user} = useUser();
  return (
    <section>
      <div>
        <h1>{t("header.hello-world")}</h1>
        <div className="button-theme">
          <button onClick={() => i18n.changeLanguage("es")}>ES</button>
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </div>
      </div>

      {/* <p>{user.email}</p> */}
    </section>
  );
}

export default Header;
