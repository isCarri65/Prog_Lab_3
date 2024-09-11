async function getUserData(){
    try{
        const rensponse = await fetch("https://randomuser.me/api/");
        const data = await rensponse.json();
        const person = data.results[0];
        const name = `${data.results[0].name.first}`+`${data.results[0].name.last}`
        const ubicacion = `${person.location.country}`
        const urlImagen = person.picture.medium;
        console.log(name);
        console.log(ubicacion);
        console.log(urlImagen);

        const divInfo = document.getElementById("userInfo");
        divInfo.innerHTML = 
        `<p> Nombre: ${name}</p>
        <p> Ubicacion: ${ubicacion}</p>
        <img src="${urlImagen}" width=150px>
        `

    } catch (error) {
        console.error(error); // Imprime "Error al cargar los datos"
    }
}
getUserData();

//Ejercicio 2

async function fetchAndDisplayPosts() {
    try {
        // Realizamos la petición a la API de JSONPlaceholder
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        console.log(`${posts[0].title}`)
        // Seleccionamos el contenedor donde mostraremos los datos
        const postContainer = document.getElementById("list-Conteiner");
        // Mostramos los primeros 5 posts en el DOM

        posts.slice(0, 5).forEach(post => {

        const postElement = document.createElement("li");
        
        postElement.innerHTML = `<h2>${post.title}</h2>`;
        postContainer.appendChild(postElement);
        });
    } catch (error) {
      console.error("Error al obtener los posts:", error);
    }
}
  
  // Llamamos a la función para cargar y mostrar los posts
  fetchAndDisplayPosts();
  