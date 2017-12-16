import React, { Component } from "react";

class HomeComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            initialName: "Vic"
        };
    }
    
    onSetAge() {
        this.setState({
            age: this.state.age + 3,
        });
    }

    onChangeHandler(event) {
        this.props.linkChanger(event.target.value);
    }

    render() {
        return (
            <div className="jumbotron">
                <p>I am a new Component.</p>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.state.age}</p>
                <p>Hobbies : {this.props.user.hobbies.map( (hob) => {return hob + ', '; }) }</p>
                <hr/>
                <button className="btn-primary btn" onClick={() => this.onSetAge()}>Set Age</button>
                <br/>
                <br/>
                <label>Enter page name: </label>
                <input type="text"
                        className="form-control w-25"
                        defaultValue={this.props.initialLinkName}
                        onChange={(event) => this.onChangeHandler(event)}/>
            </div>
        );
    }
}

export default HomeComponent;