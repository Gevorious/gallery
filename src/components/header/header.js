import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = ({signedIn}) => {

    return (
        <header className="Header">
          <nav className ="navbar navbar-expand-lg navbar-dark black">
            <div className="container">
              <Link className="navbar-brand" to="/"><strong>Home</strong></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  </li>
                  <li className="nav-item" >
                      <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/profile">Profile</Link>
                  </li>
                </ul>
                <Link className="navbar-loginnav navbar-nav navbar-right " to="/login"><strong>Login</strong></Link>
              </div>
             
            </div>
          </nav>
      </header>
    )
}

export default Header
