import React, { Component, Fragment } from "react";

import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Skills from "../../components/Skills/Skills"
import Contact from "../../components/Contact/Contact"

import dummyData from "../../skillsData"

class adminController extends Component {
    state = {
        jumbotron: {
            content:{
                greeting: "Patrick Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit purus, ornare viverra purus ac, convallis lacinia odio. Fusce interdum ac orci et placerat. Praesent scelerisque quis lorem sit amet facilisis. Mauris at dapibus dui. Sed sollicitudin velit arcu, non bibendum sem feugiat sit amet. Donec sodales nulla id tellus ornare, eu faucibus risus egestas",
                image: {
                    SrcUrl: '',
                    AltText: 'imagename'
                }
            }
        },
        showModal: false,
        editStart: false,
        editJumbotronStart: false,
        newJumbotron: false,
        deleteJumbotron: false,
        saveJumbotron: false,
        showJumbotron: true
    }

    //Jumbotron Handlers
    addJumbotronHandler = (event) => {
        this.setState({
            newJumbotron: true
        })
    }
    
    editJumbotronHandler = (event) => {
        this.setState({editJumbotronStart: true})
    }

    deleteJumbotronHandler = (event) => {
        this.setState({
            deleteJumbotron: true,
            editJumbotronStart: false,
            showJumbotron: false
        })
    }
    saveJumbotronHandler = (event) => {
        this.setState({
            saveJumbotron: true, 
            editJumbotronStart: false,
            showModal: true
        })
    }
    closeJumbotronHandler = (event) => {
        this.setState({
            editJumbotronStart: false
        })
    }
    
    //Contact Handlers

    render () {
        return (
            <Fragment>
                {/* <Jumbotron 
                    content={this.state.jumbotron.content}
                    edit={this.editJumbotronHandler}
                    delete={this.deleteJumbotronHandler}
                    editJumbotronStart={this.state.editJumbotronStart}
                    show = {this.state.showJumbotron}
                    save={this.saveJumbotronHandler}
                    publish={this.publishJumbotronHandler}
                    close={this.closeJumbotronHandler}
                /> */}
                <Skills />
                {/* <Contact content={this.state.content}/> */}
            </Fragment>
        )
    }
}

export default adminController