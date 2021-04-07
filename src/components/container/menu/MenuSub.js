import React, { useState } from 'react'
import MenuThird from './MenuThird'

function MenuSub({toggle}) {
  const [third, setThird] = useState(false)

  const showThird = () => {
    setThird((prev) => {
      return !prev
    })
  }

  return (
    <div
      className={toggle ? "sub open" : "sub"}
    >
      <button onClick={showThird} className="desc2">
        Sub Menu 1
      </button>
      <MenuThird third={third} />
      <button className="desc2">Sub Menu 2</button>
      <button className="desc2">Sub Menu 3</button>
      <button className="desc2">Sub Menu 1</button>
      <button className="desc2">Sub Menu 2</button>
      <button className="desc2">Sub Menu 3</button>
      <button className="desc2">Sub Menu 1</button>
      <button className="desc2">Sub Menu 2</button>
      <button className="desc2">Sub Menu 3</button>
      <button className="desc2">Sub Menu 1</button>
      <button className="desc2">Sub Menu 2</button>
      <button className="desc2">Sub Menu 3</button>
    </div>
  )
}

export default MenuSub
