$(document).ready(function () {

    $("#post-button").click(function () {
        $("#post-done").prepend(
            '<div class="card text bg-primary mb-3">' +
            '<div class="card-body container-fluid">' +
            '<div class="row">' +
            '<div class="acciones col-1">' +
            '<div class="comentar"><i class="fas fa-drum"></i></div>' +
            '<div class="positivo"><i class="fas fa-volume-up"></i></div>' +
            '<div class="negativo"><i class="fas fa-volume-mute"></i></div>' +
            '<div class="guardar"><i class="fas fa-bookmark"></i></div>' +
            '<div class="compartir"><i class="fas fa-broadcast-tower"></i></div>' +
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
            'img src = inputFile.value'+
            '<div class="card-header">Posteado por USUARIO hace 20 minutos</div>' +
            '</div>'
            
        );
       
    });
});




