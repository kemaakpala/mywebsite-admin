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
        modal:{
            content: {
                title: 'This is a modal',
                text: 'this is a test text'
            }
        },
        editing: false,
        newSkill: false,
        deleteSkill: false
    }

    addSkillHandler = (event) => {
        this.setState({
            newSkill: true
        })
    }
    
    editSkillsHandler = (event) => {
        this.setState({editing: true})
    }

    deleteSkillsHandler = (event) => {
        this.setState({deleteSkill: true})
    }

    render () {
        console.log(this.state.jumbotron.content);
        return (
            <Fragment>
                <Jumbotron content={this.state.jumbotron.content}/>
                <Skills 
                    content={this.state.content}
                    editSkills={this.editSkillsHandler}
                    deleteSkills={this.deleteSkillsHandler}
                    editStart= {this.state.editing}
                    addSkill={this.addSkillHandler} 
                />
                <Contact content={this.state.content}/>
            </Fragment>
        )
    }
}

export default adminController