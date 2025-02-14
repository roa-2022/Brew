import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Favourites from './Favourites'
import SearchForm from './SearchForm'
import ErrorMessage from './ErrorMessage'
import RandomBeer from './RandomBeer'
import Settings from './Settings'

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
          <Route path="/search" element={<SearchForm />} />
          <Route path="/random" element={<RandomBeer />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  )
}

export default App
