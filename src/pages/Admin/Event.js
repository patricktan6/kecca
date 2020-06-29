import React, { Component } from 'react';
import Members from "./Members";

class Event extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            submitted: false
        };
    }

    handleSubmit (event) {
        this.setState({ eventName: event.target.value, submitted: true });
    }

    render() {
        return (
            <div>
                { this.state.submitted 
                    ? <Members />
                    : <form  onSubmit={this.handleSubmit.bind(this)} >
                        <input 
                            type="text"
                            name="event"
                        />
                        <button type="submit" >+</button>
                    </form> 
                }
            </div>
        )
    }
}

export default Event;
