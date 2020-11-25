import React, { Component } from 'react';
import ContactUsStyle from './ContactUsStyle.css';
import instalogo from '../assets/instalogo.png';
import twitterlogo from '../assets/twitterlogo.png';
import contactusimg from '../assets/contactusimg.png';
class ContactUs extends React.Component {
    render() {
        return (
            <div className="outer-container">
                <div className="header-container">
                    <h2 className='title-contact'>Contact Us</h2>
                </div>
                <div className="left-container">
                    <h2 className='left-title'>Follow Us on Social Platforms</h2>
                    <img className='insta-icon' src={instalogo} alt="instaLogo" />
                    <img className='twitter-icon' src={twitterlogo} alt="twitterLogo" />
                    <img className='contactus-img' src={contactusimg} alt="contactusImg" />
                </div>
                <div className="right-container">
                    <form >
                        <input className='name-box' type='text' value='Your Name' />
                        <input className='email-box' type='text' value='Email' />
                        <input className='number-box' type='text' value='Phone Number' />
                        <input className='message-box' type='textarea' value='Message' />
                        <button className='submit-button'>Submit</button>
                    </form>
                </div>
                <div className="footer-container">
                    <h4 className='footer-txt'>Copyrights UK Grafix @ 2020 </h4>
                </div>
            </div>
        );
    }
}

export default ContactUs;