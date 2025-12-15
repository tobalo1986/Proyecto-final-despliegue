const BASE_URL = import.meta.env.VITE_API_URL 

async function createAnime(postData) {

    return fetch(`${BASE_URL}animes`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(postData)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .catch((error) =>{
        console.error("Error creating Anime: ", error)
        throw error; // Re-throw para que el caller lo maneje
    })
    
}

export default createAnime