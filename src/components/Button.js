import React, { Component } from 'react';
// import './style.css'

export default class Button extends Component {
    render() {
        return (
            <div className='container'>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
            </div>
        )
    }
}