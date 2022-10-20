import { useAuth } from "../../../core/auth/auth.hook";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";

function DeleteUser() {
  const { deleting, isDeleting, isAuth } = useAuth();
  const [DeletedUser, setDeletedUser] = useState(false);
  const navigate = useNavigate();
  if (isAuth) navigate("/"); //si entro al registro logado no me lo debe permitir

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.pass.value,
    };
    deleting(user).then(() => setDeletedUser(true));
  };

  return (
    <>
      {isDeleting ? (
        <h1>Eliminating...</h1>
      ) : (
        <>
          {DeletedUser ? <p>Usuario eliminado</p> : ""}
          <form className="formulario" onSubmit={handleSubmit}>
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              className="input"
              name="pass"
              type="password"
              placeholder="Contraseña"
            />
            <button className="boton" type="submit">
              Eliminar usuario
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default DeleteUser;
