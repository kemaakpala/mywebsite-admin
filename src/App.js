import React, { Component } from 'react';

import './App.css';
import AdminContainer from "./containers/AdminContainer/AdminContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AdminContainer/>
      </div>
    );
  }
}

export default App;
