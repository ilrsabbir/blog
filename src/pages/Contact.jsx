import React from 'react'
import loginImg from '../img/contact.jpg'
import { FaFacebook,FaWhatsapp  } from "react-icons/fa6";
export default function Contact() {
  return (
    <div className='contact-page'>
      <div className="contact-card">
        <div className="contact-img">
          <img src={loginImg} alt="" />
          <h2>Let’s Talk</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores adipisci blanditiis quasi sint laudantium repellendus, hic excepturi provident minima.</p>
        </div>
        <div className="contact-form">
          <div className="title">
            <span>Contact Us</span>
          </div>
          <form>
            <input type="text" placeholder="Your name..."/><br/>
            <input type="email" placeholder="Email"/><br/>
            <textarea name="" placeholder='Your Message...' id="" cols="30" rows="5"></textarea>
            <button type="submit">SENT MESSAGE</button>
          </form>
          <div className='contact-icons'>
            <FaFacebook className='icon'/>
            <FaWhatsapp className='icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}
