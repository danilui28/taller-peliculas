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
      textDecoration: favorito ? 'line-through' : 'none',
      opacity: favorito ? 1 : 0.5,
      color: favorito ? 'yellow' : 'grey'
      }}
      onClick={()=> setFavorito( !favorito )}  
      >
      <p>{titulo}{favorito ? "⭐" : ""}</p>
    </div>
  )
}

function App() {

  const [peliculas, setPeliculas] = useState([ 'Spiderman', 'Backrooms', 'Matrix', 'Rápidos y furiosos']);
  const [nuevaPelicula, setNuevaPelicula] = useState('');

  function agregarPelicula(){
    if(nuevaPelicula.trim()=== ''){
      return;
    }else{
      setPeliculas([...peliculas, nuevaPelicula]);

      setNuevaPelicula('');
    }
  }

  return (
    <div>
      <h1>Mis peliculas favoritas</h1>

      {peliculas.map((pelicula, indice)=>{
        return <Pelicula key={indice} titulo={pelicula} />
      })}

      <div>
        <input 
          type='text'
          value={nuevaPelicula}
          onChange={(e)=> setNuevaPelicula(e.target.value) }
          placeholder='Nueva Pelicula...'
          style={{flex: 1, padding: '8px', marginTop: '10px'}}
        />
      </div>

      <button onClick={agregarPelicula}>Agregar</button>

    </div>
  )
}

export default App