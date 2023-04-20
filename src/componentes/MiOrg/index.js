// import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    //Estado - hooks (v16 react)
    //useState es un hook
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)

    // const [mostrar,ActualizarMostrar] = useState(true);
    // const manejarClick = () =>{
    //     ActualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add_button.png" alt="add button" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg