import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import api from '../api'

// /movie/1 --> useParams()
// /movies?id=1 --> useSearchParams()
const MovieDetail = () => {
  const [movieDetail,setMovieDetail]=useState(null)
  const [reviews, setReviews]=useState([])
  const {id} = useParams()
  console.log('[MovieDetail.js]:',id)

  const getMovieDetail = async () => {
   let res = await api(`/movie/${id}?language=ko`)
   console.log('[MoviesDtail.js].call:',res)
   setMovieDetail(res.data)
  }
  const getReviews = async() => {
    let res = await api.get(`/movie/${id}/reviews?language=us&page=1`)
    console.log('[movieDetails/reviews]:',res)
    setReviews(res.data.results)
  }
  useEffect(()=>{
    getMovieDetail()
    getReviews()
  },[])
  return (
    <div>
    { movieDetail ? (
    <div className='movie-details'>
      <div className='poster'>
        <img src={`https://www.themoviedb.org/t/p/original/${movieDetail.poster_path}`} alt='포스터'></img>
      </div>
      <div className='info'>
        
        <div className='genre'>
        {movieDetail.genres.map((item)=>(
          <Badge bg='danger' key={item.id}>{item.name}</Badge>
))}
        </div>
        <h1>{movieDetail.title}</h1>
        <h4>{movieDetail.tagline}</h4>
        <div>
          <span>{movieDetail.release_date}</span>
          <span>{movieDetail.runtime}</span>
          <span>{movieDetail.vote_average}</span>
          <span>{movieDetail.adult ? '청불':'18세미만'}</span>
        </div>
        <div className='overview'>
        {movieDetail.overview}
        </div>
        </div>
         
      </div>):''}
     {/* 리뷰영역 */}

 <div className='container review-box'>
  {(reviews.map((item)=>(
    <div className='review-item'>
    <h4>{item.author}</h4>
    <p>{item.content}</p>
  </div>
  )))}

</div>
    
    </div>
  )
}

export default MovieDetail