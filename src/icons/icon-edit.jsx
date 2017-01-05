import React, { PropTypes } from 'react';

function IconEdit({ color }) {
  const fill = color || '#C4C4C4';

  return (
    <svg fill={fill} height="24" viewBox="0 0 24 24" width="24">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

IconEdit.propTypes = {
  color: PropTypes.string
};

export default IconEdit;
