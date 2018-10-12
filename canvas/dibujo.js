var d = document.getElementById("dibujo1");
var lienzo = d.getContext("2d");
var n_lineas= document.getElementById("n-lineas");
var boton= document.getElementById("boton");
var color= document.getElementById("color");
var lado= document.getElementById("lado");
var t_canvas= document.getElementById("t-canvas");

boton.addEventListener("click",dibujarGarabato);

console.log(lienzo);

function linea(xi,yi,xf,yf,color){
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarGarabato(){
  var dimensiones=parseInt(t_canvas.value);
   d.width=dimensiones;
   d.height=dimensiones;


  var ladito=lado.value;
  var colorsito=color.value;
  var l=parseInt(n_lineas.value);
  var lineas=l;

  var sep=dimensiones/l;

  if (ladito=="inferior_izquierdo" && l==parseInt(n_lineas.value) && dimensiones==parseInt(t_canvas.value) ) {
    for (i=0;i<=lineas;i++) {
    var yi=sep*i;
    linea(1,yi,yi,dimensiones,colorsito);
  }
  }

  elseif (ladito=="superior_derecho" && l==parseInt(n_lineas.value) && dimensiones==parseInt(t_canvas.value)) {
    for (i=0;i<=lineas;i++) {
    var yi=sep*i;
    var xf=sep*(i+1)-sep;
    linea(yi,1,dimensiones,xf,colorsito);
  }
  }

  elseif (ladito=="superior_izquierdo" && l==parseInt(n_lineas.value) && dimensiones==parseInt(t_canvas.value)) {
    for (i=0;i<=lineas;i++) {
    var yi=sep*i;
    var xf=sep*(i+1)-sep;
    var yi1=dimensiones-yi;
    linea(1,yi1,xf,1,colorsito)
  }
  }

  elseif(ladito=="inferior_derecho" && l==parseInt(n_lineas.value) && dimensiones==parseInt(t_canvas.value)) {
    for (i=0;i<=lineas;i++) {
    var yi=sep*i;
    var xf=sep*(i+1)-sep;
    var yi1=dimensiones-yi;
    linea(yi1,dimensiones,dimensiones,xf,colorsito)
  }
  }
  elseif (ladito=="todo" && l==parseInt(n_lineas.value) && dimensiones==parseInt(t_canvas.value)) {
    for (i=0;i<=lineas;i++) {
    var yi=sep*i;
    var xf=sep*(i+1)-sep;
    var yi1=dimensiones-yi;
    linea(1,yi,yi,dimensiones,colorsito);
    linea(yi,1,dimensiones,xf,colorsito);
    linea(1,yi1,xf,1,colorsito)
    linea(yi1,dimensiones,dimensiones,xf,colorsito)
  }

  }

}