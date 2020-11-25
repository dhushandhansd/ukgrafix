import React, { Component } from 'react';
import PricingStyle from '../pricing.components/PricingStyle.css';

class Pricing extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="title-container">
                    <h1>Choose the <span>Plan Suits</span> you</h1>
                </div>
                <div className="price-container">
                    <div className="card-container">
                        <h3 className="plan-title">Basic</h3>
                        <h4 className="plan-price">$79</h4>
                        <div className="list-container">
                            <h3 className='feature1'>✓ Responsive Website</h3>
                            <h3 className='feature2'>✓ Hosting Support </h3>
                            <h3 className='feature3'>✓ Customer Support </h3>
                        </div>
                        <button className='order-button'>Order Now</button>
                    </div>
                    <div className="card-container1">
                        <h3 className="plan-title1">Elite</h3>
                        <h4 className="plan-price1">$199</h4>
                        <div className="list-container1">
                            <h3 className='feature11'>✓ Responsive Website + Mobile</h3>
                            <h3 className='feature12'>✓ Hosting Support </h3>
                            <h3 className='feature13'>✓ Customer Support </h3>
                            <h3 className='feature14'>✓ E-Commerce Plugins </h3>
                            <h3 className='feature15'>✓ Branding Logo </h3>
                            <h3 className='feature16'>✓ SEO Support </h3>
                        </div>
                        <button className='order-button1'>Order Now</button>
                    </div>
                    <div className="card-container2">
                        <h3 className="plan-title2">Pro</h3>
                        <h4 className="plan-price2">$119</h4>
                        <div className="list-container2">
                            <h3 className='feature21'>✓ Responsive Website + Mobile</h3>
                            <h3 className='feature22'>✓ Hosting Support </h3>
                            <h3 className='feature23'>✓ Customer Support </h3>
                            <h3 className='feature24'>✓ SEO Support</h3>
                        </div>
                        <button className='order-button1'>Order Now</button>
                    </div>
                </div>
                <div className="help-container">
                    <h2>Need Help Choosing the Right Plan?</h2>
                    <button className='contact-button'>Contact Us</button>
                </div>
            </div>
        );
    }
}

export default Pricing;