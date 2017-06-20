import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_ALL_BENCHES = "RECEIVE_ALL_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

// ACTION CREATORS
export const receiveAllBenches = (benches) => {
  return ({
    type: RECEIVE_ALL_BENCHES,
    benches
  })
}

export const addBench = (bench) => {
  return ({
    type: RECEIVE_BENCH,
    bench
  })
}

// THUNK ASYNC ACTION CREATORS

export const fetchBenches = () => dispatch => {
  return BenchAPIUtil.fetchBenches()
    .then(
      (benches) => dispatch(receiveAllBenches(benches))
    );
};

export const createBench = (bench) => dispatch => {
  return BenchAPIUtil.createBench(bench)
    .then(
      (bench) => dispatch(receiveBench(bench))
    );
};

window.fetchBenches = fetchBenches;
