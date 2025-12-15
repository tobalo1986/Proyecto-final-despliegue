const BASE_URL = import.meta.env.VITE_API_URL 

async function updateAnime(id, updateData) {

    return fetch(`${BASE_URL}animes/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updateData)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .catch((error) =>{
        console.error("Error updating Anime: ", error)
        throw error;
    })
    
}

export default updateAnime