import React from 'react';

function Pharmacie({ data }) {
  return (
    <div>
      <h4>{data.name}</h4>
      <div>
        <p>
          <em>{data.adress}</em>
        </p>
        <p>
          <em>{data.distance}</em>
        </p>
      </div>
    </div>
  );
}

export default Pharmacie;
