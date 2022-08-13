import { CardGroup, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function CardGroupResults() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <CardGroup className="rounded mb-5">
        <Card className="rounded card border-primary">
          <Card.Img
            variant="top"
            src="https://www.avanza-psicologia.es/wp-content/uploads/2015/07/control-emociones.jpg"
          />
          <Card.Body>
            <Card.Title>{t("title.manageEmo")}</Card.Title>
            <Card.Text>
              <p>{t("gestionEmociones.one")}</p>
              <p>{t("gestionEmociones.two")}</p>
              <p>{t("gestionEmociones.three")}</p>
              <p>{t("gestionEmociones.four")}</p>
              <p>{t("gestionEmociones.five")}</p>
              <p>{t("gestionEmociones.six")}</p>
              <p>{t("gestionEmociones.seven")}</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="rounded">
          <Card.Img
            variant="top"
            src="https://www.mentesliberadas.com/wp-content/uploads/2012/02/pomodoro-1.jpg"
          />
          <Card.Body>
            <Card.Title>{t("title.pomod")}</Card.Title>
            <Card.Text>
              <p>{t("pomodoroList.one")}</p>
              <p>{t("pomodoroList.two")}</p>
              <p>{t("pomodoroList.three")}</p>
              <p>{t("pomodoroList.four")}</p>
              <p>{t("pomodoroList.five")}</p>
              <p>{t("pomodoroList.six")}</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="rounded card border-primary">
          <Card.Img
            variant="top"
            src="https://taskntime.org/wp-content/uploads/2020/05/logo-sin-fondo-sin-lema-1.png"
          />
          <Card.Body>
            <Card.Title>{t("title.taskTime")} </Card.Title>
            <Card.Text>
              <p>{t("tasking.one")}</p>
              <p>{t("tasking.two")}</p>
              <p>{t("tasking.three")}</p>
              <p>{t("tasking.four")}</p>
              <p>{t("tasking.five")}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default CardGroupResults;
