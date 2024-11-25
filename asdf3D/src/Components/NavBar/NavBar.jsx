import React from "react";
import { Link, NavLink } from "react-router-dom";
import { products } from "../../products";

const NavBar = () => {
    const categories = [...new Set(products.map((product) => product.category))];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    asdf3D
                </Link>
               
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                    
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Inicio
                            </NavLink>
                        </li>

                        {categories.map((category) => (
                            <li className="nav-item" key={category}>
                                <NavLink className="nav-link" to={`/category/${category}`}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;