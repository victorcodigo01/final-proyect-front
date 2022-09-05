import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

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
    }).then(() =>
      // window.location.reload(false)
      {}
    );
  }

  async function activarEdicion(e) {
    e.edicionActivada = true;
    e.nuevoTitulo = "";
    e.nuevaDescripcion = "";
    console.log(e);
  }

  async function desactivarEdicion(e) {
    e.edicionActivada = false;
    e.nuevoTitulo = null;
    e.nuevaDescripcion = null;
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
            {emocion.emotionsManage?.map(function (parrafo) {
              return <Card.Text className="card_text">{parrafo}</Card.Text>;
            })}
            <AiFillEdit onClick={() => activarEdicion(emocion)} /> &nbsp; &nbsp;
            <AiFillDelete onClick={() => eliminarEmocion(emocion)} />{" "}
            {emocion.edicionActivada}
            {emocion.edicionActivada == true ? (
              <div>
                <form className="formi">
                  <h1>Your Emotion card</h1>
                  <label>
                    Title:
                    <br />
                    <input
                      onChange={(e) => {
                        emocion.nuevoTitulo = e.target.value;
                      }}
                    />
                  </label>
                  <label>
                    Description:
                    <br />
                    <textarea
                      onChange={(e) => {
                        e.nuevaDescripcion = e.target.value;
                      }}
                    />
                  </label>
                  <button onClick={() => editarEmocion(emocion)} type="button">
                    Submit
                  </button>
                  <button
                    onClick={() => desactivarEdicion(emocion)}
                    type="button"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            ) : (
              <div>Hacer prueba</div>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardDataBase;
