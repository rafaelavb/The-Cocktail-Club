import React, { useState, useEffect } from 'react'

import Nav from './Nav'
import Home from './Home'

function App() {
  return (
    <>
      <h1>Welcome to The Cocktail Club</h1>

      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div>
        <Home />
        <Nav />
      </div>
    </>
  )
}

export default App
