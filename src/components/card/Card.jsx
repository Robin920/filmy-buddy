import React,{useState, useEffect} from 'react'
import './Card.css'

function Card(props) {
  const [currentMovieDetail, setMovie] = useState()

  useEffect(() => {
      getData()
  }, [])

  function convertDigitIn(str){
    return str.split('-').reverse().join('-');
 }
 const date = () => {
  const res = convertDigitIn(currentMovieDetail.release_date);
  return res;
 }

  const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setMovie(data))
  }

  return (
    <div className="card">
        <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="poster" />
        <div className="card-txt">
            <h3 className="card-head">{currentMovieDetail ?currentMovieDetail.original_title: ""}</h3>
            <p><span>Rating:</span> 
            &nbsp;<span className="details"><i className="fas fa-star" /> {currentMovieDetail ? currentMovieDetail.vote_average.toFixed(1): ""}</span>
            </p>
            <p><span>Category:</span> &nbsp;
            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map((genre,index) => index<3 && (
                                    index == 2?<><span className="details" id={genre.id} key={genre.id}>{genre.name}</span></>:
                                    <><span className="details" id={genre.id} key={genre.id}>{genre.name}, </span></>
                                )) 
                                : 
                                ""
                            }                  
            </p>
            <p><span>Release date:</span> <span className="details date">{currentMovieDetail ? date(): ""}</span></p>
        </div>
    </div>
  )
}

export default Card