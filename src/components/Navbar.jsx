import React from 'react'
import './css/Navbar.css'
//React icons paketlerinin kodlardir
import { AiOutlineBars} from "react-icons/ai";
// Komponentler
import Button from './Button'

import layihemdekiLogo from '../assets/images/logo.svg'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={layihemdekiLogo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <AiOutlineBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Service;</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Contact</a>
              </li>

            </ul>

            <Button buttonunIcindekiYazi='Sign In'/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
