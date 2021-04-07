import React from 'react'

function Select() {
  return (
    <div className="select">
        <select className="year sBox" name="date">
          <option value="">--Select</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>

        <select className="month sBox" name="date">
          <option value="">--Select</option>
          <option value="03/01">04 / 01</option>
          <option value="03/02">04 / 02</option>
          <option value="03/03">04 / 03</option>
        </select>

        <select className="day sBox" name="date" id="1">
          <option value="">--Select</option>
          <option value="기간">기간</option>
        </select>         
      <div className="line"></div>
    </div>
  )
}

export default Select
