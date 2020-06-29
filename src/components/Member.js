import React, { Component } from 'react';

class Member extends Component {

    constructor(props) {
        super(props);
        this.state = { present: false };
    }

    handleRadioChange = (event) => {
        if (this.state.present === false) {
            this.setState({ present: true });
        } else {
            this.setState({ present: false });
        }
    }

    render() {
        return (
            <div>
                <label>
                    {this.props.name}
                    <input 
                        type="checkbox"
                        onChange={this.handleRadioChange.bind(this)}
                    />
                </label>
            </div>
        )
    }
}

export default Member;
