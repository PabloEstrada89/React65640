import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  products} from "../../products";
import Item from "./Item";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        console.log("categoryId:", categoryId);
        console.log("products:", products);
        if (categoryId) {
            const filtered = products.filter((product) => product.category === categoryId);
            console.log("Filtered products:", filtered);
            setFilteredProducts(filtered);
        } else {
            console.log("All products:", products);
            setFilteredProducts(products);
        }
    }, [categoryId]);

    return (
        <div className="container">
            <div className="row">
                {filteredProducts.map((product) => (
                    <Item key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default ItemListContainer;