import React, { useEffect, useState } from 'react'
import ClientSection from '../ClientSection'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Col, Row} from 'react-bootstrap'
import './index.css'

const Testimonial = () => {
  const [testimonialsdata,setTestimonials] = useState([])
  useEffect(()=>{
    fetchTestimonials()
  },[])
    const fetchTestimonials = async ()=>{
      let res = await axios.get("/gettestimonialdata")
      console.log(res.data)
      setTestimonials(res.data)
    }
    const settings = {
      dots: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite:true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    }
  
  return (
    
  <div className='testimonial-section' id="testimonials">
   <Row className='justify-content-center'>
        <Col lg={6}>
          <div className='section-title text-center pb-10'>
          <h3 className='heading font-weight-bold'>Testimonial</h3>
          <p className='text'>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
          </div>
        </Col>
    <Col lg={12} >
         <Slider className="carousel" {...settings}>
            {testimonialsdata.map(value =>{
                return  <div className='single-testimonial text-center'>
                      <img src={value.photo} alt="cer-img" className="person-img"/>
                      <div className="testimonial-content">
                        <p className="text">{value.description}</p>
                        <p className="author-name">{value.name}<span className='sub-title'>{value.post}</span></p>
                    </div>
                  </div>
            })}
    </Slider>
    </Col>
    <ClientSection />
    </Row>
    
    </div>
  )
}

export default Testimonial