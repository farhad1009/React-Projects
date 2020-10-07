import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Home extends Component{

    render(){
        return(
            <div>
                <h1>Home</h1>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/service">Service</Link>

            </div>
        )

               
    }

}

export default Home;