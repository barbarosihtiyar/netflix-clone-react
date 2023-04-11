import React from "react";
import Banner from "../pages/Banner";
import "../sass/movies.css";
import requests from "../requests";
import MoviesRow from "../pages/ActionRow";
import Header from "../pages/Header";
import bg from "../sass/fixedBg.module.css"
import { useState } from "react";


function Action() {
  const [selectedPhoto,setSelectedPhoto] = useState(null);

  return (
    <>
        <div className={selectedPhoto === null ? "" : bg.fixedBg}>
        <Header />
      <Banner fetchURL={requests.fetchActionMovies}/>
      <MoviesRow title={"Action Movies"} fetchURL={requests.fetchActionMovies} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>
      </div>
    </>
  );
}

export default Action;