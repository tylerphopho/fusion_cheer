import React, { Component } from 'react';
import PhotoOne from '../images/dummyphoto1.jpg'
import PhotoTwo from '../images/dummyphoto2.jpg'
import PhotoThree from '../images/dummyphoto3.jpg'
import PhotoFour from '../images/dummyphoto4.jpg'
import Photo5 from '../images/dummyphoto5.jpg'
import '../css/style.css'
import M from 'materialize-css'

export default class Carousel extends Component {
    componentDidMount (){
        let carousel = document.querySelectorAll('.carousel')
        M.Carousel.init(carousel, {
            indicators: false,
            duration: 200,
            noWrap: false,
            fullWidth: true,
        })
    }
    render(){
        return (
            <div className='container'>
                <div className='carousel center-align'>
                    <a className='carousel-item'><img src={PhotoOne} alt='DummyOne'></img></a>
                    <a className='carousel-item'><img src={PhotoTwo} alt='DummyTwo'></img></a>
                    <a className='carousel-item'><img src={PhotoThree} alt='DummyThree'></img></a>
                    <a className='carousel-item'><img src={PhotoFour} alt='DummyFour'></img></a>
                    <a className='carousel-item'><img src={Photo5} alt='Dummy5'></img></a>
                </div>
            </div>
        )   
    }
}