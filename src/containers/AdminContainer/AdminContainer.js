import React, { Component, Fragment } from "react";

import Menu from "../../components/Menu/Menu";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Skills from "../../components/Skills/Skills"
import Contact from "../../components/Contact/Contact"

class adminController extends Component {
    render(){
        return (
            <Fragment>
                <Menu />
                <Jumbotron />
                <Skills />
                <Contact />
            </Fragment>
        )
    }
}

export default adminController