import React from 'react'
import LeftLogo from './LeftLogo'
import Banner from './Banner'
import Row from './Row'
import requests from './request'

function HomePage() {
  return (
    <div>
      <LeftLogo />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title='TOP RATED'
        fetchURL={requests.fetchTopRated}
      />
      <Row
        title='COMEDY MOVIES'
        fetchURL={requests.fetchComedyMovies}
      />
      <Row
        title='DOCUMENTRIES'
        fetchURL={requests.fetchDocumentries}
      />
   </div>
  )
}

export default HomePage