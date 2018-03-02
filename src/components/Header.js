import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData, getVotingInfo } from '../actions/actionCreators';

const Header = props => (
  <header>
    <button onClick={props.getData}>Get Elections</button>
    <button onClick={props.getVotingInfo}>Get Voter Info</button>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/representatives">Representatives</NavLink>
  </header>
)

const mapStateToProps = state => ({
  Data: state.getData
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData,
  getVotingInfo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
