import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

//render
export const renderCategories = ()=>{
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas" value="hamburguesas">Hamburguesas</li>
    <li id="Papas" value="papas">Papas</li>
    <li id="Gaseosas" value="gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor recio</li>
    <li id="menorPrecio">Menor precio</li>`;
    
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach(liElement => {
        liElement.addEventListener("click", ()=>{
            handleClick(liElement);
        })
    });
    const handleClick = (elemento)=>{
        
        const productosIn = handleGetProductLocalStorage()
        
        liElements.forEach(element => {
            if (element.classList.contains("liActive")) {
                element.classList.remove("liActive")
            }else {
                if (elemento === element) {
                    element.classList.add("liActive")
                    if (elemento.innerHTML === "Todos los productos"){
                        handleRenderList(productosIn)
                    }else{
                    console.log(element.innerText.toLowerCase())
                    console.log(productosIn[2].categories)
                    let resultado = productosIn.filter((el) => el.categories === element.innerText.toLowerCase());
                    handleRenderList(resultado)
                    }
                }
            }

        });
    }
};