import ProductCard from "../ProductCard/PorductCard";


const Item = ({ product }) => (
    <ProductCard id={product.id} name={product.name} price={product.price} img={product.img}  />
);

export default Item;