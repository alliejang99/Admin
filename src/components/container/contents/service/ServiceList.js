import React from 'react'
import STHead from './STHead'
import STbody from './STbody'

function ServiceList() {
  return (
    <div className="serviceList">
      <h1 className="contTitle">Service List</h1>

      <div className="table">
        <STHead />
        <STbody />
      </div>    
      
    </div>
  )
}

export default ServiceList
