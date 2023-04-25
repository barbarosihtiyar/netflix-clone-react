import React from "react";
import Banner from "../pages/Banner";
import ComedyRow from "../pages/ComedyRow";
import Header from "../pages/Header";
import requests from "../requests";
import { useState } from "react";
import bg from "../sass/fixedBg.module.css";
import LoadingButtons from "../pages/LoadingButtons";

function Comedy() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoading,setIsLoading] = useState(false)

  return (
    <>
      <div className={selectedPhoto === null ? "" : bg.fixedBg}>
      {isLoading ? <LoadingButtons /> : ""}
        <Header />
        <Banner fetchURL={requests.fetchComedyMovies} />
        <ComedyRow
          title="Comedy Movies"
          fetchURL={requests.fetchComedyMovies}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          setIsLoading={setIsLoading} 
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default Comedy;