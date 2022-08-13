import React, { useContext } from "react";
import { themeContext } from "../../context/theme.context";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";

function Naveg() {
  // const[color, setColor] = useState("light");
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <Navbar bg={theme} expand="lg">
      <Container>
        <Navbar.Brand href="#home">Victos App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex justify-content-between">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Theme"
              className="me-4"
              onChange={() => toggleTheme()}
            />
            <Container>
              <Button variant="outline-success">EN</Button>
              <Button variant="outline-success">ES</Button>
            </Container>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naveg;
