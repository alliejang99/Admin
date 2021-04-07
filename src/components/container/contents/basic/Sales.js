import React from 'react'

function Sales() {
  return (
    <div className="sales salesRec">
       <p className="basicTitle" style={{background: '#3fbbb8'}}>매출</p>

      <ul className="listSales">
        <li className="listTitle">매출</li>
        <li className="number">₩ 180,026,148</li>
      </ul>
      
      <div className="listSales two">
        <ul className="first">
          <li className="listTitle">계좌금액</li>
          <li className="number">₩ 11,098,657,650</li>
          <span className="line"></span>
        </ul>

        <ul className="last">
          <li className="listTitle">과금율</li>
          <li className="number">100%</li>        
        </ul>
      </div>
    </div>
  )
}

export default Sales
