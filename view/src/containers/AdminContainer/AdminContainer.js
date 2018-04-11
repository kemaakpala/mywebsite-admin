import React, { Component, Fragment } from "react";

import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Skills from "../../components/Skills/Skills"
import Contact from "../../components/Contact/Contact"

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
        skills:{
            content:{
                
            }
        },
        showModal: false,
        editStart: false,
        editJumbotronStart: false,
        newSkill: false,
        newJumbotron: false,
        deleteSkill: false,
        deleteJumbotron: false,
        saveSkill: false,
        saveJumbotron: false,
        showSkill: true,
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

    //Skill Handlers
    addSkillHandler = (event) => {
        this.setState({
            newSkill: true
        })
    }
    
    editSkillHandler = (event) => {
        this.setState({editStart: true})
    }

    deleteSkillsHandler = (event) => {
        this.setState({
            deleteSkill: true,
            editStart: false,
            showSkill: false
        })
    }
    saveSkillHandler = (event) => {
        this.setState({
            saveSkill: true, 
            editStart: false,
            showModal: true
        })
    }
    closeSkillHandler = (event) => {
        this.setState({
            editStart: false
        })
    }
    
    //Contact Handlers

    render () {
        console.log(this.state.jumbotron.content);
        return (
            <Fragment>
                <Jumbotron 
                    content={this.state.jumbotron.content}
                    edit={this.editJumbotronHandler}
                    delete={this.deleteJumbotronHandler}
                    editJumbotronStart={this.state.editJumbotronStart}
                    show = {this.state.showJumbotron}
                    save={this.saveJumbotronHandler}
                    publish={this.publishJumbotronHandler}
                    close={this.closeJumbotronHandler}
                />
                <Skills 
                    content={this.state.content}
                    edit={this.editSkillHandler}
                    delete={this.deleteSkillsHandler}
                    editStart= {this.state.editStart}
                    show={this.state.showSkill}
                    add={this.addSkillHandler}
                    new={this.state.newSkill} 
                    save={this.saveSkillHandler}
                    close = {this.closeSkillHandler}
                />
                <Contact content={this.state.content}/>
            </Fragment>
        )
    }
}

export default adminController