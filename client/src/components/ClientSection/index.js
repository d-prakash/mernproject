import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import ClientLogoOne from '../../assets/client_logo_01.png'
import ClientLogoTwo from '../../assets/client_logo_02.png'
import ClientLogoThree from '../../assets/client_logo_03.png'
import ClientLogoFour from '../../assets/client_logo_04.png'
import './index.css'

const ClientSection = () => {
  return (
    <section className="client-logo-area">
        <Container>
            <Row>
                <Col md={3} xs={6}>
                    <div className="single-client mt-30 text-center">
                        <img src={ClientLogoOne} alt="Logo"/>
                    </div> 
                </Col>
                <Col md={3} xs={6}>
                    <div className="single-client mt-30 text-center">
                        <img src={ClientLogoTwo} alt="Logo"/>
                    </div> 
                </Col>
                <Col md={3} xs={6}>
                    <div className="single-client mt-30 text-center">
                        <img src={ClientLogoThree} alt="Logo"/>
                    </div> 
                </Col>
                <Col md={3} xs={6}>
                    <div className="single-client mt-30 text-center">
                        <img src={ClientLogoFour} alt="Logo"/>
                    </div> 
                </Col>
            </Row> 
        </Container> 
</section>
  )
}

export default ClientSection