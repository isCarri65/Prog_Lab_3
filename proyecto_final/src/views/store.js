import { opendModal, setProductoActivo } from "../../main.js"
import { handleGetProductLocalStorage } from "../persistence/localStorage.js"


// ======= STORE =========
export const handleGetProductsToStore = () =>{
    const products = handleGetProductLocalStorage()
    handleRenderList(products)
}

export const handleRenderList = (productosIn) => {
    const burgers = productosIn.filter((el) => el.categories === "hamburguesas")
    const papas = productosIn.filter((el) => el.categories === "papas")
    const gaseosas = productosIn.filter((el) => el.categories === "gaseosas")

    const rederProductGroup = (productos, title) =>{
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `<div id="product-${producto.categories}-${index}" class="containerTargetItem">
                <div class="imageContainer">
                <img src='${producto.imagen}'/>
                <div class="productName">
                <h2>${producto.nombre}</h2>
                </div>
                <div class="targetProps">
                <p><b>Precio:</b> ${producto.precio}</p>
                </div>
                </div>
                </div>
                    `;
            });

            return `
            <section class="sectionStore">
            <div class="titleContainer">
            <h3>${title}</h3>
            </div>
            <div class="containerProductStore">
            ${productosHTML.join("")}
            </div>
            </section>
            `;
            
        } else {
            return ""
        }
        
    };
    //renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${rederProductGroup(burgers, "Hamburguesas")}
    ${rederProductGroup(papas, "Papas")}
    ${rederProductGroup(gaseosas, "Gaseosas")}`
    
    const addEvents = (productosIn) => {
        if (productosIn) {
            console.log(10)
            productosIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categories}-${index}`);

            productContainer.addEventListener("click", () =>{
                setProductoActivo(element);
                opendModal();
            })
        })        
       }
    }
    addEvents(burgers)
    addEvents(papas)
    addEvents(gaseosas)


}