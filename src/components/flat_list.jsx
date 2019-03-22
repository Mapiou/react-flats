import React from 'react';

import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {
        props.flats.map((flat, index) => {
          return (
            <Flat
              flat={flat}
              index={index}
              key={flat.lat}
              selectedFlat={props.selectedFlat.name === flat.name}
              selectFlatFunction={props.selectFlatFunction}
            />
          );
        })
      }
    </div>
  );
}

export default FlatList;
