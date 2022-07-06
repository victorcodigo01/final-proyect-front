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

    fetch("http://localhost:3001/emotions-manage")
    .then(res => res.json())
    .then(data => {
      setEmotions(data)
      setEmotionsFiltered(data)
      console.log(data);
    })
    },[])



  useEffect(()=>{

fetch("http://localhost:3001/emotions")
.then(res => res.json())
.then(data => {
  setEmotion(data)
  setEmotionFiltered(data)
  console.log(data);
})
},[])


  useEffect(()=>{

fetch("http://localhost:3001/pomodoro-technique")
.then(res => res.json())
.then(data => {
  setPomo(data)
  setPomoFiltered(data)
  console.log(data);
})
},[])

const getTokenUser = sessionStorage.getItem('auth_token');
   
// const manageEmotions = emotions;

    // LAS PROPS SON: manageEmotions, emotions y pomodoro dentro de los map
console.log('EMOTIONS',emotions)
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
       

        <CardGroup></CardGroup>
        
        <Button className="btn btn-outline-secondary" onClick={() => {
        console.log('token', getTokenUser);
         fetch('http://localhost:3001/users/delete', {
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