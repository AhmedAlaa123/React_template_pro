import React,{Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';

// importing Components

import NaveBar from './Components/NavBar'
import Index from './Components/Index';
import Contact from './Components/Contact'
class App extends Component {

  render ()
  {
    return (
      <div className='App'>
        <BrowserRouter>
        <NaveBar/>
        {/** /React_template_pro/ this is pass on github */}
        <Route exact path='/React_template_pro/' component={Index}/>
        <Route path='/React_template_pro/contact' component={Contact}/>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
