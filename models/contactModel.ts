export interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  
  export async function submitContactForm(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error submitting form:', error);
      return { success: false, message: 'Something went wrong, please try again later...' };
    }
  }
  
  export function validateContactForm(formData: ContactFormData): string | null {
    if (!formData.name || !formData.email || !formData.message) {
      return 'You must enter all required inputs!';
    }
  
    if (formData.name.length < 3) {
      return 'Something is up with your name...';
    }
  
    if (!isEmailValid(formData.email) || formData.email.length < 10 || !formData.email.includes('@') || !formData.email.includes('.')) {
      return 'Something is up with your email...';
    }
  
    if (formData.message.length < 20) {
      return 'Tell me more...';
    }
  
    return null;
  }
  
  function isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }