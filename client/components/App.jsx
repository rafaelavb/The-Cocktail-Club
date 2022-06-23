import React, { useState, useEffect } from 'react'

import Nav from './Nav'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Alcoholic from './Alcoholic'
import NonAlcoholic from './NonAlcoholic'
import Ingredients from './Ingredients'

function App() {
  return (
    <>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alcoholic" element={<Alcoholic />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/non-alcoholic" element={<NonAlcoholic />} />
          <Route path="/liquortype" element={<LiquorType />} />
        </Routes>
      </div>
    </>
  )
}

export default App
