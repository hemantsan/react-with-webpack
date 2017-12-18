import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, browserHistory } from 'react-router-dom';
import MainComponent from "./components/MainComponent";
import DetailComponent from "./components/DetailComponent";
import HeaderComponent from "./components/HeaderComponent";

class App extends Component {
    render() {
        return ( 
            <Router>
                <Switch history={browserHistory}>
                    <Route exact path={"/"} component={HeaderComponent} />                
                    <Route exact path={"/detail"} component={DetailComponent} />
                    <Route exact path={"/home"} component={MainComponent} />
                </Switch>
            </Router>
        );
    }
}

render( <App/>, document.getElementById("app") );