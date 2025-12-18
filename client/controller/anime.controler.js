import Anime from "../models/animes.model.js"

// ruta para devolver los datoos que hay en la bbdd y colección animes.

const getAnimes =  async (request, response) => {
  try {
    // lean -> limpia la información que viene de la BBDD
    const animes = await Anime.find().lean();
    // cambiar _id a id
    animes.forEach((anime) => {
      anime.id = anime._id.toString()
      delete anime._id
    })
    response.json(animes);
  } catch (error) {
    console.error("error, en el Get de Animes: ", error);
    response.json({ error: "DB_ERROR" });
  }
};

// para agregar un nuevo anime.
const createAnime = async (request, response) => {
  try {
    // se recupera datos
    const postData = request.body;
    // se crea un nuevo item de Animes en la BBDD
    const newAnime = new Anime(postData);
    // se guarda en la BBDD
    const savedAnime = await newAnime.save();
    // devolver estado de que se creo el item en la BBDD - 201
    response.status(201).json(savedAnime);
  } catch (error) {
    console.error("Error: en POST - anime: ", error);
    response.status(500).json({ error: "DB_Error" });
  }
};

// eliminar un anime.
const deleteAnime = async (request, response) => {
  try {
    // se recupera la id y se busca y elimina de la BBDD
    const animeId = request.params.id;
    const deleteAnime = await Anime.findByIdAndDelete(animeId);

    // Comprobamos si existe un documento con la ID que se ha enviado
    if (!deleteAnime) {
      return response.status(404).json({ error: "Anime not found" });
    }
    response.json({ message: "Anime deleted" });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// actualizar anime
const updateAnime =  async (request, response) => {
    try {
        const animeId = request.params.id
        const animeData = request.body

        // Extraer el anime por la ID
        const anime = await Anime.findById(animeId)

        // Comprobamos si existe un documento con la ID que se ha enviado
        if (!anime) {
            return response.status(404).json({error: 'Anime not found'})
        }

        // Usamos set y save para asegurarnos que se aplica la validación
        anime.set(animeData)
        await anime.save()

        response.json(anime)

    } catch(error) {
        response.status(500).json({error: error.message})
    }
};

export default {
    getAnimes,
    createAnime,
    deleteAnime,
    updateAnime
}
