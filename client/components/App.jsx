import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Favourites from './Favourites'
import Form from './Form'
import ErrorMessage from './ErrorMessage'
import RandomBeer from './RandomBeer'

function App() {
  return (
    <>
      <div className="container">
        <ErrorMessage />
        <Nav />
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/search" element={<Form />} />
          <Route path="/random" element={<RandomBeer />} />
        </Routes>
      </div>
    </>
  )
}

export default App
