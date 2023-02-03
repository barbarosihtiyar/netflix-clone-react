import React from "react";
import Banner from "../pages/Banner";
import "../sass/movies.css";
import requests from "../requests";
import MoviesRow from "../pages/ActionRow";

function Action() {
  return (
    <>
      <Banner fetchURL={requests.fetchActionMovies}/>
      <MoviesRow title={"Action Movies"} fetchURL={requests.fetchActionMovies}/>
    </>
  );
}

export default Action;
