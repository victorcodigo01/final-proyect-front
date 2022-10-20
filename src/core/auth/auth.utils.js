export const AUTH_STORAGE_KEY = "auth_token";

export const wrapUsingAuth = (options = {}) => {
  //variable de funcion, el option={}actua como parametro de fucion, si le llega info la utiliza, y si no pone un valor por defecto
  options.headers = {
    // coje el objeto que se haya iniciado o recibido, y si a su propiedad headers, primero concatena la propiedad headers que tuviera ya, y concatena una propiedad nueva llamada Authorization
    ...options.headers,
    Authorization: `Bearer ${sessionStorage.getItem(AUTH_STORAGE_KEY)}`, //obtiene o trae el token del usuario actual, el contenedor sessionStorage es el NAVEGADOR, las HEADERS indican info sobre la API que se ha invocado
  };
  return options;
};

export function getAuth() {
  return `Bearer ${sessionStorage.getItem(AUTH_STORAGE_KEY)}`; //getItem obtiene de las cookies, la cookie cuyo nombre identificativo sea el que le estamos pasando, en este caso  "auth_token"
}
