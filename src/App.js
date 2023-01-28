import requests from "./requests";
import Row from "./Row";
import "./reset.css"

function App() {
  return (
    <div className="App">
    NETFLİX APP YOU ARE WELCOME

    <Row title={"Trending Now"} fetchURL={requests.fetchTrending} />
    <Row title={"Netflix Original"} fetchURL={requests.fetchNetflixOriginals} />
    <Row title={"Top Rated"} fetchURL={requests.fetchTopRated} />
    <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies} />
    <Row title={"Comedy Movies Now"} fetchURL={requests.fetchComedyMovies} />
    <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies} />
    <Row title={"Romance Movies"} fetchURL={requests.fetchRomanceMovies} />
    <Row title={"Documentaries Movies"} fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
