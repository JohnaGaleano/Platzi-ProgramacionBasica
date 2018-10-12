let edad = document.getElementById("texto_edad")
let año = document.getElementById("texto_año")
let enviar = document.getElementById("boton_enviar")
enviar.addEventListener("click",calcular)

function calcular() {
    let age = parseInt(edad.value)
    console.log(age);
    
    let year = parseInt(año.value)
    let edadEnElAño = (year - age)
    document.write("tu edad en el año " + year + " es " + edadEnElAño)
}
