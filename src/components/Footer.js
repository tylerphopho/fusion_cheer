import React, { Component } from 'react';
import '../css/style.css'
import M from 'materialize-css'

export default class Footer extends Component  {
    render(){
        return(
            <footer className='page-footer grey darken-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col l6 s12'>
                            <h5 className='white-text'>Footer Content</h5>
                            <p className='grey-text text-lighten-4'>Follow us on Social Media!</p>
                        </div>
                        <div className='col l4 offset-l2 s12'>
                            <h5 className='white-text'>Links</h5>
                            <ul>
                                <li><a className='grey-text text-lighten-4' href='#'>Facebook</a></li>
                                <li><a className='grey-text text-lighten-4' href='#'>Twitter</a></li>
                                <li><a className='grey-text text-lighten-4' href='#'>Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                        
                <div className='footer-copyright grey darken-3'>
                    <div className='container'>
                    © 2020 Copyright Text
                    <a className='grey-text text-lighten-4' href='#'>More Links</a>
                    </div>
                </div>
            </footer>
        )
    }
}