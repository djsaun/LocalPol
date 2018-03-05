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
        <select name="level" id="level" className="full-width" ref={(select) => { level = select }}>
          <option value="country">Country</option>
          <option value="international">International</option>
          <option value="locality">Locality</option>
          <option value="regional">Regional</option>
        </select>
        <button type="submit">Enter</button>
      </form>

      <div className="primary">
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
