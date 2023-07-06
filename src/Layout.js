import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <CustomNavbar />
      <main style={{ backgroundColor: 'rgb(224, 226, 219)', minHeight: '80vh' }}>
        {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
