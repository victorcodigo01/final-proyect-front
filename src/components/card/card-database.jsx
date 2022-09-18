import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import { getAuth, wrapUsingAuth } from "../../core/auth/auth.utils";
import { init } from "i18next";

let primeraCargaHecha = false;
function CardDataBase({ notificacion }) {
  const [t, i18n] = useTranslation("global");
  const [emociones, setEmociones] = useState([]);
  const [numNotificacion, setNumNotificacion] = useState(notificacion);

  useEffect(() => {
    console.log(notificacion);
    setNumNotificacion(notificacion);
    if (!primeraCargaHecha) {
      primeraCargaHecha = true;
      recuperarEmociones();
    } else if (numNotificacion != 0) {
      setNumNotificacion(0);
      recuperarEmociones();
    }
  }, [notificacion, emociones]);
  // [] los corchetes vacios en useEffect hacen que no se ejecute mas
  // si le pasamos algun prop o state, hacemos que useEffect solo se ejecute
  // al inicio y cuando algo de lo que le hayamos pasado se modifique.
  // prop: info recibida desde el componente padre
  // state: info propia y original de este componente

  async function recuperarEmociones() {
    // fetch("http://localhost:3001/pomodoro-technique")
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/emotions-manage`,
      wrapUsingAuth()
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Revisar Data que traigo de Mongo", data);
        setEmociones(data);
      });
  }

  function setUpdate() {
    console.log("me ejecuto");
    // recuperarEmociones();
  }

  async function eliminarEmocion(emocionClickada) {
    setEmociones([]);
    console.log("Eliminar");
    console.log(emocionClickada);

    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/emotions-manage/${emocionClickada._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      const indice = emociones.indexOf(emocionClickada);
      emociones.splice(indice, 1);
      setEmociones(emociones);
    });
  }

  async function editarEmocion(e) {
    console.log("Editar");
    console.log(e);

    fetch(`${process.env.REACT_APP_API_BASE_URL}/emotions-manage/${e._id}`, {
      method: "PUT",

      headers: {
        "Content-type": "application/json",
        Authorization: getAuth(),
      },
      body: JSON.stringify({
        title: e.nuevoTitulo,
        emotionsManage: e.nuevaDescripcion.split("\n").filter(Boolean),
        // url: e.nuevaUrl ? e.nuevaUrl : e.url,
        url: e.nuevaUrl ?? e.url,
        //superternario
      }),
    }).then(() => {
      // window.location.reload(false);

      e.title = e.nuevoTitulo;
      e.emotionsManage = e.nuevaDescripcion.split("\n").filter(Boolean);
      e.url = e.nuevaUrl;
      console.log(emociones);
      desactivarEdicion(e);
      setEmociones([...emociones]);
    });
  }

  function activarEdicion(e) {
    e.edicionActivada = true;
    e.nuevoTitulo = "";
    e.nuevaDescripcion = "";
    e.nuevaUrl = "";
    console.log(e);
    document.getElementById(e._id).classList.add("enabled");
    document.getElementById(e._id).classList.remove("disabled");
  }

  function desactivarEdicion(e) {
    e.edicionActivada = false;
    e.nuevoTitulo = null;
    e.nuevaDescripcion = null;
    e.nuevaUrl = null;
    document.getElementById(e._id).classList.add("disabled");
    document.getElementById(e._id).classList.remove("enabled");
  }

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 py-5">
      {emociones.map((emocion) => (
        <Card
          className="card_main"
          key={emocion._id}
          style={{ width: "27rem" }}
        >
          <Card.Img
            variant="top"
            src={
              emocion.url == null || emocion.url == ""
                ? "https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320562/a-sad-woman-looking-out-of-the-window.jpg"
                : emocion.url
            }
          />

          <Card.Body>
            <Card.Title>{emocion.title}</Card.Title>
            {emocion.emotionsManage.map(function (parrafo) {
              return (
                <Card.Text key={parrafo} className="card_text">
                  {parrafo}
                </Card.Text>
              );
            })}
            <AiFillEdit onClick={() => activarEdicion(emocion)} /> &nbsp; &nbsp;
            <AiFillDelete onClick={() => eliminarEmocion(emocion)} />
            <div className="formulario_edicion disabled" id={emocion._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => {
                    emocion.nuevaUrl = e.target.value;
                  }}
                  type="url"
                  placeholder={t("formCards.two")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => {
                    emocion.nuevoTitulo = e.target.value;
                  }}
                  type="text"
                  placeholder={t("formCards.three")}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  placeholder={t("formCards.four")}
                  rows={7}
                  onChange={(e) => {
                    emocion.nuevaDescripcion = e.target.value;
                  }}
                />
              </Form.Group>
              <Form>
                <Button
                  onClick={() => editarEmocion(emocion)}
                  variant="primary"
                  type="button"
                >
                  {t("formCards.six")}
                </Button>
                <Button
                  onClick={() => desactivarEdicion(emocion)}
                  variant="secondary"
                  type="button"
                >
                  {t("formCards.seven")}
                </Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
      ))}
      <p>{emociones.length == 0 ? "No tienes nada creado" : ""}</p>
    </div>
  );
}

export default CardDataBase;
