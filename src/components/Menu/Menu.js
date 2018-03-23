import React from 'react'

import './Menu.css'

const menu = () => (

    <div class="MenuBar">
        <nav className="MenuNav"> 
        <img class="Logo" src="http://via.placeholder.com/107x130" alt="Logo image" />
            <ul className="MenuList">
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
                <li>Medium</li>
                <li>
                    <img src="http://via.placeholder.com/50x50" alt="profile image"/>
                    <ul className="MenuSubNav">
                        <li>Logout</li>
                        <li>Settings</li>
                    </ul>
                </li>
                
            </ul>
        </nav>
    </div>
)

export default menu