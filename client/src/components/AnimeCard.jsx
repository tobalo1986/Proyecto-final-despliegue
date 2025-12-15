export default function AnimeCard({ propsAnimes, onDelete, onUpdate }) {
  const { id, name, description, youtubeId, genre, year } = propsAnimes;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <article className="anime-card">
      <header className="anime-card__header">
        <p className="anime-card__id">ID: {id}</p>
        <h2 className="anime-card__title">{name}</h2>
      </header>

      <div className="anime-card__player">
        <iframe
          src={embedUrl}
          title={name}
          width="100%"
          height="315"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="anime-card__body">
        <p className="anime-card__description">{description}</p>
        <p className="anime-card__genres">
          <span className="label">Géneros:</span> {genre.join(", ")}
        </p>
        <p className="anime-card__year">
          <span className="label">Año:</span> {year}
        </p>
      </div>
      <div className="botonesVG">
        <button onClick={() => onDelete(id)}>Eliminar</button>
        <button onClick={() => onUpdate(propsAnimes)}>Editar</button>
      </div>
    </article>
  );
}
