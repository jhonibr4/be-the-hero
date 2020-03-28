import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/logon'
import Register from './pages/Register'
import Profile from './pages/Profiles'
import Incidents from './pages/newIncidents'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/Register" component={Register}/>
                <Route path="/Profile" component={Profile}/>
                <Route path="/incidents/new" component={Incidents}/>
            </Switch>
        </BrowserRouter>
    );
}