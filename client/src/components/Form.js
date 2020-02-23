import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MapWithADirectionsRenderer from './MapWithADirectionsRenderer';


class AddressForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        let targetAddress = this.state.value;
        ReactDOM.render(<MapWithADirectionsRenderer origin={targetAddress} destination='Imperial College' />, document.getElementById('mapplace'));
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Address:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }
}

export default AddressForm;