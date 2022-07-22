import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/logo.svg'
import {ReactComponent as DoubleArrow} from '../../assets/angle-double-right.svg'

const Footer = () => {
  return (
    <footer id="footer" >
    <div className="footer-widget">
    
        <Row>
            <Col lg={12}>
                <div className="footer-logo-support d-md-flex align-items-center justify-content-between">
                    <div className="footer-logo d-flex align-items-end">
                        <Link to="/" className="mt-30" ><img src={Logo} alt="Logo"/></Link>
                        <ul className="social mt-30">
                            <li><Link to="/" className='link'><FaFacebookF/></Link></li>
                            <li><Link to="/" className='link'><FaTwitter/></Link></li>
                            <li><Link to="/" className='link'><FaInstagram/></Link></li>
                            <li><Link to="/" className='link'><FaLinkedin/></Link></li>
                        </ul>
                    </div> 
                </div> 
            </Col>
         
        
            <Col lg={2} md={4} sm={6}>
                <div className="footer-link">
                    <h6 className="footer-title">Company</h6>
                    <ul>
                        <li><Link to="/" className='link'>About</Link></li>
                        <li><Link to="/" className='link'>Contact</Link></li>
                        <li><Link to="/" className='link'>Career</Link></li>
                    </ul>
                </div> 
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="footer-link">
                    <h6 className="footer-title">Product &amp; Services</h6>
                    <ul>
                        <li><Link to="/" className='link'>Products</Link></li>
                        <li><Link to="/" className='link'>Business</Link></li>
                        <li><Link to="/" className='link'>Developer</Link></li>
                    </ul>
                </div> 
            </Col>
            <Col lg={3} md={4} sm={5}>
                <div className="footer-link">
                    <h6 className="footer-title">Help &amp; Suuport</h6>
                    <ul>
                        <li><Link to="/" className='link'>Support Center</Link></li>
                        <li><Link to="/" className='link'>FAQ</Link></li>
                        <li><Link to="/" className='link'>Terms &amp; Conditions</Link></li>
                    </ul>
                </div> 
            </Col>
            <Col lg={4} md={6} sm={6}>
                <div className="footer-newsletter">
                    <h6 className="footer-title ml-35">Subscribe Newsletter</h6>
                    <div className='newsletter'>
                        <form action="#" className='arrow-container'>
                            <button type="submit"><DoubleArrow/></button>
                            <input type="text" placeholder="Your Email" />
                        </form>
                        </div>
                    <p className="text ml-35">Subscribe weekly newsletter to stay upto date. We don’t send spam.</p>
                </div> 
            </Col>

        </Row>
    </div> 
    <div className="footer-copyright">
        <div className="container">
            
                    <div className="copyright text-center">
                        <p className="text">Template Crafted by <a rel="nofollow" href="../../index-1.htm">UIdeck</a> - UI Powered by <a el="nofollow" href="../../index-1.htm">AyroUI</a></p>
                    </div>
            
        </div> 
    </div> 
</footer>
  )
}

export default Footer