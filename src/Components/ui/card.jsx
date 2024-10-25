import React from 'react';

// Main Card component
export const Card = ({ children, className }) => {
  return <div className={`rounded-lg shadow-md overflow-hidden ${className}`}>{children}</div>;
};

// Card Header
export const CardHeader = ({ children, className }) => {
  return (
    <div className={`p-4  ${className}`}>
      {children}
    </div>
  );
};

// Card Content
export const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

// Card Title
export const CardTitle = ({ children, className }) => {
  return (
    <h2 className={`text-2xl font-semibold text-[#615EFC] ${className}`}>
      {children}
    </h2>
  );
};

// Card Description
export const CardDescription = ({ children, className }) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};

// Card Footer
export const CardFooter = ({ children, className }) => {
  return <div className={`p-4 bg-[#F5F5F5] border-t border-[#D1D8C5] ${className}`}>{children}</div>;
};
