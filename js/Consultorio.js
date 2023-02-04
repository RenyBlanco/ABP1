function Consultorio() {
    let nombre=""
    
    this.setPaciente = (_nombre)=>{
        paciente = _nombre
    }
    
    this.getPaciente = ()=>{
        return nombre;
    }

    this.buscarPaciente = (nombre)=>{

    }
    this.datos = ()=>{
        `Nombre : ${nombre}, Apellido: ${apellido}, Edad: ${edad}, Diagnostico: ${diagnostico}`

    }

}
