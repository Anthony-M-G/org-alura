import "./optionsList.css"; // Importa el archivo css

const OptionsList = (props) => {
    // Metodo map, map-> arreglo.map((datoEquipo)=>{
    //     return <option value={datoEquipo}>{datoEquipo}</option>


    // En el return de los options deben tener un key unico para que react pueda identificarlos

    const manageChange = (e) => {
        props.change(e.target.value)
    }
    
    return (
        <div className="options-list">
            <label>Equipos</label>
            <select onChange={manageChange} value={props.value}>
                <option value="" disabled defaultValue="" hidden>Seleccione un equipo</option>
                {props.teams.map((team) => <option key={team} >{team}</option>)}
            </select>
        </div>
    )
}

export default OptionsList; // Exporta el componente optionsList