import React from 'react'
import MovieCard from './MovieCard'

const Filter = ({list, title, rating}) => {
  console.log(list);
  return (
    <div   className=' flex  justify-center gap-x-4 gap-y-4 border'>
    {
    title &&
    list.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase())).map((movie, index) => (
        <MovieCard key={index} {...movie}/>
     ))
    }
    {
    rating &&
    list.filter(movie => movie.rating == rating).map((movie,index) => (
        <MovieCard key={index} {...movie}/>
     ))
    }
</div>
  )
}

export default Filter