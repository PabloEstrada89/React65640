import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";



function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/cart" element= {<cart />} />
                <Route path="/products/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<h1>Error 404: Página no encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;