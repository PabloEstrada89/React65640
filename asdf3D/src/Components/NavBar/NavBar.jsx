import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src="../../src/assets/3Recurso 6@2x-100.jpg" 
                        alt="Logo Empresa" 
                        style={{ height: "40px", marginRight: "10px" }}                     
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/filamentos">Filamentos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/resinas">Resinas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/impresoras">Impresoras</Link>
                        </li>
                    </ul>

                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;