import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getReps, getDivisionID, getResultsByAddress } from '../actions/actionCreators'
import Reps from './Reps'

const Home = props => {
  let repForm
  let address
  let city
  let state
  let zip
  let level
  let representatives

  function submitRepForm(e) {
    e.preventDefault();
    console.log(level.value)
    props.getResultsByAddress(address.value, city.value, state.value, zip.value, level.value)
    repForm.reset();
  }

  if (props.data.local_data) {
    if (props.data.local_data.representatives.offices || props.data.local_data.representatives.officials) {
      representatives = <Reps />
    } else {
      representatives = 'No results have been found. Please try another search.'
    }
  }

  return (
    <div>
      <p>Please enter your address to retrieve a list of your current representatives.</p>

      <form ref={(form) => { repForm = form; }} onSubmit={submitRepForm}>
        <input type="text" placeholder="Address" ref={(input) => { address = input }} required />
        <input type="text" placeholder="City" ref={(input) => { city = input }} required />
        <input type="text" placeholder="State" ref={(input) => { state = input }} required />
        <input type="text" placeholder="Zip" ref={(input) => {zip = input}} required />
        <select name="level" id="level" ref={(select) => { level = select }}>
          <option value="country">Country</option>
          <option value="international">International</option>
          <option value="locality">Locality</option>
          <option value="regional">Regional</option>
        </select>
        <button type="submit">Enter</button>
      </form>

      {representatives}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
