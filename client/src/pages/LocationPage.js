import React, {useState} from "react";
import "./pages.css";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as btoData from "../data/btoData.json";

function Map(){
  const[selectedBto , setSelectedBto] = useState(null);
  return (
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
  );
}



// function Map(){
//   return (
//     <GoogleMap
//     defaultZoom={10}
//     defaultCenter={{ lat:45.421, lng:-75.697 }}
//     >
// </GoogleMap>
//   );
// }

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
