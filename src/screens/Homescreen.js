import React from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import "./Homescreen.css";
import request from '../request';
import Row from '../Row';
function Homescreen() {
  return (
    <div className="Homescreen">
      <Nav/>
      
      <Banner/>
       
      <Row title= 'NETFLIX ORIGINALS'
      fetchUrl={request.fetchNetflixOriginals}
      isLargeRow />

      <Row title= 'Trending Now'
      fetchUrl={request.fetchTrending}/>

      <Row title= 'Top Rated'
      fetchUrl={request.fetchTopRated}/>

      <Row title= 'Action'
      fetchUrl={request.fetchActionMovies}/>

      <Row  title= 'Comedy'
      fetchUrl={request.fetchComedyMovies}/>

       <Row  title= 'Horror'
      fetchUrl={request.fetchHorrorMovies}/>

       <Row  title= 'Romance'
      fetchUrl={request.fetchRomanceMovies}/>

       <Row  title= 'Documentaries'
      fetchUrl={request.fetchDocumentaries}/>

    </div>
  );
  
}

export default Homescreen
