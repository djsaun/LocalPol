import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getReps, getDivisionID, getResultsByAddress } from '../actions/actionCreators'

const Representatives = props => {
  let repForm
  let address
  let city
  let state
  let zip

  function submitRepForm(e) {
    e.preventDefault();
    // props.getDivisionID();
    // props.getReps();
    props.getResultsByAddress()
    repForm.reset();
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
    </div>
  )
};

const mapStateToProps = state => ({
  Data: state.getData,
  test: 'test',
  stuff: state.getReps
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDivisionID,
  getReps,
  getResultsByAddress
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Representatives);
