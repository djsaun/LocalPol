import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Polls = props => {
  return(
    <div>
      'polls go here'
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.getData
})

export default connect(mapStateToProps)(Polls);
