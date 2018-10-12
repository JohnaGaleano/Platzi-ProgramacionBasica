var imagenes = [];

imagenes["5"] = "billete5.jpg";
imagenes["10"] = "billete10.jpg";
imagenes["20"] = "billete20.jpg";
imagenes["50"] = "billete50.jpg";
imagenes["100"] = "billete100.jpg";

class Billete {
  constructor(v, c) {

    this.valor = v;
    this.cantidad = c;

    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var caja = [];
var entregado = [];
caja.push(new Billete(100, 1));
caja.push(new Billete(50, 1));
caja.push(new Billete(20, 1));
caja.push(new Billete(10, 1));
caja.push(new Billete(5, 1));


var dinero = 0;
var div = 0;
var papeles = 0;

var boton_saldo = document.getElementById("ver_saldo");
boton_saldo.addEventListener("click", saldo);

var total = 0;
function saldo() {
  var monto = 0;
  for (var v of caja) {
    monto = monto + v.valor * v.cantidad;
    total = monto;
    resultado.innerHTML = "Su saldo es: $"+ monto + "<hr />";
  }
}

function actualizar() {  //actualiza el saldo despues de depositar
  var saldo = 0;
  for (var v of caja) {
    saldo = saldo + v.valor * v.cantidad;
    total = saldo;
  }
}

var boton_depositar = document.getElementById("depositar");
boton_depositar.addEventListener("click", deposito);

function deposito() {
  var monto = prompt("Por favor indique el valor a depositar de $: 100, 50, 20, 10, o 5 ", "100");
if ( monto == 100 || monto == 50 || monto == 20 || monto == 10 || monto == 5) {

   if (monto == 100) {

     var cant_cien = prompt("Indíque la cantidad", 1);

     while (isNaN(cant_cien)) {
       cant_cien = prompt(cant_cien + " No es un valor correcto, Por favor indíque un valor");
     }

     caja[0].cantidad = caja[0].cantidad + parseInt(cant_cien);
     actualizar();
     resultado.innerHTML += "Se ha depositado " + cant_cien + " Billetes de: $" + monto + "<hr />";

    }

    if (monto == 50) {
      var cant_cincuenta = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_cincuenta)) {
        cant_cincuenta = prompt(cant_cincuenta + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[1].cantidad = caja[1].cantidad + parseInt(cant_cincuenta);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_cincuenta + " Billetes de: $" + monto + "<hr />";
    }

    if (monto == 20) {
      var cant_veinte = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_veinte)) {
        cant_veinte = prompt(cant_veinte + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[2].cantidad = caja[2].cantidad + parseInt(cant_veinte);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_veinte + " Billetes de: $" + monto + "<hr />";
    }

    if (monto == 10) {
      var cant_diez = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_diez)) {
        cant_diez = prompt(cant_diez + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[3].cantidad = caja[3].cantidad + parseInt(cant_diez);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_diez + " Billetes de: $" + monto + "<hr />";
    }

    if (monto == 5) {
      var cant_cinco = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_cinco)) {
        cant_cinco = prompt(cant_cinco + " No es un valor correcto, Por favor indíque un valor");
    }

    caja[4].cantidad = caja[4].cantidad + parseInt(cant_cinco);
    actualizar();
    resultado.innerHTML += "Se ha depositado " + cant_cinco + " Billetes de: $" + monto + "<hr />";

    }
  }
 else{
   resultado.innerHTML =("Valor no valido, por favor indicar los valores correspondientes para depositar" + "<hr />");
  }

}




var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);

var resultado = document.getElementById("resultado");



document.getElementById('borrar').onclick = function borra() {
//Esta funciona hace que cuando apretas el boton "Borrar" se borra el resultado y billetes entregados
   resultado.innerHTML = "";
    entregado = [];
}

function contador()
{
	total = 0;
	for (var tot of caja)
	{
		total = total + tot.valor * tot.cantidad;

	}
}


function entregarDinero(){

 //resultado.innerHTML = "";
 //document.getElementById('resultado').innerHTML = "";

  var mostrado = [];

  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  if (dinero > total) {
      resultado.innerHTML += "No hay billetes para esa cantidad, intenta otro valor! <hr />";
  }else {



  for (var bi of caja) {
    //console.log(bi);
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      //console.log(div);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      }
      else {
        papeles = div;
      }
      bi.cantidad = bi.cantidad - papeles;
      //console.log(caja);

      entregado.push(new Billete(bi.valor, papeles));

      for (var i = 0; i < papeles; i++)
				{
					mostrado.push (new Billete(bi.valor, 1) );
				}
				dinero = dinero - (bi.valor * papeles);
			}

    }



    if (dinero == 0) {

      resultado.innerHTML += "Se ha retirado: <br />";

			for(var e of mostrado)
			{
				resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br/>" + "<img src=" + e.imagen.src + " />" + "<hr />";
			}

			resultado.innerHTML = resultado.innerHTML + "<hr />";
		  contador();

		}
    else  {
      resultado.innerHTML += "No hay billetes para esa cantidad, intenta otro valor! <hr />";

    }
 }
}







        //resultado.innerHTML = resultado.innerHTML + "Se ha retirado: " + "<br/>" + e.cantidad + " billetes de $" + e.valor + "<br/>" + "<img src=" + e.imagen.src + " />" + "<hr />";
        //document.write(e.cantidad + " billetes de $" + e.valor + "<br/>" );


     //contador();
    //console.log(entregado);