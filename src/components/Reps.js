import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getReps, getDivisionID, getResultsByAddress } from '../actions/actionCreators'

const Reps = props => (
  
  <div>
    <h3>Representatives</h3>
    {
      props.data.local_data.representatives.offices.map((office, i) => 

      <div key={i}>

        {office.name}

        {office.officialIndices.map((index) => 
            <p key={index}>{props.data.local_data.representatives.officials[index].name}</p>,
        )}
          
      </div>
      )
    }
  </div>
)

const mapStateToProps = state => ({
  data: state.getData
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDivisionID,
  getReps,
  getResultsByAddress
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Reps);
