import React, {Component} from "react"

import "./Layout.css";
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"


class Layout extends Component {
    render () {
        return (
            <div className="Container">
                <header>
                    <Menu />
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Layout