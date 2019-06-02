$(document).ready(function () {

    $("#boton-post").click(function () {
        $("#creador").html(
            '<div class="card text bg-primary mb-3" id="creador">' +
            '<i class="fas fa-times" id="cerrar"></i> '+
            '<div class="card-body">' +
            '<div class="Tpost">' +
            '<input type="text" name="Titulo Post" id="post-title">' +
            '</div>' +
            '<div class="Cpost">' +
            '<textarea name="Contenido post" id="post-message"></textarea>' +
            '<div class="container-fluid row">' +
            '<div class="offset-md-10 offset-sm-6">' +
            '<br>'+
            '<button type="submit" class="button" id="post-button"><span id="contenidoPostear">Postear</span></button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
            ).toggle();

        $("#cerrar").click(function () {
            $("#creador").toggle();
    
        });
    

        $("#post-button").click(function () {
            $("#post-done").prepend(
                '<div class="card text bg-primary mb-3">' +
                '<div class="card-body container-fluid">' +
                '<div class="row">' +
                '<div class="acciones col-1">' +
                '<div class="positivo"><i class="fas fa-volume-up" id="votoPositivo"></i></div>' +
                '<div class="negativo"><i class="fas fa-volume-mute" id="votoNegativo"></i></div>' +
                '<div class="comentar"><i class="fas fa-drum" id="Comentar"></i></div>' +
                '<div class="guardar"><i class="fas fa-bookmark" id="Guardar"></i></div>' +
                '<div class="compartir"><i class="fas fa-broadcast-tower" id="Compartir"></i></div>' +
                '</div>' +
                '<div class="col-9">' +
                '<h4 class="card-title">' +
                $("#post-title").val() +
                '</h4>' +
                '<p class="card-text">' +
                $("#post-message").val() +
                '</p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="card-header">Posteado por USUARIO hace 20 minutos</div>' +
                '</div>'
            );
// ICONOS DE POST //

$("#votoPositivo").click(function(){
    alert("Diste un voto Positivo");
  });

$("#votoNegativo").click(function(){
    alert("Diste un voto Negativo");
  });

$("#Guardar").click(function(){
    alert("Post Guardado");
  });
        });

    });

});