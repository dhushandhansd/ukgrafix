import React from 'react';
import './PortfolioStyle.css';
import projectweb1 from '../assets/projectweb1.png';
import projecctweb2 from '../assets/projecctweb2.png';
import projectweb3 from '../assets/projectweb3.png';
import projectweb4 from '../assets/projectweb4.png';
import portfoliobgimg from '../assets/portfoliobgimg.png';

import projectmob1 from '../assets/projectmob1.png';
import projectmob2 from '../assets/projectmob2.png';
import projectmob3 from '../assets/projectmob3.png';
import projectmob5 from '../assets/projectmob5.png';
import projectmob6 from '../assets/projectmob6.png';
import projectmob7 from '../assets/projectmob7.png';
import next from '../assets/next.png';
import instalogo from '../assets/instalogo.png';


class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            insta: "https://www.instagram.com/ukcorps/"
        }
    }

    openinsta = () => {
        window.location.assign(this.state.insta);
    }

    instabtn = () => {
        window.location.assign(this.state.insta);
    }
    render() {
        return (
            <div class='Sbackground'>
                <div className='web-ui1'>
                    <h3 class='pagetitle'>Web Apps</h3>
                    <img class='web1' src={projectweb1} alt='webpro1' />
                    <img class='web2' src={projecctweb2} alt='webpro2' />
                    <img class='web3' src={projectweb3} alt='webpro3' />
                    <img class='web4' src={projectweb4} alt='webpro4' />
                </div>
                <div>
                    <h2 class='bigTitle' >Creativity</h2>
                    <h2 class='bigTitle1' >we Deployed</h2>
                    <img class='bg1img' src={portfoliobgimg} alt='bgimg' />
                    <h3 class='bigTitle2'>Mobile</h3>
                    <h3 class='bigTitle3'>Apps on</h3>
                </div>
                <div class='mob-container' >
                    <img class='mob1' src={projectmob1} alt='mob1' />
                    <img class='mob2' src={projectmob2} alt='mob2' />
                    <img class='mob3' src={projectmob3} alt='mob3' />
                    <img class='mob5' src={projectmob5} alt='mob5' />
                    <img class='mob6' src={projectmob6} alt='mob6' />
                    <img class='mob7' src={projectmob7} alt='mob7' />
                    <h4 onClick={this.openinsta} class='viewtxt' >View More</h4>
                    <img onClick={this.openinsta} class='nextbtn' src={next} alt='nextbtn' />
                </div>
                <div class='follow-container' >
                    <h3>View More at Social Pages</h3>
                    <img onClick={this.instabtn} class='instalogo' src={instalogo} alt='insta' />
                </div>
            </div>
        );
    }
}

export default Portfolio;