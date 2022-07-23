import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import validator from 'validator'
import './index.css'

const GetInTouch = () => {

    const [form,setForm] = useState({})
    const [errors,setErrors] = useState({})

    const setField = (field,value) =>{
        setForm({...form, [field]:value})

        if(!!errors[field]){
            setErrors({...errors,[field]:null})
        }
    }

    const validateForm = () =>{
        const {name,email,subject,phone,message} = form
        const newErrors = {}
        if(!name || name === "") newErrors.name = "Name is required"
        if(!email || email === "") newErrors.email = "Valid email is required"
        else if(!(validator.isEmail(email))) newErrors.email = "Valid email is required"
        if(!subject || subject === "") newErrors.subject = "Subject is required"
        if(!phone || phone === "") newErrors.phone = "Phone is required"
        if(!message || message === "") newErrors.message = "Please, leave us message"

        return newErrors
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        const formErrors = validateForm()
        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors)
        }else{
            console.log(form)
            setForm({})
        }
        
    }
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
                    <form id="contact-form" noValidate={true}>
                        <Row>
                            <Col md={6}>
                                <div className="single-form form-group">
                                    <input type="text" name="name" 
                                      placeholder="Your Name" 
                                      data-error="Name is required." 
                                      onChange={(e)=> setField("name",e.target.value) }
                                      value={form.name || ''}
                    
                                      required="required"
                                      />
                                    <div className="feedback-error">{errors.name}</div>
                                </div> 
                            </Col>
                            <Col md={6}>
                                <div className="single-form form-group">
                                    <input type="email" name="email" placeholder="Your Email" value={form.email || ""} onChange={(e)=> setField("email",e.target.value) } data-error="Valid email is required." required="required"/>
                                    <div className="feedback-error">{errors.email}</div>
                                </div> 
                            </Col>
                            <Col md={6}>
                                <div className="single-form form-group">
                                    <input type="text" name="subject" placeholder="Subject" data-error="Subject is required." value={form.subject || ""}  onChange={(e)=> setField("subject",e.target.value) }required="required"/>
                                    <div className="feedback-error">{errors.subject}</div>
                                </div> 
                            </Col>
                            <Col md={6}>
                                <div className="single-form form-group">
                                    <input type="text" name="phone" placeholder="Phone" data-error="Phone is required." required="required" value={form.phone || ""} onChange={(e)=> setField("phone",e.target.value) } />
                                    <div className="feedback-error">{errors.phone}</div>
                                </div> 
                            </Col>
                            <Col md={12}>
                                <div className="single-form form-group">
                                    <textarea placeholder="Your Mesaage" name="message" data-error="Please, leave us a message." value={form.message || ""} onChange={(e)=> setField("message",e.target.value) } required="required"></textarea>
                                    <div className="feedback-error">{errors.message}</div>
                                </div> 
                            </Col>
                            <p className="form-message"></p>
                            <Col md={12}>
                                <div className="single-form form-group text-center">
                                    <button type="submit" className="main-btn disabled" onClick={handleSubmit}>send message</button>
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