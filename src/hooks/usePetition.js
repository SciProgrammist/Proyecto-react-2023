// Para agregar esta libreria a nuestro proyecto se usa: yarn add
// react-router-dom@6 Para agregar esta libreria a nuestro proyecto usamos: yarn
// add axios;
import axios from "axios";
/**
 * En este proyecto se mostrara como hacer una peticion a una API
 * las cuales se encuentran el internet.
 *
 */
// El UseEffect se usa para cuando el componente se contruira.
import {useEffect, useState} from "react";

/*Se recibe un endpoint dependiendo la peticion que se quiera hacer*/
const usePetition = (endpoint) => {

  /* Se importa la URL inicial de la API */
  const API_URL = import.meta.env.VITE_API_URL;
  /* Se usa un Hook para tener las constantes de esos estados. */
  const [data, setData] = useState();
  /* Estado para saber si la data existe*/
  const [cargando, setCargando] = useState(false);

  /* Funcion que ayuda a manejar el estado del componente en el cual todo este hook se esta llamando.*/
  useEffect(() => {
    setCargando(true);
    /* Herramienta para hacer la peticion a la API tiene una URL concatenada. */
    axios
      .get(`${API_URL}${endpoint}`)
      .then(data => {

        /* Se le pasa el valor de la peticion al valor de los estados. */
        setData(data.data.data);
        setCargando(false);
      })
      .catch(e => {
        setCargando(false)
        console.error(e)
      })
  }, []);

  /* por ultimo se devuelve el valor registrado en el Hook useState.*/
  return [data, cargando];
}

export default usePetition