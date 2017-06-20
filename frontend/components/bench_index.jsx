import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBenches();
  }

  render(){
    let allBenches = this.props.benches.map( bench => <BenchIndexItem key={bench.id} bench={bench} />)
    return (
      <ul>
       {allBenches}
      </ul>
    );
  }
};

export default BenchIndex;
