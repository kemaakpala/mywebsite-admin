import React, { Component } from 'react';

import AdminContainer from "./containers/AdminContainer/AdminContainer";
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Layout>
        <AdminContainer/>
      </Layout>
      
    );
  }
}

export default App;
