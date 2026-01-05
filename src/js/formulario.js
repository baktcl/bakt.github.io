$(document).ready(function() {
    $("#registro").submit( function() {
        if($("#nombre").val() == "")
        {
            alert("Complete su nombre para continuar.");
            return false;
        }
        if($("#mail").val() == "")
        {
            alert("Complete su correo electrónico para continuar.");
            return false;
        }
        if($("#telefono").val() == "")
        {
            alert("Complete su número de teléfono para continuar.");
            return false;
        }
    });
    
});