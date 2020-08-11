import React, { Component } from 'react';
import Slider from '../components/Slider';
import Carousel from '../components/Carousel';
import '../css/style.css'
// import M from 'materialize-css'

export default class Home extends Component {
    render(){
        return(
        <div>
        <Slider/>
            <div className='container'>
                <h1 className="center-align white-text">Utah Fusion All-Stars</h1>
                <h5 className="center-align white-text">Nationally-recognized USASF-Certified Member all-star cheerleading gym located in West Jordan, Utah.</h5>
                <p className="center-align white-text">Utah Fusion All-Stars specializes in competitive all-star cheerleading and both competitive and non-competitive classes for all ages and abilities. 
                Our teams have been competing statewide and nationally for more than 13 years.</p>
                <div className='divider'></div>
                <h2 className='center-align white-text'>Fusion is a family of champions.</h2>
                <p className='left-align white-text'>Our athletes master the skills necessary to become elite all-star cheerleaders and tumblers.
                More importantly, we foster the attributes that empower them be strong students, dedicated teammates, 
                and successful individuals. At Fusion, success isn't measured just by winning competitions, 
                but by how we grow as individuals and as a team. Utah Fusion All-Stars is more than all-star cheer. We're a family!</p>
            </div>
            <div className='container'>
                <Carousel/>
            </div>
        </div>
        )
    }
}