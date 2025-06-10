import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', ...props }) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');
  const isHashLink = href.startsWith('#');

  if (isExternal) {
    return (
      <a 
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  if (isHashLink) {
    return (
      <a 
        href={href}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      to={href}
      className={className}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;