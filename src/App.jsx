/**
 * En este proyecto se mostrara como hacer una peticion a una API
 * las cuales se encuentran el internet.
 * 
 */
// El UseEffect se usa para cuando el componente se contruira.
import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

function App() {

  // Constante que almacena las variables de entorno para el manejo de urls.
  const API_URL = import.meta.env.VITE_API_URL;
  const [criptos, setCriptos] = useState();

  //Como primer parametro tenemos la ejecucion de una funcion de peticion de API.
  useEffect(() => {
    // //Esto es una promesa, la cual puede devolverse de manera exitosa, o puede tener algun catch.
    // fetch(`${API_URL}assets`)
    // .then((resp) => resp.json()) //La respuesta cual sea se convertira en un tipo json, y devolvera una promesa, por eso el .then despues
    // .then((dataCriptos) => {
    //   //Para la promesa sea mostrada en nuestra app, se debe de usar el useState
    //   setCriptos(dataCriptos.data)
    // })
    // .catch(() => {
    //   console.error('La peticion fallo.')
    // })

    axios.get(`${API_URL}assets`)
    .then((data) => {
      console.log(data)
      setCriptos(data.data.data)
    })
    .catch(() => {
      console.error('La peticion fallo.')
     })

  }, [])

  //Este seria un loader para en el caso que no se tenga el valor de los datos de la API se devuelva el span.
  if(!criptos) return <span>Cargando...</span>

  return (
    <>
    <h1>Lista de criptomonedas</h1>
     {/*En JSX se puede usar JavaScrip para hacer la parte de diseño de tablas.*/}
      <ol>
        { 
        criptos.map(({id, name, priceUsd}) => (
           <li key={id /*Para poder identificar cada li, se debe usar el props key al cual se le asigna un id unica.*/}>Nombre: {name} Precio: {priceUsd}</li>
        ))
        }
      </ol>
   </>
   
  )
}

export default App