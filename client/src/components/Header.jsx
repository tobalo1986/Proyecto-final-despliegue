import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav">
      <div className="logo-container">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Mundo Otaku" className="logo" />
        </Link>
      </div>

      <button
        className="nav-toggle"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
       {/* Cambiamos el icono visualmente si está abierto o cerrado */}
        {isOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav2 ${isOpen ? "nav2--open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/manga" onClick={() => setIsOpen(false)}>Manga</Link>
        </li>
        <li>
          <Link to="/videojuego" onClick={() => setIsOpen(false)}>Videojuego</Link>
        </li>
        <li>
          <Link to="/anime" onClick={() => setIsOpen(false)}>Anime</Link>
        </li>
        <li>
          <Link to="/chat" onClick={() => setIsOpen(false)}>Sensei IA</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header
