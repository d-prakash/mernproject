import React from 'react'
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.svg'
import { useState } from 'react';
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'
import './index.css'


const Navbar = () => {
  const [click, setClick] = useState(false)
   const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    const changeNavbarBackground = () => {
        if (window.scrollY >= 40) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };
    
      window.addEventListener("scroll", changeNavbarBackground);
      
  return (
    <div className={navbar ? "navbarInActive" : "navbarActive"}>
    <div className="header" >
            <nav className='navbar'>
                <Link to='home' className='app-logo'>
                    <img src={Logo} alt='logo' />
                </Link> 
                
                <div className='hamburger d-lg-none'  onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'black' }} />)
                        : (<FaBars size={30} style={{ color: 'black' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"} >
                    <li className='nav-item'>
                        <Link to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>HOME</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='services' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>SERVICES</Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='pricing' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>PRICING</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='testimonials' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>TESTIMONIALS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>CONTACT</Link>
                    </li>
                </ul>
                <div className="navbar-social d-lg-flex align-items-center d-none ">
                        <span className='p-3'>FOLLOW US</span>
                        <ul className="nav-social">
                            <li><Link to="/" className='link social-icon' style={{}}><FaFacebookF size={25} /></Link></li>
                            <li><Link to="/" className='link social-icon' style={{marginLeft:"10px",textDecoration:"none"}}><FaTwitter size={25}/></Link></li>
                            <li><Link to="/" className='link social-icon' style={{marginLeft:"10px",textDecoration:"none"}}><FaInstagram size={25}/></Link></li>
                            <li><Link to="/" className='link social-icon' style={{marginLeft:"10px",marginRight:"10px",textDecoration:"none"}}><FaLinkedin size={25}/></Link></li>
                        </ul>
                    </div>
            </nav>
        </div>
        </div>
  )
}

export default Navbar