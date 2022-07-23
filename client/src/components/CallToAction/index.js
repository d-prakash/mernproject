import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CallToActionImg from '../../assets/call-to-action.png'
import {BsEnvelope} from 'react-icons/bs'
import './index.css'

const CallToAction = () => {
  return (
    <div className="call-to-action">
       <Row >
        <Col sm={12} lg={6}>
            <img src={CallToActionImg} className="call-action-image" alt="call-to-action"/>
        </Col>
        
            <Col lg={6} sm={12} className="content-section">
                <div className="call-action-content text-center">
                    <h2 className="call-title">Curious to Learn More? Stay Tuned</h2>
                    <p className="text">You let us know whenever you want us to update anything or think something can be optimised.</p>
                    <div className="call-newsletter">
                        <div className="icon"><BsEnvelope/></div>
                        <input type="text" placeholder="john@email.com" />
                        <button type="submit" className=" d-lg-block">SUBSCRIBE</button>

                    </div>
                  
                </div> 
                
            </Col>
        </Row> 
    
</div>
  )
}

export default CallToAction