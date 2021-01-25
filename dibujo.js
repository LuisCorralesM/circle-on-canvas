

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var colorcito = "#fff";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    let yi = (espacio * l) + (ancho/2);
    let xf = espacio * l;
    dibujarLinea(colorcito, 0, yi, xf, ancho);
    console.log("Linea " + l);
  }
  for(l = 0; l < lineas; l++)
  {
    let xi = (espacio * l) + (ancho/2);
    let yf = ancho - (l * espacio);

    dibujarLinea(colorcito, xi, ancho, ancho, yf);
    console.log("Linea " + l);
  }
  // la otra mitad
  for(l = 0; l < lineas; l++)
  {
    let yi = (ancho/2) - (l * espacio);
    let xf = ancho - (l * espacio);
    dibujarLinea(colorcito, ancho, yi, xf, 0);
    console.log("Linea " + l);
  }
  for(l = 0; l < lineas; l++)
  {
    xi = (ancho/2) - (l * espacio);
    yf = l * espacio;

    dibujarLinea(colorcito, xi, 0, 0, yf);
    console.log("Linea " + l);
  }

  // dibujarLinea(colorcito, 1,1,1,299);
  // dibujarLinea(colorcito, 1,299,299,299);
  // dibujarLinea(colorcito, 299,1,1,1);
  // dibujarLinea(colorcito, 299,299,299,1);
}