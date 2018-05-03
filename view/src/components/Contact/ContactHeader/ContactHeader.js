import React from "react";
import classes from "ContactHeader.css"

const ContactHeader = (props) => (
    <ul className={classes.ContactHeader}>
        <li>Full Name</li>
        <li>Email</li>
        <li>Subject</li>
        <li>Message</li>
        <li>Actions</li>
    </ul>
)

export default ContactHeader