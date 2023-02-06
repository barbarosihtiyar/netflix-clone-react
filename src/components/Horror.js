import React from 'react'
import Banner from '../pages/Banner'
import HorrorRow from '../pages/HorrorRow'
import requests from "../requests"

function Horror() {
  return (
    <>
      <Banner fetchURL={requests.fetchHorrorMovies} />
      <HorrorRow title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies}/>
    </>
  )
}

export default Horror