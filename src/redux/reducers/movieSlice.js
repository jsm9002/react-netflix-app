import { createSlice } from '@reduxjs/toolkit'

// createSlice() : state, reducer를 관리하는 함수
// - state 초기화
// - state를 변경하는 함수 정의 -> reducer

// initialState: state를 초기화하는 속성
// reducers: 컴포넌트에서 state변경요청 시 수행하는 Action 기능을 정의하는 속성
export const movieSlice= createSlice({
  name: 'movie',
  initialState:{
    popularMovies:[],
    topRatedMovies:[],
    upcomingMovies:[],
    genreList:[],
    nowplaying:[]
  },
  reducers:{
    initData:(state, action)=>{
      
      console.log('[movieSlice.js]',action)
      let {payload} = action
      console.log('[movieSlice.js]',payload)
      state.popularMovies = payload.popular.results
      state.topRatedMovies = payload.topRated.results
      state.upcomingMovies = payload.upcoming.results
      state.genreList=payload.genre.genres
      state.nowplaying=payload.nowplay.results
    }
  }
})

// 컴포넌트에서 reducer함수를 실행할 수 있게 내보내기
export const MovieReducerActions = movieSlice.actions

// store에서 접근할 수 있도록 내보내기
export default movieSlice.reducer
