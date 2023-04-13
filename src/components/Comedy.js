import React from "react";
import Banner from "../pages/Banner";
import ComedyRow from "../pages/ComedyRow";
import Header from "../pages/Header";
import requests from "../requests";
import { useState } from "react";
import bg from "../sass/fixedBg.module.css";

function Comedy() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <>
      <div className={selectedPhoto === null ? "" : bg.fixedBg}>
        <Header />
        <Banner fetchURL={requests.fetchComedyMovies} />
        <ComedyRow
          title="Comedy Movies"
          fetchURL={requests.fetchComedyMovies}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
        />
      </div>
    </>
  );
}

export default Comedy;