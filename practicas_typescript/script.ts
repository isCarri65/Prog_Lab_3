console.log("Hola")
let num = 5
num += 1
console.log(num)
let numbers: number[] = [4,5]
console.log(numbers[1])

class Coche {
    private marca:string;
    private modelo:string;
    private velocidad: number;

    constructor(marca:string, modelo:string, velocidad:number){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad
    }
    public acelerar(){
        this.velocidad += 20
    }
    public frenar(){
        this.velocidad -= 10
    }
    public mostrar(){
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo} \nVelocidad: ${this.velocidad}`);
    }
}

const coche1 = new Coche("Honda", "uno", 12);
coche1.mostrar();
coche1.acelerar();

//Ejercicio 2

interface Itask {
    id:number;
    estado:boolean;
}
async function fetchFilterTask() {
    const completes: Itask[] = [];
    const response:Response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const tasks:Itask[] = await response.json();
    tasks.forEach(task => {
        if (task.estado) {
            completes.push(task)
        }
    });
    completes.forEach(element => {
        console.log(element)
    });
}

//Ejercicio 3

class Cubo {
    private areaMovimientoElement: HTMLElement;
    private cuboElement: HTMLElement; 
    private velocidadMovimiento:number;
    private ancho:number;
    private alto:number;
    private top:number = 0;
    private left:number = 0;
    constructor(areaMovimientoElement: HTMLElement, cuboElement:HTMLElement, velocidadMovimiento:number){
        this.areaMovimientoElement = areaMovimientoElement;
        this.cuboElement = cuboElement
        this.velocidadMovimiento = velocidadMovimiento
        this.ancho = this.areaMovimientoElement.clientWidth
        this.alto = this.areaMovimientoElement.clientHeight
    }
    public moverArriva(){
        if(this.top>0){
            this.top += -this.velocidadMovimiento;
            this.cuboElement.style.top = `${this.top}px`;
        }
    }
    public moverAbajo(){
        console.log(this.alto)
        if(this.top < this.alto-this.cuboElement.clientHeight){ 
            this.top += this.velocidadMovimiento
            this.cuboElement.style.top = `${this.top}px`;
        }
    }
    public moverDerecha(){
        if(this.left< this.alto-this.cuboElement.clientWidth){
            this.left += this.velocidadMovimiento
            this.cuboElement.style.left = `${this.left}px`
        }  
    }
    public moverIzquierda(){
        if(this.left > 0) {
            this.left += -this.velocidadMovimiento
            this.cuboElement.style.left = `${this.left}px`
        }
        
    }

}
const box:HTMLElement|null = document.getElementById("box-movil")
const box_conteiner:HTMLElement|null = document.getElementById("box-conteiner")


function validarCubo(cubo:HTMLElement|null){
    if (box_conteiner && box) {
        let cubo = new Cubo(box_conteiner,box,10)
        return cubo
    }
}

const cubo = validarCubo(box)
 
document.addEventListener("keydown", (ev)=>{
    if("ArrowUp"==ev.key){
        cubo.moverArriva();
    }
    if("ArrowDown"==ev.key){
        cubo.moverAbajo();
    }
    if("ArrowLeft"==ev.key){
        cubo.moverIzquierda();
    }
    if("ArrowRight"==ev.key){
        cubo.moverDerecha();
    }
   
})
console.log("hola")