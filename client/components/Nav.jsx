import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Box } from '@mui/material/'

import ScienceIcon from '@mui/icons-material/Science'
import FavoriteIcon from '@mui/icons-material/Favorite'

function App() {
  // const fruits = useSelector((state) => state.fruits)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [])

  const [favourite, setFavourite] = useState(false)

  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
      }}
    >
      <Link to="/">
        <ScienceIcon
          style={{ color: favourite ? 'red' : 'black' }}
          onClick={() => setFavourite(!favourite)}
          fontSize="large"
        />
        <h1>Brew!</h1>
      </Link>
      <NavLink
        to="/favourites"
        style={({ isActive }) =>
          isActive ? { color: 'hotpink' } : { color: 'black' }
        }
      >
        <FavoriteIcon />
        Favourites
      </NavLink>
    </Box>
  )
}

export default App
