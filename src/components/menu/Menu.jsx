import { Link, NavLink } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
    return (
       <nav className="main-menu">
        <ul>
            {/*<li><a href="/">Inicio</a></li>
               <li><a href="/saludo">Saludo</a></li>*/}

            {/*El componenete de la libreria link se usa de la misma manera que el href*/}
            {/*Siempre se debe utilizar el componente link de esta manera para hacer peticiones a las paginas subyacentes.
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Saludo">Saludo</Link></li>*/}
            {/*Para un menu principal se debe hacer uso del componente NavLink*/}

            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/asddasasd">Error404</NavLink></li>
            <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
            
        </ul>
       </nav> 
    )
}

export default Menu;