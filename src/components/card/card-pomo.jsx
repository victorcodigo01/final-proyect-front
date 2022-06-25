import { useTranslation } from "react-i18next";
import {Card} from "react-bootstrap";


function CardPomodoro ({pomodoro}){
    const [t, i18n] = useTranslation("global");
    return(
        <>
        
        
        <Card className="mt-5 mb-5 rounded " style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/51/441350c22211e4bd49df699111f70c/Wanting-to-be-happy.JPG?auto=format%2Ccompress&dpr=1" />
            <Card.Body>
                <Card.Title>Joy</Card.Title>
                <Card.Text>
                emotions
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>

        
        </>
    )
}

        
export default CardPomodoro;