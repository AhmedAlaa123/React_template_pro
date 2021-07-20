import React,{Component} from 'react';
// importing Components
import Home from './../Home'

import Work from './../Work'
import Porftolio from './../PortFolio'
import Profile from './../Profile'
import About from './../About'
import SocialMedia from './../SocialMedia'
import Footer from './../Footer'

class Index extends Component {

  render ()
  {
    return (
      <div className='index'>
        <Home />
        <Work/>
        <Porftolio/>
        <Profile/>
        <About/>
        <SocialMedia/>
        <Footer/>
      </div>
    );
  }
}
export default Index;
