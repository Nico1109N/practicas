var boton=document.getElementById("miBoton");
boton.addEventListener("click", function() {
    alert("¡Gracias Amor te amooooo");
});


var boton2 = document.getElementById("miBoton2");

var escala = 1;

boton2.addEventListener("click", function(){

    escala += 0.1;

    boton2.style.transform = "scale(" + escala + ")";

});







