import React from 'react'
import GTHead from './GTHead'
import GTBody from './GTBody'

function Group() {
  return (
    <div className="group">
      <h1 className="contTitle">Group</h1>

        <div className="table">
          <GTHead />
          <GTBody />
        </div>  

    </div>
  )
}

export default Group
