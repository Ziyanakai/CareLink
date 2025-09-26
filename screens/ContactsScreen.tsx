
import React, { useState } from 'react';
import type { Contact } from '../types';
import { Icon } from '../components/Icon';

interface ContactsScreenProps {
  contacts: Contact[];
  onAddContact: (contact: Omit<Contact, 'id'>) => void;
  onDeleteContact: (id: string) => void;
}

export const ContactsScreen: React.FC<ContactsScreenProps> = ({ contacts, onAddContact, onDeleteContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      onAddContact({ name, phone });
      setName('');
      setPhone('');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Trusted Contacts</h1>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2 dark:text-white">Add New Contact</h2>
        <div className="mb-4">
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
        </div>
        <div className="mb-4">
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
        </div>
        <button type="submit" className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 flex items-center justify-center">
            <Icon name="user-plus" className="w-5 h-5 mr-2" /> Add Contact
        </button>
      </form>
      <div className="space-y-3">
        {contacts.map(contact => (
          <div key={contact.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <p className="font-bold dark:text-white">{contact.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{contact.phone}</p>
            </div>
            <button onClick={() => onDeleteContact(contact.id)} className="text-gray-400 hover:text-red-500">
              <Icon name="trash" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
