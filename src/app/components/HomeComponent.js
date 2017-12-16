import React, { Component } from "react";

class HomeComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialAge
        };
        // this.onSetAge = this.onSetAge.bind(this);
    }
    
    onSetAge() {
        this.setState({
            age: this.state.age + 3,
        });
    }

    render() {
        return (
            <div className="jumbotron">
                <p>I am a new Component.</p>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.state.age}</p>
                <p>Hobbies : {this.props.user.hobbies.map( (hob) => {return hob + ', '; }) }</p>
                <button className="btn-primary btn" onClick={() => this.onSetAge()}>Set Age</button>
            </div>
        );
    }
}

export default HomeComponent;