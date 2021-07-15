import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export const contactDetails={
    details:[
        {
            label:"Quick Contact :",
            data:"Dr. Shibayan Roy, Assistant Professor",
            icon:<a href="https://sites.google.com/site/shibayansdreams/home" target='_blank'><FaUserCircle/></a>,
            action : ""
        },
        {
            label:"Address :",
            data:"Materials Science Center, Indian Institute of Technology, IIT-Kharagpur 721302, India",
            icon:<a><FaMapMarkedAlt/></a>,
            action : ""
        },
        {
            label:"Phone :",
            data:"+91 3222 283962, +91 3222 255303 (Fax), +91 3222 281650 (Lab Tel No)",
            icon:<a href="tel:+913222283962" target='_top' aria-label="Phone"><FaPhone/></a>,
            action : ""
        },
        {
            label:"Email :",
            data:"shibayan@matsc.iitkgp.ernet.in, royshiba@gmail.com",
            icon:<a href="mailto:shibayan@matsc.iitkgp.ernet.in" target='_top' aria-label="Email"><FaEnvelope/></a>,
            action : ""
        },
        {
            label:"Research :",
            data:"",
            icon:<a href="http://www.researcherid.com/rid/E-4225-2012" target='_blank' rel='noopener noreferrer' aria-label="Research Info"><FaInfoCircle/></a>,
            action : ""
        },
    ]
}