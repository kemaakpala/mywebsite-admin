import React from 'react';
import classes from "./Footer.css"

const footer = (props) => (
    <div className={classes.Footer}>
        <img className={classes.FooterLogo} src="http://via.placeholder.com/107x130" alt="Footer Logo" />
        <div className={classes.FooterRight}>
            <p className={classes.FooterCopy}><i className="fas fa-copyright"></i> 2018 All rights reserved.</p>
            <p className={classes.FooterTimeStamp}><i className="fas fa-clock"></i> Updated: 26/03/2018 @ 15:48 by Admin </p>
        </div>
    </div>
)

export default footer