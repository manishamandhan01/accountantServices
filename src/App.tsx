import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services  />} />
           <Route path="contact" element={<ContactUs  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
