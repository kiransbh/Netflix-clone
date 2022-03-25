import React,{ useState, useEffect } from 'react'
import './Row.css'
import Axios from './axios'

function Row({ title, fetchURL, isLargeRow=false }) {

    const base_url= "https://image.tmdb.org/t/p/original/";

    const[movies,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await Axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURL]);

  return (
      <div className='row'>
          <h2>{ title }</h2>

          <div className="row_posters">
          {movies.map((movie) => (
              <img 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} 
              />
          ))}
          </div>
      </div>
  )

}

export default Row