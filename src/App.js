import React from 'react';
import './App.css';
import Checkout from './Checkout';





function Holamundo(prop){
  return(
      <div id="hello">
        <h3>{prop.subtitel}</h3>
         {prop.texto}
      </div>
  );
}

function App() {
  return (    
    
    
   <div className="col-sm-6 col-xs-8 container">
     
    <div className="row justify-content-center">
        <div className="text-center">
            <h1><center>Natame Corp </center></h1>
            <p className="lead">
                Bienvenido a la sección de pagos de NATAME Corp. a continuación ingresa el modo de pago que deseas
                utilizar en nuestra plataforma
            </p>      
            <header>
              
              <a className="pago" >
                <img src="/img/PSE.png">
                 
                </img>
                <img src="/img/credit_card.png"></img>
                <img src="/img/UD.png"></img>
              </a>
            </header>   
            <p>Version: 2.3.5</p>
        </div>
    </div>
</div>

//porner dentro de una etiqueta una funcion para direccionar otra ventana
/*<div>
    <header>
     
    </header>

</div>*/




      /*<div>
          Este es mi componente: 
          <Holamundo texto="que chimba" subtitel="jajajaja"/> 
          <Holamundo texto="pendejete"/> 
      </div>*/
  );
}

export default App;

