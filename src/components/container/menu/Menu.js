import React from 'react'
import MenuList from './MenuList'
import Profile from './Profile'

function Menu() {

  return (
    <nav className="nav">
      <div className="bg">
        <div className="admin">admin</div>
        <Profile />
        <MenuList/>
      </div>
    </nav>
  )
}

export default Menu
