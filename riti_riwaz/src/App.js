import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import RegistrationForm from './RegistrationForm';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/LoginPage" component={LoginPage} />
          <Route path="/HomePage" component={HomePage} />
        <Route path="/RegistrationForm" component={RegistrationForm} />
      </Switch>
    </Router>
  );
}

export default App;
