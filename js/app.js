// funcion para seleccionar elementos del DOM
const $ = selector => document.querySelector(selector)

// Solicitar nombre del jugador
let nombre = prompt('¿Cual es tu nombre?')
$('.jugador').innerHTML = nombre

//Puntaje
let total = 0
const puntaje = (data) => {
  for (const respuesta in data) {
    (data[respuesta] === 'true') ? total += 1 : total += 0
  }
  $('.puntaje').innerHTML = total
}

//Colorear respuestas correctas
const validarRespuestas = () => {
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input => {
    if(input.checked === true) {
      (input.value === 'true') 
      ? input.parentElement.classList.add('correcto') 
      : input.parentElement.classList.add('incorrecto')
    }
    input.disabled = true
  })
}

//Submit de Comprobar respuestas
$('.respuestas').addEventListener('submit', e => {
  e.preventDefault()
  let data = Object.fromEntries(new FormData(e.target))
  puntaje(data)
  validarRespuestas()
})

