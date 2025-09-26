
import React, { useState, useEffect, useCallback } from 'react';
import type { Contact, AlertLog } from './types';
import { Screen } from './constants';
import { useGeolocation } from './hooks/useGeolocation';
import { MOCK_CONTACTS } from './data/mock';

// Components
import { BottomNav } from './components/BottomNav';
import { OnboardingModal } from './components/OnboardingModal';
import { AlertModal } from './components/AlertModal';

// Screens
import { HomeScreen } from './screens/HomeScreen';
import { ContactsScreen } from './screens/ContactsScreen';
import { HistoryScreen } from './screens/HistoryScreen';
import { SettingsScreen } from './screens/SettingsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Home);
  const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS);
  const [alertHistory, setAlertHistory] = useState<AlertLog[]>([]);
  const [isAlerting, setIsAlerting] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const { location, error, loading, getLocation } = useGeolocation();
  
  useEffect(() => {
    // Check if it's the first visit
    const firstVisit = localStorage.getItem('carelink-first-visit');
    if (!firstVisit) {
      setShowOnboarding(true);
      localStorage.setItem('carelink-first-visit', 'false');
    }
  }, []);

  const handleAlert = useCallback(() => {
    console.log('Alert triggered!');
    setIsAlerting(true);
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    if (isAlerting && !loading) {
      const newAlert: AlertLog = {
        id: new Date().toISOString(),
        timestamp: new Date(),
        location: location,
      };
      setAlertHistory(prev => [...prev, newAlert]);
      // In a real app, this is where you'd trigger API calls to send notifications/SMS
      console.log('Sending alert with data:', newAlert);
      if (error) {
        console.error("Geolocation Error:", error);
      }
    }
    // Note: 'location' is intentionally omitted from deps to only trigger on loading state change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAlerting, loading, error]);

  const handleCloseAlertModal = () => {
    setIsAlerting(false);
  }
  
  const handleAddContact = (contact: Omit<Contact, 'id'>) => {
    const newContact: Contact = { ...contact, id: new Date().toISOString() };
    setContacts(prev => [...prev, newContact]);
  }

  const handleDeleteContact = (id: string) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  }
  
  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Home:
        return <HomeScreen onAlert={handleAlert} isAlerting={isAlerting} />;
      case Screen.Contacts:
        return <ContactsScreen contacts={contacts} onAddContact={handleAddContact} onDeleteContact={handleDeleteContact} />;
      case Screen.History:
        return <HistoryScreen history={alertHistory} />;
      case Screen.Settings:
        return <SettingsScreen />;
      default:
        return <HomeScreen onAlert={handleAlert} isAlerting={isAlerting} />;
    }
  };

  return (
    <div className="h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto max-w-md h-full bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
        <header className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-red-500">CareLink</h1>
        </header>
        <main className="flex-grow overflow-y-auto p-4 pb-20">
            {renderScreen()}
        </main>
        <BottomNav activeScreen={currentScreen} onNavigate={setCurrentScreen} />
      </div>

      {showOnboarding && <OnboardingModal onClose={() => setShowOnboarding(false)} />}

      {isAlerting && <AlertModal onClose={handleCloseAlertModal} location={location} contacts={contacts}/>}
    </div>
  );
}
