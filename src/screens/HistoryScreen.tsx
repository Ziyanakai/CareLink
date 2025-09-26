import React from 'react';
import type { AlertLog } from '../types';
import { Icon } from '../components/Icon';

interface HistoryScreenProps {
  history: AlertLog[];
}

export const HistoryScreen: React.FC<HistoryScreenProps> = ({ history }) => (
  <div>
    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Alert History</h1>
    <div className="space-y-3">
      {history.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">No alerts have been sent yet.</p>
      ) : (
        history.slice().reverse().map(log => (
          <div key={log.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <Icon name="clock" className="w-5 h-5 mr-2" />
                <p className="font-semibold">{log.timestamp.toLocaleString()}</p>
            </div>
            {log.location &&
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Icon name="map-pin" className="w-4 h-4 mr-2" />
                    <p>Lat: {log.location.latitude.toFixed(4)}, Lon: {log.location.longitude.toFixed(4)}</p>
                </div>
            }
          </div>
        ))
      )}
    </div>
  </div>
);