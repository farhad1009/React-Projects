import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component{

    render(){

        return(

            <div>
            <h1>Contact</h1>
            <Link to="/contact">Contact</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            </div>
        )
    }
}

export default Contact;