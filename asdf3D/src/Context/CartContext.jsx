import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para acceder al contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar un producto al carrito
    const addToCart = (product, quantity) => {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            // Si el producto no está en el carrito, agregarlo
            setCart([...cart, { ...product, quantity }]);
        }
    };

    // Calcular el total de productos en el carrito
    const totalItems = () => cart.reduce((acc, item) => acc + item.quantity, 0);

    // Calcular el total del precio
    const totalPrice = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Eliminar un producto del carrito
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // Vaciar el carrito
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                totalItems,
                totalPrice,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};