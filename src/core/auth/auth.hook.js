import { registerAPI, loginAPI, validateTokenAPI } from "./auth.api";
import { useState } from "react";
import { AUTH_STORAGE_KEY } from "./auth.utils";
//vamos a hacer un custom hook

/*se encarga de TODA la gestion de la autenticación
- expone la gestion del Auth
- expone el token y la gestión de guardar el token (JWT)

¿Que quiero devolver?
- si estamos logados o no
- si estamos cargando o no (loading o no)
- funcion registarse
- funcion logar
- funcion validar
*/

export const useAuth = () => {
  const [isAuth, updateIsAuth] = useState(
    sessionStorage.getItem(AUTH_STORAGE_KEY) !== null // mientras q al final de la funcion useState, devuelva una variable, puedes pasarle lo que quieras
  ); // en el codigo puedes hacer siempre lo que tu quieras, si al final se da un valor, eso le vale, las condiciones siempre devuelve un boolean
  const [isLoading, updateIsLoading] = useState(false); //va desgranando el tipo de datos, que te devuelve, busca en los docs

  const register = async (user) => {
    updateIsLoading(true); //me pongo en modo carga
    await registerAPI(user);
    updateIsLoading(false); //cuando termino de llamar a la API dejo de cargar
  };

  const login = async (user) => {
    updateIsLoading(true); //me pongo en modo carga
    const token = await loginAPI(user);
    updateIsAuth(true);
    sessionStorage.setItem(AUTH_STORAGE_KEY, token.access_token); // si tiene un punto token es un objeto
    updateIsLoading(false); //cuando termino de llamar a la API dejo de cargar
  };

  const validate = async (token) => {
    updateIsLoading(true); //me pongo en modo carga
    await validateTokenAPI(token);
    updateIsLoading(false); //cuando termino de llamar a la API dejo de cargar
  };

  return {
    isAuth,
    isLoading,
    register,
    login,
    validate,
  };
};
