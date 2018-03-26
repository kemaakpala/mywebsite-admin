import React, {Fragment} from 'react'

import './Menu.css'

const menu = () => (

    <Fragment>
        <nav className="MenuNav"> 
            <div className="NavTop">
                <img className="Logo" src="http://via.placeholder.com/107x130" alt="Logo" />
                <button className="NavToggle btn">
                    <span className="fa fa-bars fa-w-14 fa-lg"></span>
                </button>
            </div>
            <div className="NavBottom">
                <ul className="MenuList">
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Medium</a></li>
                    <li>
                        <img src="http://via.placeholder.com/50x50" alt="profile"/>
                        <ul className="MenuSubNav">
                            <li><a href="">Logout</a></li>
                            <li><a href="">Settings</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </Fragment>
)

export default menu