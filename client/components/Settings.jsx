import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Switch, FormControlLabel } from '@mui/material'
import { Form } from 'react-bootstrap'

// import { getSettings } from '../actions'

import Hash from 'hash-string'

function Settings() {
  const [settings, setSettings] = useState({
    imperialTemp: false,
    imperialUnits: false,
    ounces: false,
    kcal: false,
  })
  // const settings = useSelector((state) => state.settings)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getSettings())
  }, [])

  const handleChange = (e) => {
    console.log(e.target.checked)
    setSettings({
      ...settings,
      [e.target.name]: !e.target.checked,
    })
  }

  return (
    <>
      <Form>
        <Form.Group>
          <FormControlLabel
            control={
              <Switch
                aria-label="Fahrenheit"
                value={settings.imperialTemp}
                name="imperialTemp"
                onChange={handleChange}
                color="primary"
              />
            }
            label="Fahrenheit"
          />
          <FormControlLabel
            control={
              <Switch
                aria-label="Imperial Units"
                value={settings.imperialUnits}
                name="imperialUnits"
                onChange={handleChange}
                color="primary"
              />
            }
            label="Imperial Units"
          />
          <FormControlLabel
            control={
              <Switch
                aria-label="Ounces"
                value={settings.ounces}
                name="ounces"
                onChange={handleChange}
                color="primary"
              />
            }
            label="Ounces"
          />
          <FormControlLabel
            control={
              <Switch
                aria-label="Calories"
                value={settings.kcal}
                name="kcal"
                onChange={handleChange}
                color="primary"
              />
            }
            label="Calories"
          />
        </Form.Group>
      </Form>

      {/* <Form>
        <Form.Check
          type="switch"
          id="imperialTemp"
          label="Imperial temperature"
          aria-label="Fahrenheit"
          value={settings.imperialTemp}
          name="imperialTemp"
          onChange={handleChange}
          color="primary"
        />
        <Form.Check
          type="switch"
          id="imperialUnits"
          label="Imperial units"
          aria-label="Imperial units"
          value={settings.imperialUnits}
          name="imperialUnits"
          onChange={handleChange}
          color="primary"
        />
        <Form.Check
          type="switch"
          id="ounces"
          label="Ounces"
          aria-label="Ounces"
          value={settings.ounces}
          name="ounces"
          onChange={handleChange}
          color="primary"
        />
        <Form.Check
          type="switch"
          id="calories"
          label="Calories"
          aria-label="Calories"
          value={settings.calories}
          name="calories"
          onChange={handleChange}
          color="primary"
        />
      </Form> */}
    </>
  )
}

export default Settings
