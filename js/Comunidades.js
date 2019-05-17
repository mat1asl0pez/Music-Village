$(document).ready(function() {

$("#post-button").click(function() {
    $("#post-done").append(
        '<div class="card text bg-primary mb-3">' +
            '<div class="card-body">' +
                '<h4 class="card-title">' + 
                    $("#post-title").val() +
                '</h4>' +
                '<p class="card-text">' +
                    $("#post-message").val() +
                '</p>' +
            '</div>' +
        '</div>'
    );
});

});