import React, { Component } from 'react';
import '../dev.components/DevelopersStyle.css';
import shree from '../assets/shree.png';
import sabari from '../assets/sabari.png';
import balajee from '../assets/balajee.png';

class Developers extends React.Component {
    render() {
        return (
            <div className="dev-container">
                <div className="main-container">
                    <div className="container2">
                        <img src={sabari} alt="devimg2" />
                        <h3>V.P Sabari Ramkumar</h3>
                        <h4>Full Stack Developer</h4>
                    </div>

                    <div className="container1">
                        <img src={shree} alt="devimg1" />
                        <h3>U.K Shree Dhushandhan</h3>
                        <h4>Full Stack Developer</h4>
                    </div>

                    <div className="container3">
                        <img src={balajee} alt="devimg3" />
                        <h3>V.Yoga Balajee</h3>
                        <h4>Full Stack Developer</h4>
                    </div>
                </div>
                <div className="empty">

                </div>
            </div>
        );
    }
}

export default Developers;