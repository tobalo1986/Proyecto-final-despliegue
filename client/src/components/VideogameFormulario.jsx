export default function VideogameFormulario({ onAddGame }) {
  /**
   * 
   * Función agregar un juego, se recupera los datos del formulario
   * y se guarda en gameAdd, que es un objeto.
   */
  function agregarJuego(event) {
    event.preventDefault();
    let gameAdd = {};


    // Si la url esta vacia que ponga una imagen por defecto.
    let url = event.target.image.value;

    if (!url) {
      url = "https://static.vecteezy.com/system/resources/previews/022/059/000/non_2x/no-image-available-icon-vector.jpg";
    }

    gameAdd.image = url;
    gameAdd.name = event.target.name.value;
    gameAdd.price = event.target.price.value;
    gameAdd.platform = event.target.platform.value;
    gameAdd.year = event.target.year.value;
    // gameAdd.image = event.target.image.value;


    console.log(gameAdd);
    onAddGame(gameAdd);
  }
  return (
    // clase para editar/ modificar un modal.
   <div className="modal">
     <div className="formModal">

      <h2>Agrega un videojuego.</h2>
      <form onSubmit={agregarJuego} action="" method="post">

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
      <label htmlFor="price">Precio:</label>
        <input
          type="number"
          name="price"
          id="price"
          required
          placeholder="Precio..."
        />
      </div>

      <div className="itemForm">
      <label htmlFor="platform">Plataforma:</label>
        <select name="platform" id="platform" required>
          <option value="switch">Switch</option>
          <option value="switch2">Switch 2</option>
          <option value="ps4">Playstation 4</option>
          <option value="ps5">Playstation 5</option>
          <option value="pc">PC</option>
          <option value="xboxSerie">Xbox Series X</option>
        </select>
      </div>


      <div className="itemForm">
      <label htmlFor="year">Año:</label>
        <input
          type="date"
          name="year"
          id="year"
          required
          placeholder="Año..."
        />
      </div>

     <div className="itemForm">
     <label htmlFor="image">Url img:</label>
        <input
          type="text"
          name="image"
          id="image"
          placeholder="url imagen..."
        />
     </div>
     <div className="botonesVG">
        <input type="submit" value="Agregar" />
        </div>
        {/* duda como pasar datos para que se pueda pintar en videojuegos
        idea: pasar los datos y cuando se agregue la id seria un +1
        a la última id que haya en la BBDD 
        
        Para recoger los datos del form
        1 se guarda en el mismo componente 
        2 - se crea un propiedad en el form onSubmit
        3 - se crea una función para capturar y guardar los datos en un 
        objeto.
        4 - se pasa por propiedad un función onAddGAme, y en la función agregarJuego
        se agrega el objeto.
        5 - en su padre, videogamePage en su etiqueta se recibe onAddGAme y
        dentro se mete la función addGame.


        */}
      </form>
    </div>
   </div>
  );
}
