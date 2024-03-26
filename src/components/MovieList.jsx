import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({list}) => {
  return (
    <div  className=' flex justify-center gap-x-4 gap-y-4 border'>
        {list.map((movie,index) => (
            <MovieCard key={index} {...movie}/>
        ))}
    </div>
  )
}

export default MovieList