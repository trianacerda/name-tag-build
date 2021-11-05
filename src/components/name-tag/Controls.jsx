import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({
  greeting,
  tagName,
  onNameChange,
  onGreetingChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="greeting">Greeting</label>
      <input
        id="greeting"
        name="greeting"
        type="text"
        value={greeting}
        onChange={onGreetingChange}
      />

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={tagName}
        onChange={onNameChange}
      />
      <button aria-label="btn">Submit</button>
    </form>
  );
}

Controls.propTypes = {
  tagName: PropType.string.isRequired,
  greeting: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onGreetingChange: PropTypes.func.isRequired
}
