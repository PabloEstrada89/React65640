import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ product, onAdd }) => (
    <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        {/* Imagen del producto */}
        <img 
            src={product.img} 
            className="card-img-top" 
            alt={product.name} 
            style={{ height: "600px", objectFit: "cover" }} 
        />
        
        <div className="card-body">
            <h1 className="card-title">{product.name}</h1>
            <p className="card-text">{product.description}</p>
            <h3>Precio: ${product.price}</h3>
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        </div>
    </div>
);

export default ItemDetail;


