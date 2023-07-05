import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <CustomNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
