import { useState } from 'react';
import './App.css'

function Pelicula({titulo}){

  const [favorito, setFavorito] = useState(false)

  return(
    <div style={{
      border: favorito ? '2px solid yellow' : '1px solid gray',
      padding: '10px',
      margin: '10px',
      borderRadius: '25px',
      textDecoration: favorito ? 'line-throught' : 'none',
      opacity: favorito ? 2 : 0.5,
      color: favorito ? 'yellow' : 'grey'
      }}
      onClick={()=> setFavorito( !favorito )}  
      >
      <p>{titulo}{favorito ? "⭐" : ""}</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <h1>Mis peliculas favoritas</h1>
      <Pelicula titulo="Spiderman"></Pelicula>
      <Pelicula titulo="Backrooms"></Pelicula>
      <Pelicula titulo="Matrix"></Pelicula>
      <Pelicula titulo="Rápidos y furiosos"></Pelicula>
    </div>
  )
}

export default App