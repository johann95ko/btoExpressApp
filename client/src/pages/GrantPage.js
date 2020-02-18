
// import React from "react";
// import "./pages.css";
import React from "react";
import PlacesAutoComplete, {
    geocodeByAddress,
    getLatLng

} from "react-places-autocomplete";


export const GrantPage = () => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: 5,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    
  };

  return (
    <div className="pageContainer">
      <PlacesAutoComplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
      >
    
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
            
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