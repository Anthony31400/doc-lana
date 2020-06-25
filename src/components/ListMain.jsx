import React from 'react';
import './globalContainer.css';

function ListMain() {
  const diplayMain = (
    <ul>
      {infos.map(info => {
        <li key={info.id} className="displayMain">
          <Main />
        </li>;
      })}
    </ul>
  );
}

export default ListMain;
