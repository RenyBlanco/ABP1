$(function() {
    var tabla;
    // $.getJSON('js/listado.json', function(data) {
    //     tabla = data.tabla;
    //     iniciar(0);
    // });

    // function iniciar(){
    //     $("#tabla").empty();
    //     jQuery.each(tabla.filas, function(i, fila) {
    //         var f = "";
    //         $.each(fila, function(index, valor){
    //             if(index == "id"){
    //                 f += "<tr><td>"+valor+"</td>"
    //             }else{
    //                 f += "<td>"+valor+"</td>"
    //             }
    //         });
    //         f += `<td>
    //                 <button type="button" class="btn btn-primary btn-sm" title="Detalle"><i class="fa-regular fa-address-book"></i></button>
    //             </td>`
    //         f += "</tr>"
    //         $("#tabla").append(f);
    //     });
    // }


    $(function(){
        //$(".cargar").click(function(){
          $.getJSON('js/listado.json', function(data){
            tabla = data.tabla.filas;
            console.log(tabla.filas);
            $("#tabla").html("");
            for(var i=0; i<tabla.length; i++){
              var tr = `<tr>
                <td>${tabla[i].id}</td>
                <td>${tabla[i].nombre}</td>
                <td>${tabla[i].apellido}</td>
                <td>${tabla[i].rut}</td>
                <td>${tabla[i].edad}</td>
                <td>${tabla[i].diagnostico}</td>
              </tr>`;
              $("#tabla").append(tr)
            }
          });
        })
      //})
});