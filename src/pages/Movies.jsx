import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useSelector } from 'react-redux';


const Movies = () => {
  // const nowplayingMoives = useSelector((state)=>state.movie.nowplaying);
  // const popularMovies = useSelector((state) => state.movie.popularMovies);
  // const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  
  // const [filter,setFilter] = useState('nowplayingMoives')
  // const [sortList,setSortList] = useState([])

  // console.log('[movies,정렬리스트]',sortList)


  // const sortedItems = sortList.sort((a,b) => b[title] - a[filter])
  

  // const handletitle=()=>{
  //   console.log('[movies.제목오름차순]')
  //   setSortList(nowplayingMoives)
  // }
  // const handleScroeUp=()=>{
  //   console.log('[movies.평점오름차순]')
  //   setSortList(topRatedMovies)
  // }

  // const handleScoreDown=()=>{
  //   console.log('[movies.평점내림차순]')
  //   setSortList(topRatedMovies)
  // }

  // const handlepopeUp=()=>{
  //   console.log('[movies,인기도오름차순]')
  //   setSortList(popularMovies)
  // }

  return (
    <div>
    {/* <div className='filter-select'>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>정렬</Accordion.Header>
        <Accordion.Body>
          <DropdownButton id="dropdown-basic-button" title="정렬방식을 선택하세요">
            <Dropdown.Item onClick={handletitle}>제목오름차순</Dropdown.Item>
            <Dropdown.Item onClick={handleScroeUp}>평점 오름차순</Dropdown.Item>
            <Dropdown.Item onClick={handleScoreDown}>평점 내림차순</Dropdown.Item>
            <Dropdown.Item onClick={handlepopeUp}>인기도 오름차순</Dropdown.Item>
            <Dropdown.Item onClick={handlepopDown}>인기도 내림차순</Dropdown.Item>
          </DropdownButton>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <div className='filter-cards'>
      {}
    </div> */}
    </div>

  )
}

export default Movies