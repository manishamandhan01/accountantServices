import React from 'react';
import '../Style.css'; 
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
    <div className=" col-12 top-header d-flex justify-content-between align-items-center px-4 py-2 bg-color-bege border-bottom">
      {/* Left: Social Media Icons */}
      <div className="d-flex gap-4 padding-left-67 col-6">
        <a href="#" className="text-dark"><i className="fab fa-facebook-f text-light"></i></a>
        <a href="#" className="text-dark"><i className="fab fa-twitter text-light"></i></a>
        <a href="#" className="text-dark"><i className="fab fa-linkedin-in text-light"></i></a>
      </div>

      {/* Right: Contact Info */}
      <div className="d-flex flex-wrap gap-4 text-secondary small padding-right-147 col-6">
        <div className="d-flex align-items-center gap-2">
          <i className="fas fa-map-marker-alt text-success"></i>
          <span className='crimson-font heading-16 font-regular text-center text-light'>U4/878-882 Wanneroo Road, Wanneroo</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <i className="fas fa-clock text-success"></i>
          <span className='crimson-font heading-16 font-regular text-center text-light'>Mon - Fri 9.00 - 17.30</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <i className="fas fa-phone-alt text-success"></i>
          <span className='crimson-font heading-16 font-regular text-center text-light'>Call Us: (08) 6209 2975</span>
        </div>
      </div>
    </div>
    <div className=" col-12 top-header d-flex justify-content-between align-items-center px-4 py-2  border-bottom">
      {/* Left: Social Media Icons */}

      <div className=" padding-left-53  flex-column d-flex ">
        <span className='crimson-font heading-40 color-orange font-bold text-center'>PKB</span>
        <div>
           <span className='crimson-font heading-16 font-regular text-center text-black font-bold'>Certified Practicing
            <div>
               <span className='crimson-font heading-16 text-center text-black text-body '>Accountant</span> 
            </div>
             
              </span>  
        </div>
         
      </div>

      {/* Right: Contact Info */}
      <div className="d-flex flex-wrap gap-4 text-secondary small  col-6">
        <nav className="navbar navbar-expand-lg navbar-light mt-2 ">
        <div className="container-fluid px-0">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <ul className="navbar-nav gap-4 ">
              <li className="nav-item ">
                <Link className="nav-link active crimson-font heading-20 text-center   " to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link crimson-font heading-20 text-center " to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link crimson-font heading-20 text-center " to="/services">Our Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link crimson-font heading-20 text-center " to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>    
    </div>
    

  );
};

export default Header;
