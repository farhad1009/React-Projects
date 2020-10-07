import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class About extends Component{

    render(){
        return(
            <div>
                <h1>About</h1>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
                <Link to="/service">Service</Link>
                <Link to="contact">Contact</Link>
            </div>
        )
    }
}

export default About;