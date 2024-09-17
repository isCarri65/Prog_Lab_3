console.log("Ejercicio 2: corriendo desde typescript")

//Ejercicio 3
let num:number = 55;
let word:string = "palabra";
let bol:boolean = true;
let date:Date = new Date();
console.log(num +"\n"+word+"\n"+bol)
console.log(date.toLocaleDateString())
const exercise1: HTMLElement|null = document.getElementById("ej1")
if(exercise1){
    exercise1.innerHTML = `
<p>Numero: ${num}</p>
<p>Texto: ${word}</p>
<p>Booleano: ${bol}</p>
<p>Fecha: ${date.toLocaleDateString()}</p>
`
}
//Ejercicio 4

function numberToString(num:number): string{
    return num.toString();
}
let numA:string = numberToString(10);
const exercise2: HTMLElement|null = document.getElementById("ej2");
if(exercise2){
    exercise2.innerHTML = `Numero convertido a cadena: ${numA}`
}

//Ejercicio 5

function sumArray(array:number[]): number{
    let sumary:number = 0;
    array.forEach(element => {
        sumary += element; 
    });
    return sumary;
}
const arrayA:number[] = [1,4,8,3,6];
const exercise3: HTMLElement|null = document.getElementById("ej3");
if(exercise3){
    exercise3.innerHTML = `Suma de array: ${sumArray(arrayA)}`
}

//Ejercicio 6
interface Students {
    nombre: string;
    edad: number;
    curso: string;
}
const student: Students = {
    nombre: "Javier",
    edad: 23,
    curso: "Biologia"
}
console.log(student)
const exercise4: HTMLElement|null = document.getElementById("ej4");
if(exercise4){
    exercise4.innerHTML = `
    Nombre: ${student.nombre} <br>
    Edad: ${student.edad}<br>
    Curso: ${student.curso}`
}

//Ejercicio 7

type Address = {
    calle: string;
    ciudad: string;
    codigoPostal: number;
}
const addressA: Address = {
    calle: "Libertad 4530",
    ciudad: "Maipú",
    codigoPostal: 2231
}
const exercise5: HTMLElement|null = document.getElementById("ej5");
if(exercise5){
    exercise5.innerHTML = `
    Calle: ${addressA.calle} <br>
    Ciudad: ${addressA.ciudad}<br>
    CP: ${addressA.codigoPostal}`
}

//Ejercicio 8
interface Usuario {
    nombre: string;
    correo: string;
    saludar():string;
    }
}
const person1: Usuario = {
    nombre: "Javier",
    correo: "javier03@gmail.com",
    
    public saludar():string{
        return `Hola, mi nobre es ${this.nombre} y tengo 47 años`
    }
}
const exercise6: HTMLElement|null = document.getElementById("ej6");
if(exercise6){
    exercise6.innerHTML = `
   ${person1.saludar()}
   `
}

//Ejercicio 9

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    public presentarse():string{
        return `Mi nombre es ${this.nombre} y tengo ${this.edad} años, es un gusto conocerlo`
    }
}
const personA: Persona = new Persona("Rober", 18)
const exercise7: HTMLElement|null = document.getElementById("ej7");
if(exercise7){
    exercise7.innerHTML = `
   ${personA.presentarse()}
   `
}

//Ejercicio 10

class Caja<T> {
    private valor: T;

    constructor(valor: T){
        this.valor = valor
    }
    public getValor():T{
        return this.valor
    }
    public setValor(valor:T){
        this.valor = valor
    }
}
const cajaString: Caja<string> = new Caja("texto")
const cajaNumber: Caja<number> = new Caja(1232)

const exercise8: HTMLElement|null = document.getElementById("ej8");
if(exercise8){
    exercise8.innerHTML = `
    Contenido de cajaString: ${cajaString.getValor()} <br>
    Contenido de cajaNumber: ${cajaNumber.getValor()}
   `
}

//Ejercicio 11 

function identidad<T>(valor: T): T {
    return valor;
  }

const valorString = identidad<string>("Buen Día");
const valorNumero = identidad<number>(42);
const valorBoolean = identidad<boolean>(true);

const exercise9: HTMLElement|null = document.getElementById("ej9");
if(exercise9){
    exercise9.innerHTML = `
    Identidad de numero: ${identidad<number>(42)} <br>
    Identidad de cadena: ${identidad<string>("Buen Día")}<br>
    Identidad de booleano: ${identidad<boolean>(false)}
   `
}

//Ejercicio 12

enum Color {
    rojo = "Rojo",
    verde = "Verde",
    azul = "Azul"
  }
  
  const favoriteColor: Color = Color.rojo;
  
  const exercise10: HTMLElement|null= document.getElementById("ej10");
if(exercise10){
    exercise10.innerHTML = `
    Color favorito: ${favoriteColor}
   `
}
