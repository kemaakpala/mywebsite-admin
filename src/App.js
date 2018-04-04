import React, { Component, Fragment } from 'react';

import AdminContainer from "./containers/AdminContainer/AdminContainer";
import Layout from './hoc/Layout/Layout'

import Modal from "./components/UI/Modal/Modal"

class App extends Component {
  state = {
    modal:{
      content:{
        title: 'This is a test',
        text: `Are you sure you want to Save this change ?`
      }
    },
    showModal: true,
    saveAction: false
  }
 
  closeModalHandler = (event)=> {
    console.log(event.target)
    this.setState({showModal: false})
  }

  saveActionHandler = (event)=> {
    console.log('[saveAction => saveActionHandler]: ',event.target)
    this.setState({
      showModal: false,
      saveAction: true
    })
  }

  cancelActionHandler = (event)=> {
    console.log('[cancelAction => cancelActionHandler]: ',event.target)
    this.setState({
      showModal: false,
      saveAction: false
    })
  }

  render() {
    
    return (
      <Fragment>
      <Modal 
        content={this.state.modal.content}
        closeModal={this.closeModalHandler}
        overlayCloseModal={this.closeModalHandler}
        saveAction={this.saveActionHandler}
        cancelAction={this.cancelActionHandler}
        showModal={this.state.showModal}
      />
      <Layout>
        <AdminContainer/>
      </Layout>
      </Fragment>
      
    );
  }
}

export default App;
