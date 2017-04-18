import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ConnectedDoodle from './components/Doodle'
import ConnectedProfile from './components/Profile'
import ConnectedNavBar from './components/NavBar'

class App extends Component {
  requireAuth(nextState, replace, callback) {
    console.log("hey")
    debugger
  }

  render() {
    return (
        <div className="App">
          <Router history={browserHistory}>
            <div>
              <Route path="/" component={ConnectedNavBar}/>
              <Switch>
                <Route exact path="/" component={ConnectedDoodle} />
                <Route path="/profile" component={ConnectedProfile} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Switch>
            </div>
          </Router>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  account: state.account
})

const ConnectedApp = connect(mapStateToProps, null)(App)

export default ConnectedApp
