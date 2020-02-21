import React, {Component} from "react";
import useState from "react";
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import * as btoData from "../data/btoData.json";
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker
} = require("react-google-maps");

var destination="Bukit Panjang, Singapore";

var jalan_dist;
var jalan_time;

var geylang_dist;
var geylang_time;

var punggol_dist;
var punggol_time;

var tampines_dist;
var tampines_time;

var NTU_dist;
var NTU_time;

var detailed;
export const MapWithADirectionsRenderer = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCSaiP0qZRojgI9mRvYSpOrIg4MZsJ0f3M&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `800px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
      componentDidMount() {
        // const map = new window.google.maps.Map(document.getElementById('map'));
        const DirectionsService = new window.google.maps.DirectionsService();
        // const DirectionDisplay = new window.google.maps.DirectionsRenderer();
        const directionsDisplay = new window.google.maps.DirectionsRenderer({
            polylineOptions: {
              strokeColor: "red"
            }})

            //Jalan Membina 
            DirectionsService.route({
                origin: new window.google.maps.LatLng(1.283460,103.826710),
                destination:destination,
                travelMode: window.google.maps.TravelMode.DRIVING,
      
              }, (result, status) => {
                  jalan_dist=result.routes[0].legs[0].distance.text
                  jalan_time=result.routes[0].legs[0].duration.text
                   console.log("From Jalan Membina to Destination: " + result.routes[0].legs[0].distance.text);
                   console.log("From Jalan Membina to Destination: " + result.routes[0].legs[0].duration.text);
                if (status === window.google.maps.DirectionsStatus.OK) {
                  this.setState({
                    jalanmembina: result,
                  });
                } else {
                  console.error(`error fetching directions ${result}`);
                }
              })
        
            //Geylang Bahru
        DirectionsService.route({
            origin: new window.google.maps.LatLng(1.321780,103.870910),
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
  
          }, (result, status) => {
            geylang_dist=result.routes[0].legs[0].distance.text
            geylang_time=result.routes[0].legs[0].duration.text
            console.log("From Geylang Bahru to Destination: " + result.routes[0].legs[0].distance.text);
            console.log("From Geylang Bahru to Destination: " + result.routes[0].legs[0].duration.text);
            console.log(result)
            if (status === window.google.maps.DirectionsStatus.OK) {
              this.setState({
                geylangbahru: result,
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          })

          //Punggol 
          DirectionsService.route({
            origin: new window.google.maps.LatLng(1.398490,103.907921),
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
  
          }, (result, status) => {
            detailed=result.routes[0].legs[0].steps
            
            punggol_dist=result.routes[0].legs[0].distance.text
            punggol_time=result.routes[0].legs[0].duration.text
            console.log(result)
            console.log("From Punggol to Destination: " + result.routes[0].legs[0].distance.text);
            console.log("From Punggol to Destination: " + result.routes[0].legs[0].duration.text);
            if (status === window.google.maps.DirectionsStatus.OK) {
              this.setState({
                punggol: result,

              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          })        //Tampines 
                    DirectionsService.route({
                        origin: new window.google.maps.LatLng(1.349591,103.956787),
                        destination: destination,
                        travelMode: window.google.maps.TravelMode.DRIVING,
              
                      }, (result, status) => {
                        tampines_dist=result.routes[0].legs[0].distance.text
                        tampines_time=result.routes[0].legs[0].duration.text
                        console.log("From Tampines to Destination: " + result.routes[0].legs[0].distance.text);
                        console.log("From Tampines to Destination: " + result.routes[0].legs[0].duration.text);
                        if (status === window.google.maps.DirectionsStatus.OK) {
                          this.setState({
                            tampines: result,
                          });
                        } else {
                          console.error(`error fetching directions ${result}`);
                        }
                      })

                                    //Nanyang Technological University 
                                    DirectionsService.route({
                                        origin: new window.google.maps.LatLng(1.349850,103.682450),
                                        destination: destination,
                                        travelMode: window.google.maps.TravelMode.DRIVING,
                              
                                      }, (result, status) => {
                                        NTU_dist=result.routes[0].legs[0].distance.text
                                        NTU_time=result.routes[0].legs[0].duration.text
                                        console.log("From NTU to Destination: " + result.routes[0].legs[0].distance.text);
                                        console.log("From NTU to Destination: " + result.routes[0].legs[0].duration.text);
                                        if (status === window.google.maps.DirectionsStatus.OK) {
                                        //   console.log(result2)
                                          this.setState({
                                            NTU: result,
                                          });
                                        } else {
                                          console.error(`error fetching directions ${result}`);
                                        }
                                      })

    }
    })
  )(props =>
    <div>
      
     <GoogleMap
      defaultZoom={5}
      defaultCenter={new window.google.maps.LatLng(1.32083,102.819839)}>

        {btoData.features.map(bto=>( 
          <Marker 
          key = {bto.properties.PARK_ID} 
          position={{ 
            lat: bto.geometry.coordinates[1],
            lng: bto.geometry.coordinates[0]
          }}
          draggable = {true}
          icon={{
            url:'/home.svg',
            scaledSize: new window.google.maps.Size(40,40)
          }}
          /> 
        ))}
    <DirectionsRenderer directions={props.jalanmembina} suppressMarkers={false}/> 
    <DirectionsRenderer directions={props.geylangbahru} suppressMarkers={false} />  
    <DirectionsRenderer directions={props.punggol} suppressMarkers={true}/>  
    <DirectionsRenderer directions={props.tampines} suppressMarkers={true}/>  
    <DirectionsRenderer directions={props.NTU} suppressMarkers={true}/>  
    </GoogleMap>


    <h2>Distance and Duration to {destination}</h2>
    <p>Jalan Membina: {jalan_dist} and {jalan_time}</p>
    <p>Geylang Bahru: {geylang_dist} and {geylang_time}</p>
    <p>Punggol: {punggol_dist} and {punggol_time}</p>
    <p>Tampines: {tampines_dist} and {tampines_time}</p>
    <p>NTU: {NTU_dist} and {NTU_time}</p>


    </div>
    );
    
