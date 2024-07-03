

const save=async (empleado)=>{
    const response=await fetch('http://localhost:3001/bd',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(empleado)
    });
    return response.ok;
}

const get=async ()=>{
    const response=await fetch('http://localhost:3001/bd');
    return response.json()
    }


export const config={
    save,
    get
};