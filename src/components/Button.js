import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({ as = 'button', to, href, children, className = '', full, size = 'md', ...props }) => {
  const Component = as === 'link' ? Link : as === 'a' ? 'a' : 'button';

  const buttonClasses = classNames(
    `button button--${as}`,
    'font-semibold text-center',
    {
      'bg-btpGreen-50 border border-transparent': props.color === 'green',
      'bg-blue-900 text-white border border-transparent': props.color === 'blue',
      'border border-emerald-50': props.color === 'hollow',
      'w-full': full,
      'px-16 py-8 rounded-[.8rem]': size === 'sm',
      'px-16 py-12 rounded-md': size === 'md',
      'px-24 py-16 rounded-md': size === 'lg',
    },
    className
  );

  return (
    <Component
      to={as === 'link' ? to : undefined}
      href={as === 'a' ? href : undefined}
      className={buttonClasses}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  as: PropTypes.oneOf(['button', 'a', 'link']),
  to: PropTypes.string,
  full: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['light', 'dark', 'hollow']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl',])
};
