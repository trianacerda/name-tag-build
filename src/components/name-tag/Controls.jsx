/* eslint-disable quotes */
import React from "react";
import PropTypes from "prop-types";

export default function Controls({ onNameChange, onGreetingChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Greeting
        <input aria-label="greeting" type="text" onChange={onGreetingChange} />
      </label>

      <label>
        Name
        <input aria-label="name" type="text" onChange={onNameChange} />
      </label>

      <button aria-label="btn">Submit</button>
    </form>
  );
}

Controls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onGreetingChange: PropTypes.func.isRequired,
};
