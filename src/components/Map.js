import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const pollLocationMap = withScriptjs(withGoogleMap((props) =>

  <GoogleMap></GoogleMap>
))

export default pollLocationMap;
