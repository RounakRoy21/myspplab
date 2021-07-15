import React, { Component } from 'react';
import './Publications.css';
import {data} from './data';

import { BiLinkExternal } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";


export default class Publications extends Component {
    render() {
        const cardGroup=data.map( year => {
            const publications=year.publications
            return(
                <section className="pubGroup">
                <div className='pubYear'>
                    {year.year}
                </div>
                <div className='pubContent'>
                    {publications.map(pub => {
                        return(
                            <div className="publicationCard">
                                <div className="pubInfoDate">
                                <BsCalendar style={{verticalAlign: 'middle', marginRight: '0.5em'}}/>{pub.date}
                                </div>
                                <div className="pubInfoTitle">
                                {pub.title}
                                </div>
                                <div className="pubInfoAuthor">
                                <BsPeopleFill style={{verticalAlign: 'middle', marginRight: '0.5em'}}/>{pub.authors}
                                </div>
                                <div>
                                    <button className="pubBtn"><a href={pub.abstract} target='_blank' rel='noopener noreferrer'><BiLinkExternal style={{verticalAlign: 'top'}}/><span>Abstract</span></a></button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                </section>
            )
        })
        return (
            <div id="publicationsDiv">
                <h1 style={{color: '#2b2047'}}>Our Publications</h1>
                {cardGroup}
            </div>
        )
    }
}
