import React, { Component } from 'react';
import Member from "../../components/Member";

class Members extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }

    handleSubmit (event) {
        this.setState({ submitted: true });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <Member name= "Lye Yi Xian " />
                    <Member name= "Tan Xi Zhe " />
                    <button type="submit" >Submit</button> 
                </form>
            </div>
        )
    }
}

export default Members;
