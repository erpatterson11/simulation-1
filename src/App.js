import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import ShelfSelect from './components/shelfSelect/ShelfSelect'
import BinSelect from './components/binSelect/BinSelect'
import Bin from './components/bin/Bin'
import Create from './components/create/Create'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ShelfSelect} />
          <Route path="/bins/:bin" component={BinSelect} />
          <Route path="/bin/:bin" component={Bin} />
          <Route path="/create/:bin" component={Create} />
        </Switch>
      </div>
    );
  }
}

export default App;


        // <Route exact path="/bins/:shelf" component={BinSelect} />
