import React, { Component } from 'react';
import '../css/style.css'
import ImageOne from '../images/camie_wallpaper_by_sanoboss_dcuy4ej-fullview.jpg';
import ImageTwo from '../images/cjT3JmX.png';
import M from 'materialize-css'

export default class Slider extends Component {
    componentDidMount() {
        let slider = document.querySelectorAll('.slider')
        M.Slider.init(slider, {
            indicators: false,
            height: 450,
            transition: 500,
            interval: 6000,
        })
    }
    render() {
        return (
            <section className='slider'>
                <ul className='slides'>
                    <li>
                        <img src={ImageOne} alt='one'></img>
                        <div className='caption center-align'>
                            <h2>Fusion Cheer!</h2>
                        </div>
                    </li>
                    <li>
                        <img src={ImageTwo} alt='two'></img>
                        <div className='caption center-align'>
                            <h2>Fusion Cheer!</h2>
                        </div>
                    </li>
                </ul>
                <div className='divider'></div>
            </section>
        )
    }
}