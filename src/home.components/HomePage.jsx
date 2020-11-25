import React from 'react';
import './HomePageStyle.css';
import ukgrafixlogo from '../assets/ukgrafixlogo.png';
import homepagebgimg from '../assets/homepagebgimg.png';


class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "Email address",
            submit: "Get Started"
        }
    }
    render() {
        return (
            <div class='background'>
                <nav class='black'>
                    <img class='logo' src={ukgrafixlogo} alt='ukrafix' />
                    <ul>
                        <li class='active'><a>HOME</a></li>
                        <li><a>PORTFOLIO</a></li>
                        <li><a>PRICING</a></li>
                        <li><a>ABOUT US</a></li>
                        <li><a>CONTACT US</a></li>
                    </ul>
                </nav>
                <div>
                    <h3 class='title1'>High </h3>
                    <h3 class='highlight1'>Precision </h3>
                    <h3 class='title2'>with </h3>
                    <h3 class='highlight2'>Creativity </h3>
                    <h3 class='title3'>makes </h3>
                    <h3 class='title4'>a Best Pair </h3>
                    <h3 class='title5'>Everything at One Place..</h3>
                    <h3 class='title6'>Become our Client.</h3>
                </div>
                <div>
                    <form>
                        <input class='emailform' type='text' value={this.state.email} />
                        <button class='submitbutton'>Get Started</button>
                    </form>
                </div>
                <div>
                    <img class='bgimg' src={homepagebgimg} alt='img1' />
                    <button class='pricingbutton'>PRICING</button>
                    <button class='contactbutton'>CONTACT US</button>
                </div>
            </div>
        );
    }
}

export default HomePage;