import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div >
      <Header />
      <main style={{  }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
