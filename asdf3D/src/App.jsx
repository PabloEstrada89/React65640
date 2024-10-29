import './App.css'
import { NavBar } from './Components/NavBar'
import { ItemListContainer } from './Components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const props = "hola"

  return (
      <div>
        <NavBar saludo={props} despedida="nos vemos"/>
        <ItemListContainer />
      </div>

  )
}

export default App 
