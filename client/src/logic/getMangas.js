async function getMangas() {
    // Hacemos la petición a la URL de TU servidor local
    return fetch("http://localhost:3000/mangas")
    .then((response) => response.json()) 
    .then((data) => {
    console.log(data); // 2. Vemos los datos por consola (opcional, para    debug)
    return data; // 3. Devolvemos los datos limpios
    })
    .catch((error) => {
    console.error("Error al obtener los videojuegos:", error); // Gestión de erro   res
    });
   }
   export default getMangas;