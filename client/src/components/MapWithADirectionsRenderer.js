/*global google*/
import React, { Component } from 'react';

import { compose, withProps, lifecycle} from "recompose";
// Only can incorporate local states in class based components
// Recompose allows the incorporation of local states in functional components

import { withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
    DirectionsRenderer } from 'react-google-maps';

import * as btoData from "../data/btoData.json";
import { useFetch } from "../customHooks/useFetch"

import {NavBar} from "./NavBar"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { BTOTableColumn } from "../components/BTOTableColumn";


var locationNames=[]
var durationDetails=[]
var distanceDetails=[]
var mainlist=[]
var inlocation=[]


const MapWithADirectionsRenderer = compose(
  
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_WObUiYD7YpoYufR84re1LZHAJeAGXkY",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `50vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentWillMount() {
            this.setState({
                newDirections: [],
                durationDetails:[],
                distanceDetails: [],
            });
        },
        componentDidUpdate(prevProps, prevState) {
            if (prevProps.origin !== this.props.origin) {
                this.setState({
                    directions: null,
                    directions1: null,
                    directions2: null,
                    directions3: null,
                    newDirections: []
                });
                this.drawRoutes();
            }
        },
        componentDidMount() {
            this.drawRoutes();
        },

        drawRoutes() {
            // let destinations = ['Dover,Singapore', 'Jalan Membina, Singapore', 'Tampines,Singapore', 'Pasir Ris, Singapore']
            let destinations = ['Bukit Batok, Singapore',
                                'Choa Chu Kang, Singapore', 
                                'Tengah, Singapore', 
                                'Pasir Ris, Singapore',
                                'Tampines, Singapore',
                                'Woodlands, Singapore',
                                'Ang Mo Kio, Singapore',
                                'Bishan, Singapore',
                                'Geylang, Singapore']

            const DirectionsService = new google.maps.DirectionsService();
            DirectionsService.route({
                origin: this.props.origin,
                destination: destinations[0],
                travelMode: google.maps.TravelMode.TRANSIT,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                  locationNames.push(result.request.destination.query)
                  distanceDetails.push(result.routes[0].legs[0].distance.text)
                  durationDetails.push(result.routes[0].legs[0].duration.text)

                  console.log(result.routes[0].bounds.Za.i)
                  console.log(result.routes[0].bounds.Ua.j)
                  inlocation.push(result.routes[0].bounds.Za.i);
                  inlocation.push(result.routes[0].bounds.Ua.j)

                  console.log("Check this out")
                  console.log(result)

                    this.setState({
                        directions: result,
                        newDirections: this.state.newDirections.concat([result])
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });

            DirectionsService.route({
                origin: this.props.origin,
                destination: destinations[1],
                travelMode: google.maps.TravelMode.TRANSIT,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                  locationNames.push(result.request.destination.query)
                  distanceDetails.push(result.routes[0].legs[0].distance.text)
                  durationDetails.push(result.routes[0].legs[0].duration.text)

                  console.log(result.routes[0].bounds.Za.i)
                  console.log(result.routes[0].bounds.Ua.j)

                    this.setState({
                        directions1: result,
                        newDirections: this.state.newDirections.concat([result])
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });

            DirectionsService.route({
                origin: this.props.origin,
                destination: destinations[2],
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                  locationNames.push(result.request.destination.query)
                  distanceDetails.push(result.routes[0].legs[0].distance.text)
                  durationDetails.push(result.routes[0].legs[0].duration.text)

                  console.log(result.routes[0].bounds.Za.i)
                  console.log(result.routes[0].bounds.Ua.j)

                  console.log("Here")
                //   console.log(inlocation)

                    this.setState({
                        directions2: result,
                        newDirections: this.state.newDirections.concat([result])
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });

            DirectionsService.route({
                origin: this.props.origin,
                destination: destinations[3],
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                  console.log(result)
                  locationNames.push(result.request.destination.query)
                  distanceDetails.push(result.routes[0].legs[0].distance.text)
                  durationDetails.push(result.routes[0].legs[0].duration.text)

                  console.log(result.routes[0].bounds.Za.i)
                  console.log(result.routes[0].bounds.Ua.j)

                    this.setState({
                        directions3: result,
                        newDirections: this.state.newDirections.concat([result])
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });

            DirectionsService.route({
              origin: this.props.origin,
              destination: destinations[4],
              travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                locationNames.push(result.request.destination.query)
                distanceDetails.push(result.routes[0].legs[0].distance.text)
                durationDetails.push(result.routes[0].legs[0].duration.text)

                  this.setState({
                      directions3: result,
                      newDirections: this.state.newDirections.concat([result])
                  });
              } else {
                  console.error(`error fetching directions ${result}`);
              }
          });

          DirectionsService.route({
            origin: this.props.origin,
            destination: destinations[5],
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              locationNames.push(result.request.destination.query)
              distanceDetails.push(result.routes[0].legs[0].distance.text)
              durationDetails.push(result.routes[0].legs[0].duration.text)
                this.setState({
                    directions3: result,
                    newDirections: this.state.newDirections.concat([result])
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });


        DirectionsService.route({
            origin: this.props.origin,
            destination: destinations[6],
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              locationNames.push(result.request.destination.query)
              distanceDetails.push(result.routes[0].legs[0].distance.text)
              durationDetails.push(result.routes[0].legs[0].duration.text)
                this.setState({
                    directions3: result,
                    newDirections: this.state.newDirections.concat([result])
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });


        DirectionsService.route({
            origin: this.props.origin,
            destination: destinations[7],
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              locationNames.push(result.request.destination.query)
              distanceDetails.push(result.routes[0].legs[0].distance.text)
              durationDetails.push(result.routes[0].legs[0].duration.text)
                this.setState({
                    directions3: result,
                    newDirections: this.state.newDirections.concat([result])
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });

        DirectionsService.route({
            origin: this.props.origin,
            destination: destinations[8],
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              locationNames.push(result.request.destination.query)
              distanceDetails.push(result.routes[0].legs[0].distance.text)
              durationDetails.push(result.routes[0].legs[0].duration.text)
                this.setState({
                    directions3: result,
                    newDirections: this.state.newDirections.concat([result])
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });


        DirectionsService.route({
            origin: this.props.origin,
            destination: destinations[9],
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              locationNames.push(result.request.destination.query)
              distanceDetails.push(result.routes[0].legs[0].distance.text)
              durationDetails.push(result.routes[0].legs[0].duration.text)
                this.setState({
                    directions3: result,
                    newDirections: this.state.newDirections.concat([result])
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
        }
    })
)(props =>
    <div className="mapplace">
    <GoogleMap
        defaultZoom={11.5}
        defaultCenter={new google.maps.LatLng(1.3521,103.8198)}>
        {/* <DirectionsRenderer directions={props.newDirections[0]} />
        <DirectionsRenderer directions={props.newDirections[1]} />
        <DirectionsRenderer directions={props.newDirections[2]} />
       <DirectionsRenderer directions={props.newDirections[3]} />
       <DirectionsRenderer directions={props.newDirections[4]} /> 
        <DirectionsRenderer directions={props.newDirections[5]} />
       <DirectionsRenderer directions={props.newDirections[6]} />
       <DirectionsRenderer directions={props.newDirections[7]} />
       <DirectionsRenderer directions={props.newDirections[8]} />  */}

       <Marker 
        position={{ 
            lat: inlocation[0],
            lng: inlocation[1]
        }}

        />

           {btoData.features.map(bto=>( 
          <Marker 
          key = {bto.properties.PARK_ID} 
          position={{ 
            lat: bto.geometry.coordinates[1],
            lng: bto.geometry.coordinates[0]
          }}

          icon={{
            url:'/home.svg',
            scaledSize: new window.google.maps.Size(30,30)
          }}
          />  
        ))} 

        
  
  
        {/* {MarkerOn && (
          <InfoWindow
          position = {{
            lat:1.32083,
            lng: 102.819839
          }}
          onCloseClick={() => {
            MarkerOn = false;
          }}
          >
            <div>
              <h2>Test</h2>
              <p>Test</p>
              
              </div>
              </InfoWindow>
        )} */}
    {/* <p> BTO 1: {locationNames[0]} : {distanceDetails[0]} : {durationDetails[0]} </p>
    <p> BTO 2: {locationNames[1]} : {distanceDetails[1]} : {durationDetails[1]}</p>
    <p> BTO 3: {locationNames[2]} : {distanceDetails[2]} : {durationDetails[2]}</p>
    <p> BTO 4: {locationNames[3]} : {distanceDetails[3]} : {durationDetails[3]}</p>
    <p> BTO 5: {locationNames[4]} : {distanceDetails[4]} : {durationDetails[4]}</p>
    <p> BTO 6: {locationNames[5]} : {distanceDetails[5]} : {durationDetails[5]}</p> */}
     </GoogleMap> 

      <TableContainer style={{ width: 800 }} component={Paper}>
      <Table style={{ width: 800 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Houses</TableCell>
            <TableCell align="center">Distance</TableCell>
            <TableCell align="center">Duration</TableCell>

          </TableRow>
        </TableHead>
    
        <TableBody>
          <TableCell align="center" component="th" scope="row">{locationNames[0]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(distanceDetails.sort())[0]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(durationDetails.sort())[0]}</TableCell>
        </TableBody>

        <TableBody>
          <TableCell align="center" component="th" scope="row">{locationNames[1]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(distanceDetails.sort())[1]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(durationDetails.sort())[1]}</TableCell>
        </TableBody>
    
        <TableBody>
          <TableCell align="center" component="th" scope="row">{locationNames[2]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(distanceDetails.sort())[2]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(durationDetails.sort())[2]}</TableCell>
        </TableBody>

            <TableBody>
          <TableCell align="center" component="th" scope="row">{locationNames[3]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(distanceDetails.sort())[3]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(durationDetails.sort())[3]}</TableCell>
        </TableBody>

            <TableBody>
          <TableCell align="center" component="th" scope="row">{locationNames[4]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(distanceDetails.sort())[4]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(durationDetails.sort())[4]}</TableCell>
        </TableBody>

            <TableBody>
          <TableCell align="center" component="th" scope="row">{locationNames[5]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(distanceDetails.sort())[5]}</TableCell>
          <TableCell align="center" component="th" scope="row">{(durationDetails.sort())[5]}</TableCell>
        </TableBody>


        <TableBody>
        <TableCell align="center" component="th" scope="row">{locationNames[6]}</TableCell>
        <TableCell align="center" component="th" scope="row">{(distanceDetails.sort())[6]}</TableCell>
        <TableCell align="center" component="th" scope="row">{(durationDetails.sort())[6]}</TableCell>
        </TableBody>

        <TableBody>
        <TableCell align="center" component="th" scope="row">{locationNames[7]}</TableCell>
        <TableCell align="center" component="th" scope="row">{(distanceDetails.sort())[7]}</TableCell>
        <TableCell align="center" component="th" scope="row">{(durationDetails.sort())[7]}</TableCell>
        </TableBody>

        <TableBody>
        <TableCell align="center" component="th" scope="row">{locationNames[8]}</TableCell>
        <TableCell align="center" component="th" scope="row">{(distanceDetails.sort())[8]}</TableCell>
        <TableCell align="center" component="th" scope="row">{(durationDetails.sort())[8]}</TableCell>
        </TableBody>

        <TableBody>
        <TableCell align="center" component="th" scope="row">{locationNames[9]}</TableCell>
        <TableCell align="center" component="th" scope="row">{(distanceDetails.sort())[9]}</TableCell>
        <TableCell align="center" component="th" scope="row">{(durationDetails.sort())[9]}</TableCell>
        </TableBody>
        </Table>
      
   </TableContainer>
    </div>
);
export default MapWithADirectionsRenderer;


