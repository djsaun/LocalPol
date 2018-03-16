import React from 'react'
import { connect } from 'react-redux'
import ElectionList from './ElectionList'
import Polls from './Polls'
import Map from './Map'

const Elections = props => {
  return (
    <div>
      {(props.data.local_elections.error === true) ? props.data.local_elections.error_message :
        <div className="election-section">
          <ElectionList />
          <Polls />
          <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_CIVIC_INFO_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            isMarkerShown
          />
        </div>
      }  
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.getData
})

export default connect(mapStateToProps)(Elections);
