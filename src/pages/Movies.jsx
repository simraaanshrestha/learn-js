import React from 'react'
import Movie from '../components/data/Movie'
import Card from '../components/Card'

const Movies = () => {
  return (
    <>
      <h1>Movies</h1>
      <p>Welcome to the Movies page!</p>
      <p>Here you can find a list of all the movies available.</p>
      <div className="app-container">
      {Movie.map((item, i) => {
        return <Card
          title={item.title}
          image={item.image}
          release={item.releaseYear}
          director={item.director}
          description={item.description}
        />;
      })}
    </div >
    </>
  )
}

export default Movies