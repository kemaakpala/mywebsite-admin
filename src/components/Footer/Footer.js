import React from 'react';
import Moment from 'moment'
import classes from "./Footer.css"

const footer = (props) => (
    <div className={classes.Footer}>
        <div>
            <img className={classes.FooterLogo} src="http://via.placeholder.com/107x130" alt="Footer Logo" />
            <p className={classes.FooterCopy}><i className="fas fa-copyright"></i> 2018 All rights reserved.</p>
        </div>
        <div>
                <p className={classes.FooterTimeStamp}>Updated: {Moment().format('MMMM Do YYYY, h:mm:ss a')} by Admin </p>
        </div>
    </div>
)

export default footer