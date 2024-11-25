import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;