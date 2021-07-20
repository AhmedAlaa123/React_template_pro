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
        <Route exact path='/' component={Index}/>
        <Route path='/contact' component={Contact}/>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
