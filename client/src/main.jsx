import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VideojuegoPage from './pages/VideojuegoPage.jsx'
import Anime from './pages/Anime.jsx'
import MangaPage from './pages/MangaPage.jsx'
import Chat from './pages/Chat.jsx'
import Home from './pages/Home.jsx'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "manga",
        element: <MangaPage />
      },
      {
        path: "videojuego",
        element: <VideojuegoPage />
      },
      {
        path:"anime",
        element: <Anime/>
      },
      {
        path: "/chat",
        element: <Chat />
      }

      
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)

