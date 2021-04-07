import React from 'react'
import Header from './components/commonLayout/header/Header'
import Menu from './components/container/menu/Menu';
import Content from './components/container/contents/Content';
import Footer from './components/commonLayout/footer/Footer';

function Main() {
  return (
    <div className="main">
      <Menu />
      <div className="container">
        <Header />
        <Content />
        <Footer />  
      </div>
    </div>
  );
}

export default Main;
