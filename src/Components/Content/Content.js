import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route} from 'react-router-dom';
import './Content.css'

//import content pages
import Contacts from './Contacts/Contacts';
import Experiments from './Experiments/Experiments';
import FunStuff from './FunStuff/FunStuff';
import Home from './Home/Home';
import Labtour from './Labtour/Labtour'
import Members from './Members/Members'
import Publications from './Publications/Publications'
import WhatWeDo from './WhatWeDo/WhatWeDo'

export class Content extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div id="contentDiv">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/what-we-do" component={WhatWeDo}></Route>
                <Route path="/members" component={Members}></Route>
                <Route path="/publications" component={Publications}></Route>
                <Route path="/labtour" component={Labtour}></Route>
                <Route path="/experiments" component={Experiments}></Route>
                <Route path="/funstaffs" component={FunStuff}></Route>
                <Route path="/contacts" component={Contacts}></Route>
                <Route exact path="/myspplab" component={Home}></Route>
            </Switch>
            </div>
        )
    }
}

export default Content
