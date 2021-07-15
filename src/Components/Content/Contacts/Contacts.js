import React, { Component } from 'react';
import './Contacts.css';
import {contactDetails} from './data';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default class Contacts extends Component {
    render() {
        const contactLi =contactDetails.details.map(item=>{
            return <li className="contactUsLi"><div className="labelIcon">{item.icon}</div><div className="leftLabel">{item.label}</div><div className="labelInfo">{item.data}</div></li>
          })
        return (
            <div id="contactUsDiv">
                <h1 style={{color: '#2b2047'}}>Contact Us</h1>
                <div className="contactUsCard">
                    <ul className="contactUsList">
                        {contactLi}
                    </ul>
                </div>
                {/* <div id="contactFooter"><span>Follow us </span><a style={{fontSize: '1.2em'}}><FaFacebookSquare/></a> <a style={{fontSize: '1.2em'}}><FaTwitterSquare/></a></div> */}
            </div>
        )
    }
}
