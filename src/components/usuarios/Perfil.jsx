import { useContext } from "react";
import { UserContextProvider } from "../../context/UserContext";

const Perfil = () => {

    const usuario = useContext(UserContext);

    return (
        <div>
            <div>Perfil del Ingeniero Reyes.</div>
            <div>
                Usuario desde: 2023
            </div>
        </div>
    )
}
export default Perfil;