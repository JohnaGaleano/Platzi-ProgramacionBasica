let teclas = 
{
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
}; 

document.addEventListener("keydown", dibujarTeclado)
let cuadrito = document.getElementById("area_de_dibujo")
let papel = cuadrito.getContext("2d")
let x=75
let y=75
DrawLine("red",x-1,y-1,x+1,y+1,papel)

function dibujarTeclado(evento)
{   
    let colorT = "blue"
    let movimiento = 5
    //console.log(evento.keyCode) - Ver tecla oprimida
    switch(evento.keyCode)
    {
        case teclas.DOWN:
        DrawLine(colorT,x,y,x,y+movimiento,papel)
        y = y + movimiento
        break;
        
        case teclas.UP:
        DrawLine(colorT,x,y,x,y-movimiento,papel)
        y = y - movimiento
        break;
        
        case teclas.LEFT:
        DrawLine(colorT,x,y,x-movimiento,y,papel)
        x= x - movimiento
        break;
        
        case teclas.RIGHT:
        DrawLine(colorT,x,y,x+movimiento,y,papel)
        x= x + movimiento
        break;

        default:
    }
}

function DrawLine(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xinicial,yinicial)
    lienzo.lineTo(xfinal,yfinal)
    lienzo.stroke()
    lienzo.closePath()
}
