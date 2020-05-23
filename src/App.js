import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';
import NotFound from './components/notFound';
import AboutMe from './components/aboutMe';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <NavBar></NavBar>
        <main role="main">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={AboutMe}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/home"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
