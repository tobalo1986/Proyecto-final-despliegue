export default function AnimeFormulario({ onAddAnime }) {
    /**
     * 
     * Función agregar un anime, se recupera los datos del formulario
     * y se guarda en animeAdd, que es un objeto.
     */
    function agregarAnime(event) {
        event.preventDefault();
        let animeAdd = {};

        animeAdd.name = event.target.name.value;
        animeAdd.description = event.target.description.value;
        animeAdd.youtubeId = event.target.youtubeId.value;
        animeAdd.genre = event.target.genre.value.split(',').map(g => g.trim());
        animeAdd.year = event.target.year.value;

        console.log(animeAdd);
        onAddAnime(animeAdd);
    }
    return (
        // clase para editar/ modificar un modal.
        <div className="modal">
            <div className="formModal">

                <h2>Agrega un anime.</h2>
                <form onSubmit={agregarAnime} action="" method="post">

                    <div className="itemForm">
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="Nombre..."
                        />
                    </div>

                    <div className="itemForm">
                        <label htmlFor="description">Descripción:</label>
                        <textarea
                            name="description"
                            id="description"
                            required
                            placeholder="Descripción..."
                        />
                    </div>

                    <div className="itemForm">
                        <label htmlFor="youtubeId">YouTube ID:</label>
                        <input
                            type="text"
                            name="youtubeId"
                            id="youtubeId"
                            required
                            placeholder="ID del video de YouTube..."
                        />
                    </div>

                    <div className="itemForm">
                        <label htmlFor="genre">Géneros (separados por coma):</label>
                        <input
                            type="text"
                            name="genre"
                            id="genre"
                            required
                            placeholder="Acción, Drama..."
                        />
                    </div>

                    <div className="itemForm">
                        <label htmlFor="year">Año:</label>
                        <input
                            type="number"
                            name="year"
                            id="year"
                            required
                            placeholder="Año..."
                        />
                    </div>

                    <div className="botonesVG">
                        <input type="submit" value="Agregar" />
                    </div>
                </form>
            </div>
        </div>
    );
}
