import React, { Component } from 'react';
import Home from './components/home/home'
import My from './components/my/my'
import Tabbar from './components/tabbar/tabbar'
import {
   BrowserRouter as Router,
   Route,
   Switch
} from 'react-router-dom'
import Shopcart from './components/shopcart/shopcart'
import Shop from './components/shop/shop'
import Map from './components/map/map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/shopcart' component={Shopcart}/>
              <Route path='/my' component={My}/>  
              <Route exact path='/shopbuy/:id' component={Shop}/>	
              <Route path ='/map' component={Map}/>
            </Switch>
            <Tabbar/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
