import React, { Component } from "react";
import { render } from "react-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";

class App extends Component {
    render() {
        return ( 
            <div className="container">
                <div className="row">
                    <HeaderComponent/>
                </div>
                <div className="row">                
                    <HomeComponent/>
                </div>
            </div>
        );
    }
}

render( <App/>, document.getElementById("app") );