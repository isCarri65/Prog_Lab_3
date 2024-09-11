

//Ejercicio 2
console.log("Ej_1.2")
let a = 20;
let b = 12;
let result = 32
console.log(`la suma de a + b es: ${result}`)


//Ejercicio 3
console.log("Ej_1.3")
const name = prompt("¿Cual es tu nombre?")
console.log("Hola "+ name)

//2. Operadores lógicos y condicionales
//Ejercicio 1:
console.log("Ej_2.1")
let num1 = 23
let num2 = 10
let num3 =5

if (num1>num2) {
  if (num1>num3) {
    console.log("El mayor de los 3 números es: "+num1)
  }
}else if(num2>num3) {
  console.log("El mayor de los 3 números es: "+num2)
}else{
  console.log("El mayor de los 3 números es: "+num3)
}

//Ejercicio 2
console.log("Ej_2.2")

num1  = prompt("Ingrese un número y te diré si es par o impar")

if(num1%2 === 0){
  console.log(`El número ${num1} es par`)
} else {
  console.log(`El número ${num1} es impar`)
}

//3. Operadores de asignación y bucles
//Ejercicio 1:
console.log("Ej_3.1")

let ten = 10;

while (ten != 0) {
  console.log(ten)
  ten = ten-1;
}

//Ejercicio 2:
console.log("Ej_3.2")
do {
  num1 = prompt("Ingresa un número mayor a 100")
} while (num1<=100);

console.log("Ingresaste un número mayor a 100: "+num1)


//4. Funciones de JavaScript
//Ejercicio 1:
console.log("Ej_4.1")

async function esPar(num1){
  if(num1%2 === 0){
    console.log(`El número ${num1} es par`)
  } else {
    console.log(`El número ${num1} es impar`)
  }
}

esPar(23)
esPar(40)
esPar(9)

//Ejercicio 2:
console.log("Ej_4.2")

async function convertirCelsiusAFahrenheit(C) {
  let F = C * 1.8 + 32
  console.log(`${C}ºC son equivalentes a ${F}º F`)
}

convertirCelsiusAFahrenheit(30)

//5. Objetos en JavaScript
//Ejercicio 1:
console.log("Ej_5.1")
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Mendoza",
  cambiarCiudad(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
};

console.log(`Antes de cambiar la ciudad -> Persona: ${persona.nombre} Edad: ${persona.edad}  Ciudad: ${persona.ciudad}`);

persona.cambiarCiudad("Neuquen");

console.log(`Después de cambiar la ciudad -> Persona: ${persona.nombre} Edad: ${persona.edad}  Ciudad: ${persona.ciudad}`);


//Ejercicio 2
console.log("Ej_5.2")
const libro = {
  titulo: "Don Quijote",
  autor: "Miguel de Cervantes",
  año: 1605,
  esAntiguo() {
    const añoActual = new Date().getFullYear();
    return añoActual - this.año > 10;
  }
};

console.log(`El libro ${libro.titulo} es antiguo: ${libro.esAntiguo()}`);

//6. Arrays
//Ejercicio 1:

console.log("Ej_6.1")
const numeros = [1,2,3,4,5,6,7,8,9,10]
const numerosB = []
numeros.forEach(num => {
  numerosB.push(num*2)
});
console.log(`Numeros originales: ${numeros}`)
console.log(`Numeros multiplicados por 2: ${numerosB}`)

//Ejercicio 2:
console.log("Ej_6.2")
const pares = [];
for (let i = 2; i <= 20; i++) {
  if (i%2 === 0){
    pares.push(i)
  }
}
console.log(`Primeros 10 números pares: ${pares}`)

//7. Introducción al DOM
//Ejercicio 1:
console.log("Ej_7.1")
const buttonC = document.getElementById("color");

buttonC.addEventListener("click", function () {

    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "#00f";
    }
});

//Ejercicio 2:
console.log("Ej_7.2")

document.getElementById("boton-alerta").addEventListener("click", function () {
  let texto = document.getElementById("campo-texto").value;
  alert("Has ingresado: "+texto);
})

//8. Eventos en DOM
//Ejercicio 1:
console.log("Ej_8.1")
const elementos = document.getElementsByClassName("li-elemento")
elementos[0].addEventListener("click", function() {
  elementos[0].style.color = "blue"
})
Array.from(elementos).forEach( element => {
  element.addEventListener("click", function() {
    console.log(element.textContent);
  });
});

//Ejecicio 2:
console.log("Ej_8.2")
const button_d = document.getElementById("deshabilitar")
const button_h = document.getElementById("habilitar")

button_d.addEventListener("click", function(){
  document.getElementById("texto2").disabled = true

})

button_h.addEventListener("click", function(){
  document.getElementById("texto2").disabled = false
})

//9. LocalStorage 
//Ejercicio 1:


const button_save = document.getElementById("boton-guardar")

button_save.addEventListener("click", function(){
  const email = document.getElementById("texto-email").value;
  localStorage.setItem("datos", JSON.stringify({
    email,
  }))
  document.getElementById("correo-guardado").innerText = `Correo guardado: ${email}`;
})

const button_delete = document.getElementById("boton-eliminar")
button_delete.addEventListener("click", function(){
  localStorage.removeItem("datos")
  document.getElementById("correo-guardado").innerText = "Correo guardado: no hay registros"
})

const result_datos = localStorage.getItem("datos")
if (result_datos) {
  let textoJ = JSON.parse(result_datos)
  console.log(textoJ.email)
  document.getElementById("correo-guardado").innerText = "Correo guardado: "+ textoJ.email
} else {
  document.getElementById("correo-guardado").innerText = "Correo guardado: no hay registros"
}
