'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { LoaderIcon, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactViewProps {
  error: string;
  isSuccessful: boolean;
  isLoading: boolean;
  handleSend: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactView: React.FC<ContactViewProps> = ({ error, isSuccessful, isLoading, handleSend, handleInputChange }) => {
  return (
    <section id="contact" className="max-w-[800px] text-center m-[0px_auto_100px] p-[100px_0px]">
      <h2 className="numbered-heading block mb-5 text-green text-base font-normal">What’s Next?</h2>
      <h3 className="title font-bold text-6xl my-3">Get In Touch</h3>
      {error && <h4 className="error text-red-500 font-bold text-2xl my-5">{error}</h4>}
      {isLoading && <h4 className="font-bold text-2xl mt-5 text-center w-full flex justify-center mb-8">{<LoaderIcon className="size-10 animate-spin" />}</h4>}
      {isSuccessful && <h4 className="text-green font-bold text-2xl my-5">Your message has been sent to me!</h4>}
      <form onSubmit={handleSend}>
        <div className="my-4 text-center flex flex-col justify-center items-center">
          <span className="text-white">Name:</span>
          <Input disabled={isLoading} name="name" onChange={handleInputChange} className="outline-0 border-green max-w-[90%] md:max-w-[50%] text-green py-6 px-4 placeholder:text-white/40" placeholder="Name" />
        </div>
        <div className="my-4 text-center flex flex-col justify-center items-center">
          <span className="text-white">Email:</span>
          <Input disabled={isLoading} name="email" onChange={handleInputChange} className="outline-0 border-green max-w-[90%] md:max-w-[50%] text-green py-6 px-4 placeholder:text-white/40" placeholder="Email" />
        </div>
        <div className="mt-6 mb-4 text-center flex flex-col justify-center items-center">
          <span className="text-white">Message:</span>
          <textarea disabled={isLoading} name="message" onChange={handleInputChange} placeholder="Write your message here..." className="outline-0 border-1 border-green max-w-[90%] md:max-w-[50%] text-green w-full rounded-xl p-[1rem_6rem_6rem_1rem]" />
        </div>
        <div className="hover:scale-115 mt-8 w-full flex justify-center">
          <Button disabled={isLoading} className="w-full max-w-[50%] md:max-w-[20%] bg-transparent hover:bg-transparent cursor-pointer text-green border border-green rounded-md p-[1.5rem_6rem] leading-[1.6] cubicTransition duration-1000 text-[19px] resumeAnimation">
            Send <Send />
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactView;