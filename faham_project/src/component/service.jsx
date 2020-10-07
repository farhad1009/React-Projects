import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Service extends Component{

    render(){

        return(
            <div>
                    <h1>Service</h1>
                    <Link to="/service">Service</Link>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
            </div>
            

        )

    }
}

export default Service;