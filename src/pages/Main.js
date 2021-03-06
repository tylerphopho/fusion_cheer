import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
// import Parallax from '../components/Parallax'
import M from "materialize-css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  
export default class Main extends Component {
    state = {
        about: '',
        contact: '',
        resources: '',
        forums: '',
    }

    // componentDidMount() {
    //     M.AutoInit
    // }

    navClick = event => {
        this.setState({
            about: '',
            contact: '',
            resources: '',
            forums: '',
            [event.target.name]: 'active'
        })
    }
    render() {
        return(
            <Router>
                <Navbar
                navClick={this.navClick}
                about={this.state.skills}
                contact={this.state.contact}
                resources={this.state.resources}
                forums={this.state.forums}
                />
                <main>
                    <Switch>
                    <Route exact path='/'>
                    <Home/>
                    </Route>
                    <Route exact path='/about'>
                    </Route>
                    </Switch>
                </main>
                <Footer/>
                {/* <Parallax /> */}
            </Router>
        )
    }
}