import React from "react";
import Banner from "../pages/Banner";
import ComedyRow from "../pages/ComedyRow";
import Header from "../pages/Header";
import requests from "../requests";

function Comedy() {
  return (
    <>
      <Header />
      <Banner fetchURL={requests.fetchComedyMovies} />
      <ComedyRow title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
    </>
  );
}

export default Comedy;
