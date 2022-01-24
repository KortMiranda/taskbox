import React from 'react';
import PropTypes from 'prop-types'

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className="list-item">
      <input 
        type="text" 
        value={title} 
        readOnly={true}
        placeholder="Input title"
        style={{ background: 'red' }} />
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
}