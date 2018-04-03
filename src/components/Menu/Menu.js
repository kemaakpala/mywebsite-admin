import React, {Fragment} from 'react'

import classes from './Menu.css'
import Button from'../UI/Button/Button'
import Logo from '../Logo/Logo'
import MenuList from './MenuList/MenuList'

const menu = (props) => { 
    const MenuListObj = {
        item: [
            {
                path: '/about',
                name: 'About',
                position: 1
            },
            {
                path: '/skills',
                name: 'Skills',
                position: 2
            },
            {
                path: '/contact',
                name: 'Contact',
                position: 3
            },
            {
                path: '/medium',
                name: 'Medium',
                position: 4
            },
            {
                path: '',
                name: '',
                position: 5,
                subNav:[
                    {
                        type: 'image',
                        path: 'http://via.placeholder.com/50x50',
                        altText: 'profile',
                        position: 5.1
                    },
                    {   type: 'list',
                        path: '/logout',
                        name: 'Logout',
                        position: 5.2
                    },
                    {   type: 'list',
                        path: '/settings',
                        name: 'Settings',
                        position: 5.3
                    }
                ]
                    
                
            }
        ]
    }
    
    let ToggleNavBottomArr = [classes.NavBottom, classes.Hidden];
    if(props.show){
        ToggleNavBottomArr = [classes.NavBottom, classes.Active];
    }

    return (
        <Fragment>
            <nav className={classes.MenuNav}> 
                <div className={classes.NavTop}>
                    <Logo SrcURL="http://via.placeholder.com/107x130" AltText="Logo" />
                    <Button 
                        classes={classes.NavToggle} 
                        clicked={props.toggleClicked}
                    >
                        <span className="fa fa-bars fa-w-14 fa-lg"></span>
                    </Button>
                </div>
                
                <div 
                    className={ToggleNavBottomArr.join(' ')}>
                    <MenuList List={MenuListObj}/>
                </div>
            </nav>
        </Fragment>
    )
}

export default menu