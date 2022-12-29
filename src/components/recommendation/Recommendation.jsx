import React from 'react'
import Card from '../card/Card'
import './Recommendation.css'

function Recommendation({movies, heading}) {
  return (
    <div className="recomm">
        <h2>{heading}</h2>
        <div className="cards-cont">
          {movies  && movies.map(movie => <Card movie={movie}/>)}
        </div>
    </div>
  )
}

export default Recommendation