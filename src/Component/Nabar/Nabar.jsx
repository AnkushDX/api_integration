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
        <li className="nav-item">
          <Link to='/charts' className="nav-link" >Charts</Link>
        </li>
        <li className="nav-item">
          <Link to='/apex' className="nav-link" >ApexCharts</Link>
        </li>
      
      </ul>
    </div>
  </nav>
  )
}

export default Nabar
