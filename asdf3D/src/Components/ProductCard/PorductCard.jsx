import { Link } from "react-router-dom";


const ProductCard = ({ id, name, price, img }) => (
    <div className="col-md-4">
        <div className="card mb-4">
            {/* Imagen del producto */}
            <img 
                src={img} 
                className="card-img-top" 
                alt={name} 
                style={{ height: "300px", objectFit: "cover" }} 
            />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Precio: ${price}</p>
                <Link to={`/products/${id}`} className="btn btn-primary">
                    Ver Detalle
                </Link>
            </div>
        </div>
    </div>
);

export default ProductCard;