import React, { Component } from 'react';
import Palette from './Palette';
import {Route, Switch} from 'react-router-dom'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import './App.css';

class App extends Component {
render() {
  return (
    <Switch>
      <Route exact path ='/' />
      <Route exact path='/palette/:id' />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])}/>
    // </div>    
    )
  }
}

export default App;
