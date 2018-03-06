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
  }

  return (
    <div>
      <form ref={(form) => { repForm = form; }} onSubmit={submitRepForm}>
        <div className="form-group">
          <input type="text" id="address" ref={(input) => { address = input }} required />
          <label htmlFor="address">Address</label>
        </div>
        <div className="form-group">
          <input type="text" id="city" ref={(input) => { city = input }} required />
          <label htmlFor="city">City</label>
        </div>
        <div className="form-group">
          <input type="text" id="state" ref={(input) => { state = input }} required />
          <label htmlFor="state">State</label>
        </div>
        <div className="form-group">
          <input type="text" id="zip" ref={(input) => {zip = input}} required />
          <label htmlFor="zip">Zip</label>
        </div>
        <div className="form-group full-width">
          <label>Level of Representation</label>
          <select name="level" id="level" className="full-width" ref={(select) => { level = select }} required>
            <option value="">Please choose a level of representation</option>
            <option value="administrativeArea1">Administrative Area 1</option>
            <option value="administrativeArea2">Administrative Area 2</option>
            <option value="country">Country</option>
            <option value="locality">Locality</option>
            <option value="international">International</option>
            <option value="regional">Regional</option>
            <option value="special">Special</option>
            <option value="subLocality1">Sub Locality 1</option>
            <option value="subLocality2">Sub Locality 2</option>
          </select>
        </div>
        <button type="submit">Enter</button>
      </form>

      <div className="primary container">
        {(props.data.representatives) ? <Reps /> : ''} 
        {(props.data.local_elections) ? <Elections /> : ''}
      </div>

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
