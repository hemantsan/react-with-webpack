import React, { Component } from "react";
import { render } from "react-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";

class App extends Component {

    render() {
        var user = {
            name: "Luna",
            hobbies: ["Sports", "Horse Riding"]
        }

        return ( 
            <div className="container">
                <HeaderComponent/>
                <div className="row">     
                    <div className="col-md-12">           
                        <HomeComponent name={"Vic"} initialAge={25} user={user}/>
                    </div>
                </div>
            </div>
        );
    }
}

render( <App/>, document.getElementById("app") );