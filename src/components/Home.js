import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getResultsByAddress } from '../actions/actionCreators'
import Reps from './Reps'
import Elections from './Elections'

const Home = props => {
  let repForm
  let address
  let city
  let state
  let zip
  let level

  function submitRepForm(e) {
    e.preventDefault();
    props.getResultsByAddress(address.value, city.value, state.value, zip.value, level.value);
    repForm.reset();
  }

  return (
    <div>
      <p>Please enter your address to retrieve a list of your current representatives.</p>

      <form ref={(form) => { repForm = form; }} onSubmit={submitRepForm}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="Address" ref={(input) => { address = input }} required />
        <label htmlFor="city">City</label>
        <input type="text" id="city" placeholder="City" ref={(input) => { city = input }} required />
        <label htmlFor="state">State</label>
        <input type="text" id="state" placeholder="State" ref={(input) => { state = input }} required />
        <label htmlFor="zip">Zip</label>
        <input type="text" id="zip" placeholder="Zip" ref={(input) => {zip = input}} required />
        <select name="level" id="level" ref={(select) => { level = select }}>
          <option value="country">Country</option>
          <option value="international">International</option>
          <option value="locality">Locality</option>
          <option value="regional">Regional</option>
        </select>
        <button type="submit">Enter</button>
      </form>

      {(props.data.representatives) ? <Reps /> : ''} 
      {(props.data.local_elections) ? <Elections /> : ''}
      
      
    </div>
  )
};

const mapStateToProps = state => ({
  data: state.getData
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getResultsByAddress
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
