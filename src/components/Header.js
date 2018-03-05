import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from '../actions/actionCreators';

const Header = props => (
  <header>
  </header>
)

const mapStateToProps = state => ({
  Data: state.getData
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
