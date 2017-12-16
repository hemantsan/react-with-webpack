import React, { Component } from "react";
import { render } from "react-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";

class App extends Component {

    constructor() {
        super();
        this.state = {
            homeLink: 'Home Page',
        };
    }

    onLinkChange(newName) {
        this.setState({
            homeLink: newName,
        });
    }

    render() {
        var user = {
            name: "Luna",
            hobbies: ["Sports", "Horse Riding"]
        }

        return ( 
            <div className="container">
                <HeaderComponent homeLink={this.state.homeLink}/>
                <div className="row">     
                    <div className="col-md-12">           
                        <HomeComponent name={"Vic"}
                            initialAge={25}
                            user={user}
                            initialLinkName={this.state.homeLink}
                            linkChanger={this.onLinkChange.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

render( <App/>, document.getElementById("app") );