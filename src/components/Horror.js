import React from "react";
import Banner from "../pages/Banner";
import Header from "../pages/Header";
import HorrorRow from "../pages/HorrorRow";
import requests from "../requests";
import { useState } from "react";
import bg from "../sass/fixedBg.module.css";

function Horror() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <>
      <div className={selectedPhoto === null ? "" : bg.fixedBg}>
        <Header />
        <Banner fetchURL={requests.fetchHorrorMovies} />
        <HorrorRow
          title={"Horror Movies"}
          fetchURL={requests.fetchHorrorMovies}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
        />
      </div>
    </>
  );
}

export default Horror;
