import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page home">
      <header className="home-hero">
        <div className="home-hero-image-wrapper">
          <img
            src="/hero.webp"
            alt="Collage de cultura pop japonesa con anime, manga y videojuegos"
            className="home-hero-image"
            // solucion cls para mejorar el rendimiento
            width="1043"
            height="582"

            // solucion para mejorar la velocidad de carga

            fetchPriority="high"
          />
        </div>
      </header>

      <section className="home-hero-text">
        <h1 className="home-title">Bienvenido al Mundo Otaku</h1>
        <p className="home-subtitle">
          Explora manga, anime, videojuegos y entrena con la Sensei IA en un
          solo dojo digital.
        </p>

        <div className="home-cta">
          <Link to="/manga" className="btn-primary">
            Ver Manga
          </Link>
          <Link to="/anime" className="btn-outline">
            Ver Anime
          </Link>
          <Link to="/videojuego" className="btn-outline">
            Ver videojuegos
          </Link>
        </div>
      </section>

      <section className="home-grid">
        <article className="home-card home-card--manga">
          <h2>Manga</h2>
          <p>
            Descubre tomos, autores y precios de tus series favoritas. Un
            catálogo pensado para coleccionistas.
          </p>
          <Link to="/manga" className="home-card-link">
            Ir a Manga
          </Link>
        </article>

        <article className="home-card home-card--anime">
          <h2>Anime</h2>
          <p>
            Reproduce openings y escenas icónicas con un reproductor adaptado a
            cada vídeo.
          </p>
          <Link to="/anime" className="home-card-link">
            Ir a Anime
          </Link>
        </article>

        <article className="home-card home-card--games">
          <h2>Videojuegos</h2>
          <p>
            Gestiona tu colección de videojuegos con tarjetas editables y
            formularios personalizados.
          </p>
          <Link to="/videojuego" className="home-card-link">
            Ir a Videojuegos
          </Link>
        </article>

        <article className="home-card home-card--chat">
          <h2>Sensei IA</h2>
          <p>
            Habla con una IA entrenada para guiarte en el camino otaku.
          </p>
          <Link to="/chat" className="home-card-link">
            Ir al Chat
          </Link>
        </article>
      </section>
    </section>
  );
}

export default Home;
