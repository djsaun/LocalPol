import React from 'react'
import { connect } from 'react-redux'

const ElectionList = props => {
  return (
    <div>
      'election list'
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.getData
})

export default connect(mapStateToProps)(ElectionList);
