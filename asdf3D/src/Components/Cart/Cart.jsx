import React from "react";
import { useCart } from "../../Context/CartContext";

const Cart = () => {
    const { cart, totalItems, totalPrice, removeFromCart, clearCart } = useCart();

    if (cart.length === 0) {
        return <p>El carrito está vacío.</p>;
    }

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio unitario: ${item.price}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <h2>Total: ${totalPrice()}</h2>
            <h3>Productos totales: {totalItems()}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    );
};

export default Cart;