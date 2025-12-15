import { useState } from "react";

export default function AnimeUpdateFormulario({
    onUpdateAnime,
    animeToUpdate,
    onClose,
}) {
    /**
     *
     * Función actualizar un anime, se recupera los datos del formulario
     * y se guarda en animeUpdate, que es un objeto.
     */

    // se crea un useState por cada input del formulario.
    const [name, setName] = useState(animeToUpdate.name);
    const [description, setDescription] = useState(animeToUpdate.description);
    const [youtubeId, setYoutubeId] = useState(animeToUpdate.youtubeId);
    const [genre, setGenre] = useState(animeToUpdate.genre ? animeToUpdate.genre.join(', ') : '');
    const [year, setYear] = useState(animeToUpdate.year);


    // coge la información de los input y los pasas a su padre.
    function actualizarAnime(event) {
        event.preventDefault();
        let animeUpdate = {
            name,
            description,
            youtubeId,
            genre: genre.split(',').map(g => g.trim()),
            year,
        };
        console.log("de la funcion actualizarAnime");
        console.log(animeUpdate);
        // para que funcione el update en el fronte se pasa los dos datos, la id y el objeto.
        onUpdateAnime(animeToUpdate.id, animeUpdate);
        onClose();
    }
    /* Para poder editar se debe de usar value (se pone el valor que viene en 
    useSTate y onChange usando el set de ese useSTate) */
    return (
        <div className="modal">
            <div className="formModal">
                <div className="cardAnime">
                    <h2>Vamos a editar el anime... </h2>
                    <form onSubmit={actualizarAnime} action="" method="post">
                        <div className="itemForm">
                            <label htmlFor="name">Nombre:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>

                        <div className="itemForm">
                            <label htmlFor="description">Descripción:</label>
                            <textarea
                                name="description"
                                id="description"
                                required
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                        </div>

                        <div className="itemForm">
                            <label htmlFor="youtubeId">YouTube ID:</label>
                            <input
                                type="text"
                                name="youtubeId"
                                id="youtubeId"
                                required
                                value={youtubeId}
                                onChange={(e) => {
                                    setYoutubeId(e.target.value);
                                }}
                            />
                        </div>

                        <div className="itemForm">
                            <label htmlFor="genre">Géneros (separados por coma):</label>
                            <input
                                type="text"
                                name="genre"
                                id="genre"
                                required
                                value={genre}
                                onChange={(e) => {
                                    setGenre(e.target.value);
                                }}
                            />
                        </div>

                        <div className="itemForm">
                            <label htmlFor="year">Año:</label>
                            <input
                                type="number"
                                name="year"
                                id="year"
                                required
                                value={year}
                                onChange={(e) => {
                                    setYear(e.target.value);
                                }}
                            />
                        </div>
                        <div className="botonesAnime">
                            <input type="submit" value="Modificar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
