import React, { useState , useEffect } from 'react'
import axios from '../getMoviesRequests/Axios'

const img_Base_URL="http://image.tmdb.org/t/p/original"

const Row = ({title,fetchURL,addclass}) => {
   
    const [movies, setMovies] =useState([]);

    useEffect(async () => {
         const fetchData=async ()=>{

            //http://api.themoviedb.org/3/fetchURL
            const req= await axios.get(fetchURL);
            setMovies(req.data.results);
            return req;
        }
        fetchData();    
    }, [fetchURL])

    // console.log(movies);
    return (
        <div className='row_container'>
            {/* row title */}
            <h1 className='content_heading'>{title}</h1>

            <div className="poster_container">
                {movies.map((currentData)=>{
                    {/* console.log(currentData); */}
                    return <img 
                        key={currentData.id}
                        className={`poster_img ${addclass}`}
                        src={`${img_Base_URL}${addclass?currentData.poster_path:currentData.backdrop_path}`} 
                        alt={currentData.original_name} />
                })}
            </div>

            {/* row content */}
        </div>
    )
}

export default Row
