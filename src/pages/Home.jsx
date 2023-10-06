import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../api";
import { MovieReducerActions } from "../redux/reducers/movieSlice";
import Banner from "../components/Banner";
import { useSelector } from "react-redux";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
const Home = () => {
  // const popularReq = async () => {
  //   let res = await api.get("/movie/popular?language=ko-KR&page=1");
  //   console.log("popular", res.data);
  // };
  // const topRatedReq = async () => {
  //   let res = await api.get("/movie/top_rated?language=ko-KR&page=1");
  //   console.log("topRated", res.data);
  // };
  // const upComingReq = async () => {
  //   let res = await api.get("/movie/upcoming?language=ko-KR&page=1");
  //   console.log("upComing", res.data);
  // };

  // 3가지 종류의 영화목록을 묶어서 요청하는 방법
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  console.log(popularMovies);
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  console.log(topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movie.upcomingMovies);
  console.log(upcomingMovies);

  const [loading, setLoding] = useState(false);
  const getMovieList = async () => {
    setLoding(true);
    const popularList = api.get("/movie/popular?language=ko-KR&page=1");
    const topRatedList = api.get("/movie/top_rated?language=ko-KR&page=1");
    const upcomingList = api.get("/movie/upcoming?language=ko-KR&page=1");
    const genreList = api.get("/genre/movie/list?language=ko");
    const nowplaying = api.get("/movie/now_playing?language=ko-KR");
    const [popular, topRated, upcoming, genre, nowplay] = await Promise.all([
      popularList,
      topRatedList,
      upcomingList,
      genreList,
      nowplaying
    ]);

    console.log(topRated);
    console.log(popular);
    console.log(upcoming);
    console.log(genre)
    setLoding(false);
    dispatch(
      MovieReducerActions.initData({
        popular: popular.data,
        topRated: topRated.data,
        upcoming: upcoming.data,
        genre:genre.data,
        nowplay:nowplay.data
      })
    );
  };
 
  useEffect(() => {
    getMovieList();
    //popularReq();
    // topRatedReq();
    // upComingReq();
  }, []);

  return (
    <div>
      {loading ? (
        <ClipLoader
          color="#ffffff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          {/* {popularpost && <Banner movie={popularpost[0]}/>} */}
          <Banner movie={popularMovies[0]} />
          <div>
            
            <h1>인기있는 영화</h1>
            <MovieSlide movies={popularMovies}/>
            <h1>Top rated Movie</h1>
            <MovieSlide movies={topRatedMovies}/>
            <h1>개봉 예정 영화</h1>
            <MovieSlide movies={upcomingMovies}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
