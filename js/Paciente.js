function Paciente() {
    let nombre=""
    let apellido=""
    let rut = ""
    let edad=""
    let diagnostico="";

    this.setNombre = (_nombre)=>{
        nombre = _nombre
    }
    this.setApellido = (_apellido)=>{
        apellido = _apellido
    }
    this.setRut = (_rut)=>{
        rut = _rut
    }
    this.setEdad = (_edad)=>{
        edad = _edad
    }
    this.setDiagnostico = (_diagnostico)=>{
        diagnostico = _diagnostico
    }
    this.getNombre = ()=>{
        return nombre;
    }
    this.getApellido = ()=>{
        return apellido;
    }
    this.getRut = ()=>{
        return rut;
    }
    this.getEdad = ()=>{
        return edad;
    }
    this.getDiagnostico = ()=>{
        return diagnostico;
    }

    this.datos = ()=>{
        `Nombre : ${nombre}, Apellido: ${apellido}, Edad: ${edad}`
    }
}