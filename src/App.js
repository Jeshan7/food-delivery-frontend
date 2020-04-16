import React from 'react';
import './App.css';
// import Routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../src/containers/Homepage';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import { connect } from 'react-redux';
import AuthenticationPage from './components/Authentication_Page';
import SearchContainer from './components/Restaurants/SearchContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login"  component={AuthenticationPage} />
          <Route path="/register" component={AuthenticationPage} />
          <Route path="/restaurants" component={SearchContainer}/>
        </Switch>
        
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      showLoginModal: state.showLoginModal
  }
}

export default connect(mapStateToProps)(App);
