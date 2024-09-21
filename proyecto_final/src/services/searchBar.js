import { handleGetProductLocalStorage } from "../persistence/localStorage.js";
import { handleRenderList } from "../views/store.js";

export const handleSearch = ()=>{
    const searchButton=document.getElementById("searchButton");
        searchButton.addEventListener("click",()=>{
            const inputSearchBar = document.getElementById("inputHeader").value;
            const products = handleGetProductLocalStorage()
            console.log(inputSearchBar.toLowerCase())
            const result = products.filter(e => e.nombre.toLowerCase().includes(inputSearchBar.toLowerCase()))    
    handleRenderList(result)   
        })       
}