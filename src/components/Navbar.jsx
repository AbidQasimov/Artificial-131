import React from 'react'

//React icons paketlerinin kodlardir
import { AiOutlineBars} from "react-icons/ai";
// Komponentler
import Button from './Button'

import layihemdekiLogo from '../assets/images/logo.svg'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#"><img src={layihemdekiLogo} alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <AiOutlineBars />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Service;</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Contact</a>
              </li>

            </ul>

            <Button />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
