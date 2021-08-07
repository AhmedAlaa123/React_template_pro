import React,{Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';

// importing Components

import NaveBar from './Components/NavBar'
import Index from './Components/Index';
import Contact from './Components/Contact'
import PAGE_LINK from './contsants/utilites'
class App extends Component {

  render ()
  {
    return (
      <div className='App'>
        <BrowserRouter>
        <NaveBar/>
        {/** /React_template_pro/ this is pass on github */}
        <Route exact path={PAGE_LINK} component={Index}/>
        <Route path={PAGE_LINK+'contact'} component={Contact}/>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
