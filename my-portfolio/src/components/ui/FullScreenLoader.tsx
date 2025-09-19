import React from 'react';
import Spinner from './Spinner';

interface FullScreenLoaderProps {
  message?: string;
  variant?: 'simple' | 'fancy';
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ 
  message = 'Loading...', 
  variant = 'simple' 
}) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      {/* Background with blur effect */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #0F0E0E 0%, #0F0E0E 60%, #F3F2EC 320%)' }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <Spinner variant={variant} size="lg" />
        <p className="text-white text-lg font-medium">{message}</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;