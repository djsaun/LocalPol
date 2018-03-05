import React from 'react'
import { connect } from 'react-redux'
import ElectionList from './ElectionList'
import Polls from './Polls'

const Elections = props => {
  return (
    <div>
      {(props.data.local_elections.error === true) ? props.data.local_elections.error_message :
        <div className="election-section">
          <ElectionList />
          <Polls />
        </div>
      }  
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.getData
})

export default connect(mapStateToProps)(Elections);
