import React from 'react';
import "./Footer.css"

const footer = (props) => (
    <div className="Footer">
        <img className="FooterLogo" src="http://via.placeholder.com/107x130" alt="Footer Logo" />
        <div className="FooterRight">
            <p className="FooterCopy"><i className="fas fa-copyright"></i> 2018 All rights reserved.</p>
            <p className="FooterTimeStamp"><i className="fas fa-clock"></i> Updated: 26/03/2018 @ 15:48 by Admin </p>
        </div>
    </div>
)

export default footer