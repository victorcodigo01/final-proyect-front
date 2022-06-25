import { CardGroup, Card} from "react-bootstrap";
import { useTranslation } from "react-i18next";



function CardGroupResults (){
    const [t, i18n] = useTranslation("global");

    return (
        <>
        <CardGroup className="rounded mb-5">
  <Card className="rounded card border-primary">
    <Card.Img variant="top" src="https://www.avanza-psicologia.es/wp-content/uploads/2015/07/control-emociones.jpg" />
    <Card.Body>
      <Card.Title>GESTION EMOCIONES</Card.Title>
      <Card.Text>
        Gestion de tus emociones.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="rounded">
    <Card.Img variant="top" src="https://www.mentesliberadas.com/wp-content/uploads/2012/02/pomodoro-1.jpg" />
    <Card.Body>
      <Card.Title>TECNICA POMODORO</Card.Title>
      <Card.Text>
      {t("pomodoro.step-one")}{' '}
      Tecnica de gestion de tareas
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="rounded card border-primary">
    <Card.Img variant="top" src="https://taskntime.org/wp-content/uploads/2020/05/logo-sin-fondo-sin-lema-1.png" />
    <Card.Body>
      <Card.Title>TIME TASK</Card.Title>
      <Card.Text>
        Tiempo para dar un porcentaje de mezcla de gestion de tus emociones y tuas tareas. 1 a 6 horas.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
        </>
    )
}

export default CardGroupResults;