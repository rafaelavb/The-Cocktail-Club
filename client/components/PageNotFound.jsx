import React from 'react'

function PageNotFound() {
  return (
    <>
      <h1>Page not found. Sorry!</h1>
      <iframe
        className="youtube"
        src={`https://www.youtube.com/embed/csn2CIWPVbM?autoplay=1&controls=0&rel=0&loop=0`}
        allow="autoplay"
        width="800px"
        height="450px"
      ></iframe>
    </>
  )
}

export default PageNotFound
