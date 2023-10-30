import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { parseFloatNumber } from "../../helpers/numbers.js"
import "./CriptoPage.css"
{/*Pagina la cual tendra llamado de ruta dinamica en el index.jsx*/}

const CriptoPage = () => {


     {/*Para el enganche de los ids de la url dinamica se usara el siguiente Hook*/}
     const params = useParams();

    {/** Manera en la que se hacen consultas a APIS en un componente el cual engacha un parametro del HTTPS.
       * Se usa useEffect porque asi se maneja la vida del componente.
       * Para toda peticion a una API se deben seguir los siguientes pasos:
       * 
       * I)   Definimos las variables de entorno a usar en nuestro componente.
       * 
       * II)  Se crean un hook de useState para manejar el componente.
       *  
       * III) Se declara una funcion useEffect para menajar los estados del componenete.
       * 
       * IV)  Luego se usa una herramienta para hacer la peticion a la API mediante un fetch (GET)
       *      o una herramienta como axios.
       * 
       * V)   Se construye la URL mediante el uso de (I) y consultando la informacion de la misma 
       *      se agregan los paremetros necesarios para su creacion, en la cual tendremos para este 
       *      ejemplo en especifico ${API_URL}assets/${params.id}.
       * 
       * VI)  Ahora viendo en cosola el objeto devuelto de la peticion se puede determinar que lo que necesitamos
       *      se encuentra en data.data.data, por programacion se podria agrupar cada parte en una variable pero en este
       *      caso de decidio manejarlo asi.
       * 
       * VII) En esta parte se muestra en elementos html en nuestro componente la informacion que desemoa mostrar el objeto 
       *      JSON recuperado.
       *   ***NOTA: El elemento <p>{JSON.stringify(cripto)}</p> puede ser usado para ver el estado del objeto JSON
       * 
       * 
       */}

    {/* I */} 
    const API_URL = import.meta.env.VITE_API_URL 

    {/* II */}
    const [cripto, setCripto] = useState({}); 

    {/* III */}
    useEffect(
        () => {

        {/* IV y V */}
        axios.get(`${API_URL}assets/${params.id}`)
        .then(data => {
            {/* VI */}
            setCripto(data.data.data)
        })
        .catch( e => console.error(e))
        }, []);

        {/* Ahora para menejar otra peticion a una API se puede usar el mismo procedimiento de III - VI */}

    const [history, setHistory] = useState([]);

        useEffect(
            () => {
                axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
                .then(data => setHistory(data.data.data))
                .catch( e => console.error(e))
            }
        , [])

    return (
        <div className="cripto-page-container">
                    <div className="info">
                        <div className="main-info">
                            <span>Ranking: {cripto.rank}</span>
                            <h1>{cripto.name}</h1>
                            <span className="symbol">{cripto.symbol}</span>
                        </div>
                    <div className="details">
                        <ul>
                            <li className="detail">
                                <span className="label">Precio: </span>
                                <span>{parseFloatNumber(cripto.priceUsd, 3)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">MaxSuply: </span>
                                <span>{parseFloatNumber(cripto.maxSupply, 3)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Market Cap (USD): </span>
                                <span>{parseFloatNumber(cripto.marketCapUsd, 3)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Volumen (USD - 24 Hrs.): </span>
                                <span>{parseFloatNumber(cripto.volumeUsd24Hr, 3)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Variacion (24 Hrs.): </span>
                                <span>{parseFloatNumber(cripto.changePercent24Hr, 3)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Vwap 24 Hrs: </span>
                                <span>{parseFloatNumber(cripto.vwap24Hr, 3)}</span>
                                            
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="history">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map( ({date, priceUsd, time}) => {
                            return (
                                <tr key={time}>
                                    <td className="label">{ new Date(date).toDateString()}</td>
                                    <td className="price">{ parseFloatNumber(priceUsd, 3)}</td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
       </div> 
    )
}

export default CriptoPage;