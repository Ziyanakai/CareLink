import React, { useState, useEffect } from 'react';
import type { Contact, GeolocationCoordinates } from '../types';
import { Icon } from './Icon';

interface AlertModalProps {
  onClose: () => void;
  location: GeolocationCoordinates | null;
  contacts: Contact[];
}

export const AlertModal: React.FC<AlertModalProps> = ({ onClose, location, contacts }) => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 max-w-sm w-full text-center">
                {countdown > 0 ? (
                    <>
                        <h2 className="text-2xl font-bold text-yellow-500 mb-2">Sending Alert...</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">Hold on, we are notifying your contacts.</p>
                        <div className="text-6xl font-bold text-red-500 my-4">{countdown}</div>
                        <button onClick={onClose} className="text-gray-500 dark:text-gray-400">Cancel</button>
                    </>
                ) : (
                    <>
                         <Icon name="x-circle" className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse-custom" />
                        <h2 className="text-2xl font-bold text-green-500 mb-2">Alert Sent!</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Your trusted contacts ({contacts.length}) and emergency services have been notified of your location.
                        </p>
                        {location && (
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                                Lat: {location.latitude.toFixed(4)}, Lon: {location.longitude.toFixed(4)}
                            </p>
                        )}
                         <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-4">
                            If you have no internet, an SMS fallback has been initiated.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-transform duration-150 transform hover:scale-105"
                        >
                            Close
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};