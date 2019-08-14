import React from 'react';

const AdditionalFeature = props => {

  addFeature = e => {
    e.preventDefault();
    props.addNewFeature()
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
