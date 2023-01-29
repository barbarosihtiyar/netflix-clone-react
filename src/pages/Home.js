import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import requests from "../requests";

function Home() {
  return (
    <>
    <Header />
    <Banner fetchURL={requests.fetchTrending} />
    <Row title={"Trending Now"} fetchURL={requests.fetchTrending} />
    <Row title={"Netflix Original"} fetchURL={requests.fetchNetflixOriginals} />
    <Row title={"Top Rated"} fetchURL={requests.fetchTopRated} />
    <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies} />
    <Row title={"Comedy Movies Now"} fetchURL={requests.fetchComedyMovies} />
    <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies} />
    <Row title={"Romance Movies"} fetchURL={requests.fetchRomanceMovies} />
    <Row title={"Documentaries Movies"} fetchURL={requests.fetchDocumentaries} />

    </>
  )
}

export default Home