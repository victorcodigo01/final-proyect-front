import React, { useContext, useState } from "react";
import { themeContext } from "../../context/theme.context";
import { useTranslation } from "react-i18next";
import { Navbar, Container, Button, Form } from "react-bootstrap";

function Navega() {
  const [color, setColor] = useState("light");
  const [lang, setLang] = useState("es");
  const [t, i18n] = useTranslation("global");

  const { theme, toggleTheme } = useContext(themeContext); //context comunica componentes, toggleTheme es una funcion

  function handleToggleLang() {
    setLang((l) => {
      const newLang = l === "es" ? "en" : "es";
      i18n.changeLanguage(newLang);
      setLang(newLang);
    });
  }

  return (
    <>
      <Navbar bg={theme} expand="lg">
        {" "}
        {/* theme cambia los colores */}
        <Container>
          <Navbar.Brand href="#home">Pomodoros App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex justify-content-between align-items-center">
              <Form.Check
                type="switch"
                id="custom-switch"
                label={t("theme.one")}
                className="me-4"
                onChange={() => toggleTheme()}
              />
              <Button variant="outline-success" onClick={handleToggleLang}>
                {lang === "en" ? "EN" : "ES"}
              </Button>
            </Form>
            {/* <Form className="d-flex justify-content-between">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Theme"
                className="me-4"
                onChange={() => toggleTheme()}
              />
              <Container>
                <Button
                  variant="outline-success"
                  onClick={() => i18n.changeLanguage("es")}
                >
                  ES
                </Button>
                <Button
                  variant="outline-success"
                  onClick={() => i18n.changeLanguage("en")}
                >
                  EN
                </Button>
              </Container>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navega;
