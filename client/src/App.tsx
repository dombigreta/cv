import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './Pages/Login.Component';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
       <LoginComponent/>
      </React.Fragment>
    );
  }
}

export default App;
