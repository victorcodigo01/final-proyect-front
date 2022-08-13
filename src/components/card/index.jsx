import { useTranslation } from "react-i18next";
import {Card} from "react-bootstrap";
import './style.css';




function CardManageEmotion ({manageEmotions} ){
    const [t, i18n] = useTranslation("global");
    console.log('TIPO DE DATO', manageEmotions)
    return(
        <>
        
        
        <Card className="mt-5 mb-5 card_main" style={{ width: '27rem' }}>
            <Card.Img variant="top" src={`https://pomonew.onrender.com/${manageEmotions.img}`} />
            
            {/* src={`http://localhost:3001/static/${manageEmotions.img}`} */}
            {/* src={`https://pomoback-dev.onrender.com/static/${manageEmotions.img}`} */}
            <Card.Body>
                <Card.Title>{manageEmotions.title}</Card.Title>
                <Card.Text className="card_text">
                {manageEmotions.emotionsManage.map(v => <p>{v}</p> )}
                
                
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>

        
        </>
    )
}

        
export default CardManageEmotion;