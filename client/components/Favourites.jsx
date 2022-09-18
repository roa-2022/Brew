import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Hash from 'hash-string'
import { Table, Button } from 'react-bootstrap'

import { getFavourites, deleteBeerFromFavourites } from '../actions'

function Favourites() {
  const favourites = useSelector((state) => state.favourites)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavourites())
  }, [])

  const handleClick = (id) => {
    dispatch(deleteBeerFromFavourites(id))
  }

  return (
    <div className="container">
      <h1>Favourites</h1>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>BrewDog ID</th>
            <th>Name</th>
            <th>Created At</th>
            <th>Brewed</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {favourites?.map((beer) => {
            return (
              <tr key={Hash(beer.id + beer.name)}>
                <td>{beer.id}</td>
                <td>{beer.brewdog_id}</td>
                <td>{beer.name}</td>
                <td>{beer.created_at}</td>
                <td>{beer.brewed}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleClick(beer.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Favourites
