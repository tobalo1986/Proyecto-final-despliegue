const BASE_URL = import.meta.env.VITE_API_URL 
console.log("del getGames: " , BASE_URL)

async function getAnimes() {

    return fetch(`${BASE_URL}animes`)
    .then((response) => response.json())
    .then((data) =>{
        console.log("del getAnimes: ", data)
        return(data)
    })
    .catch((error) =>{
        console.error("Error Fetching animes: ", error)
    })
    
}

export default getAnimes