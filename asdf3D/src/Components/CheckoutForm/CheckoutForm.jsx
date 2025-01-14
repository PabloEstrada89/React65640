import { createContext, useState } from "react";
import { useCart } from "../../Context/CartContext";
import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";


const CheckoutForm = () => {
    const { cart, totalPrice} = useCart()
    const [ userData, setUserData] = useState({
      nombre: "",
      userEmail: "",
      teléfono: "",
    });
  
const capturarDatos = ( e ) => {

  setUserData ( {...userData, [e.target.name]: e.target.value})

}

  const funcionFormulario = ( e ) => {
    e.preventDefault();
    let total = totalPrice();
    let order = {
      buyer: userData ,
      items: cart ,
      total,
    };

    let ordersCollection = collection ( db, "orders")
    addDoc (ordersCollection , order);
  };
  return (
    <div>CheckoutForm
        <h2>Formulario</h2>
        <form onSubmit={funcionFormulario}>
            <input type="text" placeholder="nombre" name="nombre" onChange = {capturarDatos}/>
            <input type="text" placeholder="mail" name="userEmail" onChange = {capturarDatos}/>
            <input type="text" placeholder="teléfono" name="teléfono" onChange = {capturarDatos}/>
            <button> enviar </button>
            <button type="button"> cancelar</button>
        </form>
    </div>
  )
}

export default CheckoutForm