/**
 * Esto es un ejemplo de una ruta privada. Ejemplo de la documentación.
 * https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
 */
import Card from "../../components/card";
import CardGroup from "../../components/card-group";
import Button from "react-bootstrap/esm/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useUser } from "../../core/users/user.hook";
import { useEffect } from "react";
import CardManageEmotion from "../../components/card";
import CardEmotion from "../../components/card/card-emotion";
import CardPomodoro from "../../components/card/card-pomo";
import "./styles.css";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import CardForm from "../../components/cardform";
import CardDataBase from "../../components/card/card-database";

function User() {
  const [emotions, setEmotions] = useState([]);
  const [emotionsFiltered, setEmotionsFiltered] = useState([]);
  // console.log(emotions);

  const [emotion, setEmotion] = useState([]);
  const [emotionFiltered, setEmotionFiltered] = useState([]);
  // console.log(emotion);

  const [pomo, setPomo] = useState([]);
  const [pomoFiltered, setPomoFiltered] = useState([]);
  // console.log(emotion);

  useEffect(() => {
    // fetch("http://localhost:3001/emotions-manage")
    fetch("https://pomonew.onrender.com/emotions-manage")
      .then((res) => res.json())
      .then((data) => {
        setEmotions(data);
        setEmotionsFiltered(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    // fetch("http://localhost:3001/emotions")
    fetch("https://pomonew.onrender.com/emotions")
      .then((res) => res.json())
      .then((data) => {
        setEmotion(data);
        setEmotionFiltered(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    // fetch("http://localhost:3001/pomodoro-technique")
    fetch("https://pomonew.onrender.com/pomodoro-technique")
      .then((res) => res.json())
      .then((data) => {
        setPomo(data);
        setPomoFiltered(data);
        console.log(data);
      });
  }, []);

  const getTokenUser = sessionStorage.getItem("auth_token");

  const manageEmotions = emotions;

  // LAS PROPS SON: manageEmotions, emotions y pomodoro dentro de los map
  console.log("EMOTIONS", emotions);

  return (
    <>
      {/* <div className="d-flex flex-wrap justify-content-around"> */}
      <div className="d-flex flex-wrap justify-content-center gap-4 py-5">
        <CardManageEmotion></CardManageEmotion>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-4 py-5">
        <CardDataBase></CardDataBase>
      </div>

      <CardForm></CardForm>

      <CardGroup></CardGroup>
    </>
  );
}

export default User;
