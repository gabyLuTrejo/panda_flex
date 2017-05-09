var botonOrigen = document.getElementById("botonOrigen");
botonOrigen.addEventListener("click", origen);
var botonExtincion = document.getElementById("botonExtincion");
botonExtincion.addEventListener("click", extincion);

function origen(){
  var textoIzquierda = document.getElementById("textoIzq");
  if (textoIzquierda.style.visibility == "hidden") {
    textoIzquierda.style.visibility = "visible"
  } else {
      textoIzquierda.style.visibility = "hidden"
  }
}

function extincion(){
  var textoDerecha = document.getElementById("textoDer");
  if (textoDerecha.style.visibility == "hidden") {
    textoDerecha.style.visibility = "visible"
  } else {
      textoDerecha.style.visibility = "hidden"
  }
}

var span = document.getElementsByClassName("close");
var cantidadFotos = span.length;

for(var i=0; i<cantidadFotos; i++){
  span[i].addEventListener("click", fotos);
}

function fotos(){
  this.parentNode.style.display="none";
}

var botonRestaurar = document.getElementById("botonRestaurar");
botonRestaurar.addEventListener("click", restaurarFotos);

function restaurarFotos(){
  for(var i = 0; i<cantidadFotos; i++){
    span[i].parentNode.style.display = "inline-flex";
  }
}
