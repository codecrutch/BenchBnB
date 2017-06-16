import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../actions/session_actions';

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
