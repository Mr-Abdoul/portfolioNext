"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { useForm } from '@formspree/react';



// const handelSubmit = async (e) =>{
//   e.preventDefault();
//  console.log(data);
//   // 
//   const JSONdata = JSON.stringify(data);
//   const endpoint = "/api/send";
//   // from the request for sending data to the server.
//   const options = {
//     // the method is POST because we are sending data.
//     method: 'POST',
//     // tell the server we're sending JSON.
//     Headers: {
//       'Content-Type': 'application.json',
//     },
//     // body of the request is the JSON data we created above.
//     body: JSONdata,
//   };

//   const response = await fetch(endpoint, options);
//   const resData = await response.json();
//   console.log(resData);

//   if (response.status === 200) {
//     console.log("Message sent.")
//   }
// }

// const [state, handleSubmit, reset] = useForm("mleqjqew");

// const handleFormSubmit = async (event) => {

// };
// let isFormValid = email && subject && message;
// if (!isFormValid) {
//   // Affiche un message d'erreur ou effectue une action appropriée
//   console.error('Veuillez remplir tous les champs du formulaire.');
//   return;
// }
//  disabled={isFormValid}

const EmailSection = () => {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const isFormValid = email && subject && message;

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (!isFormValid) {
      setFormStatus('Veuillez remplir tous les champs du formulaire.');
      
    }

    setIsButtonDisabled(true);

    let data = {
      message: message, // ou simplement message
      email: email,
      subject: subject,
    };
    
    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json()
      })
      .then(() => {
        // Réinitialisez les champs du formulaire après la soumission réussie
        setFormStatus('Message envoyé avec succès!');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch(error => {
        setFormStatus('Erreur lors de l\'envoi du formulaire.');
        console.error('Error submitting the form:', error);
      })
      .finally(() => {
        setIsButtonDisabled(false);
       
      });

  };


  return (
    <section id='contact' className='grid md:grid-cols-2 my-2 md:my-2 py-24 gap-4'>
      <div>
        <h1 className='text-4xl font-blod text-white mb-12'>Contact Me</h1>
        <h5 className='text-xl font-bold text-white my-2 '>  Let Connect</h5>
        <p className='text-[#ADB7BE] mb-4max-w-md'>
          {""}
          I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>
        
      </div>
      <form className='flex flex-col grap-6' onSubmit={handleFormSubmit}>
        <div className='mb-6'>
          <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
            Your email
          </label>
          <input 
          type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            name="email" 
            id="email"
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='Enter your email@gmail.com'
          />
        </div>
        <div className='mb-6'>
          <label htmlFor="Subject" className='text-white block mt-4 text-sm font-medium'>
            Subject
          </label>
          <input 
          type="text"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            name="subject" 
            id="subject"
            className='bg-[#18191E] mt-4 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='just say hi'
          />
        </div>
        <div className='mb-6'>
          <label htmlFor="message" className='text-white block mt-4 text-sm font-medium'>
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => { setMessage(e.target.value) }}
            name="message"
            id="message"
            className='bg-[#18191E] mt-4 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder="Let's talk about... "
          />
        </div>
        <button
          type='submit'
          className='bg-primary-500 hover:bg-primary-700 text-white font-medium py-2.5 rounded-lg w-full'
          disabled={!isFormValid || isButtonDisabled}>
          Send Message
        </button>
        {formStatus && <p style={{ color: formStatus.includes('succès') ? 'green' : 'red' }}>{formStatus}</p>}
          {/* <p className='text-secondary-500 text-sm mt-2'>
            Email sent successfully
          </p> */}
      </form>
    </section>
  )
}

export default EmailSection