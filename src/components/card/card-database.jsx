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
  const [emociones, setEmociones] = useState([]); // el state actualizar en este componente
  const [numNotificacion, setNumNotificacion] = useState(notificacion);

  useEffect(() => {
    //
    const recuperacion = async () => {
      fetch(
        `${process.env.REACT_APP_API_BASE_URL}/emotions-manage`, //una API es una URL que hace una escucha desde el backend esta pendiente para recibir y dar informacion
        wrapUsingAuth()
      )
        .then((res) => res.json()) // entonces cuando me llegue le pasa a json (res, nombre q quieras)
        .then((data) => {
          // la recibe y puedes poner el nombre que quieras (data)
          // las then sabe que va a recibir un valor pero le pones el nombre que quieras, como declarar una variable pero que contiene ya informacion
          //segundo .then es una concatenacion en tuberia, el segundo .then recibe el objeto final, los 2 then juntos conformarn la concatenacion en tuberia y el ultimo lo recibe, asi tienes acceso a la info
          console.log("Revisar Data que traigo de Mongo", data);
          setEmociones([...data]);
        });
    };
    console.log(notificacion);
    setNumNotificacion(notificacion);
    if (!primeraCargaHecha) {
      primeraCargaHecha = true;
      recuperacion().catch(console.error);
    } else if (numNotificacion != 0) {
      setNumNotificacion(0); //mandando info cuando esta entre parentesis, la funcion puede usar lo que le has mandado o no e incluso puede mandar otra cosa de vuelta
      recuperacion().catch(console.error);
    }
  }, [notificacion, emociones]);
  // las funciones no siguen un orden lineal, solo se ejecutan cuando se las llama
  // las funciones, las definimos , hasta que no las invocamos no se ejecutan
  // [] los corchetes vacios en useEffect hacen que no se ejecute mas
  /* si le pasamos algun prop o state, hacemos que useEffect solo se ejecute
  al inicio y cuando algo de lo que le hayamos pasado se modifique.*/
  // prop: info recibida desde el componente padre
  // state: info propia y original de este componente
  /* el useEffect te permite asignar codigo que se ejecuta al inicio y cuando se modifica alguno de los estados del componente (si hemos pasaedo algun valor por corchete hace que solo se reejecute cuando esos valores del componente se han modificado)
  sus states o los props*/

  async function recuperarEmociones() {
    //significa que a dividir algo del hilo de ejecucion, porque de forma normal javascript es sincrono
    // fetch("http://localhost:3001/pomodoro-technique")
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/emotions-manage`, //una API es una URL que hace una escucha desde el backend esta pendiente para recibir y dar informacion
      wrapUsingAuth()
    )
      .then((res) => res.json()) // entonces cuando me llegue le pasa a json (res, nombre q quieras)
      .then((data) => {
        // la recibe y puedes poner el nombre que quieras (data)
        // las then sabe que va a recibir un valor pero le pones el nombre que quieras, como declarar una variable pero que contiene ya informacion
        //segundo .then es una concatenacion en tuberia, el segundo .then recibe el objeto final, los 2 then juntos conformarn la concatenacion en tuberia y el ultimo lo recibe, asi tienes acceso a la info
        console.log("Revisar Data que traigo de Mongo", data);
        setEmociones([...data]);
      });
  }

  function setUpdate() {
    console.log("me ejecuto");
    // recuperarEmociones();
  }

  async function eliminarEmocion(emocionClickada) {
    // emocionClickada es un parametro podria haber llamado manolo

    console.log("Eliminar");
    console.log(emocionClickada); //lo que clickas

    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/emotions-manage/${emocionClickada._id}`,
      {
        method: "DELETE", //metodo delete
        headers: {
          "Content-type": "application/json", // (clave-valor) el contenido que te va a traer de vuelta puede ser un json
        },
      }
    ).then(() => {
      // parametro vacio porque no nos interesa lo que nos devuelva, cuando termine el fetch ejecuto
      const indice = emociones.indexOf(emocionClickada); //busca el indice (posicion numerica) de la card que clicko para borrar (puede ser la card 4 de 7)
      emociones.splice(indice, 1); // splice borra parametros de un array , el primer parametro es la posicion por la que tiene que empezar a borrar,y el segundo parametro es cuantos elementos debe borrar
      console.log(emociones);
      setEmociones([...emociones]);
    });
  }

  async function editarEmocion(e) {
    console.log("Editar");
    console.log(e);

    fetch(`${process.env.REACT_APP_API_BASE_URL}/emotions-manage/${e._id}`, {
      //fetch lanza una peticion
      method: "PUT",

      headers: {
        "Content-type": "application/json",
        Authorization: getAuth(),
      },
      body: JSON.stringify({
        title: e.nuevoTitulo, // es la propiedad del body,
        emotionsManage: e.nuevaDescripcion.split("\n").filter(Boolean), // estamos reseteando propiedades, split es metodo separar de strings y/o arrays \n es "salto de linea", para que se quiten y cree un array
        // url: e.nuevaUrl ? e.nuevaUrl : e.url,
        url: e.nuevaUrl ?? e.url,
        //superternario por defecto la primera parte es como una condicion,
      }),
    }).then(() => {
      //.then es cuando empezamos a traer la info, la res
      // window.location.reload(false); Los valores que mandamos ahora los seteamos

      e.title = e.nuevoTitulo;
      e.emotionsManage = e.nuevaDescripcion.split("\n").filter(Boolean);
      e.url = e.nuevaUrl;
      console.log(emociones);
      desactivarEdicion(e);
      setEmociones([...emociones]); // ...emociones -> fuerza a actualizar la lista de emociones, es como clonar
    });
  }

  function activarEdicion(emocionParaActivar) {
    emocionParaActivar.edicionActivada = true;
    emocionParaActivar.nuevoTitulo = "";
    emocionParaActivar.nuevaDescripcion = "";
    emocionParaActivar.nuevaUrl = "";
    console.log(emocionParaActivar);
    document.getElementById(emocionParaActivar._id).classList.add("enabled"); //classList es una propiedad de las etiqueta HTML, .add y .remove es funcion de classlist
    document
      .getElementById(emocionParaActivar._id)
      .classList.remove("disabled");
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
      {emociones.map(
        (
          emocion // el map, recorre (lee uno a uno) los elementos de un array , te permete transformar los elementos del array, Se reperira X veces , map es como un bucle, muy versatil
        ) => (
          <Card
            className="card_main" //atributo HTML className de react
            key={emocion._id} // emocion es el resultado del map, un bucle q recorre el array de emociones entero,
            style={{ width: "27rem" }}
          >
            <Card.Img
              variant="top" //variant es de bootstrap
              src={
                emocion.url == null || emocion.url == "" //emocion.
                  ? "https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320562/a-sad-woman-looking-out-of-the-window.jpg"
                  : emocion.url // si le ponemos una url
              }
            />

            <Card.Body>
              <Card.Title>{emocion.title}</Card.Title>
              {emocion.emotionsManage.map(function (parrafo) {
                // hace lo mismo este map que el primero. el forEach recorre un array pero la diferencia con el map es que el puede transformar y el forEach simplemente recorre
                return (
                  <Card.Text key={parrafo} className="card_text">
                    {parrafo}
                  </Card.Text>
                );
              })}
              <AiFillEdit onClick={() => activarEdicion(emocion)} /> &nbsp;
              &nbsp;{" "}
              {/* los parametros le importan la posicion del parametro, le importa una mierda el nombre*/}
              <AiFillDelete onClick={() => eliminarEmocion(emocion)} />
              <div className="formulario_edicion disabled" id={emocion._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => {
                      // a medida que escribes el evento va saltando
                      emocion.nuevaUrl = e.target.value; // e.target.value es objetivo y trame el nuevo valor del form
                    }}
                    type="url" // tipo de input
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
                    as="textarea" //as en vez de type porq bootstrap se lia
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
                    onClick={() => desactivarEdicion(emocion)} // desactivarEdicion(emocion) emocion, segun ese form en concreto
                    variant="secondary"
                    type="button"
                  >
                    {t("formCards.seven")}
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        )
      )}
      <p>{emociones.length == 0 ? "No tienes nada creado" : ""}</p>
    </div>
  );
}

export default CardDataBase;
