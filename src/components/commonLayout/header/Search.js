import React from 'react'
import {GoSearch} from 'react-icons/go'

function Search() {
  return (
    <div className="searchBox">
      <GoSearch 
        style={{
          position: 'absolute',
          top: '13px',
          left: '10px',
          width: '24px',
          height: '24px',
          color: '#3f65e0',
          cursor: 'pointer'
        }}
      />
      <input className="search" type="search" />
    </div>
  )
}

export default Search
