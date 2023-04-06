import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        {/* <News pageSize={5} country='in' category="science"/> */}
        <Switch>

          <Route exact path="/">
            <News key="General" pageSize={this.pageSize} country='in' category="General"/>
          </Route>
          <Route exact path="/Business">
            <News key="Buisness" pageSize={this.pageSize} country='in' category="Business"/>
          </Route>
          <Route exact path="/Entertainment">
            <News key="entertainment" pageSize={this.pageSize} country='in' category="Entertainment"/>
          </Route>
          <Route exact path="/General">
            <News key="General" pageSize={this.pageSize} country='in' category="General"/>
          </Route>
          <Route exact path="/Health">
            <News key="Health" pageSize={this.pageSize} country='in' category="Health"/>
          </Route>
          <Route exact path="/Science">
            <News key="Science" pageSize={this.pageSize} country='in' category="Science"/>
          </Route>
          <Route exact path="/Sports">
            <News key="Sports" pageSize={this.pageSize} country='in' category="Sports"/>
          </Route>
          <Route exact path="/Technology">
            <News key="Technology" pageSize={this.pageSize} country='in' category="Technology"/>
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}


