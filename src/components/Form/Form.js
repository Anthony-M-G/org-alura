import "./Form.css"
import TextField from "../TextField/index.js";
import OptionsList from "../OptionsList/index.js";
import Button from "../Buttom/index.js";
import { useState } from "react";
import { v4 as uuid } from 'uuid'

const Form = ({teams,members,setMembers,addTeam}) => {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [photo, setPhoto] = useState("")
    const [category, setCategory] = useState("")
    const [teamName, setTeamName] = useState("")
    const [color, setColor] = useState("")

    /*const saveData = async (empleado) => {
        const response = await config.save(empleado)
        console.log(response)
    }*/


    const manageSubmit = (e) => {
        e.preventDefault()
       
        setMembers([...members, {
            id: uuid(),
            name: name, 
            position: position, 
            photo: photo, 
            category: category
        }])
        console.log( {
            id: uuid(),
            name: name, 
            position: position, 
            photo: photo, 
            category: category
        })
       
        /*saveData({
            name: name,
            position: position,
            photo: photo,
            category: category
        });*/
 }
 const newTeam = (e) => {
    e.preventDefault();
    addTeam({
        title: teamName,
        primaryColor : color,
        secondaryColor : color
    })
 }
    
    return (
        <section className="formulario" >
            <form onSubmit={manageSubmit}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <TextField
                    title="Nombre"
                    placeHolder='Ingrese su nombre'
                    required={true}
                    value={name}
                    updateValue={setName}
                    type="text" />
                <TextField
                    title="Puesto"
                    placeHolder='Ingrese su puesto'
                    required
                    value={position}
                    updateValue={setPosition}
                    type="text"
                />
                <TextField
                    title="Foto"
                    placeHolder='Ingrese su foto'
                    required
                    value={photo}
                    updateValue={setPhoto}

                />
                <OptionsList 
                value={category} 
                change={setCategory} teams={teams}/>
                <Button text="Añadir colaborador" />
            </form>
            <form onSubmit={newTeam}>
            <h2>Rellena el formulario para crear el equipo</h2>
                <TextField
                    title="Nombre"
                    placeHolder='Ingrese el nombre del equipo'
                    required={true}
                    value={teamName}
                    updateValue={setTeamName} 
                    type="text"
                    />
                     
                <TextField
                    title="color"
                    placeHolder='color'
                    required
                    value={color}
                    updateValue={setColor}
                    type="color"
                />
                <Button text="Crear equipo" />

            </form>
        </section>
    )
}

export default Form; // Exporta el componente Form