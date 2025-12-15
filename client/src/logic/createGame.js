const BASE_URL = import.meta.env.VITE_API_URL 

async function createGame(postData) {

    return fetch(`${BASE_URL}games`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(postData)
    })
    .then((response) => response.json())
    .catch((error) =>{
        console.error("Error creating Game: ", error)
    })
    
}

export default createGame