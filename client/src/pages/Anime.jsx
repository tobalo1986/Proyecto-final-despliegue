import { useState, useEffect } from "react";
import getAnimes from "../logic/getAnime";
import createAnime from "../logic/createAnime";
import deleteAnime from "../logic/deleteAnime";
import updateAnime from "../logic/updateAnime";
import AnimeCard from "../components/AnimeCard";
import AnimeFormulario from "../components/AnimeFormulario";
import AnimeUpdateFormulario from "../components/AnimeUpdateFormulario";

function Anime() {
    const [animesState, setAnimesState] = useState([]);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [editAnime, setEditAnime] = useState(null);

    useEffect(() => {
        handleGetAnimes();
    }, []);

    function handleGetAnimes() {
        getAnimes()
            .then((data) => {
                setAnimesState(data);
            })
            .catch((error) => console.error("Error fetching animes", error));
    }

    function handleCreateAnime(animeAdd) {
        createAnime(animeAdd)
            .then((response) => {
                console.log(response);
                handleGetAnimes();
                setShow(false);
            })
            .catch((error) => {
                console.error("Error creating Anime: ", error);
            });
    }

    function handleDeleteAnime(id) {
        deleteAnime(id)
            .then((response) => {
                console.log(response);
                handleGetAnimes();
            })
            .catch((error) => {
                console.error("Error deleting Anime: ", error);
            });
    }

    function showUpdateForm(animeToUpdate) {
        setEditAnime(animeToUpdate);
        setShowUpdate(true);
    }

    function cerrarFormulario() {
        setShowUpdate(false);
    }

    function handleUpdateAnime(id, updateData) {
        updateAnime(id, updateData)
            .then((response) => {
                console.log(response);
                handleGetAnimes();
                setShowUpdate(false);
            })
            .catch((error) => {
                console.error("Error updating Anime: ", error);
            });
    }

    function agregar() {
        setShow(!show);
    }

    return (
        <section className="page">
            <h1 className="section-title">Página Anime</h1>
            <p className="section-subtitle">
                Descubre openings y escenas destacadas en un formato de reproductor.
            </p>

            <div className="anime-grid">
                {animesState.map((anime) => (
                    <AnimeCard 
                        key={anime.id} 
                        propsAnimes={anime} 
                        onDelete={handleDeleteAnime} 
                        onUpdate={showUpdateForm} 
                    />
                ))}
            </div>

            {showUpdate && (
                <AnimeUpdateFormulario
                    animeToUpdate={editAnime}
                    onClose={cerrarFormulario}
                    onUpdateAnime={handleUpdateAnime}
                />
            )}

            <div className="botonesVG">
                <button className="btn-secondary" onClick={agregar}>
                    {show ? "Cerrar formulario" : "Agregar nuevo"}
                </button>
            </div>

            {show && <AnimeFormulario onAddAnime={handleCreateAnime} />}
        </section>
    );
}

export default Anime;
