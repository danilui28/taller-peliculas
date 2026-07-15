import { useState } from 'react';
import './App.css'

function Pelicula({titulo}){

  return(
    <div style={{
      border: '1px solid gray',
      padding: '10px',
      margin: '10px',
      borderRadius: '25px',
      }}
      >
      <p>{titulo}</p>
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