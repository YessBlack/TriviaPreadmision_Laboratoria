//funcion para seleccionar elementos del DOM
const $ = selector => document.querySelector(selector)
// Capturar el nombre del jugardor
const jugador = ()=> {
  $(".btn-jugar").addEventListener("click", e=>{
    e.preventDefault()
  let nombre = $(".nombre").value
    if (nombre === "") return alert("Debes ingresar tu nombre")
    $(".jugador").innerHTML=nombre 
    $(".pagina1").classList.add("ocultar")
    $(".pagina2").classList.add("mostrar")
    $(".pagina2").classList.remove("ocultar")
  }) 
}

//Funcion para calcular y mostrar el puntaje
let puntos = 0;
const puntaje = (datos) => {
  console.log(datos)
  for (const respuesta in datos) {
    if (datos[respuesta] === "true"){
      puntos+=1;
    }else {
      puntos+=0;
    }
  } 
  console.log(puntos);
  $(".puntaje").innerHTML= puntos;
}
const validacion = () => {
  const inputs = document.querySelectorAll("input")
  inputs.forEach(input => {
  if (input.checked){
    if (input.value === "true"){
      input.parentElement.classList.add("correcto")
    }else {
      input.parentElement.classList.add("incorrecto")
    }
  }
  input.disabled = true
})
} 
// boton volver
$(".volver").addEventListener("click", () => {
  location.reload()
})

//boton de respuestas del formulario
$('.respuestas').addEventListener('submit', e => {
  e.preventDefault()
  let datos = Object.fromEntries(new FormData(e.target))
  puntaje(datos);
  validacion()
})
document.addEventListener("DOMContentLoaded", () =>{
  jugador()
})