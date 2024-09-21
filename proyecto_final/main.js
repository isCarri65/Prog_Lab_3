import { handleGetProductLocalStorage, setInLocalStorage } from "./src/persistence/localStorage.js";
import { renderCategories } from "./src/services/categories.js";
import { handleSearch } from "./src/services/searchBar.js";
import { handleGetProductsToStore, handleRenderList } from "./src/views/store.js";
import Swal from 'sweetalert2'



//==== Aplication ======
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) =>{
    categoriaActiva = categoriaIn
}

export let productoActivo = null;

export const setProductoActivo = (productoIn) =>{
    productoActivo = productoIn;
    console.log("Producto activo: ", productoActivo.id )
}


window.onload = () => {
    handleGetProductsToStore();
    renderCategories();
    handleSearch()
};

const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click",() =>{
    handleSaveElement()
})

const deleteButton=document.getElementById("deleteButton");

deleteButton.addEventListener("click",()=>{
    console.log("Producto activo: ", productoActivo.id )
    handleDeleteProduct()
})



const buttonAdd = document.getElementById("buttonAdd")
buttonAdd.addEventListener('click', () =>{
    opendModal();
})

/* ====== POPUP ====== */


const resetModal = () =>{
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"), 
    precio = document.getElementById("precio"),
    categories = document.getElementById("categoria");
    nombre.value = ""
    imagen.value = ""
    categories.value = ""
    precio.value = ""
}

export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUp")
    modal.style.display = "none";
    productoActivo = null
    resetModal()
}

const buttonCancel = document.getElementById("cancelButton")
buttonCancel.addEventListener('click', () =>{
    closeModal()
})


export const opendModal = ()=>{
   const modal = document.getElementById("modalPopUp")
   modal.style.display = "flex";

   if (productoActivo) {
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"), 
    precio = document.getElementById("precio"),
    categories = document.getElementById("categoria");

    nombre.value = productoActivo.nombre;
    imagen.value = productoActivo.imagen;
    categories.value = productoActivo.categories;
    precio.value = productoActivo.precio
   }
};

//Guardar ELemento

const handleSaveElement = () =>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value, 
    precio = document.getElementById("precio").value,
    categories = document.getElementById("categoria").value;
    console.log(productoActivo)
    let object = null;
    if (productoActivo) {
        object = {
            id: productoActivo.id,
            nombre,
            imagen,
            precio,
            categories
        }
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories
        };
        
    }
    
    console.log(object)
    Swal.fire({
        title: "Guardado",
        text: "operación completada",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
}



//Eliminar un Elemento


export const handleDeleteProduct=()=>{
    Swal.fire({
        title: "Estas seguro?",
        text: "No sera posible revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {

            const products = handleGetProductLocalStorage()
            console.log(productoActivo)
            const result=products.filter(e=>e.id!==productoActivo.id)
            localStorage.setItem("products",JSON.stringify(result))
            const newProducts=handleGetProductsToStore()
            closeModal()
            handleRenderList(newProducts)
        }else{
            closeModal()
        }
      });
    }