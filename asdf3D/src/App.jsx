import './App.css'
import { NavBar } from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
    return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/products/ :id" element={<ItemListContainer /> } />     
        {/* <Route path="/products/:id" element={<ItemDetailContainer /> } />    */}
        </Routes>
    </BrowserRouter>
  )
}
export default App