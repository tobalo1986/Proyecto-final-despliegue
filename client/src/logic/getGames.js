const BASE_URL = import.meta.env.VITE_API_URL 
console.log("del getGames: " , BASE_URL)

async function getGames() {

    return fetch(`${BASE_URL}games`)
    .then((response) => response.json())
    .then((data) =>{
        console.log("del getGames: ", data)
        return(data)
    })
    .catch((error) =>{
        console.error("Error Fetching Games: ", error)
    })
    
}

export default getGames