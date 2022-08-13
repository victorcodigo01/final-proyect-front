import React, { useContext,useState } from 'react';
import { themeContext } from '../../context/theme.context';
import { useTranslation } from 'react-i18next';
import { Navbar, Container, Button, Form } from 'react-bootstrap';

function Navega () {
     const [color,setColor] = useState("light")
     const [t, i18n] = useTranslation("global");
    
    const {theme,toggleTheme } = useContext(themeContext);
    
    return (
        <>
        
        <Navbar bg={theme} expand="lg">
            <Container>
                <Navbar.Brand href="#home">Pomodoros App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    
                    <Form className='d-flex justify-content-between'>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Theme"
                            className="me-4"
                            onChange = {() => toggleTheme()}
                            
                            
                        />
                            <Container>
                                <Button variant="outline-success" onClick={() => i18n.changeLanguage("es")}>ES</Button>
                                <Button variant="outline-success" onClick={() => i18n.changeLanguage("en")}>EN</Button>
                            </Container>
                        
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
        </>
    )
}

export default Navega;
