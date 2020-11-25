import React from 'react';
import HomePage from './home.components/HomePage';
import FBorder from './border.components/FBorder';
import Portfolio from './portfolio.components/Portfolio';
import SBorder from './border.components/SBorder';
import TBorder from './border.components/TBorder';
import Pricing from './pricing.components/Pricing';
import Developers from './dev.components/Developers';
import ContactUs from './contact-components/ContactUs';

class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
        <FBorder />
        <Portfolio />
        <SBorder />
        <Pricing />
        <TBorder />
        <Developers />
        <ContactUs />
      </div>
    );
  }
}

export default App;
