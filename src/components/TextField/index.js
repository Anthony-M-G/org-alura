import "./TextField.css"


const TextField = (props) => {

    //La funcion onChange se encarga de gestionar los cambios en el input y setear el estado
    const manageChange = (e) => {
        props.updateValue(e.target.value)
    }

    const placeHolderModifyed = `${props.placeHolder}...`
    return (
        <div className="campo-texto">
            <label>{props.title}</label>
            <input
                placeholder={placeHolderModifyed}
                required={props.required}
                value={props.value}
                onChange={manageChange} 
                type={props.type}
                style={{backgroundColor : props.value}}
                />
        </div>
    )
}

export default TextField; // Exporta el componente TextField