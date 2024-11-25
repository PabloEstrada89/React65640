import { products } from "../../products";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemListContainer () {
  const [items] = useState (products)
  

  return (
    <div>        
        <div className="row">
            {items.map(item => (
                <div className="col-md-4" key={item.id}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Precio: ${item.price}</p>
                            <Link to={`/products/${item.id}`} className="btn btn-primary">Ver Detalle</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default ItemListContainer;