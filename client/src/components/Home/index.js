import React from 'react'
import HeaderShape from '../../assets/header-shape.svg'
import HeaderBg from '../../assets/header-bg.jpg'
import { Link } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap'
import './index.css'

const Home = () => {
  
  return (
    <div id="home">
    <div className="header-hero bg_cover" style={{backgroundImage:`url(${HeaderBg})`,backgroundSize: "cover",
    height: "100vh",maxWidth:"100%"}}> 
      <Container>
        <Row className="justify-content-center">
          <Col xl={8} lg={10}>
            <div className="header-content text-center">
              <h3 className="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
              <p className="text">A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!</p>
              <ul className="header-btn rounded-buttons">
                <li><Link style={{textDecoration:"none"}} className="main-btn rounded-three" to="/">GET IN TOUCH</Link></li>
                <li><Link style={{textDecoration:"none"}} className="main-btn rounded-four video-popup" to="../../watch.html?v=r44RKWyfcFw">WATCH THE VIDEO <i className="lni-play"></i></Link></li>
              </ul>
            </div> 
          </Col>
        </Row> 
      </Container> 
      <div className="header-shape">
        <img src={HeaderShape} alt="shape"/>
      </div>
    </div>
    </div>
  )
}

export default Home