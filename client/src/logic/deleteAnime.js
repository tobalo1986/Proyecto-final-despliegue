const BASE_URL = import.meta.env.VITE_API_URL 

async function deleteAnime(id) {

    return fetch(`${BASE_URL}animes/${id}`, {
        method: "DELETE",
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .catch((error) =>{
        console.error("Error deleting Anime: ", error)
        throw error;
    })
    
}

export default deleteAnime