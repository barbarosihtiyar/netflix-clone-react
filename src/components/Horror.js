import React from "react";
import Banner from "../pages/Banner";
import Header from "../pages/Header";
import HorrorRow from "../pages/HorrorRow";
import requests from "../requests";

function Horror() {
  return (
    <>
      <Header />
      <Banner fetchURL={requests.fetchHorrorMovies} />
      <HorrorRow
        title={"Horror Movies"}
        fetchURL={requests.fetchHorrorMovies}
      />
    </>
  );
}

export default Horror;
