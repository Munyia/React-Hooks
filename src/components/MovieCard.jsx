import React from 'react'

const MovieCard = ({title= "My girl", description="I dont give a fuvk", posterURL= "https://cdn.pixabay.com/photo/2023/06/10/14/17/ai-generated-8054104_1280.jpg", rating= "5"}) => {
  return (
    <div className='w-[20%] border gap-2 flex flex-col'>
        <div className='flex items-center border border-red-900 justify-center overflow-hidden w-[100%] aspect-square'>
        <img src={posterURL} alt={title} />
        </div>
        <h2 className=' font-extrabold text-lg'>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>
    </div>
  )
}

export default MovieCard