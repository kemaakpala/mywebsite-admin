import React, {Fragment} from 'react'
import classes from './MenuSubNavListItems.css'

const menuSubNav = (props) =>{
    return (  
            props.SubNav.map((subNavItemObj) => {
                let ListItem = (
                    <li className={classes.MenuSubNavListItems}>
                        <a href={subNavItemObj.path}> {subNavItemObj.name}</a>
                    </li>
                );

                if(subNavItemObj.type === 'image'){
                    ListItem = (
                        <li className={classes.MenuSubNavListItems}>
                            <img src={subNavItemObj.path} alt={subNavItemObj.altText} />
                        </li>
                    )
                }
                return (
                    <Fragment key={subNavItemObj.position}>
                        {ListItem}
                    </Fragment>
                )
            })
    )
}


export default menuSubNav