import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div >
      <div className=" bg-color-bege border-bottom" >

      
      <div className="container col-12 row m-auto align-items-center top-header  ">
        {/* Left: Social Media Icons */}
        <div className="d-flex gap-4 col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <a href="#" className="text-dark">
            <i className="fab fa-facebook-f text-light"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="fab fa-twitter text-light"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="fab fa-linkedin-in text-light"></i>
          </a>
        </div>

        {/* Right: Contact Info */}
        <div className="d-flex flex-wrap gap-3 justify-content-end text-secondary small col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <div className="d-flex align-items-center gap-2">
            <i className="fas fa-map-marker-alt text-success"></i>
            <span className="crimson-font heading-16 font-regular text-center text-light">
              U4/878-882 Wanneroo Road, Wanneroo
            </span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <i className="fas fa-clock text-success"></i>
            <span className="crimson-font heading-16 font-regular text-center text-light">
              Mon - Fri 9.00 - 17.30
            </span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <i className="fas fa-phone-alt text-success"></i>
            <span className="crimson-font heading-16 font-regular text-center text-light">
              Call Us: (08) 6209 2975
            </span>
          </div>
        </div>
      </div></div>
      {/* <div className="container d-flex justify-content-between align-items-center   border-bottom">
   

      <div className="text-center ">
        <span className='crimson-font heading-40 color-orange font-bold '>PKB</span>
        <div>
           <span className='crimson-font heading-16 font-regular text-center text-black font-bold'>Certified Practicing
            <div>
               <span className='crimson-font heading-16 text-center text-black text-body '>Accountant</span> 
            </div>
             
              </span>  
        </div>
         
      </div>

      <div className="  text-secondary small  col-6">
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
                <Link className="nav-link  crimson-font heading-20 text-center " to="/about">About Us</Link>
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
       </div>     */}
       <div className="container" >
        <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#">
          <div className="text-center ">
        <span className='crimson-font heading-40 color-orange font-bold '>PKB</span>
        <div>
           <span className='crimson-font heading-16 font-regular text-center text-black font-bold'>Certified Practicing
            <div>
               <span className='crimson-font heading-16 text-center text-black text-body '>Accountant</span> 
            </div>
             
              </span>  
        </div>
         
      </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul> */}
           <ul className="navbar-nav  ml-auto gap-4 ">
              <li className="nav-item ">
                <Link className="nav-link active crimson-font heading-20 text-center   " to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  crimson-font heading-20 text-center " to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link crimson-font heading-20 text-center " to="/services">Our Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link crimson-font heading-20 text-center " to="/contact">Contact</Link>
              </li>
            </ul>
        </div>
      </nav>
       </div>
      
    </div>
  );
};

export default Header;
