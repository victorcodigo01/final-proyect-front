import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CardDataBase() {
  const [emociones, setEmociones] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3001/pomodoro-technique")
    fetch(`${process.env.REACT_APP_API_BASE_URL}/emotions-manage`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Revisar Data que traigo de Mongo", data);
        setEmociones(data);
      });
  }, []);

  async function eliminarEmocion(e) {
    console.log("Eliminar");
    console.log(e);

    fetch(`${process.env.REACT_APP_API_BASE_URL}/emotions-manage/${e._id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => window.location.reload(false));
  }

  async function editarEmocion(e) {
    console.log("Editar");
    console.log(e);

    fetch(`${process.env.REACT_APP_API_BASE_URL}/emotions-manage/${e._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: e.nuevoTitulo,
        emotionsManage: e.nuevaDescripcion.split("\n").filter(Boolean),
      }),
    }).then(() => {
      window.location.reload(false);
      // e.title = e.nuevoTitulo;
      // e.emotionsManage = e.nuevaDescripcion.split("\n").filter(Boolean);
      // console.log(emociones);
      // desactivarEdicion(e);
      // setEmociones(emociones);
    });
  }

  function activarEdicion(e) {
    e.edicionActivada = true;
    e.nuevoTitulo = "";
    e.nuevaDescripcion = "";
    console.log(e);
    document.getElementById(e._id).classList.add("enabled");
    document.getElementById(e._id).classList.remove("disabled");
  }

  function desactivarEdicion(e) {
    e.edicionActivada = false;
    e.nuevoTitulo = null;
    e.nuevaDescripcion = null;
    document.getElementById(e._id).classList.add("disabled");
    document.getElementById(e._id).classList.remove("enabled");
  }

  return (
    <div className="listaEmociones">
      {emociones.map((emocion) => (
        <Card
          className="card_main"
          key={emocion._id}
          style={{ width: "27rem" }}
        >
          <Card.Img
            variant="top"
            src="https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320562/a-sad-woman-looking-out-of-the-window.jpg"
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
            <div className="disabled" id={emocion._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    emocion.nuevoTitulo = e.target.value;
                  }}
                  type="text"
                  placeholder="Enter text"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
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
                  Update
                </Button>
                <Button
                  onClick={() => desactivarEdicion(emocion)}
                  variant="secondary"
                  type="button"
                >
                  Cancel
                </Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardDataBase;
