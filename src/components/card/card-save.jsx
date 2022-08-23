import { useTranslation } from "react-i18next";
import { Card } from "react-bootstrap";
import "./style.css";

function CardManageEmotion({ manageEmotions }) {
  const [t, i18n] = useTranslation("global");
  console.log("TIPO DE DATO", manageEmotions);
  return (
    <>
      <Card className="mt-5 mb-5 card_main" style={{ width: "27rem" }}>
        <Card.Img
          variant="top"
          src={`https://pomonew.onrender.com/static/${manageEmotions.img}`}
        />

        {/* src={`http://localhost:3001/static/${manageEmotions.img}`} */}

        <Card.Body>
          <Card.Title>{manageEmotions.title}</Card.Title>
          <Card.Text className="card_text">
            {manageEmotions.emotionsManage.map((v) => (
              <p>{v}</p>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardManageEmotion;

// import { useTranslation } from "react-i18next";
// import { Card } from "react-bootstrap";
// import "./style.css";

// function CardManageEmotion() {
//   const [t, i18n] = useTranslation("global");
//   // console.log("TIPO DE DATO", manageEmotions);
//   return (
//     <>
//       <Card className="mt-5 mb-5 card_main" style={{ width: "27rem" }}>
//         <Card.Img variant="top" src="../assets/sad.jpg" />

//         {/* src={`http://localhost:3001/static/${manageEmotions.img}`} */}

//         <Card.Body>
//           <Card.Title>{t("titleCards.one")}</Card.Title>
//           <Card.Text className="card_text">{t("sadCard.one")}</Card.Text>
//         </Card.Body>
//       </Card>
//     </>
//   );
// }

// export default CardManageEmotion;



return (
    <>
      {/* <div className="d-flex flex-wrap justify-content-around"> */}
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {emotions.map((v, i) => (
          <CardManageEmotion key={i} manageEmotions={v}></CardManageEmotion>
        ))}
      </div>

      <div className="d-flex flex-wrap justify-content-between">
        {emotion.map((v, i) => (
          <CardEmotion key={i} emotions={v}></CardEmotion>
        ))}
      </div>

      <div className="d-flex flex-wrap justify-content-between">
        {pomo.map((v, i) => (
          <CardPomodoro key={i} pomodoro={v}></CardPomodoro>
        ))}
      </div>

      <CardGroup></CardGroup>

      {/* <Button className="btn btn-outline-secondary" onClick={() => {
        console.log('token', getTokenUser);
        // fetch('http://localhost:3001/users/delete', {
         fetch('https://pomoback-dev.onrender.com/users/delete', {
          method: "DELETE", 
          headers: {
              "Content-type": 'application/json',
              'Authorization': `Bearer ${getTokenUser}`
          },
      })}}>desaparecer</Button> */}
    </>
  );
}

export default User;


{/*`https://pomonew.onrender.com/static/${manageEmotions.img}`*/}
         {/* src={`http://localhost:3001/static/${manageEmotions.img}`} */
         
{/* {manageEmotions.emotionsManage.map((v) => (
              <p>{v}</p>
            ))} */}