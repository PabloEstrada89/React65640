import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to="/cart">
        <h2> Carrito 🛒</h2>
        </Link>
    );
};

export default CartWidget;