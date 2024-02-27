let siri = document.querySelector("#siri").style = "display: block"
let cerrar = document.querySelector("#cerrar").style = "display: none"



function funcionCien (){
    document.querySelector("#imagen-ruta").src = "/images/barcelona2.avif";
    document.querySelector("#titulo").innerHTML = "📍¡Arrancamos! Salimos de Barcelona";
    document.querySelector("#siri").style = "display: block";
    document.querySelector("#cerrar").style = "display: none";
}

function funcionCincuenta (){
    document.querySelector("#imagen-ruta").src = "/images/sitges3.jpg";
    document.querySelector("#titulo").innerHTML = "📍¡Ya vamos por la mitad! Ya en Sitges!";
    document.querySelector("#siri").style = "display: block";
    document.querySelector("#cerrar").style = "display: none";
}

function funcionQuince (){
    document.querySelector("#imagen-ruta").src = "/images/torredembarra2.jpg";
    document.querySelector("#titulo").innerHTML = "📍¡Ya casi estamos! Pasando Torredembarra.";
    document.querySelector("#siri").style = "display: block";
    document.querySelector("#cerrar").style = "display: none";
}   



function funcionInicio (){
    document.querySelector("#imagen-ruta").src = "/images/gps2.jpeg";
}

function funcionLlegada (){
    document.querySelector("#imagen-ruta").src = "/images/tarragona4.jpg";
    document.querySelector("#titulo").innerHTML = "📍¡Enhorabuena, hemos llegado! ¡Tarragona, aquí estamos!";
    document.querySelector("#siri").style = "display: none";
    document.querySelector("#cerrar").style = "display: block";
}

function funcionCerrarTodo (){
    document.querySelector("#llegada").style = "visibility: hidden";
    document.body.style = "background-image: url(/images/tarragona3.jpg);";
    document.body.innerHTML = '"<div class="p-5 d-flex align-items-center justify-content-center"><h1 class="titulo-final mt-3" id="titulo">📍¡Ahora toca disfrutar!📍</h1></div>";'
}



