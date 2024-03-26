import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import data from './data'
import MovieList from './components/MovieList'
import Filter from './components/Filter'

function App() {
  const [movies, setMovies] = useState(data)
  const [filter, setFilter] = useState()
  const [title, setTitle] = useState()
  const [rating, setRating] = useState()
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '0'
  })

  console.log(movies);
  function handleTitle(e) {
    setTitle(e.target.value)
    setFilter(e.target.value)
    setRating('')
  }
  function handleRating(e) {
    setRating(e.target.value)
    setFilter(e.target.value)
    setTitle('')
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(newmovie)
    setMovies([...movies, newmovie])
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '0'
    })
  }
    return (
    <>
    <input type="text" placeholder='Filter by title' value={title} onChange={handleTitle}/>
    <input type="number" placeholder='Filter by rating' value={rating} onChange={handleRating}/> 
    <div>
      <div className='relative'>
        <p>Add Movie</p>
        <form className='hidden group-hover:flex-col absolute' onSubmit={handleSubmit}>
          <input type="text" placeholder='Title' value={newMovie.title} onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}/>
          <input type="text" placeholder='Description' value={newMovie.description} onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}/>
          <input type="text" placeholder='Paste Image URL' value={newMovie.posterURL} onChange={(e) => setNewMovie({...newMovie, posterURL: e.target.value})}/>
          <input type="number" placeholder='Rating' value={newMovie.rating} onChange={(e) => setNewMovie({...newMovie, rating: e.target.value})}/>
          <button type="submit" onClick={() => setMovies([...movies, newMovie])}>Add</button>
        </form>
      </div>
      </div>
      {
     filter?<Filter title={title} rating={rating} list={movies}/>:<MovieList list={movies}/>
      }
    
  

    </>
  )
}

export default App
