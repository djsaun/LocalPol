import React from 'react'
import { connect } from 'react-redux'
import { getReps } from '../actions/actionCreators'

const Representatives = ({dispatch}) => {
  let repForm
  let address
  let city
  let state
  let zip

  function submitRepForm(e) {
    e.preventDefault();
    console.log('test')
    dispatch(getReps())
    repForm.reset()
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
  Data: state.getReps
})

export default connect(mapStateToProps)(Representatives);
