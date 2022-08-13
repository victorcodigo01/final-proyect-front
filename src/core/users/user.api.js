import { wrapUsingAuth } from "../auth/auth.utils"

//la mejor forma de hacer esto es con un Interceptor
//fetch por defecto no tiene interceptores y por eso se usa axios (la libreria)
// se puede crear un interceptor para fetch


export const getUserInfo = async () => {
    const respuesta = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users`, wrapUsingAuth())
    return await respuesta.json();
}