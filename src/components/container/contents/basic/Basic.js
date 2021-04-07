import React from 'react'
import DAU from './DailyActiveUsers'
import ARPU from './AverageRevenuePerUser'
import Sales from './Sales'

function Basic() {
  return (
    <div className="basic">
      <h1 className="contTitle">Basic Indicators</h1>

      <div className="basicBox">
        <DAU />
        <ARPU />
        <Sales />
      </div>
    </div>
  )
}

export default Basic
