import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
    <>
    <footer className="text-white py-4 bg-dark footer">
        <div className="container">
            <nav className="row">
                 <Link to="/privacy" className="col-12 col-md3 d-flex align-items-center justify-content-center link-warning">Politica de Privacidad</Link>
            </nav>
        </div>
    </footer>
  </>
);

export default Footer;