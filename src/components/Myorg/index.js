import "./Myorg.css";
import { useState } from "react";


const Myorg = (props) => {
    // Estado = Hooks
    // useState
    //useState es un hook que permite añadir estado a un componente funcional
    // En este caso estoy recibiendo la funcion de ocultar el form por medio de props

    return (
        <section className="org-section">
            <h3 className="title">Mi organización</h3>
            <img src="/img/Botão add-01 1.png" alt="add" onClick={props.changeVisibility} />
        </section>
    )
}


export default Myorg; // Exporta el componente Myorg