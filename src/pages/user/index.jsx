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
import { useEffect } from 'react';
import CardManageEmotion from "../../components/card";
import CardEmotion from "../../components/card/card-emotion";
import CardPomodoro from "../../components/card/card-pomo";
import './styles.css';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";




function User () {



const [emotions, setEmotions] = useState([])
  const [emotionsFiltered, setEmotionsFiltered] = useState([])
// console.log(emotions);
  

const [emotion, setEmotion] = useState([])
  const [emotionFiltered, setEmotionFiltered] = useState([])
// console.log(emotion);


const [pomo, setPomo] = useState([])
  const [pomoFiltered, setPomoFiltered] = useState([])
  // console.log(emotion);



useEffect(()=>{

    // fetch("http://localhost:3001/emotions-manage")
    fetch("https://example-pomodoro-emot.onrender.com")
    .then(res => res.json())
    .then(data => {
      setEmotions(data)
      setEmotionsFiltered(data)
      console.log(data);
    })
    },[])



  useEffect(()=>{

// fetch("http://localhost:3001/emotions")
fetch("https://example-pomodoro-emot.onrender.com")
.then(res => res.json())
.then(data => {
  setEmotion(data)
  setEmotionFiltered(data)
  console.log(data);
})
},[])


  useEffect(()=>{

// fetch("http://localhost:3001/pomodoro-technique")
fetch("https://example-pomodoro-emot.onrender.com")
.then(res => res.json())
.then(data => {
  setPomo(data)
  setPomoFiltered(data)
  console.log(data);
})
},[])

const getTokenUser = sessionStorage.getItem('auth_token');
   
const manageEmotions = emotions;

    // LAS PROPS SON: manageEmotions, emotions y pomodoro dentro de los map
console.log('EMOTIONS',emotions)

// let form = document.getElementById("form");
// let input = document.getElementById("input");
// let msg = document.getElementById("msg");
// let posts = document.getElementById("posts");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("button clicked");

//   formValidation();
// });



// let formValidation = () => {
//   if (input.value === "") {
//     msg.innerHTML = "Post cannot be blank";
//     console.log("failure");
//   } else {
//     console.log("successs");
//     msg.innerHTML = "";
//   }
// };


    return (

        <>
        
        
        <div className="d-flex flex-wrap justify-content-around">
        {emotions.map((v,i)=>  <CardManageEmotion key={i} manageEmotions={v} ></CardManageEmotion>)}
        </div>                                          

        <div className="d-flex flex-wrap justify-content-between">
        {emotion.map((v,i)=> <CardEmotion key={i} emotions={v} ></CardEmotion>)}
        </div>

        <div className="d-flex flex-wrap justify-content-between">
        {pomo.map((v,i)=> <CardPomodoro key={i} pomodoro={v} ></CardPomodoro>)}
        </div>
       

        <label>Sube una foto de perfil:</label>
        <br></br>
        <input type="file" className="b-photo"
          id="avatar" name="avatar"
          accept="image/png, image/jpeg, image/jpg"></input>

      <h1>Escribe tu comentario</h1>
      <div className="container">

          <div className="left">
            <form id="form">
              <textarea name="post" id="input" cols="30" rows="10"></textarea>
              <br></br>
              <div id="msg"></div>
              <button type="submit" className="but"> Post </button>
            </form>
          </div>
          
          <div className="right">
            <h3>Tus comentarios aquí</h3>
              <div id="posts">
                <div>
                  <span className="options">
                    <p>Hello world post 1</p>
                    <i className="fa"><FaEdit/></i>
                    <i className="fas fa-trash-alt"><AiFillDelete/></i>
                  </span>
                </div>

                <div >
                  <span className="options">
                    <p>Hello world post 22</p>
                    <i className="fa"><FaEdit/></i>
                    <i className="fas fa-trash-alt"><AiFillDelete/></i>
                  </span>
                </div>
            </div>
          </div>
      </div>

      

        <CardGroup></CardGroup>
        
        <Button className="btn btn-outline-secondary" onClick={() => {
        console.log('token', getTokenUser);
        // fetch('http://localhost:3001/users/delete', {
         fetch('https://example-pomodoro-emot.onrender.com', {
          method: "DELETE", 
          headers: {
              "Content-type": 'application/json',
              'Authorization': `Bearer ${getTokenUser}`
          },
      })}}>desaparecer</Button>
    
        </>
        

            
            
       
        )

}

export default User;