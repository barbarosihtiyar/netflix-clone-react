import React from "react";
import Banner from "../pages/Banner";
import Header from "../pages/Header";
import RomanceRow from "../pages/RomanceRow";
import requests from "../requests";
import { useState } from "react";
import bg from "../sass/fixedBg.module.css";

function Romance() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <>
      <div className={selectedPhoto === null ? "" : bg.fixedBg}>
      <Header />
      <Banner fetchURL={requests.fetchRomanceMovies} />
      <RomanceRow
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
      </div>
    </>
  );
}

export default Romance;
