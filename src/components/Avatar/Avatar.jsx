import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({ active, backgroundColor, size, content, label, ...props }) => {
  const mode = active ? 'storybook-avatar--active' : 'storybook-avatar--disabled';
  if (content !== "letters") {
    label = '';
  }
  return (
    <button
      type="button"
      className={['storybook-avatar', `storybook-avatar--${size}`, `storybook-avatar--${content}`, mode].join(' ')}
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
  active: PropTypes.bool,
  /**
   * What background color to use
   */
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  content: PropTypes.oneOf(['photo', 'icon', 'letters']),

  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  // onClick: PropTypes.func,
  backgroundColor: PropTypes.string,

};

Avatar.defaultProps = {
  backgroundColor: null,
  active: true,
  size: 'medium',
  content: 'photo',
  // onClick: undefined,
};
