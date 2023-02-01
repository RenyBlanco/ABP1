function Consultorio() {
    let paciente=""
    
    this.setPaciente = (_pac)=>{
        paciente = _pac
    }
    
    this.getPaciente = ()=>{
        return paciente;
    }
}
