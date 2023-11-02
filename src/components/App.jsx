import { Navigate, Outlet } from "react-router-dom"
import Menu from "./menu/Menu"
const App = () => {

    //if (!localStorage.getItem("tokenReyesWorks")) return <Navigate to="/login" />
    return (
        <>
          <Menu />
          {/*Este componenete App.jsx esta siendo llamado en main.jsx en la parte de la ruta que envuelve a las dems
             es por eso que a partir de este componente todas las rutas hijas tendran el menu y Oulet seran las demas 
             rutas definidas luego de esta en main.jsx*/}
          <Outlet />
        </>
    )
}

export default App; 