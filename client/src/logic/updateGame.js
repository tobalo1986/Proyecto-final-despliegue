const BASE_URL = import.meta.env.VITE_API_URL 

async function updateGame(id, updateData) {

    return fetch(`${BASE_URL}games/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updateData)
    })
    .then((response) => response.json())
    .catch((error) =>{
        console.error("Error updating Game: ", error)
    })
    
}

export default updateGame