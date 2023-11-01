import "./Cuadricula.css"
import Cripto from "./cripto/Cripto.jsx";
import usePetition from "../hooks/usePetition";


function Cuadricula() {

  const [criptos, cargando] = usePetition(`assets`);

  //Este seria un loader para en el caso que no se tenga el valor de los datos de la API se devuelva el span.
  if(!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
     
      <h1>Lista de criptomonedas</h1>
           {/*En JSX se puede usar JavaScrip para hacer la parte de diseño de tablas.*/}
          <div className="cripto-container">
          { 
            criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto 
              key={id} 
              name={name}
              priceUSD={priceUsd} 
              symbol={symbol} 
              changePercent24Hr={changePercent24Hr}
              id={id}
              />

            ))
          }
      </div>
   </div>
   
  )
}

export default Cuadricula