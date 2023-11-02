import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

    const navigation = useNavigate()

    /*Objeto para manejar la informacion que regriste el usuario */

    const  [user, setUser] = useState({
        email:"",
        password:""
    })

    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState();

    /* {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }*/

    /*Funcion que se ejecuta al momento de hacer submit en el formulario*/
    const submit = (e) => {
        e.preventDefault(); //evita recargar el evento del formulario.
        setCargando(true);
        setError(null);
        //Para hacer peticiones POST, donde se tiene 1) formar la URL 2) la informacion a enviar
        axios.post(`https://reqres.in/api/login`, user)
        .then(data => {
            setCargando(false)
            localStorage.setItem("tokenReyesWorks", data.data.token)
            navigation("/");
        })
        .catch(e => {
          setCargando(false)
          //console.error(e) // Error mostrado en consola
          console.table(e)
          setError(e.response.data.error)
        })
    }

    if (localStorage.getItem("tokenReyesWorks")) return <Navigate to="/" />
    
    return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Electronico</label>
          <input required onChange={(e) => { 
            setUser( {
                ...user, 
                email: e.target.value
            })
            }} type="email" name="email"/>
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input required onChange={(e) => {
            setUser( {
                ...user,
                password: e.target.value
            })
          }}type="password" name="password"/>
        </div>
        <div className="submit">
          <input type="submit" 
                 value={cargando ? "cargando..." : "Ingresar"}
                 className="link"
          />
        </div>
      </form>
      {
        /*JSON.stringify(error)*/ 
        error && <span className="error">Error: {error }</span>
      }
      
    </div>

  )

}

export default Login