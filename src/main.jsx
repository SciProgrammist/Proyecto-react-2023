import React from 'react'
import ReactDOM from 'react-dom/client'
/**
 * NOTA: REACT es una libreria usada para crear interfaces graficas, por lo cual de manera determinada
 * esta no puede crear rutas pero con la importacion del siguiente componente se pueden crear rutas:
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './components/404'
import App from './components/App'
// La buena practica es que en este archivo se importen los archivos bases de
// nuestra aplicacion.
import "./main.css"
import Cuadricula from './components/Cuadricula'
import Home from './Home'
import CriptoPage from './components/cripto/CriptoPage'
import Perfil from './components/usuarios/Perfil'
import { UserContextProvider } from "./context/UserContext"

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <UserContextProvider >
      <BrowserRouter>
        {/*Recordar que el BrowserRouter le da la capacidad necesaria a los componenetes que se usen de la libreria.
    <Menu /> Se quito el menu de aca porque se mostraria en todas las paginas de la app.*/}
        <Routes>
          <Route path="/" element={< App />}>
            {/*La ruta / simbolisa al home, y aqui se le dice que renderice...*/}
            <Route index element={< Home />}/>
            <Route path="perfil" element={< Perfil />}/>
          </Route>
          <Route path="/criptomonedas" element={< App />}>
            <Route index element={< Cuadricula />}/>
            <Route path=':id' element={< CriptoPage />}/>
          </Route>
          <Route path='*' element={< Pagina404 />}/>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
