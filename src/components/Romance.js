import React from "react";
import Banner from "../pages/Banner";
import Header from "../pages/Header";
import RomanceRow from "../pages/RomanceRow";
import requests from "../requests";
import { useState } from "react";
import bg from "../sass/fixedBg.module.css";
import LoadingButtons from "../pages/LoadingButtons";

function Romance() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className={selectedPhoto === null ? "" : bg.fixedBg}>
        {isLoading ? <LoadingButtons /> : ""}
        <Header />
        <Banner fetchURL={requests.fetchRomanceMovies} />
        <RomanceRow
          title="Romance Movies"
          fetchURL={requests.fetchRomanceMovies}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default Romance;