import './style.css';
import React from 'react';
import { useTranslation } from "react-i18next";

function Header () {
    const [t, i18n] = useTranslation("global");
    // const {user} = useUser();
    return (
        <section>
            <h1>Header</h1>
            <div className="HeroEmotionsItem-container" data-reactid="1">
                <div className="HeroEmotionsItem-content" data-reactid="4">
                    <div className="HeroEmotionsItem-info" data-reactid="10">
                        <h1 className="HeroEmotionsItem-title" data-reactid="11">Optimiza tus emociones</h1>
                        <p className="HeroEmotionsItem-description" data-reactid="12">Diseña tu flujo de trabajo en base a las emociones que sientes ahora.</p>
                    </div>
                    <div className="HeroEmotionsIntem-input-emotions" data-reactid="13">
                        <form className="api">
                            {/* <input type="image" /> */}
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <h1>{t("header.hello-world")}</h1>
                <br /> <br />
                <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
            
            {/* <p>{user.email}</p> */}
        </section>
        )
}

export default Header;