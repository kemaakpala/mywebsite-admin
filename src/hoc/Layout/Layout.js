import React, {Component} from "react"

import classes from "./Layout.css";
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"


class Layout extends Component {

    state = {
        mobileNaVshow: false
    }

    showMobileNavHandler = ( event ) => {
        this.setState(
            (prevState)=> ({mobileNaVshow: !prevState.mobileNaVshow})
        )
    }

    closeMobileNavHandler = ( event ) => {
        this.setState({mobileNaVshow: false})
    }

    render () {
        return (
            <div className={classes.Container}>
                <header className={classes.Header}>
                    <Menu 
                        toggleClicked={this.showMobileNavHandler}
                        show={this.state.mobileNaVshow}
                    />
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