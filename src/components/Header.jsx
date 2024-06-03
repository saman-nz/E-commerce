import React from 'react';
import logo from '../assets/logo.avif'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img src={logo} alt="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Children</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Gift</a>
        </li>
        
       
      </ul>
      <ul>
                    <li>
                    <i className="bi bi-search"></i> 
                    </li>
                    <li><i className="bi bi-person"></i></li>
                    <li><i className="bi bi-cart"></i></li>
                </ul>
      
    </div>
  </div>
  </nav>

        </header>
    );
}

export default Header;
