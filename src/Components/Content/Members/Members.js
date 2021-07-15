import React, { Component } from 'react';
import './Members.css';
import {members} from './data';

//icon imports
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";




export default class Members extends Component {
    render() {
          const professors = members.professors.map(mem => {
            const con = mem.contact
            return (
              <section className="memberInfoCard">
                <div className='memImage'>
                  <img src={require('../../../Images/people/'+mem.userId+'.'+mem.imageFormat).default} alt={mem.userId} data-position="center center"></img>
                </div>
                <div className='content'>
                  <h2>{mem.name}</h2>
                  <h4>{mem.role}</h4>
                  <h5>{mem.department}</h5>
                  <p></p>
                  {con.website?<button className="memBtn"><FaDesktop/><a href={con.website} target='_blank' rel='noopener noreferrer'>Website</a></button>:null}
                  {con.researcherId?<button className="memBtn"><FaInfoCircle/><a href={con.researcherId} target='_blank' rel='noopener noreferrer'>Researcher ID</a></button>:null}
                  {con.email?<button className="memBtn"><FaEnvelope/><a href={`mailto:${con.email}`} target='_top' >Email</a></button>:null}
                  {con.phone?<button className="memBtn"><FaPhone/><a href={`tel:${con.phone}`} target='_top'>Phone</a></button>:null}
                </div>
              </section>
            )
          }) 
          const current = members.current.map(mem => {
            const con = mem.contact
            return (
              <section className="memberInfoCard">
                <div className='memImage'>
                  <img src={require(`../../../Images/people/${mem.userId}.${mem.imageFormat}`).default} alt={mem.userId} data-position="center center"></img>
                </div>
                <div className='content'>
                  <h2>{mem.name}</h2>
                  <h4>{mem.role} {mem.year}</h4>
                  <p className='about'>
                    {mem.project ? <><div><b>Project</b></div><div>{mem.project}</div></> : null}
                    {mem.previousEducation ? <><div><b>Previous Education</b></div><div>{mem.previousEducation}</div></> : null}
                    {mem.workExperience ? <><div><b>Work Experience</b></div><div>{mem.workExperience}</div></> : null}
                  </p>
                  {con.email?<button className="memBtn"><FaEnvelope/><a href={`mailto:${con.email}`} target='_top'>Email</a></button>:null}
                  {mem.cv?<button className="memBtn"><FaFilePdf/><a href={mem.cv} target='_blank'>Complete CV</a></button>:null}
                </div>
              </section>
            )
          })

          const alumni = members.alumni.map(mem => {
            const con = mem.contact
            return (
              <section className="memberInfoCard">
                <div className='memImage'>
                  <img src={require(`../../../Images/people/${mem.userId}.${mem.imageFormat}`).default} alt={mem.userId} data-position="center center"></img>
                </div>
                <div className='content'>
                  <h2>{mem.name}</h2>
                  <h4>{mem.role} {mem.year}</h4>
                  <p className='about'>
                    {mem.project ? <><div><b>Project</b></div><div>{mem.project}</div></> : null}
                    {mem.currentStatus ? <><div><b>Current Status</b></div><div>{mem.currentStatus}</div></> : null}
                    {mem.previousEducation ? <><div><b>Previous Education</b></div><div>{mem.previousEducation}</div></> : null}
                  </p>
                  {con.email?<button className="memBtn"><FaEnvelope/><a href={`mailto:${con.email}`} target='_top'>Email</a></button>:null}
                </div>
              </section>
            )
          })

          const intern_alumni = members.internAlumni.map(mem => {
            return (
              <li>
                {mem.details}
              </li>
            )
          })

        return (
            <div id="membersBaseDiv">
                <p class="MembersHeader">Faculty</p>
                {professors}
                <p class="MembersHeader">Current Members</p>
                {current}
                <p class="MembersHeader">Our Alumni</p>
                {alumni}
                <p class="MembersHeader">Intern Alumni</p>
                <section className="internInfoCard">
                  <ul>
                    {intern_alumni}
                  </ul>
                </section>
            </div>
        )
    }
}
