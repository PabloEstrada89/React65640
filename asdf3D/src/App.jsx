import './App.css'
import { NavBar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const props = "hola"

  return (
      <div>
        <NavBar saludo={props} despedida="se vemos"/>
        <ItemListContainer />
      </div>

  )
}

export default App