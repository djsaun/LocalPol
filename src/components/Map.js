import React from 'react'
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>

  <div>
    <GoogleMap 
      defaultZoom={8}
      defaultCenter={{ lat: props.data.coordinates.lat, lng: props.data.coordinates.lng }}
    />
    {props.isMarkerShown && <Marker position={{ lat: props.data.coordinates.lat, lng: props.data.coordinates.lng }} />}
  </div>

))

const mapStateToProps = state => ({
  data: state.getData
})

export default connect(mapStateToProps)(Map);
