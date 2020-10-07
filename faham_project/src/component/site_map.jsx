import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home';
import Service from './service';
import About from './about_us';
import Contact from './contact';

function SiteMap(){


    return(

        <div>
            
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/service" component={Service} />
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            
            </BrowserRouter>

        </div>
            
            
        

    )
}

export default SiteMap;