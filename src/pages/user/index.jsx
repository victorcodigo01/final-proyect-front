/**
 * Esto es un ejemplo de una ruta privada. Ejemplo de la documentación.
 * https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
 */
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

import { useUser } from "../../core/users/user.hook";



function User () {
    const {user} = useUser();
    return (
        <> 
        <div className="flex">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/51/441350c22211e4bd49df699111f70c/Wanting-to-be-happy.JPG?auto=format%2Ccompress&dpr=1" />
            <Card.Body>
                <Card.Title>Joy</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/412/cpsprodpb/14B9E/production/_99749848_1206964.jpg" />
            <Card.Body>
                <Card.Title>Sorrow</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*cD8nIooIkIrLoHKBOGnj9A.jpeg" />
            <Card.Body>
                <Card.Title>Anger</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.meme-arsenal.com/memes/e92aa6be12ec3d6935d901f97b650929.jpg" />
            <Card.Body>
                <Card.Title>Surprise</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://s3.cine3.com/2020/06/exposed-dearmas.jpg" />
            <Card.Body>
                <Card.Title>Exposed</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i2.wp.com/i.pinimg.com/originals/ea/7a/a2/ea7aa21f640befc564fc018da279ab48.jpg" />
            <Card.Body>
                <Card.Title>Blurred</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://assets.change.org/photos/1/yz/fj/EHYzFjSmUpODYuP-800x450-noPad.jpg?1587257425" />
            <Card.Body>
                <Card.Title>Headwear</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
        
        
</>

            // <p>{user.email}</p>
            
       
        )

}

export default User;