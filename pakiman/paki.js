let imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

let coleccion = []
coleccion.push( new Pakiman("Cauchin",100,30) )
coleccion.push( new Pakiman("Tocinauro",120,40) )
coleccion.push( new Pakiman("Pokacho",80,50) )


for(let freddito of coleccion) // of para tener la instacia (objeto) en la coleccion(array)
{
  freddito.mostrar();
}

for(let x in coleccion[0]) // me sirve para el indice mas que todo
{
  console.log(x);
}


