"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Hola");
let num = 5;
num += 1;
console.log(num);
let numbers = [4, 5];
console.log(numbers[1]);
class Coche {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    acelerar() {
        this.velocidad += 20;
    }
    frenar() {
        this.velocidad -= 10;
    }
    mostrar() {
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo} \nVelocidad: ${this.velocidad}`);
    }
}
const coche1 = new Coche("Honda", "uno", 12);
coche1.mostrar();
coche1.acelerar();
function fetchFilterTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const completes = [];
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos");
        const tasks = yield response.json();
        tasks.forEach(task => {
            if (task.estado) {
                completes.push(task);
            }
        });
        completes.forEach(element => {
            console.log(element);
        });
    });
}
//Ejercicio 3
class Cubo {
    constructor(areaMovimientoElement, cuboElement, velocidadMovimiento) {
        this.top = 0;
        this.left = 0;
        this.areaMovimientoElement = areaMovimientoElement;
        this.cuboElement = cuboElement;
        this.velocidadMovimiento = velocidadMovimiento;
        this.ancho = this.areaMovimientoElement.clientWidth;
        this.alto = this.areaMovimientoElement.clientHeight;
    }
    moverArriva() {
        if (this.top > 0) {
            this.top += -this.velocidadMovimiento;
            this.cuboElement.style.top = `${this.top}px`;
        }
    }
    moverAbajo() {
        console.log(this.alto);
        if (this.top < this.alto - this.cuboElement.clientHeight) {
            this.top += this.velocidadMovimiento;
            this.cuboElement.style.top = `${this.top}px`;
        }
    }
    moverDerecha() {
        if (this.left < this.alto - this.cuboElement.clientWidth) {
            this.left += this.velocidadMovimiento;
            this.cuboElement.style.left = `${this.left}px`;
        }
    }
    moverIzquierda() {
        if (this.left > 0) {
            this.left += -this.velocidadMovimiento;
            this.cuboElement.style.left = `${this.left}px`;
        }
    }
}
const box = document.getElementById("box-movil");
const box_conteiner = document.getElementById("box-conteiner");
function validarCubo(cubo) {
    if (box_conteiner && box) {
        let cubo = new Cubo(box_conteiner, box, 10);
        return cubo;
    }
}
const cubo = validarCubo(box);
document.addEventListener("keydown", (ev) => {
    if ("ArrowUp" == ev.key) {
        cubo.moverArriva();
    }
    if ("ArrowDown" == ev.key) {
        cubo.moverAbajo();
    }
    if ("ArrowLeft" == ev.key) {
        cubo.moverIzquierda();
    }
    if ("ArrowRight" == ev.key) {
        cubo.moverDerecha();
    }
});
console.log("hola");
