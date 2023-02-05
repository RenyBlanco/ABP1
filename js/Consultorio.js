function Consultorio() {
    let nombre=""
    
    this.setPaciente = (_nombre)=>{
        paciente = _nombre
    }
    
    this.getPaciente = ()=>{
        return nombre;
    }

    this.buscarPaciente = (lista, nome)=>{
        const result = lista.find(e => e.setNombre === nome);
        if(result){
            r = `
            <div class="card mt-5" >
                <div class="card-header">
                    <div class="float-left">
                        <h4 style="color: gray;"><i class="fa-solid fa-hospital-user"></i> Pacientes</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Nombre : ${result.setNombre}</p>
                    <p>Apellido : ${result.setApellido}</p>
                    <p>Rut : ${result.setRut}</p>
                    <p>Edad : ${result.setEdad}</p>
                    <p>Diagnostico : ${result.setDiagnostico}</p>
                </div> <!-- /.card-body -->
            </div> <!-- /.card -->
            `;
            $("#tabla").html(r);
        }else{
            alert("Paciente no encontrado");
        }
    }
}
