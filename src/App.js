
import './App.css';
import { Card } from './componentes/Card/Card';
import { Contacto } from './componentes/Contacto/Contacto';
//import Navbar from './componentes/Navbar/Navbar';
import Navbar  from './componentes/Navbar/Navbar';
import { Sumarclick } from './componentes/Sumarclick/Sumarclick';


function App(){

return(

  <div className="App">
    <Navbar/>
    <div className='row'>
      <div className='col-md-6'>
       <Card/>
      </div>
      <div className='col-md-6'>
         <Contacto/>
      </div>

    </div>

 
  <Sumarclick/>
  </div>
);

}
export default App;
