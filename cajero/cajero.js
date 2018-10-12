class Billete
{
    constructor(valor,cantidad)
    {
        this.valor = valor
        this.cantidad= cantidad
    }
}

let caja = []
let entregado = []
caja.push( new Billete (50,10) )
caja.push( new Billete (20,20) )
caja.push( new Billete (10,20) )

let dinero // dinero solicitado
let div = 0 // division de Dinero entre Billetes
let papeles = 0 // Cantidad de Billetes a entregar

 let b = document.getElementById("extraer")
 b.addEventListener("click", entregarDinero)
 let resultado = document.getElementById("resultado") 

 function entregarDinero()
 {
    let t = document.getElementById("dinero")
    dinero= parseInt(t.value)
    for (let bi of caja)
     {
        if(dinero > 0)
        {
            div = Math.floor(dinero/bi.valor)
            if(div > bi.cantidad)
            {
                papeles= bi.cantidad
            }
            else
            {
                papeles = div
            }

            entregado.push( new Billete(bi.valor, papeles) )
            dinero = dinero - (bi.valor * papeles) // or dinero -= (bi.valor * papeles)
        }         
     }
     
     if(dinero > 0)
     {
        
        resultado.innerHTML="Dinero insuficiente, no se puede entregar la cantidad solicitada :( "
     }
     else
     {
        for(let e of entregado)
        {
            if(e.cantidad>0)
            resultado.innerHTML=  resultado.innerHTML + e.cantidad + " Billetes de $ " + e.valor + "<br />" // or resultado.innerHTML += e.cantidad + " Billetes de $ " + e.valor + "<br />"
        } 
     }
     
     
 }


