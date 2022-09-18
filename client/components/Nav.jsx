import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

import ScienceIcon from '@mui/icons-material/Science'

function App() {
  return (
    <Navbar sticky="top" bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <ScienceIcon />
          Brew!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/favourites"
              style={({ isActive }) =>
                isActive ? { color: 'hotpink' } : { color: 'black' }
              }
            >
              Favourites
            </NavLink>
            <NavLink
              to="/search"
              style={({ isActive }) =>
                isActive ? { color: 'hotpink' } : { color: 'black' }
              }
            >
              Search
            </NavLink>
            <NavLink
              to="/random"
              style={({ isActive }) =>
                isActive ? { color: 'hotpink' } : { color: 'black' }
              }
            >
              Random
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default App
