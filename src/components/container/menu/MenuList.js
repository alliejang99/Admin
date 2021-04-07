import React, { useState } from 'react'
import MenuSub from './MenuSub'

function MenuList() {
  const [toggle, setToggle] = useState(false)

  const showContents = () => {
    setToggle((prev) => {
      return !prev
    })
  }

  return (
    <div style={{background: '#3f65e0'}}>
      <div className="listBox">
        <p className="title">+ 분석</p>
        <button onClick={showContents} className="desc">
          기본지표
        </button>
        <MenuSub toggle={toggle} />
        <button onClick={showContents} className="desc">모타제네이션</button>
        <button className="desc">LTV &amp; FQ</button>
        <button className="desc">커스텀 이벤트</button>
        <button className="desc">퍼널분석</button>
      </div>

      <div className="listBox">
        <p className="title">+ 운영</p>
        <button className="desc">푸시발동</button>
        <button className="desc">캠페인</button>
      </div>
    </div>
  )
}

export default MenuList
