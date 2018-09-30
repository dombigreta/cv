import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './Pages/Login/Login.Component';
import RegisterPageComponent from './Pages/RegisterPage/RegisterPage.Component';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <Router>
       <React.Fragment>
          <Route exact path="/" component={LoginComponent}/>
          <Route path="/registerpage" component={RegisterPageComponent}/>
      </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
