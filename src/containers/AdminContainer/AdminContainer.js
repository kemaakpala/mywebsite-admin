import React, { Component, Fragment } from "react";

import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Skills from "../../components/Skills/Skills"
import Contact from "../../components/Contact/Contact"

class adminController extends Component {
    render(){
        return (
            <Fragment>
                <Jumbotron />
                <Skills />
                <Contact />
            </Fragment>
        )
    }
}

export default adminController