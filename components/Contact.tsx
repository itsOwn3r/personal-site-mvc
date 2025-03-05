'use client';
import React from 'react';
import { useContactController } from '../controllers/contactController';
import ContactView from '../views/ContactView';

const Contact: React.FC = () => {
  const { error, isSuccessful, isLoading, handleSend, handleInputChange } = useContactController();
  return <ContactView error={error} isSuccessful={isSuccessful} isLoading={isLoading} handleSend={handleSend} handleInputChange={handleInputChange}/>;
};

export default Contact;