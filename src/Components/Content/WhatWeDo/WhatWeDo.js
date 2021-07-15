import React, { Component } from 'react';
import sppVideoBg from '../../../Images/videos/video1.mp4';
import './WhatWeDo.css';
import {researchDetails} from './data';
import { Scrollbars } from 'react-custom-scrollbars';

export default class WhatWeDo extends Component {
    render() {
        const researchLi =researchDetails.details.map(item=>{
            return <li className="researchLi"><p>
            <span className="contentSpan">{item.topic} :</span>
            {item.description}
            </p></li>
          })
        return (
            <div className="whatwedoDiv">
                <section>
                    <div className="bg-video" >
                        <video className="vidContent" autoPlay muted loop>
                            <source src={sppVideoBg} type="video/mp4"/>
                            Your browser is not supported!
                        </video>
                    </div>
                </section>
                <section>
                    <div id="whatwedoH1"><h1>What We Do</h1></div>
                    <div id="contentDivWWD1">
                    <Scrollbars style={{  }} autoHide autoHideTimeout={1000} autoHideDuration={500}>
                        <p>
                        As for research interest of <b>Dr. Roy</b>, the members of the SPP group are involved in the broad area of “Processing-Structure-Property correlation” through the understanding of micro-mechanisms that governs the fundamental mechanical response of materials. Our studies are mostly experimental in nature, however, we always try to complement out experimental results with various simulation based approach (Density functional theory, Artificial neural network etc.). The ongoing research activities are given below : 
                        </p>
                        <ul>
                            {researchLi}
                        </ul>
                    </Scrollbars>
                    </div>
                </section>
            </div>
        )
    }
}
