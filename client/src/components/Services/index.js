import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import './index.css'
import { BsLightningCharge } from "react-icons/bs";
import {ReactComponent as Brush} from "../../assets/brush.svg";
import {ReactComponent as Bulb} from "../../assets/bulb.svg";
import {ReactComponent as Barchart} from "../../assets/bar-chart.svg";
import serviceImage from '../../assets/services.png'

const Services = () => {
  return (
    <div id="services">
    <Container className='service-area'>
        <Row>
          <Col lg={7} sm={12} className="">
            <Col>
            <div className='section-title pb-10'>
              <h4 className='title'>Crafted For</h4>
              <p className='text'>Stop wasting time and money designing and managing a <br/> website that doesn't get the results. Happiness Guaranteed!</p>
            </div>
            </Col>
            <Row>
              <Col lg={6} sm={12}> 
                <div className='service-content'>
                  <div className='services-icon mt-3'>
                    <BsLightningCharge size={70} style={{color:"#41ACB4"}}/>
                  </div>
                  <div className='services-content media-body mt-3'>
                    <h4 className='service-title'>Startup</h4>
                    <p className='text'>Short description for the ones <br/> who look for something new</p>
                  </div>
                </div>
                </Col>
                <Col lg={6}>
                <div className='service-content mt-3'>
                  <div className='services-icon'>
                  <Barchart  style={{color:"#41ACB4"}}/>
                  </div>
                  <div className='services-content media-body mt-3'>
                    <h4 className='service-title'>Startup</h4>
                    <p className='text'>Short description for the ones <br/> who look for something new</p>
                  </div>
                </div>
                </Col>
                <Col lg={6}>
                <div className='service-content  '>
                  <div className='services-icon'>
                    <Brush  style={{color:"#41ACB4"}}/>
                  </div>
                  <div className='services-content media-body mt-3'>
                    <h4 className='service-title'>Startup</h4>
                    <p className='text'>Short description for the ones <br/> who look for something new</p>
                  </div>
                </div>
                </Col>
                <Col lg={6}>
                <div className='service-content mt-3 '>
                  <div className='services-icon'>
                    <Bulb style={{color:"#41ACB4"}}/>
                  </div>
                  <div className='services-content media-body mt-3'>
                    <h4 className='service-title'>Startup</h4>
                    <p className='text'>Short description for the ones <br/> who look for something new</p>
                  </div>
                </div>
                </Col>
              </Row>
              </Col>
            
          <Col lg={5} >
            <img src={serviceImage} className='services-image mt-3' alt="servive "/>  
          </Col>
          </Row>
      </Container>
      </div>
  )
}

export default Services