import React, { useEffect, useState } from 'react'
import axios from '../getMoviesRequests/Axios';
import Request from '../getMoviesRequests/Request';
import Button from '../Components/Button';

const img_Base_URL = "http://image.tmdb.org/t/p/original"

const Banner = () => {
    const [movie, setMovie] = useState("");
    let myMovie;
    useEffect(() => {

        const getMovies = async () => {
            const req = await axios.get(Request.fetchNetflixOriginals);
            setMovie(req.data.results[(Math.round(Math.random() * 100)) % req.data.results.length]);
            return req;
        }
        getMovies();
    }, [])


    const getSmallSTring=(str,n)=>
    {
       return  str?.length>n ? str.substr(0,n-1)+"...": str;
    }

    console.log(movie);

    const banner_header = {
        width: '100%',
        background: `url(${img_Base_URL}${movie?.backdrop_path}) no-repeat center center/cover`,
        height: '45rem',
       
        boxShadow: 'inset 6rem 0rem 20rem black',
    }

    return (
        <header className='banner_header' style={banner_header}>
            <div className="banner_container">
                <h1 className='banner_title_heading'>{movie?.name || movie?.original_name || movie?.title}</h1>
                <div className='banner_btn_div'>
                    <Button name="Play"></Button>
                    <Button name="My List"></Button>
                </div>
                <p className="discription">{getSmallSTring(movie?.overview,150)}</p>

            </div>

            <div className="fade_bottom"></div>

        </header>
    )
}

export default Banner;
