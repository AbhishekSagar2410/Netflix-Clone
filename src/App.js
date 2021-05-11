import React from 'react';
import Request from '../src/getMoviesRequests/Request';

//components
import Row from './Components/Row';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';

//css
import '../src/Css/row.css';
import '../src/Css/banner.css';
import '../src/Css/navbar.css';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Row title="NETFLIX ORIGINALS" fetchURL={Request.fetchNetflixOriginals} addclass='netflix_originals'></Row>
    <Row title="Trending Now" fetchURL={Request.fetchTrending}></Row>
    <Row title="Tod Rated" fetchURL={Request.fetchTopRated}></Row>
    <Row title="Actions" fetchURL={Request.fetchActionMovies}></Row>
    <Row title="Comedy" fetchURL={Request.fetchComedyMovies}></Row>
    <Row title="Horror" fetchURL={Request.fetchHorrorMovies}></Row>
    <Row title="Romance" fetchURL={Request.fetchRomanceMovies}></Row>
    <Row title="Documentaries" fetchURL={Request.fetchDocumentaries}></Row>

    </>
  );
}

export default App;
