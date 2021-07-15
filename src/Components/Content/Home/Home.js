import React, { Component } from 'react';
import sppVideoBg from '../../../Images/videos/video1.mp4';
import './Home.css';
import Marquee from "react-fast-marquee";
import {news} from './data';



export default class Home extends Component {
    render() {
        const marqueeElement=news.details.map(news=>{
            return <div className="marqueeCard">
                {news.description}
            </div>
        }
        )
        return (
            <div className="homeDiv">
                <section>
                    <div className="bg-video" >
                        <video className="vidContent" autoPlay muted loop>
                            <source src={sppVideoBg} type="video/mp4"/>
                            Your browser is not supported!
                        </video>
                    </div>
                </section>
                <section>
                    <div id="homeH1">
                        <h1>Who we are</h1>
                    </div>
                    <div id="contentDiv1">
                        <p>
                        As for research interest of Dr. Roy, the members of the SPP group are involved in the broad area of “Processing-Structure-Property correlation” through the understanding of micro-mechanisms that governs the fundamental mechanical response of materials. Our studies are mostly experimental in nature, however, we always try to complement our experimental results with various simulation based approach (Density functional theory, Artificial neural network etc.). The ongoing research activities are given below
                    </p>
                    <p style={{"font-style": "italic", "text-align": "center"}}>
                        WE BELIEVE THAT RESEARCH IS A LIFESTYLE NOT A JOB
                    </p>
                    </div>
                    <div id="marqueeDiv">
                    <Marquee pauseOnHover="true" gradientWidth="50" speed="40">
                        {marqueeElement}
                    </Marquee>
                    </div>
                </section>
            </div>
        )
    }
}
