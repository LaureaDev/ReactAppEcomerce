import './NavBar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <img className='logo' src='./imagenes/company.png'></img>
          </div>
        <div className="container-fluid">
            <div className="container px-4 px-lg-5">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link" >HOME</a></li>
                        <li className="nav-item"><a className="nav-link">SHOP</a></li>
                        <li className="nav-item"><a className="nav-link">PRODUCTOS</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
)
}

export default NavBar