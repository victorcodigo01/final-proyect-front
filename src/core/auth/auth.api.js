const generateAuthPostRequest = (user) => ({
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(user),
});

/**
 * given a user (email, password), returns a promise that resolves with the user
 */

export const registerAPI = async (user) => {
  return await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
    generateAuthPostRequest(user)
  );
};

export const validateTokenAPI = async (token) => {
  return await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/auth/validate?token=${token}`
  );
};

export const loginAPI = async (user) => {
  const respuesta = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
    generateAuthPostRequest(user)
  );
  if (!respuesta.ok) throw new Error(respuesta.status);
  return await respuesta.json();
};
