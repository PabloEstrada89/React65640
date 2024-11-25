import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../products"; // Cambiado para usar desde la raíz
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = () => {
            const foundProduct = products.find((item) => item.id === id);
            setProduct(foundProduct);
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = (quantity) => {
        console.log(`Se añadieron ${quantity} unidades al carrito`);
    };

    if (!product) return <p>Cargando...</p>;

    return <ItemDetail product={product} onAdd={handleAddToCart} />;
};

export default ItemDetailContainer;
