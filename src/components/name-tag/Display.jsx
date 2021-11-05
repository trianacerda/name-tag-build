import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ submitName, submitGreeting }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'purple',
        color: 'white',
        border: 'yellow',
        borderRadius: '10px',
        margin: '20px',
        padding: '40px',
      }}
    >
      <h1 style={{ color: 'yellow', border: 'dotted', background: 'teal' }}>
        {submitGreeting}
      </h1>
      <h1
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'teal',
          backgroundColor: 'white',
          border: 'solid',
          borderRadius: '5px',
        }}
      >
        MY NAME IS
      </h1>
      <h1 style={{ color: 'yellow', border: 'dotted', background: 'teal' }}>
        {submitName}
      </h1>
    </div>
  );
}

Display.propTypes = {
  submitName: PropTypes.string.isRequired,
  submitGreeting: PropTypes.string.isRequired,
}