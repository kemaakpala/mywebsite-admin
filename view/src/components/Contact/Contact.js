import React from "react";
import classes from "./Contact.css";
import ContactData from "../../contactData";
import ContactBody from "./ContactBody/ContactBody";
import ContactHeader from "./ContactHeader/ContactHeader";

const contact = (props) => {

    
    return (
        <div className={classes.Contact}>
            <ContactHeader/>
            {
                ContactData.map((contact) => {
                    const {_id, firstname, lastname, email, subject, message, date} = contact
                    return (
                        <ContactBody
                            key= {_id['$oid']}
                            id= {_id['$oid']}
                            firstname={firstname}
                            lastname={lastname}
                            email= {email}
                            subject={subject}
                            message={message}
                            date={date}
                        />
                    )
                })
            }
        </div>
    )
}

export default contact