import React from "react";
import Banner from "../pages/Banner";
import Header from "../pages/Header";
import HorrorRow from "../pages/HorrorRow";
import requests from "../requests";
import { useState } from "react";
import bg from "../sass/fixedBg.module.css";
import LoadingButtons from "../pages/LoadingButtons";

function Horror() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className={selectedPhoto === null ? "" : bg.fixedBg}>
        {isLoading ? <LoadingButtons /> : ""}
        <Header />
        <Banner fetchURL={requests.fetchHorrorMovies} />
        <HorrorRow
          title={"Horror Movies"}
          fetchURL={requests.fetchHorrorMovies}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default Horror;