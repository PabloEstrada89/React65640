import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { products } from "../../products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToCart } = useCart(); 
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchProduct = () => {
            const foundProduct = products.find((item) => item.id === id);
            setProduct(foundProduct);
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = (quantity) => {
        if (product) {
            addToCart(product, quantity); 
            console.log(`${quantity} unidades de ${product.name} añadidas al carrito.`);
        }
    };

    if (!product) return <p>Cargando...</p>;

    return <ItemDetail product={product} onAdd={handleAddToCart} />;
};

export default ItemDetailContainer;