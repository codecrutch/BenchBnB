import React from 'react';

const BenchIndexItem = ({bench}) => {
  return (
    <li>
      {bench.description}
      <br />
      {bench.lat}
      <br />
      {bench.lng}
    </li>
  );
};

export default BenchIndexItem;
