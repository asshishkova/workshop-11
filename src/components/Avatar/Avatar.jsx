import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({ round, backgroundColor, size, label, ...props }) => {
  const mode = round ? 'storybook-avatar--round' : 'storybook-avatar--squared';
  return (
    <button
      type="button"
      className={['storybook-avatar', `storybook-avatar--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Avatar.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  round: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  backgroundColor: null,
  round: false,
  size: 'medium',
  onClick: undefined,
};
