import React from 'react'
import  './Navbar.css'
import { Link, NavLink } from 'react-router-dom'


const Nabar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className="nav-link" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/imgUpoder' className="nav-link" >Image Uploader</Link>
        </li>
        <li className="nav-item">
          <Link to='/tabs' className="nav-link" >Tab-Bar</Link>
        </li>

        <div className="dropdown">
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Charts
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link to="/line" className="dropdown-item" href="#">Line-Chart</Link></li>
            <li><Link to="/bar" className="dropdown-item" href="#">Bar-Chart</Link></li>
            <li><Link to="/pie" className="dropdown-item" href="#">Pie-Chart</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
      </ul>
    </div>
  </nav>
  )
}

export default Nabar
