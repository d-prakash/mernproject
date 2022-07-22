import React from 'react';
import Footer from '../Footer';
import GetInTouch from '../GetInTouch';
// import { useNav } from '../../customHooks/useNav';

const Contact = () => {
  //const contactRef = useNav('Contact');
  return (
    
    // <section ref={contactRef} id="contactContainer">
    //   <GetInTouch/>
    //   <Footer/>
    // </section >
    <div className='contact' id="contact">
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default Contact