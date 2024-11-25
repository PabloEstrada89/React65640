import './App.css'
import { NavBar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const props = "hola"

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/category/:categoryId" element={<ItemListContainer /> } />     
        <Route path="/products/:id" element={<ItemDetailContainer /> } />   
        </Routes>
    </BrowserRouter>
  )
}

export default App