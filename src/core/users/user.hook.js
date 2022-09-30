import { useEffect } from "react";
import { getUserInfo } from "./user.api";
import { useState } from "react";

export const useUser = () => {
  const [user, updateUser] = useState({});

  useEffect(() => {
    getUserInfo().then(updateUser); // las promesas devuelven el valor de la promesa, el await es como una promesa
    // getUserInfo().then(infoObtenida => {    // la primera linea hace lo mismo que la segunda
    //   updateUser(infoObtenida);
    // })
  }, []);

  return {
    user,
  };
};
