import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./pages.css";
import { compose, withProps, lifecycle } from "recompose";
// import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, DirectionsRenderer} from "react-google-maps";
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
import * as btoData from "../data/btoData.json";


import PlacesAutoComplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

function Map(){
    const[selectedBto , setSelectedBto] = useState(null);
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
      lat: null,
      lng: null
    });

      const handleSelect = async value => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      setCoordinates(latLng);
      const x = coordinates.lat;
      const y = coordinates.lng;
        
    };
    return (
      <div>
      <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat:1.352083, lng:103.819839 }}
      // defaultOptions = {{styles: mapStyles}}
      >
        {btoData.features.map(bto=>( 
          <Marker 
          key = {bto.properties.PARK_ID} 
          position={{ 
            lat: bto.geometry.coordinates[1],
            lng: bto.geometry.coordinates[0]
          }}
          
          onClick={()=> {
            setSelectedBto(bto);
          }}
          
          icon={{
            url:'/home.svg',
            scaledSize: new window.google.maps.Size(40,40)
          }}
          /> 
        ))}
  
        {selectedBto && (
          <InfoWindow
          position = {{
            lat: selectedBto.geometry.coordinates[1],
            lng: selectedBto.geometry.coordinates[0]
          }}
          onCloseClick={() => {
            setSelectedBto(null);
          }}
          >
            <div>
              <h2>{selectedBto.properties.NAME}</h2>
              <p>{selectedBto.properties.DESCRIPTIO}</p>
              
              </div>
              </InfoWindow>
        )}
      </GoogleMap>
  



  {/* Search Function */}
  <PlacesAutoComplete
  value={address}
  onChange={setAddress}
  onSelect={handleSelect}
  >
  
  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
  <div>
    <p> ----The location details of our search are as follows ----  </p> 
        <p>Latitude: {coordinates.lat}</p>
        <p>Longitude: {coordinates.lng}</p>
  
    <p> ----We will use this information to calculate travel durations----  </p>    
        <Marker position={{ 
            lat: coordinates.lat,
            lng: coordinates.lng
          }}
          draggable={true}
        />
    <input {...getInputProps({ placeholder: "Type address" })} />
    <div>
      {loading ? <div>...loading</div> : null}
  
      {suggestions.map(suggestion => {
            const style = {
            backgroundColor: suggestion.active ? "#41b6e7" : "#ffffff"
            };
        return (
        <div {...getSuggestionItemProps(suggestion, { style } )}>
        {suggestion.description}
        </div>
      );
      })}
    </div>
  </div>
  )}
    </PlacesAutoComplete>

    
  </div>
    );
  }



  export default Map 


