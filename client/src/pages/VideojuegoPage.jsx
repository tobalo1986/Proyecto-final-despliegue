import VidegameCard from "../components/VideogameCard";
import VideogameFormulario from "../components/VideogameFormulario";
import VideogameUpdateFormulario from "../components/VideogameUpdateFormulario";
import { useEffect, useState } from "react";
import getGames from "../logic/getGames";
import createGame from "../logic/createGame";
import deleteGame from "../logic/deleteGame";
import updateGame from "../logic/updateGame";

function VideojuegoPage() {
  // original cogía los datos de data de la app -  const [gamesState, setGamesState] = useState(games);
  // para el punto 3:
  const [gamesState, setGamesState] = useState([]);
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  // guarda un solo videojuego (editar)
  const [editGame, setEditGame] = useState(null);
  //  console.log(editGame);

  //console.log(gamesState);

  // del punto 3 - useEffect

  useEffect(() => {
    // hacemos la llamada a la función que está en lógica.
    handleGetGames();
    // se usa un array vacío asegura que solo se ejecute una vez.
  }, []);

  function handleGetGames() {
    getGames()
      .then((data) => {
        // se guarda los datos recibidos en el estado.
        setGamesState(data);
      })
      // salta si hay error.
      .catch((error) => console.error("Error fetching games", error));
  }

  /**
   * Función que elimina el último item.
   * Primero se crea una copia del estado del array de objetos de juegos.
   * y a la copia se le hace la función pop()
   */
  function deleteOne() {
    const copy = [...gamesState];
    copy.pop();
    setGamesState(copy);
  }

  /**
   * función que recupera el juego a agregar
   * se crea una copia del gameState
   * se saca la id mayor
   * a gameAdd se agrega la id
   * en la copy de agrega el objeto al copy y se cambia el estado.
   *
   */
  function handleCreateGame(gameAdd) {
    try {
      createGame(gameAdd)
        .then((response) => {
          console.log(response);
          // Vuelve a pedir los juegos a la api.
          handleGetGames();
          // para desaparecer el modal para crear.
          setShow(false);
        })
        .catch((error) => {
          console.error("Error creating Game: ", error);
        });
    } catch (error) {
      console.error("Error not connection: ", error);
    }

    /*   const copy = [...gamesState];
    const maxId =
      gamesState.length > 0 ? Math.max(...gamesState.map((g) => g.id)) : 0;
    //console.log(maxId);
    gameAdd.id = maxId + 1;
    copy.push(gameAdd);
    setGamesState(copy);
    // para desaparecer el modal para crear.
    setShow(false) */
  }

  /**
   *
   * Función que recibe una id y se filtra para se eliminada ese item.
   */
  function handleDelete(id) {
    try {
      deleteGame(id)
        // console.log("la id: ", id)
        .then((response) => {
          console.log(response);
          // Vuelve a pedir los juegos a la api.
          handleGetGames();
        })
        .catch((error) => {
          console.error("Error deleting Game: ", error);
        });
    } catch (error) {
      console.error("Error not connection: ", error);
    }

    /*   //  console.log("funcion onDelete");
    //   console.log(id);

    let copy = gamesState.filter((game) => game.id !== id);
    //console.log(copy);
    //console.log("despues de filtar ondelete");
    setGamesState(copy); */
  }
  /**
   * las funciones showFormUpdate() y CerrarFormulario()
   * abre al pulsar el botón editar y lo cierra si se pulsa el botón modificar.
   * DUDA: pero no se si se llegaría a pasar los datos para poder modificar.
   */
  function showFormUpdate() {
    //setShowUpdate(!showUpdate)
    setShowUpdate(true);
  }

  // cerrar formulario de editar
  function cerrarFormulario() {
    setShowUpdate(false);
  }

  /** Función que muestra el formulario para poder
   * editar un juego.
   */

  function showUpdateForm(gameToUpdate) {
    // console.log("El mensaje llega al padre")
    // console.log(gameToUpdate);
    setEditGame(gameToUpdate);
    showFormUpdate();
  }

  // función para actualizar el juego
  function handleUpdate(id, updateData) {
    console.log("la id: ", id, "valor del uptade: ", updateData)
    try {
      updateGame(id, updateData)
    
        .then((response) => {
         
          console.log(response);
          // Vuelve a pedir los juegos a la api.
          handleGetGames();
        })
        .catch((error) => {
          console.error("Error updating Game: ", error);
        });
    } catch (error) {
      console.error("Error not connection: ", error);
    }

    /*   console.log("La info del juego actualizado al padre.");
    console.log(gameUpdate);
    const copy = [...gamesState];
    const index = copy.findIndex((game) => game.id === gameUpdate.id);
    copy.splice(index, 1, gameUpdate);
    setGamesState(copy); */
  }

  /**
   * La función hace que aparezca un formulario para agregar un nuevo juego.
   * El botón tiene un evento "onClick" que llama a está función
   * Esta función cambia el valor de estado a verdadero o falso (si se pulsa más
   * de una vez)
   */
  function agregar() {
    setShow(!show);
  }

  return (
    <>
      <h1 className="videojuego-h1">Página videojuegos</h1>
      <div className="videogame-list">
        {/*     se lista los video juegos usando para ello la función map. 
        recibe el valor de cada item y recibe la función para eliminar un item.*/}
        {gamesState.map((game) => {
          return (
            <VidegameCard
              key={game.id}
              propsVideogame={game}
              onDelete={handleDelete}
              onUpdate={showUpdateForm}
            />
          );
        })}
      </div>
      {/* muestra el formulario solo si show = true
        gameToUpdate={editGame} : con ello se pasa el item a editar al formulario. 
        onUpdateGame={onUpdate} : actualiza el item
        onClose={cerrarFormulario} : cierra formulario. */}
      {showUpdate && (
        <VideogameUpdateFormulario
          gameToUpdate={editGame}
          onClose={cerrarFormulario}
          onUpdateGame={handleUpdate}
        />
      )}
      <div className="botonesVG">
        {/*  <button onClick={() => deleteOne()}>Delete the last one</button> */}
        <button onClick={() => agregar()}>
          {show ? "Cerrar formulario" : "Agregar nuevo"}
        </button>
      </div>

      {/* muestra el formulario solo si show = true */}
      {show && <VideogameFormulario onAddGame={handleCreateGame} />}
    </>
  );
}
export default VideojuegoPage;
