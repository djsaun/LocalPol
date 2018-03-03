import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getReps, getDivisionID, getResultsByAddress } from '../actions/actionCreators'
import Reps from './Reps'

const Local = props => {
  let repForm
  let address
  let city
  let state
  let zip
  let representative

  function submitRepForm(e) {
    e.preventDefault();
    props.getResultsByAddress()
    repForm.reset();
  }
  if (props.data.local_data) {
    representative = <Reps />
    console.log(props.data.local_data.address.address)
  }

  return (
    <div>
      <p>Please enter your address to retrieve a list of your current representatives.</p>

      <form ref={(form) => { repForm = form; }} onSubmit={submitRepForm}>
        <input type="text" placeholder="Address" ref={(input) => { address = input }} />
        <input type="text" placeholder="City" ref={(input) => { city = input }} />
        <input type="text" placeholder="State" ref={(input) => { state = input }} />
        <input type="text" placeholder="Zip" ref={(input) => {zip = input}} />
        <button type="submit">Enter</button>
      </form>

      {representative}

    </div>
  )
};

const mapStateToProps = state => ({
  data: state.getData,
  stuff: state.getReps
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDivisionID,
  getReps,
  getResultsByAddress
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Local);
