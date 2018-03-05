import React from 'react'
import { connect } from 'react-redux'

const ElectionList = props => {
  return (
    <div>
      <h3>Upcoming Elections</h3>

      <div className="election">
        <h5>{props.data.local_elections.election.name}</h5>
        <p>Date: {props.data.local_elections.election.electionDay}</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.getData
})

export default connect(mapStateToProps)(ElectionList);
