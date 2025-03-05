'use client';
import { useState, FormEvent } from 'react';
import { submitContactForm, validateContactForm, ContactFormData } from '../models/contactModel';

export const useContactController = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState<string>('');
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const validationError = validateContactForm(formData);
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setIsSuccessful(true);
        (e.target as HTMLFormElement).reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(result.message);
      }
    } catch (err) {
        console.log((err as Error).message);
      setError('Something went wrong, please try again later...');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, error, isSuccessful, isLoading, handleSend, handleInputChange };
};