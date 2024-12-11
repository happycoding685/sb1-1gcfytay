import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a 
      href={href} 
      className="text-gray-800 hover:text-gray-600 transition-colors"
    >
      {children}
    </a>
  );
}