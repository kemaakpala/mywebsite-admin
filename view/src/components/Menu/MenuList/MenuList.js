import React from 'react'
import classes from './MenuList.css'
import MenuSubNavListItems from '../MenuSubNavListItems/MenuSubNavListItems'

const menuList = (props) => {
    let menuListItemArr = props.List.item
    let listItem = null;

    return (
    
        <ul className={classes.MenuList}>
            {
                menuListItemArr.map((listItemObj) => {
                    let subNav = null;
                    if(listItemObj.subNav){
                        subNav = <MenuSubNavListItems SubNav= {listItemObj.subNav} />
                    }
                    if (listItemObj.path && listItemObj.name) { 
                        listItem =  (
                            <a href={listItemObj.path}>{listItemObj.name}</a>
                        )
                    }else{
                        listItem = (
                            <ul className={classes.MenuSubNav}>{subNav}</ul>
                        )
                    }
                    return (
                        <li id={listItemObj.position} key={listItemObj.position}>
                            {listItem}
                        </li> 
                    )
                })
            }
        </ul>
    )
}

export default menuList