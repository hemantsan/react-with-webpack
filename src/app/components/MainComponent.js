import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import HomeComponent from "./HomeComponent";

class MainComponent extends Component {

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
            hobbies: ["Lucent Beam", "Horse Riding"]
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

export default MainComponent;