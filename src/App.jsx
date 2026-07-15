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

  const peliculas = [ 'Spiderman', 'Backrooms', 'Matrix', 'Rápidos y furiosos']

  return (
    <div>
      <h1>Mis peliculas favoritas</h1>

      {peliculas.map((pelicula, indice)=>{
        return <Pelicula key={indice} titulo={pelicula} />
      })}

    </div>
  )
}

export default App