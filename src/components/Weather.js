import React from 'react';

function Weather(props) {
  return (
    <div>
      <h2>Date and time: { props.dt }</h2>
    </div>
  );
};

export default Weather;