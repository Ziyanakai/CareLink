import React from 'react';
import { Icon } from './Icon';

interface OnboardingModalProps {
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 max-w-sm w-full text-center">
            <Icon name="info" className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Welcome to CareLink</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                In an emergency, press and hold the large red button for 3 seconds to send an alert with your location to your trusted contacts.
            </p>
            <button
                onClick={onClose}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-transform duration-150 transform hover:scale-105"
            >
                Got It
            </button>
        </div>
    </div>
);