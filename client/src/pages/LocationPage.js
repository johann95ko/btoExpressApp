import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./pages.css";
// import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, DirectionsRenderer} from "react-google-maps";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  DirectionsService,
  InfoWindow,
  Marker,
  google

} from "react-google-maps";
import * as btoData from "../data/btoData.json";
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Map from "./Map"
import {  MapWithADirectionsRenderer  } from "../components/MapWithADirectionsRenderer"


const WrappedMap = withScriptjs(withGoogleMap(Map));



export const LocationPage = () => {
  return (
    <div style={{width:'100vw',height:'200vh'}}>
      {/* <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCSaiP0qZRojgI9mRvYSpOrIg4MZsJ0f3M&v=3.exp&libraries=geometry,drawing,places
        `} 
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `80%` }} />}
        mapElement={<div style={{ height: `80%` }} />}
        /> */}
 
    <MapWithADirectionsRenderer/>    
    </div>
  );
};

