import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { benchToArray } from '../util/selectors';
import { fetchBenches } from '../actions/bench_actions';

const mapStateToProps = (state) => {
  return ({
    benches: benchToArray(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBenches: () => dispatch(fetchBenches())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
