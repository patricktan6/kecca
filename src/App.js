import React from 'react';
import Header from './components/layout/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route 
          exact
          path='/sign_in'
          render={props => (
            <React.Fragment>
              <SignIn />
            </React.Fragment>
          )}
        />
        <Route
          exact 
          path='/sign_up'
          component={SignUp}
        />
      </div>
    </Router>
  );
}

export default App;
