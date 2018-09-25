import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './Pages/Login/Login.Component';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <Router>
       <LoginComponent/>
      </Router>
      </Provider>
    );
  }
}

export default App;
