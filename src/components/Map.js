import React from 'react'
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>

  <div>
    <GoogleMap 
      defaultZoom={12}
      defaultCenter={{ lat: props.data.coordinates.lat, lng: props.data.coordinates.lng }}
    />

    {props.data.local_elections.location_coordinates.map((coordinates, i)=> {

      const lat = coordinates.geometry.location.lat;
      const lng = coordinates.geometry.location.lng;
      const locationName = props.data.local_elections.locations[i].address.locationName;

      return (
        <Marker
          key={{i}}
          position={{lat, lng}}
          title={locationName}
        />
      )
    })}
  </div>

))

const mapStateToProps = state => ({
  data: state.getData
})

export default connect(mapStateToProps)(Map);
