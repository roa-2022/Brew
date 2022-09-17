import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, Routes, Route } from 'react-router-dom'

import { Container } from '@mui/material'

import Nav from './Nav'
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
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
