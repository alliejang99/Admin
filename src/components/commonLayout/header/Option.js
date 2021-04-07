import React from 'react'
import {IoMdSettings, IoMdHome} from 'react-icons/io'

function Option() {
  return (
    <div className="optionBox">
      <button className="name">Name&ensp;<span>▼</span></button>
      <IoMdSettings
        style={{
          width: '33px',
          height: '33px',
          cursor: 'pointer',
        }}
      />
      <IoMdHome
        style={{
          width: '33px',
          height: '33px',
          cursor: 'pointer',
        }}
      />
    </div>
  )
}

export default Option
