const BASE_URL = import.meta.env.VITE_API_URL 

async function deleteGame(id) {

    return fetch(`${BASE_URL}games/${id}`, {
        method: "DELETE",
    })
    .then((response) => {
        // mensaje del que ha sido eliminado.
        alert("Su videojuego ha sido elimido...")
        response.json()})
    .catch((error) =>{
        console.error("Error deleting Game: ", error)
    })
    
}

export default deleteGame