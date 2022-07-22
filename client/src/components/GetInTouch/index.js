import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './index.css'

const GetInTouch = () => {
  return (
    <section id="contact" className="contact-area">
    <Container>
        <Row className="justify-content-center">
            <Col lg={6}>
                <div className="section-title text-center pb-10">
                    <h4 className="title">Get In touch</h4>
                    <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                </div> 
            </Col>
        </Row> 
        <Row className="justify-content-center">
            <Col lg={8}>
                <div className="contact-form">
                    <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator" noValidate={true}>
                        <Row>
                            <Col md={6}>
                                <div className="single-form form-group">
                                    <input type="text" name="name" placeholder="Your Name" data-error="Name is required." required="required"/>
                                    <div className="help-block with-errors"></div>
                                </div> 
                            </Col>
                            <Col md={6}>
                                <div className="single-form form-group">
                                    <input type="email" name="email" placeholder="Your Email" data-error="Valid email is required." required="required"/>
                                    <div className="help-block with-errors"></div>
                                </div> 
                            </Col>
                            <Col md={6}>
                                <div className="single-form form-group">
                                    <input type="text" name="subject" placeholder="Subject" data-error="Subject is required." required="required"/>
                                    <div className="help-block with-errors"></div>
                                </div> 
                            </Col>
                            <Col md={6}>
                                <div className="single-form form-group">
                                    <input type="text" name="phone" placeholder="Phone" data-error="Phone is required." required="required" />
                                    <div className="help-block with-errors"></div>
                                </div> 
                            </Col>
                            <Col md={12}>
                                <div className="single-form form-group">
                                    <textarea placeholder="Your Mesaage" name="message" data-error="Please, leave us a message." required="required"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div> 
                            </Col>
                            <p className="form-message"></p>
                            <Col md={12}>
                                <div className="single-form form-group text-center">
                                    <button type="submit" className="main-btn disabled">send message</button>
                                </div> 
                            </Col>
                        </Row> 
                    </form>
                </div> 
            </Col>
        </Row> 
    </Container> 
</section>
  )
}

export default GetInTouch