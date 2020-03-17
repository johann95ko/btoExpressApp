import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MapWithADirectionsRenderer from './MapWithADirectionsRenderer';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'
import  StaticMap  from './StaticMap'

class AddressForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Toa Payoh' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        let targetAddress = this.state.value;
        let ModeofTransport = this.state.ModeofTransport;
        ReactDOM.render(<MapWithADirectionsRenderer origin={targetAddress}/>, document.getElementById('mapplace'));
        event.preventDefault();

    }


    render() {
        return (
            <div style={{ height: `100px`,width:`1300px` }} >
             {/* <StaticMap/> */}
            <form onSubmit={this.handleSubmit}>
                <label>Enter your desired location: <input type="text" value={this.state.value} onChange={this.handleChange}/></label>
                <Button variant="secondary" type="submit" value="submit" >
                Enter
               </Button>
              
        </form>
        <StaticMap/>

</div>

        );
    }
}

export default AddressForm;