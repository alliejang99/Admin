import React from 'react'

function ARPU() {
  return (
    <div className="arpu arpuRec">
      <p className="basicTitle" style={{background: '#3f9bcf'}}>ARPU</p>
      
      <ul className="listArpu">
        <li className="listTitle">ARPU</li>
        <li className="number">630.70</li>
      </ul>

      <ul  className="listArpu">
        <li className="listTitle">과금 ARPU</li>
        <li className="number">₩ 180,026,148</li>
      </ul>
    </div>
  )
}

export default ARPU
