import React from "react";
import "./Contact.css";
const contact = (props) => (
    <div className="Contact">
        <ul className="ContactHeader">
            <li>FirstName</li>
            <li>LastName</li>
            <li>Email</li>
            <li>Subject</li>
            <li>Message</li>
            <li>Actions</li>
        </ul>
        <ul className="ContactBody">
            <li>Patrick</li>
            <li>Akpala</li>
            <li>kemaakpala@hotmail.com </li>
            <li>Hello</li>
            <li>this is a message!!</li>
            <li>
                <ul className="ContactActions">
                    <li><button>Reply</button></li>
                    <li><button>Edit</button></li>
                    <li><button> Delete</button></li>
                </ul>
            </li>
        </ul>
        <ul className="ContactBody">
            <li>Ekpedeme</li>
            <li>Okuette</li>
            <li>eokuette@hotmail.com </li>
            <li>Hello</li>
            <li>this is a message!!</li>
            <li>
                <ul className="ContactActions">
                    <li><button>Reply</button></li>
                    <li><button>Edit</button></li>
                    <li><button> Delete</button></li>
                </ul>
            </li>
        </ul>
        <ul className="ContactBody">
            <li>Kema</li>
            <li>Akpala</li>
            <li>kakpala@hotmail.com </li>
            <li>Hello</li>
            <li>this is a message!!</li>
            <li>
                <ul className="ContactActions">
                    <li><button>Reply</button></li>
                    <li><button>Edit</button></li>
                    <li><button> Delete</button></li>
                </ul>
            </li>
        </ul>
        <div className="ContactFooter">
            <p>Date: 23/03/2018</p>
        </div>
    </div>
)

export default contact