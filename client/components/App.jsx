import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, Routes, Route } from 'react-router-dom'

import { Container } from '@mui/material'

import Nav from './Nav'
import Home from './Home'
import Favourites from './Favourites'
import Form from './Form'
import ErrorMessage from './ErrorMessage'

function App() {
  return (
    <>
      <Container>
        <ErrorMessage />
        <Nav />
      </Container>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
