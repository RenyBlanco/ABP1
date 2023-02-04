function Consultorio() {
    let nombre=""
    
    this.setPaciente = (_nombre)=>{
        paciente = _nombre
    }
    
    this.getPaciente = ()=>{
        return nombre;
    }

    this.buscarPaciente = (lista, nome)=>{
        const result = lista.find(({ nombre }) => nombre === nome);
        if(result){
            return `
            <div>
            <p>Nombre :${result.nombre}</p>
            <p>Apellido :${result.apellido}</p>
            <p>Rut :${result.rut}</p>
            <p>Edad :${result.edad}</p>
            <p>Diagnostico :${result.diagnostico}</p>
            </div>
            `;
        }else{
            alert("Paciente no encontrado");
        }
    }
}
