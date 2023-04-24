import { useState } from "react";
import Banner from "../pages/Banner";
import Header from "../pages/Header";
import Row from "../pages/Row";
import requests from "../requests";
import LoadingButtons from "../pages/LoadingButtons";

function Home() {
  const [isLoading,setIsLoading] = useState(false)
  return (
    <>
      {isLoading ? <LoadingButtons /> : ""}
      <Header />
      <Banner fetchURL={requests.fetchTrending} />
      <Row isLoading={isLoading} setIsLoading={setIsLoading} title={"Trending Now"} fetchURL={requests.fetchTrending} />
      <Row
        title={"Netflix Original"}
        fetchURL={requests.fetchNetflixOriginals}
        isLoading={isLoading} setIsLoading={setIsLoading}
      />
      <Row title={"Top Rated"} fetchURL={requests.fetchTopRated} isLoading={isLoading} setIsLoading={setIsLoading} />
      <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies} isLoading={isLoading} setIsLoading={setIsLoading} />
      <Row title={"Comedy Movies Now"} fetchURL={requests.fetchComedyMovies} isLoading={isLoading} setIsLoading={setIsLoading} />
      <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies} isLoading={isLoading} setIsLoading={setIsLoading} />
      <Row title={"Romance Movies"} fetchURL={requests.fetchRomanceMovies} isLoading={isLoading} setIsLoading={setIsLoading} />
      <Row
        title={"Documentaries Movies"}
        fetchURL={requests.fetchDocumentaries}
      />
    </>
  );
}

export default Home;
