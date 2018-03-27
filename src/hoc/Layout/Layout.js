import React, {Component} from "react"

import classes from "./Layout.css";
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"


class Layout extends Component {
    render () {
        return (
            <div className={classes.Container}>
                <header className={classes.Header}>
                    <Menu />
                </header>
                <main className={classes.Main}>
                    {this.props.children}
                </main>
                <footer className={classes.Footer}>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Layout