import React from 'react'
import CMS from 'netlify-cms'
import 'netlify-cms/dist/cms.css'

const Category = ({ value = 'nothing', onChange }) => {
  return (
    <div>
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option value="nothing" disabled>
          Select a category
        </option>
        <option value="docs">General Documentation</option>
        <option value="cards">Cards</option>
        <option value="flight_directing">Flight Directing</option>
        <option value="simulator_config">Simulator Configuration</option>
        <option value="mission_writing">Mission Writing</option>
        <option value="developers">Developers</option>
      </select>
    </div>
  )
}

CMS.registerWidget('category', Category)
