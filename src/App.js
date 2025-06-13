
import './App.css';
import { Card } from './componentes/Card/Card';
import { Contacto } from './componentes/Contacto/Contacto';
import { Sumarclick } from './componentes/Sumarclick/Sumarclick';


function App(){

return(
  <div className="App">
  <h1>HOLA AHORA SI</h1>
  <Card/>
  <Contacto/>
  <Sumarclick/>
  </div>
);

}
export default App;
