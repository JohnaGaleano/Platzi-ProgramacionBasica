let lineas = document.getElementById("texto_lineas")
let enviar = document.getElementById("boton_enviar")
let d = document.getElementById("Drawing")
let lienzo = d.getContext("2d")
enviar.addEventListener("click",drawFunc )

function drawFunc () {
let dWidth = d.width
let lineasE = parseInt(lineas.value) 
let lineasF = dWidth/lineasE
let colorfigure= "red"
let yi,xf,xi,yf,newxf,newyf
console.log(dWidth)
console.log(lineasF);

for(i=0;i<(lineasF);i++)
{
   yi= i*lineasF    //Primer cuadrante
   xf=(i+1)*lineasF //Primer cuadrante
   
   xi=i*lineasF
   yf=(i+1)*lineasF
   newxf= dWidth - xf
   newyf= dWidth - yf
   
   DrawLine(colorfigure,0,yi,xf,dWidth)//primer cuadrante

   DrawLine(colorfigure,xi,dWidth,dWidth,newyf)
   DrawLine(colorfigure,dWidth,newyf,newxf,0)
   DrawLine(colorfigure,0,newyf,xi,0)
}
}

DrawLine(colorfigure,1,1,1,dWidth-1)
DrawLine(colorfigure,1,dWidth-1,dWidth-1,dWidth-1)
DrawLine(colorfigure,dWidth-1,dWidth-1,dWidth-1,1)
DrawLine(colorfigure,dWidth-1,1,1,1)

function DrawLine(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xinicial,yinicial)
    lienzo.lineTo(xfinal,yfinal)
    lienzo.stroke()
    lienzo.closePath()
}

