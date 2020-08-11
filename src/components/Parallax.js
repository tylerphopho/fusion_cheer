import React, {Component} from 'react';
import Banner from '../images/fusion_banner.JPEG'
import './style.css'
import M from 'materialize-css'

export default class Parallax extends Component {
    componentDidMount() {
        let parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax);
    }
    render() {
        return (
            <div className='parallax-container'>
                <div className='parallax'><img src={Banner} id='banner'></img></div>
            </div>
        )
    }
}