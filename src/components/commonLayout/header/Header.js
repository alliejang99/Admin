import React from 'react'
import Option from './Option';
import Search from './Search';

function Header() {
  return (
    <header className="header">
      <span></span>
      <Search />
      <Option />
    </header>
  )
}

export default Header;