import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {BsCheckCircle} from 'react-icons/bs'
import './index.css'
import { Link } from 'react-router-dom';
import Baloon from '../../assets/baloon.svg'
import Flower from '../../assets/flower.svg'
import { BottomSvgOne,BottomSvgTwo,BottomSvgThree } from '../../SVG/BottomSvg';
import CallToAction from '../CallToAction';


const Pricing = () => {
  return (<>
    <div className='pricing-area' id="pricing">
      <Container>
        <Row className='justify-content-center'>
          <Col lg={6}>
          <div className="section-title text-center pb-10">
            <h4 className="title">Our Pricing</h4>
            <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
          </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col lg={4} md={7} sm={9}>
          <div className="single-pricing mt-40">
            <div className="pricing-header text-center">
              <h5 className="sub-title">Basic</h5>
              <span className="price">$ 199</span>
              <p className="year">per year</p>
            </div>
            <div className="pricing-list">
            <ul>
            <li><BsCheckCircle style={{color:"blue"}}/> Carefully crafted components</li>
            <li><BsCheckCircle style={{color:"blue"}}/> Amazing page examples</li>
            <li><BsCheckCircle style={{color:"blue"}}/> Super friendly support team</li>
            <li><BsCheckCircle style={{color:"blue"}}/> Awesome Support</li>
            </ul>
          </div>
          <div className="pricing-btn text-center">
            <Link className="main-btn link" to="/">GET STARTED</Link>
          </div>
            <div className="buttom-shape">
              <BottomSvgOne />
            </div>
          </div>
          </Col>

          <Col lg={4} md={7} sm={9}>
          <div className="single-pricing pro mt-40">
            <div className="pricing-baloon">
              <img src={Baloon} alt="baloon"/>
            </div>
            <div className="pricing-header">
              <h5 className="sub-title">Basic</h5>
              <span className="price">$ 199</span>
              <p className="year">per year</p>
            </div>
            <div className="pricing-list">
            <ul>
            <li><BsCheckCircle style={{color:"blue"}}/> Carefully crafted components</li>
            <li><BsCheckCircle style={{color:"blue"}}/> Amazing page examples</li>
            <li><BsCheckCircle style={{color:"blue"}}/> Super friendly support team</li>
            <li><BsCheckCircle style={{color:"blue"}}/> Awesome Support</li>
            </ul>
          </div>
          <div className="pricing-btn text-center">
            <Link className="main-btn link" to="/">GET STARTED</Link>
          </div>
            <div className="buttom-shape">
              <BottomSvgTwo />
            </div>
          </div>
          </Col>

          <Col lg={4} md={7} sm={9}>
          <div className="single-pricing enterprise mt-40">
          <div className="pricing-flower">
            <img src={Flower} alt="flower"/>
          </div>
            <div className="pricing-header text-right">
              <h5 className="sub-title">Basic</h5>
              <span className="price">$ 199</span>
              <p className="year">per year</p>
            </div>
            <div className="pricing-list">
            <ul>
            <li><BsCheckCircle style={{color:"blue"}}/> Carefully crafted components</li>
            <li><BsCheckCircle style={{color:"blue"}}/> Amazing page examples</li>
            <li><BsCheckCircle style={{color:"blue"}}/> Super friendly support team</li>
            <li><BsCheckCircle style={{color:"blue"}}/> Awesome Support</li>
            </ul>
          </div>
          <div className="pricing-btn text-center">
            <Link className="main-btn link" to="/">GET STARTED</Link>
          </div>
            <div className="buttom-shape">
              <BottomSvgThree />
            </div>
          </div>
          
          </Col>
        </Row>
      </Container>

    </div>
    <CallToAction />
    </>)
}

export default Pricing


