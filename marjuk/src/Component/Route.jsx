import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home, { About, Contact } from './Home';


function Router(){

    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
        </BrowserRouter>
    )
}
export default Router;