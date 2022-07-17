import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './pages/auth/register';
import Validate from './pages/auth/validate';
import Login from './pages/auth/login';
import RequireAuth from './core/auth/auth.component';
import User from './pages/user';
import React, { useState } from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import PrivacyPolicy from './shared/footer/privacy-policy';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Navega from './components/nav';
import { ThemeProvider } from "./context/theme.context"
import Body from './components/body';
import Card from './components/card';
import DeleteUser from './pages/auth/delete';

   





function App() {
 
  

  


  return (


    <BrowserRouter>
      <Navega></Navega>
      <Body></Body>
      

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/auth">
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="delete" element={<DeleteUser />}></Route>
          </Route>
          <Route path="/validate" element={<Validate />} />
          <Route path="/user" element={<RequireAuth><User /></RequireAuth>} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          
        </Routes>
      <Footer></Footer>
    </BrowserRouter>

   
  );
}

export default App;
