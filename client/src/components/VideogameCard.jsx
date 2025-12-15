/*
se pasa al padre el onDelete*/
function VidegameCard({ propsVideogame, onDelete, onUpdate }) {
  const { id, name, price, image, platform, year } = propsVideogame;
  // Estos es lo mimso que el
  // const id = propsVideogame.id

  /* if(image == ""){
  image = "https://static.vecteezy.com/system/resources/previews/022/059/000/non_2x/no-image-available-icon-vector.jpg"
}else{
  image
} */
  return (
    <div className="cardVideoGame">
      <div>
        <p>ID: {id}</p>
        <p>Nombre: {name}</p>
        <p>Precio: {price} €</p>
        <p>Plataforma: {platform}</p>
        <p>Años: {year}</p>
      </div>
      <img src={image} alt={name} />
      <div className="botonesVG">
        {/*  Se pasa con el evento  la id item. */}
        <button onClick={() => onDelete(id)}>Eliminar</button>
        {/*  Se pasa con el evento todas las propiedades del item. */}
        <button onClick={() => {
          console.log("Pulso el botón")
          onUpdate(propsVideogame)}}>Editar</button>
      </div>
    </div>
  );
}

export default VidegameCard
