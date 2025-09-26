
import React from 'react';
import { Screen } from '../constants';
import { Icon } from './Icon';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate }) => {
  const navItems = [
    { screen: Screen.Home, icon: 'home', label: 'Home' },
    { screen: Screen.Contacts, icon: 'contacts', label: 'Contacts' },
    { screen: Screen.History, icon: 'history', label: 'History' },
    { screen: Screen.Settings, icon: 'settings', label: 'Settings' },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="flex justify-around max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.screen}
            onClick={() => onNavigate(item.screen)}
            className={`flex flex-col items-center justify-center w-full pt-3 pb-2 text-sm transition-colors duration-200 ${
              activeScreen === item.screen
                ? 'text-red-500 dark:text-red-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400'
            }`}
          >
            <Icon name={item.icon} className="w-6 h-6 mb-1" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
