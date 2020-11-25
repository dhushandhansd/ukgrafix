import React from 'react';
import './SBorderStyle.css';
import bitcoinimg from '../assets/bitcoinimg.png';

class SBorder extends React.Component {
    render() {
        return (
            <div className="border2">
                <h3 className="border2-titles1">Not Like Every other Designer -
                    We Charge for the Best Product we Deliver</h3>
                <img className='coinimg'
                    src={bitcoinimg}
                    alt="bitcoinimg" />
            </div>
        );
    }
}

export default SBorder;