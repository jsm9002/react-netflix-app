import React from "react";
import { useSelector } from "react-redux";
import Badge from 'react-bootstrap/Badge'
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  
  const div_styled = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie?.backdrop_path})`,
    wdith: '300px',
    height: '200px',
  }

  const genreMovies = useSelector((state)=> state.movie.genreList);

  return (
    <div style={div_styled} className='movie-card'>
      <Link to={`/movies/${movie.id}`}>
      <div className='overlay'>
        <h1>{movie.title}</h1>
        <div className="genres">
          {movie.genre_ids.map((id) => (
            <Badge bg="danger" key={id}>
              {/* find() : 일치한 정보들 중 첫번째 요소만 반환하는 함수 */}
              {genreMovies.find((genre) => genre.id === id).name }
            </Badge>
          ))}
        </div>
        <div className="info">
          <span>{`평점:${movie.vote_average}`}</span>
          <span>|</span>
          <span>{movie.adult ? '청불' : '청소년관람'}</span>
        </div>
      </div>
      </Link>
    </div>
  )
          }
export default MovieCard;