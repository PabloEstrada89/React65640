import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const CartWidget = () => {
    const { totalItems } = useCart();

    return (
        <Link to="/cart" className="btn btn-outline-primary">
            <i className="bi bi-cart"></i>
            {totalItems() > 0 && <span> ({totalItems()})</span>}
        </Link>
    );
};

export default CartWidget;