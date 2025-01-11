import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  products} from "../../products";
import Item from "./Item";
import { db } from "../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore"

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const productsCollection = collection(db, "products");
        const getProducts = getDocs(productsCollection);
        getProducts.then(( res ) => console.log(res));


        // console.log("categoryId:", categoryId);
        // console.log("products:", products);
        // if (categoryId) {
        //     const filtered = products.filter((product) => product.category === categoryId);
        //     console.log("Filtered products:", filtered);
        //     setFilteredProducts(filtered);
        // } else {
        //     console.log("All products:", products);
        //     setFilteredProducts(products);
        // }
    }, [categoryId]);

    // const agregarProductos = () => {
    //     let productsCollection = collection ( db, "products" )
        
    //     products.forEach (elemento => {
    //         addDoc ( productsCollection, elemento)
    //     })
    // };
    return (
        <div className="container">
            <div className="row">
                {/* <button onClick={agregarProductos}> agregar poroductos </button> */}
                {filteredProducts.map((product) => (
                    <Item key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default ItemListContainer;