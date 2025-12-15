export default function MangaCard({ propsManga }) {
    const { id, name, author, description, price, year, image } = propsManga;

    return (
        <article className="manga-card">
            <div className="manga-card__image-wrapper">
                <img src={image} alt={name} className="manga-card__image" />
            </div>

            <div className="manga-card__content">
                <p className="manga-card__id">ID: {id}</p>
                <h2 className="manga-card__title">{name}</h2>
                <p className="manga-card__author">Autor: {author}</p>
                <p className="manga-card__description">{description}</p>

                <div className="manga-card__meta">
                    <span className="manga-card__year">Año: {year}</span>
                    <span className="manga-card__price">{price} €</span>
                </div>
            </div>
        </article>
    );
}