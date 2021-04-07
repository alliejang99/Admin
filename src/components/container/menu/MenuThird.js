import React from 'react'

function MenuThird({third}) {
  
  return (
    <div
      className={third ? "third open" : "third"}
    >
      <button className="desc3">Third Menu 1</button>
      <button className="desc3">Third Menu 2</button>
      <button className="desc3">Third Menu 3</button>
      <button className="desc3">Third Menu 1</button>
      <button className="desc3">Third Menu 2</button>
      <button className="desc3">Third Menu 3</button>
      <button className="desc3">Third Menu 1</button>
      <button className="desc3">Third Menu 2</button>
      <button className="desc3">Third Menu 3</button>
      <button className="desc3">Third Menu 1</button>
      <button className="desc3">Third Menu 2</button>
    </div>
  )
}

export default MenuThird
