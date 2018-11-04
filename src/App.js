import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
<<<<<<< HEAD
import HandyMan from './HandyMan';
import TestComponent from './TestComponent';
import RegistrationForm from './RegistrationForm';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/RegistrationForm">RegistrationForm</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={HandyMan} />
        <Route path="/about" component={TestComponent} />
        <Route path="/RegistrationForm" component={RegistrationForm} />

      </div>
    </Router>
=======
import Navbar from './Navbar'
import TestComponent from './TestComponent'
import Registration from './Registration';
import RegistrationForm from './Registration';
import CustomerRegistration from './CustomerRegistration';
import {TextButtons} from './Navbar'
import HandyManList from './HandyManList';
import Home from './Home';
import JobPosting from './JobPosting'
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4e3b6d',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#000000',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});


const App = () => {
  return ( 
    <MuiThemeProvider theme={theme}>
      <Router> 
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about"  component={TestComponent}/>
          <Route path="/jobPosting" component={JobPosting}/>
          <Route path="/handymen" component={HandyManList} />
          <Route path="/registration" component={RegistrationForm} />
        </div>
      </Router>
    </MuiThemeProvider>
>>>>>>> ed4b0ae60569133bad7e98b155ae60758658d408
  )
}

export default App;
