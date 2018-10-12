var imagenes = [];
imagenes["20000"] = "https://farm5.staticflickr.com/4673/28168657599_e97bfba85c_o.jpg";
imagenes["10000"] = "https://farm5.staticflickr.com/4616/28168657559_57ae0f897b_o.jpg";
imagenes["5000"]  = "https://farm5.staticflickr.com/4768/28168657639_e671379d74_o.jpg";

class Billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}


var solicitar = document.getElementById("btn_solicitar");
solicitar.addEventListener("click", solicitarDinero);

var saldo = document.getElementById("btn_saldo");
saldo.addEventListener("click", mostrarSaldo);

var retirar = document.getElementById("btn_retirar");
retirar.addEventListener("click", retirarDinero);
document.getElementById("btn_retirar").style.display = 'none';

var caja = [];
caja.push(new Billete(20000, 5));
caja.push(new Billete(10000, 3));
caja.push(new Billete(5000, 3));



function solicitarDinero()
{
  var entregado = [];
  // var solicitar = document.getElementById("solicitar");
  // dinero = solicitar.value;

  var dinero = document.getElementById("solicitar").value;

  var papeles = 0;
  var div = 0;

  if (dinero != "") {
    if (esMultiplo(dinero, 5000) && dinero != 0) {
      if (cantidadDinero(caja) >= dinero) {
        for (var b of caja) {
          if (dinero > 0) {
            div = Math.floor(dinero / b.valor);
            if (div > b.cantidad) {
              papeles = b.cantidad;
            } else {
              papeles = div;
            }
            if(papeles != 0) {
              entregado.push(new Billete(b.valor, papeles));
              dinero = dinero - (b.valor * papeles);
            }
          }
        }
        if (dinero == 0) {
          if(entregarDinero(entregado)) {
            descontarCaja(entregado);
          }
          // console.log("Entregado: " + entregado);
          // entregarDinero(entregado);
          // console.log("Disponible: " + cantidadDinero(caja));

        } else {
          console.log("No se puede entregar la cantidad solicitada");
          mostrarError('No se puede entregar la cantidad solicitada');
          entregado = [];
          console.log(cantidadDinero(caja));
        }
      } else {
        mostrarError('No hay sufieciente dinero en Caja!!');
        console.log("NO TENGO SUFICIENTE DINERO");
      }
    } else {
      mostrarError('El monto solicitado debe ser multiplo de 5000');
      console.log("DEBE SELECCIONAR UNA CANTIDAD MULTIPLO DE 5000");
    }
  } else {
    mostrarError("Debe indicar cantidad de Dinero a Retirar");
  }
  document.getElementById("solicitar").value = "";
}

function mostrarSaldo()
{
  if (cantidadDinero(caja) > 0) {
    swal("Su saldo Disponible es: " + cantidadDinero(caja) + " CLP.");

  } else {
    mostrarError('No cuenta con dinero en la Cuenta!');
  }

}

function mostrarError(msg)
{
  swal({
    type: 'error',
    title: 'Oops...',
    text: msg
  });
}


function cantidadDinero(c)
{
  var disponible = 0;
  for (d of c) {
    disponible += (d.valor * d.cantidad);
  }

  return disponible;
}

function entregarDinero(e)
{
  var entregar = document.getElementById("entregar");
  for (var m of e) {
    for (var i = 0; i < m.cantidad; i++) {
        entregar.innerHTML += "<img src=" + m.imagen.src + " style='margin-left: 10px;'/>";
    }
    entregar.innerHTML += "<br />";
  }

  document.getElementById("btn_solicitar").style.display = "none";
  document.getElementById("solicitar").style.display = "none";
  document.getElementById("btn_saldo").style.display = "none";
  document.getElementById("btn_retirar").style.display = "inline";

  return true;
}

function descontarCaja(entregado)
{
    for (b of entregado) {
      for (bc of caja) {
        if(b.valor == bc.valor) {
          bc.cantidad = bc.cantidad - b.cantidad;
        }
      }
    }
}

function retirarDinero() {
  document.getElementById("entregar").innerHTML = "";
  document.getElementById("btn_solicitar").style.display = "inline";
  document.getElementById("solicitar").style.display = "inline";
  document.getElementById("btn_saldo").style.display = "inline";
  document.getElementById("btn_retirar").style.display = "none";
}

function esMultiplo(numero, divisor)
{
  if (numero % divisor == 0) {
    return true;
  }
  return false
}
