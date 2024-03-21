import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Navbar extends Component {
 

  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" >
            <div className="container-fluid" >
                <a className="navbar-brand" style={{color:"white"}} href="/"/>NewsFeed
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" style={{color:"white"}}/>Home
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"  href="/about" style={{color:"white"}}/>about
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link"  href="/" style={{color:"white"}}/>business
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"  href="/" style={{color:"white"}}/>entertainment
                    </li> */}
                    <li className="nav-item">
                    <a className="nav-link"  href="general" style={{color:"white"}}/>general
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link"  href="/" style={{color:"white"}}/>health
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"  href="/" style={{color:"white"}}/>science
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"  href="/" style={{color:"white"}}/>sports
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"  href="/" style={{color:"white"}}/>technology
                    </li> */}
                </ul>
                </div>
                </div>
            </nav>
        </div>
    )
  }
}

export default Navbar
