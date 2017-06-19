import React from 'react';
import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { fetchBenches } from '../actions/bench_actions';
import { benchToArray } from '../util/selectors';

const mapStateToProps = (state) => {
  return ({
    benches: benchToArray(state.benches) //may need selector
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
)(BenchIndex);
