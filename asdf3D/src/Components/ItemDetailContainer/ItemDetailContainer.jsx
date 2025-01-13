import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToCart } = useCart(); 
    const [product, setProduct] = useState();

    useEffect(() => {
        let productsCollection = collection( db , "products");
        let refDoc = doc( productsCollection, id );
        const getDocById = getDoc(refDoc);
        getDocById.then ((res) => setProduct({...res.data(), id: res.id}));

        // const fetchProduct = () => {
        //     const foundProduct = products.find((item) => item.id === id);
        //     setProduct(foundProduct);
        // };
        // fetchProduct();
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