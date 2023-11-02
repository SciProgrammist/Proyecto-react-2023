import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./Perfil.css"

const Perfil = () => {

    const usuario = useContext(UserContext);

    return (
        <div className="perfil-usuario">
            <h3>Perfil del {usuario.name}</h3>
            <h4>Soy un ingeniero en ciencias de la computacion <br />apasionado por la tecnologia.</h4>
            <h5>
                Usuario desde: {usuario.registered}
            </h5>
        </div>
    )
}
export default Perfil;