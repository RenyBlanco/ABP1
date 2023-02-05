    var tabla;
    var pacientes = [];
    $.getJSON('js/listado.json', function(data){
        tabla = data.tabla.filas;
        for(var i=0; i<tabla.length; i++){
            var paciente = new Paciente();
            paciente.setNombre = tabla[i].nombre;
            paciente.setApellido = tabla[i].apellido;
            paciente.setEdad = tabla[i].edad;
            paciente.setRut = tabla[i].rut;
            paciente.setDiagnostico = tabla[i].diagnostico;
            pacientes.push(paciente);
        }
    });
    
    function mostrar(){
        var card = `
            <div class="card mt-5" >
                <div class="card-header">
                    <div class="float-left">
                        <h4 style="color: gray;"><i class="fa-solid fa-hospital-user"></i> Pacientes</h4>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-striped" style="width:100%">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Rut</th>
                                <th>Edad</th>
                            </tr>
                        </thead>
                        <tbody id="cuerpo">
                        </tbody>
                        
                    </table>
                </div> <!-- /.card-body -->
            </div> <!-- /.card -->
        `
        $("#tabla").html(card);
        $("#cuerpo").html("");
        for(var i=0; i<tabla.length; i++){
            var tr = `<tr>
            <td>${tabla[i].nombre}</td>
            <td>${tabla[i].apellido}</td>
            <td>${tabla[i].rut}</td>
            <td>${tabla[i].edad}</td>
            
            </tr>`;
            $("#cuerpo").append(tr)
        }
    }

    function buscar(){
        const consulta = new Consultorio;
        consulta.buscarPaciente(pacientes, document.getElementById("nombre").value);
       
    }