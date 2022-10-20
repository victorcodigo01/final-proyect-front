import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import { getAuth } from "../../core/auth/auth.utils";

import "./styles.css";

export default function CardForm({ notificaPadre }) {
  //notificaPadre es una prop que le pasa el padre
  const [t, i18n] = useTranslation("global");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [url, setUrl] = useState("");

  async function handleSubmit(e) {
    //es async porque dentro se va a dividir el hilo de ejecución. hadleSubmit es manejarSubmit, maneja el envio del formulario, maneja evento porq queremos escuchar el evento hacer lo que tengamos q hacer, y darle tiempo para enviar los datos
    e.preventDefault(); // e es el evento submit, basicamente para q no se sigan enviando eventos en cascada,

    setLoading(true);

    // await fetch("http://localhost:3001/emotions-manage/create", {
    const nuevaEmocion = {
      title,
      emotionsManage: description.split("\n").filter(Boolean),
      url,
    };
    await fetch(
      //await es para no tener que hacer el then, te da igual un poco cuando se reciba, simplemente quieres que se ejecute
      `${process.env.REACT_APP_API_BASE_URL}/emotions-manage/create`, //ruta create , creada, luego se invoca en el backend
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: getAuth(),
        },
        body: JSON.stringify(nuevaEmocion), //en el body tiene que ir un string pero en formato JSON
      }
    )
      .then((res) => res.json()) // entonces cuando me llegue le pasa a json (res, nombre q quieras)
      .then((data) => {
        console.log(data);
        setLoading(false);
        setSuccessful(true);
        setTitle("");
        setUrl("");
        setDescription("");
        // window.location.reload(false);
        notificaPadre(data); //notificaPadre, el padre le ha dado la manera de noticarle, pero el HIJO le manda info al padre, el padre le da la manera para q el HIJO pueda mandarle info (PROP, funcion, variable o lo que se)
      });
  }

  return (
    <>
      <h1>{t("formCards.one")} </h1>
      <Form className="formi" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setSuccessful(false);
            }}
            type="url"
            placeholder={t("formCards.two")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setSuccessful(false);
            }}
            type="text"
            placeholder={t("formCards.three")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            placeholder={t("formCards.four")}
            rows={7}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setSuccessful(false);
            }}
          />
        </Form.Group>

        <Button disabled={loading} variant="primary" type="submit">
          {t("formCards.five")}
        </Button>
        {successful && ( // muestra la mano cuando crea una card, y cuando el usuario escribe algo se quita  setSuccessful(true);  setSuccessful(false);
          <span style={{ fontSize: "2rem" }} aria-label="thumbs up" role="img">
            👍🏼
          </span>
        )}
      </Form>
    </>
  );
}
