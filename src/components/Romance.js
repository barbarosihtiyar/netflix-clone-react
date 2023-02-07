import React from 'react'
import Banner from "../pages/Banner"
import RomanceRow from "../pages/RomanceRow"
import requests from "../requests"


function Romance() {
  return (
    <>
      <Banner fetchURL={requests.fetchRomanceMovies} />
      <RomanceRow title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
    </>
  )
}

export default Romance