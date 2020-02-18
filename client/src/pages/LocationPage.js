import React, {useState} from "react";
import "./pages.css";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as btoData from "../data/btoData.json";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng

} from "react-places-autocomplete";

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

const WrappedMap = withScriptjs(withGoogleMap(Map));

export const LocationPage = () => {
  return (
    <div style={{width:'100vw',height:'100vh'}}>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCSaiP0qZRojgI9mRvYSpOrIg4MZsJ0f3M
        `} 
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `80%` }} />}
        mapElement={<div style={{ height: `80%` }} />}
        />
    </div>
  );
};
