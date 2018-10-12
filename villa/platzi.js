let vp = document.getElementById("villaplatzi")
let papel = vp.getContext("2d")
let cantidad = aleatorio(1,10)
let vaca =
{
    url: "vaca.png",
    cargaOK: false
}

let fondo =
{
    url: "tile.png",
    cargaOK: false
}

fondo.imagen = new Image()
fondo.imagen.src=fondo.url
fondo.imagen.addEventListener("load", cargarFondo)

vaca.imagen = new Image()
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarVacas)

let cerdo = new Image()
cerdo.src= "cerdo.png"
cerdo.addEventListener("load", cargarCerdos)

let pollo = new Image()
pollo.src= "pollo.png"
pollo.addEventListener("load", cargarPollos)

function cargarFondo()
{
    fondo.cargaOK = true
    dibujar()
}

function cargarVacas()
{
    vaca.cargaOK = true
    dibujar()
}

function dibujar ()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0)
    }   
    
    if(vaca.cargaOK)
    {   
        console.log(cantidad)
        for(let v=0 ; v < cantidad ; v++)
        {        
        let x = aleatorio(0,420)
        let y = aleatorio(0,420)
        x = x+80 // 80 es el tamaño de la imagen vaca en pixeles
        y = y+80
        papel.drawImage(vaca.imagen,x,y)
        }
    }  
}


function aleatorio(min,max)
{
    let resultado = Math.floor(Math.random()*(max-min +1))+ min
    return resultado
}








/*for (var i=0 ; i<10; i++)
{
    z = aleatorio(10,20)
    document.write(z + ",")
}*/