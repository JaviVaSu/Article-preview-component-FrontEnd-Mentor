$(document).ready(function() {
    let estado = 0;
    $("#icono-share").click(function(){
        switch(estado){
            case 0:
                $("#redes").css("display", "flex");
                estado = 1;
                break;
            case 1:
                $("#redes").css("display", "none");
                estado = 0;
                break;
        }
    });
});