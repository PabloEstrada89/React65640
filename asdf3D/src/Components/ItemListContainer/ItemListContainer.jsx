import { products } from "../../products"
import { useState } from "react"


function ItemListContainer () {
  const [items, setItems] = useState (products)

  return (
    <div>
        <h1 className="text-center mb-4">{greeting}</h1>
        <div className="row">
            {items.map(item => (
                <div className="col-md-4" key={item.id}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Precio: ${item.price}</p>
                            <Link to={`/product/${item.id}`} className="btn btn-primary">Ver Detalle</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}
export default ItemListContainer