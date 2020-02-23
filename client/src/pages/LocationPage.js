import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./pages.css";
// import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, DirectionsRenderer} from "react-google-maps";
import { render } from 'react-dom';

import * as btoData from "../data/btoData.json";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  DirectionsService,
  InfoWindow,
  Marker,
  google,
  map

} from "react-google-maps";
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Map from "./Map"
import   MapWithADirectionsRenderer   from "../components/MapWithADirectionsRenderer"
import { defaultProps } from "recompose";
// import { TextInput } from 'react-native-paper';
import TextField from '@material-ui/core/TextField';
import AddressForm from "../components/Form"
import {NavBar} from "../components/NavBar"

export const LocationPage = () => {
  return (
    <div style={{ height: `500px`,width:`1000px` }} >
 
<h1> Address </h1>
<h1> Address </h1>
<h1> Address </h1>

<NavBar/>
        <AddressForm />
  
    </div>
  )
}