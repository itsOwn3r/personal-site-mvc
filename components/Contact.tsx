"use client";
import React, { FormEvent, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';
import { Send } from 'lucide-react';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState("");
    const [isSuccessful, setIsSuccessful] = useState(false);



    const handleSend = async (e: FormEvent) => {
        e.preventDefault();

        setError("");

        if (!formData.name || !formData.email || !formData.message) {
            setError("You must enter all required inputs!");
            return;
        }

        if (formData.name.length < 3) {
            setError("Something is up with your name...");
            return;
        }

        if (formData.email.length < 10 || !formData.email.includes("@") || !formData.email.includes(".")) {
            setError("Something is up with your email...");
            return;
        }

        if (formData.message.length < 20) {
            setError("Tell me more...");
            return;
        }


        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccessful(true);
                
                (e.target as HTMLFormElement).reset();
                
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })

            } else {
                setError(data.message);
            }

            console.log(data);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setError("Something went wrong, please try again later...");
        }


    }

  return (
    <section id='contact' className='max-w-[800px] text-center m-[0px_auto_100px] p-[100px_0px]'>
        <h2 className="numbered-heading block mb-5 text-green text-base font-normal">What’s Next?</h2>
        <h3 className="title font-bold text-6xl my-3">Get In Touch</h3>

        {error && <h4 className="error text-red-500 font-bold text-2xl my-5">{error}</h4>}
        {isSuccessful && <h4 className="error text-green font-bold text-2xl my-5">Your message has been sent to me!</h4>}

        <form onSubmit={handleSend}>
            <div className='my-4 text-center flex flex-col justify-center items-center'>
                <span className='text-white'>Name:</span>
                <Input name='name' onChange={(e) => setFormData((oldState) => ({...oldState, [e.target.name]: e.target.value}))} className='outline-0 border-green max-w-[90%] md:max-w-[50%] text-green py-6 px-4 placeholder:text-white/40' placeholder='Name' />
            </div>

            <div className='my-4 text-center flex flex-col justify-center items-center'>
                <span className='text-white'>Email:</span>
                <Input name='email' onChange={(e) => setFormData((oldState) => ({...oldState, [e.target.name]: e.target.value}))} className='outline-0 border-green max-w-[90%] md:max-w-[50%] text-green py-6 px-4 placeholder:text-white/40' placeholder='Email' />
            </div>

            <div className='mt-6 mb-4 text-center flex flex-col justify-center items-center'>
                <span className='text-white'>Message:</span>
                <textarea name='message' onChange={(e) => setFormData((oldState) => ({...oldState, [e.target.name]: e.target.value}))} placeholder='Write your message here...' className='outline-0 border-1 border-green max-w-[90%] md:max-w-[50%] text-green w-full rounded-xl p-[1rem_6rem_6rem_1rem]' />
            </div>


            <div className='hover:scale-115 mt-8 w-full flex justify-center'>
                <Button  className='w-full max-w-[50%] md:max-w-[20%] bg-transparent hover:bg-transparent cursor-pointer text-green border border-green rounded-md p-[1.5rem_6rem] leading-[1.6] cubicTransition duration-1000 text-[19px] resumeAnimation'>Send <Send /></Button>
            </div>

        </form>
    </section>
  )
}

export default Contact