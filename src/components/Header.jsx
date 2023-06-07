import React from 'react'

import "../styles/Header.scss"
import Contact from './Contact';
import Services from './Services';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
const Header = () => {
  return (
   <nav>
    <Link to="/"> <h1>Kriss Enterprises</h1></Link>
    <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to ="/#about">About Us</HashLink>
        <HashLink to ={"/#brand"}>Brands</HashLink>
        <Link to ={"/services"}>Services</Link>


    </main>

   </nav>

    )
}

export default Header