import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import NotFound from './components/notFound';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="aboutDescription">
          <NavBar></NavBar>
          <main role="main">
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/projects" component={Projects}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect from="/" exact to="/home"></Redirect>
              <Redirect to="/not-found"></Redirect>
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
