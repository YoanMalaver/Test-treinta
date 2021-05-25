import React from 'react';
import Menu from './Menu';
import '../styles/App.css';
import Footer from './Footer';
const Layaout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

export default Layaout;
