import React from 'react';
import './Navbar.css';
import logo from '../../Images/logo.svg';
import { Link } from 'react-router-dom';

//icon imports
import { House } from 'react-bootstrap-icons';
import {JournalText} from 'react-bootstrap-icons';
import {People} from 'react-bootstrap-icons';
import {FileEarmarkText} from 'react-bootstrap-icons';
import {Envelope} from 'react-bootstrap-icons';
import {  Tv } from 'react-bootstrap-icons';
import { Stars } from 'react-bootstrap-icons';
import {Calculator} from 'react-bootstrap-icons';

export default function Navbar() {
    const iconSize=22;
    // const iconSelectedSize=26;
    return (
        <div className="Sidemenu">
            <div style={{height: '60px',width: '100%'}}>
                <img src={logo} alt="SPP Lab" id="logoImg"></img>
                <div id="imgTitle">SPP Lab</div>
            </div>
            <div style={{height: 'calc(90vh - 100px)',width: '100%',marginTop: '50px'}}>
                <div className='links'>
                    <div><House color="#d0c1f7" size={iconSize}/><Link to='/'>Home</Link></div>
                    <div><FileEarmarkText color="#d0c1f7" size={iconSize}/><Link to='/what-we-do'>What We Do</Link></div>
                    <div><People color="#d0c1f7" size={iconSize}/><Link to='/members'>Members</Link></div>
                    <div><JournalText color="#d0c1f7" size={iconSize}/><Link to='/publications'>Publications</Link></div>
                    <div><Tv color="#d0c1f7" size={iconSize}/><Link to='/labtour'>Lab tour</Link></div>
                    <div><Calculator color="#d0c1f7" size={iconSize}/><Link to='/experiments'>Experiments</Link></div>
                    <div><Stars color="#d0c1f7" size={iconSize}/><Link to='/funstaffs'>Fun Stuff</Link></div>
                    <div><Envelope color="#d0c1f7" size={iconSize}/><Link to='/contacts'>Contact Us</Link></div>
                </div>
            </div>
        </div>
    )
}
