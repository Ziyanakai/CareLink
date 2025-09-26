import type { GeolocationCoordinates } from "../types";

/**
 * This utility file contains helper functions for formatting data.
 */

export const formatTimestamp = (date: Date): string => {
    return date.toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
    });
};

export const formatLocation = (location: GeolocationCoordinates): string => {
    return `Lat: ${location.latitude.toFixed(4)}, Lon: ${location.longitude.toFixed(4)}`;
};
