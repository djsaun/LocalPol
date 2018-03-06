import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

function test() {
  return 'test';
}

const Map = withScriptjs(withGoogleMap((props) =>

  <div>
    {console.log(test())}
    <GoogleMap 
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    />
  </div>

))

export default Map;
