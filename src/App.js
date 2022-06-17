import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register  from './pages/auth/register';
import Validate from './pages/auth/validate';
import Login from './pages/auth/login';
import RequireAuth from './core/auth/auth.component';
import User from './pages/user';
import React, { useState } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles} from './themes.js';
import Header from './shared/header';

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};

`;

function App() {
const [theme, setTheme] = useState('light');

const themeToggler = () => {
  theme === 'light' ? setTheme('dark') : setTheme('light');
}


  return (
    
    <BrowserRouter>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
        <GlobalStyles></GlobalStyles>
        <StyledApp>Hello world
          <button onClick={() => themeToggler()}>Change Theme</button>
        </StyledApp>
      </ThemeProvider>
      <Header></Header>
    <header>
      <p>Esto es el header</p>
    </header>
    <Routes>
      <Route path="/" element={<h1>HELLO</h1> }/>
      <Route path="/validate" element={<Validate />} />
      <Route path="/user" element={<RequireAuth><User/></RequireAuth>} />
      <Route path="/auth">
        <Route path="register" element={<Register/>}></Route>
        <Route path="login" element={<Login/>}></Route>
      </Route>
    </Routes>
    <footer>
      <p>Esto es el footer</p>
    </footer>
  </BrowserRouter>
  );
}

export default App;
