import React from 'react';
import { PanicButton } from '../components/PanicButton';

interface HomeScreenProps {
    onAlert: () => void;
    isAlerting: boolean;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onAlert, isAlerting }) => (
  <div className="flex flex-col items-center justify-center h-full text-center">
    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">In an Emergency?</h1>
    <p className="text-gray-500 dark:text-gray-400 mb-8">Press and hold for 3 seconds.</p>
    <PanicButton onAlert={onAlert} isAlerting={isAlerting} />
  </div>
);