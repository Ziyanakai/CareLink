
export interface Contact {
  id: string;
  name: string;
  phone: string;
}

export interface AlertLog {
  id: string;
  timestamp: Date;
  location: GeolocationCoordinates | null;
}

export interface GeolocationCoordinates {
  latitude: number;
  longitude: number;
  accuracy: number;
}
