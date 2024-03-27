import React from 'react'
import MovieCard from './MovieCard'

const Filter = ({list, title, rating}) => {
  console.log(list);
  return (
    <div   className=' flex  justify-center gap-x-4 gap-y-4 border'>
    {
    title && 
    rating &&
    list
    .filter(movie => 
      movie.title.toLowerCase().includes(title.toLowerCase())
      ) 
      .filter((movie) => movie.rating == rating) 
      .map((movie, index) => (
        <MovieCard 
        key={index} 
        title={movie.title} 
        description={movie.description}
        posterURL={movie.posterURL}
        rating={ movie.rating }
        />
     ))}
    {
    title && 
    !rating &&
    list
    .filter(movie => 
      movie.title.toLowerCase().includes(title.toLowerCase())
      ) 
      .map((movie, index) => (
        <MovieCard 
        key={index} 
        title={movie.title} 
        description={movie.description}
        posterURL={movie.posterURL}
        rating={ movie.rating }
        />
     ))}
    {
    !title && 
    rating &&
    list
      .filter((movie) => movie.rating == rating) 
      .map((movie, index) => (
        <MovieCard 
        key={index} 
        title={movie.title} 
        description={movie.description}
        posterURL={movie.posterURL}
        rating={ movie.rating }
        />
     ))}
  
</div>

  )
}

export default Filter