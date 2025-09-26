
import React, { useState, useRef, useEffect } from 'react';

interface PanicButtonProps {
    onAlert: () => void;
    isAlerting: boolean;
}

export const PanicButton: React.FC<PanicButtonProps> = ({ onAlert, isAlerting }) => {
  const [isHolding, setIsHolding] = useState(false);
  const holdTimeout = useRef<number | null>(null);

  const startHolding = () => {
    if (isAlerting) return;
    setIsHolding(true);
    holdTimeout.current = window.setTimeout(() => {
      onAlert();
      setIsHolding(false); // Reset visual state
    }, 3000);
  };

  const stopHolding = () => {
    setIsHolding(false);
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
      holdTimeout.current = null;
    }
  };

  // Ensure timeout is cleared on unmount
  useEffect(() => {
    return () => {
      if (holdTimeout.current) {
        clearTimeout(holdTimeout.current);
      }
    };
  }, []);
  
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center select-none">
      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      
      {/* Progress fill element */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div 
          className="absolute bottom-0 left-0 w-full bg-red-500"
          style={{
            height: isHolding ? '100%' : '0%',
            transition: isHolding ? 'height 3s linear' : 'height 0.3s ease-out'
          }}
        ></div>
      </div>
      
      <button
        onMouseDown={startHolding}
        onMouseUp={stopHolding}
        onMouseLeave={stopHolding}
        onTouchStart={startHolding}
        onTouchEnd={stopHolding}
        disabled={isAlerting}
        className="relative w-full h-full rounded-full bg-red-600/50 flex items-center justify-center text-white text-3xl font-bold uppercase tracking-widest focus:outline-none transition-transform duration-150 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-custom"
      >
        SOS
      </button>
    </div>
  );
};
