'use client';

import React from 'react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({ 
  message = "Loading...", 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerSizes = {
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${containerSizes[size]}`}>
      <div 
        className={`${sizeClasses[size]} border-2 border-red-500 border-t-transparent rounded-full animate-spin mb-4`}
        role="status"
        aria-label="Loading"
      />
      <p className="text-gray-400 text-sm font-medium animate-pulse">
        {message}
      </p>
    </div>
  );
};

export default Loading;
