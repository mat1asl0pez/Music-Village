
$(document).ready(function () {

    $(function () {
        $('#file-input').change(function (e) {
            addImage(e);
        });

        function addImage(e) {
            var file = e.target.files[0],
                imageType = /image.*/;

            if (!file.type.match(imageType))
                return;

            var reader = new FileReader();
            reader.onload = fileOnload;
            reader.readAsDataURL(file);
        }

        function fileOnload(e) {
            var result = e.target.result;
            $('#imgSalida').attr("src", result);
        }
    });

    $("#hacer-post").click(function () {
        $("#creador").html(
            '<div class="card text bg-primary mb-3" id="creador">' +
            '<div class="card-body">' +
            '<div class="Tpost">' +
            '<input type="text" name="Titulo Post" id="post-title">' +
            '</div>' +
            '<div class="Cpost">' +
            '<textarea name="Contenido post" id="post-message"></textarea>' +
            '<input name="file-input" id="file-input" type="file" />' +
            '</div>' +
            '<div class="container-fluid row">' +
            '<div class="offset-md-11 offset-sm-8">' +
            '<button type="button" class="btn" id="post-button">Postear</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        );

        $("#post-button").click(function () {
            $("#post-done").prepend(
                '<div class="card text bg-primary mb-3">' +
                '<div class="card-body container-fluid">' +
                '<div class="row">' +
                '<div class="acciones col-1">' +
                '<div class="positivo"><i class="fas fa-volume-up"></i></div>' +
                '<div class="negativo"><i class="fas fa-volume-mute"></i></div>' +
                '<div class="comentar"><i class="fas fa-drum"></i></div>' +
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
                '<img id="imgSalida" src="" />' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="card-header">Posteado por USUARIO hace 20 minutos</div>' +
                '</div>'

            );


        });
    });
});
