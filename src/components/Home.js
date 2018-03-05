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
  let representatives

  function submitRepForm(e) {
    e.preventDefault();
    props.getResultsByAddress(address.value, city.value, state.value, zip.value, level.value);
    repForm.reset();
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
