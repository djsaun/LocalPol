import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getResultsByAddress } from '../actions/actionCreators'
import RepsList from './RepsList'

const Reps = props => {
  
  return(
    <div>
      {(!props.data.representatives.offices) ? props.data.representatives.error_message :
        <div className="representatives-section">
          <RepsList />
        </div>
      }  
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.getData
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getResultsByAddress
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Reps);
