import React, { Component } from 'react';
import './style.css'
import M from 'materialize-css'
import Fusion from '../images/fusion_logo.JPEG'

export default class Navbar extends Component {
    
    componentDidMount() {
        let dropdowns = document.querySelectorAll('.dropdown-trigger')
        M.Dropdown.init(dropdowns, {
            inDuration: 300,
            outDuration: 225,
            coverTrigger: false,
            hover: true,
            gutter: 0,
            alignment: 'left'
        });
    }
    render() {
        return(
        <header>
            {/* Navbar Structure */}
            <nav className='nav-wrapper grey darken-4'>
                <div className='container'>
                    <div className='brand-logo center'><img className='fusion' src={Fusion} alt='logo' width='110' height='auto'></img></div>
                    <ul id='nav-mobile' className="left hide-on-med-and-down">
                        <li><a className='dropdown-trigger about' data-target='about-dropdown'>ABOUT</a></li>
                        <li><a className='dropdown-trigger contact' data-target='contact-dropdown'>CONTACT</a></li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        <li><a className='dropdown-trigger resources' data-target='resources-dropdown'>RESOURCES</a></li>
                        <li><a className='forums'>FORUMS</a></li>
                    </ul>
                </div>
            </nav>

            {/* Dropdown Structures */}
            <ul id='about-dropdown' className='dropdown-content collection'>
                <li className='collection-item grey darken-4'><a href='locations' className='white-text'>Information</a></li>
                <li className='collection-item grey darken-4'><a href='locations' className='white-text'>Accomplishments</a></li>
                <li className='collection-item grey darken-4'><a href='locations' className='white-text'>Coaches and Staff</a></li>
                <li className='collection-item grey darken-4'><a href='locations' className='white-text'>Fusion Teams</a></li> 
            </ul>

            <ul id='contact-dropdown' className='dropdown-content collection'>
                <li className='collection-item grey darken-4'><a href='locations' className='white-text'>Coaches</a></li>
                <li className='collection-item grey darken-4'><a href='locations' className='white-text'>Locations</a></li>
            </ul>

            <ul id='resources-dropdown' className='dropdown-content collection'>
                <li className='collection-item grey darken-4'><a href='locations' className='white-text'>Sponsors</a></li>
                <li className='collection-item grey darken-4'><a href='locations' className='white-text'>Pricing/Scheduling</a></li>
            </ul>
        </header>
        ) 
    }
}