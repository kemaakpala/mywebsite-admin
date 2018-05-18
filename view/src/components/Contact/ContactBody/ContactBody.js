import React from 'react'
import classes from './ContactBody.css'
import ContactActions from '../ContactActions/ContactActions';

const ContactBody = (props) => {
    const {id, firstname, lastname, email, subject, message} = props
    return (
        <ul id={`contactBody_${id}`}className={classes.ContactBody}>
            <li><i className="fas fa-id-card"></i>{`${firstname} ${lastname}`}</li>
            <li><i className="fas fa-at"></i>{email}</li>
            <li><i className="fas fa-envelope"></i>{subject}</li>
            <li><i className="fas fa-align-left"></i>{message}</li>
            <li>
                <ContactActions/>
            </li>
        </ul>
    )
}

export default ContactBody