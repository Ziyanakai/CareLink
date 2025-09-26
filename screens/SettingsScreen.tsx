
import React from 'react';
import { Icon } from '../components/Icon';
import { MOCK_HOTLINES } from '../data/mock';

export const SettingsScreen: React.FC = () => (
    <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Settings</h1>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3 dark:text-white">Emergency Hotlines</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">These are default hotlines. In a real app, you could customize these.</p>
            <div className="space-y-3">
                {MOCK_HOTLINES.map(hotline => (
                    <div key={hotline.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                        <span className="dark:text-gray-200">{hotline.name}</span>
                        <a href={`tel:${hotline.number}`} className="flex items-center text-red-500 dark:text-red-400 font-semibold">
                            <Icon name="phone" className="w-4 h-4 mr-2"/>
                            {hotline.number}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
