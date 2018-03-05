import React from 'react'
import { connect } from 'react-redux'

const Polls = props => {
  return(
    <div>
      <h3>Nearest Polling Stations</h3>

      {props.data.local_elections.locations.slice(0, 5).map((location, i) => 
        <div key={i} className="location">
          <p className="name">{location.address.locationName}</p>
          <div className="address">
            <p>{location.address.line1}</p>
            <p>{location.address.city}, {location.address.state} {location.address.zip}</p>
          </div>
          <p className="hours">Hours: {location.pollingHours}</p>
        </div>
      )
      
      }
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.getData
})

export default connect(mapStateToProps)(Polls);
