import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{

    render(){
        return(
            <div>
                <h3>Welcome to Homepage</h3>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        )
    }
        
}


class About extends Component{
    render(){
        return(
            <div>
                <h3>Hello! I'm About the Project</h3>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        )
    }
}

class Contact extends Component{
    render(){
        return(
            <div>
                <h3>Please contact with me for any query.</h3>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        )
    }
}
export {About, Contact};

  export default Home;