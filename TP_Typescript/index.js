"use strict";
console.log("Ejercicio 2: corriendo desde typescript");
//Ejercicio 3
let num = 55;
let word = "palabra";
let bol = true;
let date = new Date();
console.log(num + "\n" + word + "\n" + bol);
console.log(date.toLocaleDateString());
const exercise1 = document.getElementById("ej1");
if (exercise1) {
    exercise1.innerHTML = `
<p>Numero: ${num}</p>
<p>Texto: ${word}</p>
<p>Booleano: ${bol}</p>
<p>Fecha: ${date.toLocaleDateString()}</p>
`;
}
//Ejercicio 4
function numberToString(num) {
    return num.toString();
}
let numA = numberToString(10);
const exercise2 = document.getElementById("ej2");
if (exercise2) {
    exercise2.innerHTML = `Numero convertido a cadena: ${numA}`;
}
//Ejercicio 5
function sumArray(array) {
    let sumary = 0;
    array.forEach(element => {
        sumary += element;
    });
    return sumary;
}
const arrayA = [1, 4, 8, 3, 6];
const exercise3 = document.getElementById("ej3");
if (exercise3) {
    exercise3.innerHTML = `Suma de array: ${sumArray(arrayA)}`;
}
const student = {
    nombre: "Javier",
    edad: 23,
    curso: "Biologia"
};
console.log(student);
const exercise4 = document.getElementById("ej4");
if (exercise4) {
    exercise4.innerHTML = `
    Nombre: ${student.nombre} <br>
    Edad: ${student.edad}<br>
    Curso: ${student.curso}`;
}
const addressA = {
    calle: "Libertad 4530",
    ciudad: "Maipú",
    codigoPostal: 2231
};
const exercise5 = document.getElementById("ej5");
if (exercise5) {
    exercise5.innerHTML = `
    Calle: ${addressA.calle} <br>
    Ciudad: ${addressA.ciudad}<br>
    CP: ${addressA.codigoPostal}`;
}
const person1 = {
    nombre: "Javier",
    correo: "javier03@gmail.com",
    saludar() {
        return `Hola, mi nobre es ${this.nombre} y tengo 47 años`;
    }
};
const exercise6 = document.getElementById("ej6");
if (exercise6) {
    exercise6.innerHTML = `
   ${person1.saludar()}
   `;
}
//Ejercicio 9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Mi nombre es ${this.nombre} y tengo ${this.edad} años, es un gusto conocerlo`;
    }
}
const personA = new Persona("Rober", 18);
const exercise7 = document.getElementById("ej7");
if (exercise7) {
    exercise7.innerHTML = `
   ${personA.presentarse()}
   `;
}
//Ejercicio 10
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
}
const cajaString = new Caja("texto");
const cajaNumber = new Caja(1232);
const exercise8 = document.getElementById("ej8");
if (exercise8) {
    exercise8.innerHTML = `
    Contenido de cajaString: ${cajaString.getValor()} <br>
    Contenido de cajaNumber: ${cajaNumber.getValor()}
   `;
}
//Ejercicio 11 
function identidad(valor) {
    return valor;
}
const valorString = identidad("Buen Día");
const valorNumero = identidad(42);
const valorBoolean = identidad(true);
const exercise9 = document.getElementById("ej9");
if (exercise9) {
    exercise9.innerHTML = `
    Identidad de numero: ${identidad(42)} <br>
    Identidad de cadena: ${identidad("Buen Día")}<br>
    Identidad de booleano: ${identidad(false)}
   `;
}
//Ejercicio 12
var Color;
(function (Color) {
    Color["rojo"] = "Rojo";
    Color["verde"] = "Verde";
    Color["azul"] = "Azul";
})(Color || (Color = {}));
const favoriteColor = Color.rojo;
const exercise10 = document.getElementById("ej10");
if (exercise10) {
    exercise10.innerHTML = `
    Color favorito: ${favoriteColor}
   `;
}
