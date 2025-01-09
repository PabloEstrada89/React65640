import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CheckoutForm from "./Components/CheckoutForm/CheckoutForm";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Context/CartContext";


function App() {
    return (
        <CartProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="cart" element={<Cart />} />
                <Route path="/products/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<h1>Error 404: Página no encontrada</h1>} />
                <Route path="/checkout" element= {<CheckoutForm />} />
            </Routes>
        </BrowserRouter>
        </CartProvider>
    );
}

export default App;