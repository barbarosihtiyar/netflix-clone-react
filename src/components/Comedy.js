import React from "react";
import Banner from "../pages/Banner";
import ComedyRow from "../pages/ComedyRow";
import requests from "../requests";

function Comedy() {
  return (
    <>
      <Banner fetchURL={requests.fetchComedyMovies} />
      <ComedyRow title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
    </>
  );
}

export default Comedy;
