import React from 'react'
import Footer from './components/commonLayout/footer/Footer';
import Header from './components/commonLayout/header/Header'
import Container from './components/container/Container';


function Main() {
  return (
    <div className="main">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default Main;
