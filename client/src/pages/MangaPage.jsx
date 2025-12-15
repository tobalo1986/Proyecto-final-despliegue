import { useState, useEffect } from "react";
import MangaCard from "../components/MangaCard";
import mangas from "../data/mangData";
import getMangas from "../logic/getMangas";



function MangaPage() {
     // para el punto 3:
/*  const [mangasState, setMangasState] = useState([]);

 // del punto 3 - useEffect

 useEffect(() => {
   // hacemos la llamada a la función que está en lógica.
   getMangas()
   .then((data) => {
     // se guarda los datos recibidos en el estado.
     setMangasState(data)
   })
   // salta si hay error.
   .catch((error) => console.error("Error fetching games", error))
   // se usa un array vacío asegura que solo se ejecute una vez.
 }, [])
 */


    return (
        <section className="page">
            <h1 className="section-title">Página Manga</h1>
            <p className="section-subtitle">Explora tomos y series imprescindibles del mundo manga.</p>

            <div className="manga-grid">
            {/*     para el punto 3 se pueda hacer se usa el useState de mangas */}
                {mangas.map((manga) => (
                    <MangaCard key={manga.id} propsManga={manga} />
                ))}
            </div>
        </section>
    );
}

export default MangaPage;

// TODO: si la BBDD crece, se puede paginar o filtrar por género