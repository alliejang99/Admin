import React from 'react'

function DAU() {
  return (
    <div className="dau dauRec">
      <p className="basicTitle" style={{background: '#3f65e0'}}>DAU</p>
      
      <ul className="listDau">
        <li className="listTitle">DAU</li>
        <li className="number">630.70</li>
      </ul>

      <div className="listDau two">
        <ul className="first">
          <li className="listTitle">가입자수</li>
          <li className="number">148</li>
          <span className="line"></span>
        </ul>

        <ul className="last">
          <li className="listTitle">누적 가입자수</li>
          <li className="number">11,098</li>
        </ul>
      </div>

    </div>
  )
}

export default DAU
