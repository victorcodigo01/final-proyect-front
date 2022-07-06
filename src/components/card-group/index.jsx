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
      <Card.Title>{t("title.manageEmo")}</Card.Title>
      <Card.Text>
       <p>6 técnicas para desarrollar la gestión emocional.</p>
       <p>1. Diferencia lo que puedes evitar de lo que puedes manejar.</p>
       <p>2. Aprende a enfocarte en tí y en el momento presente.</p>
       <p>3. Planifica solo el futuro inmediato.</p>
       <p>4. Gestiona las preocupaciones una vez al día.</p>
       <p>5. Plantea soluciones al peor de los escenarios.</p>
       <p>6. Encuentra vías para escapar y drenar.</p>

      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="rounded">
    <Card.Img variant="top" src="https://www.mentesliberadas.com/wp-content/uploads/2012/02/pomodoro-1.jpg" />
    <Card.Body>
      <Card.Title>{t("title.pomod")}</Card.Title>
      <Card.Text>
        <p>1. Divide la actividad en tareas.</p>
        <p>2. Una vez divididas, deberás jerarquizarlas. Es decir, priorizarlas y ordenarlas en consecuencia con su ejecución."</p>
        <p>3. Pon el temporizador a 25 minutos y ejecuta el método hasta que suene la alarma. La idea es mantenerte concentrado evitando cualquier distracción.</p>
        <p>4. 5 minutos de pausa corta en la que podrás hacer cualquier cosa.</p>
        <p>5. Deberás poner de nuevo el contador a 0 y programar tus siguientes 25 minutos de trabajo, donde abordarás la siguiente tarea.</p>
        <p>6. Cuando hayas completado cuatro tareas o pomodoros, podrás realizar una pausa más larga, de unos 15 minutos aproximadamente. Después, deberás iniciar un nuevo bloque de cuatro tareas.</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="rounded card border-primary">
    <Card.Img variant="top" src="https://taskntime.org/wp-content/uploads/2020/05/logo-sin-fondo-sin-lema-1.png" />
    <Card.Body>
      <Card.Title>{t("title.taskTime")} </Card.Title>
      <Card.Text>
        <p>Fracción de tiompo a elegir para la gestion de tareas y emociones</p>
        <p>1 hora.</p>
        <p>2 horas.</p>
        <p>3 horas.</p>
        <p>4 horas.</p>
        
        
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
        </>
    )
}

export default CardGroupResults;