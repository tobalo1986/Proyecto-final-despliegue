import Game from "../models/games.model.js"


const getGames =  async (request, response) => {
  try {
    // lean -> limpia la información que viene de la BBDD
    const games = await Game.find().lean();
    // cambiar _id a id
    games.forEach((game) => {
      game.id = game._id.toString()
      delete game._id
    })
    response.json(games);
  } catch (error) {
    console.error("error, en el Get de games: ", error);
    response.json({ error: "DB_ERROR" });
  }
};

// para agregar un nuevo juego.
const createGame = async (request, response) => {
  try {
    // se recupera datos
    const postData = request.body;
    // se crea un nuevo item de Games en la BBDD
    const newGame = new Game(postData);
    // se guarda en la BBDD
    const savedGame = await newGame.save();
    // devolver estado de que se creo el item en la BBDD - 201
    response.status(201).json(savedGame);
  } catch (error) {
    console.error("Error: en POST - game: ", error);
    response.status(500).json({ error: "DB_Error" });
  }
};


// eliminar un juego.
// no iba por la ruta ... le faltaba la dichosa s - no era game/:id sino gameS/:id.
const deleteGame = async (request, response) => {
  try {
    // se recupera la id y se busca y elimina de la BBDD
    const gameId = request.params.id;
    const deleteGame = await Game.findByIdAndDelete(gameId);

    // Comprobamos si existe un documento con la ID que se ha enviado
    if (!deleteGame) {
      return response.status(404).json({ error: "Game not found" });
    }
    response.json({ message: "Game deleted" });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// actualizar

const updadteGame =  async (request, response) => {
    try {
        const gameId = request.params.id
        const gameData = request.body

        // Extraer el post por la ID
        const game = await Game.findById(gameId)

        // Comprobamos si existe un documento con la ID que se ha enviado
        if (!game) {
            return response.status(404).json({error: 'Post not found'})
        }

        // Usamos set y save para asegurarnos que se aplica la validación
        // Otra opción sería usar 'runValidators':
        // const post = await Post.findByIdAndUpdate({ _id: postId }, postData, {new: true, runValidators: true})
        game.set(gameData)
        await game.save()

        response.json(game)

    } catch(error) {
        response.status(500).json({error: error.message})
    }
};


export default {
    getGames,
    createGame,
    deleteGame,
    updadteGame
}