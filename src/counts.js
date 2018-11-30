import React from 'react';


const Counts = (props) => (
  <ul>
    {
      props.previous.map((count,idx) => <li key={idx}>{count}</li>)
    }
  </ul>
)

export default Counts
