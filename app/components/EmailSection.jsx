"use client"
import React, { useState } from 'react';
import GithubIcon from "../../public/github-icon.svg";

import Link from "next/link";
import Image from 'next/image';
import { useForm } from '@formspree/react';

const EmailSection = () => {


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

const [state, handleSubmit] = useForm("mleqjqew");

return (
  <section id='contact' className='grid md:grid-cols-2 my-2 md:my-2 py-24 gap-4'>
    <div>
      <h1 className='text-4xl font-blod text-white mb-12'>Contact Me</h1>
      <h5 className='text-xl font-bold text-white my-2 '>  Let's Connect</h5>
      <p className='text-[#ADB7BE] mb-4max-w-md'>
        {""}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos numquam quis
        laboriosam expedita nemo optio illo suscipit pariatur corrupti!
      </p>
      <div className='socials flex flex-row gap-2'>
        <Link href={"github.com"}>
          <Image src={GithubIcon} alt='Github Icon' />
        </Link>

      </div>
    </div>
    <form className='flex flex-col grap-6' onSubmit={handleSubmit}>
      <div className='mb-6'>
        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
          Your email
        </label>
        <input type="email"
          name="email" id="email"
          className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
          placeholder='abdoulaye@gmail.com'
        />
      </div>
      <div className='mb-6'>
        <label htmlFor="Subject" className='text-white block mt-4 text-sm font-medium'>
          Subject
        </label>
        <input type="text"
          name="subject" id="subject"
          className='bg-[#18191E] mt-4 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
          placeholder='just say hi'
        />
      </div>
      <div className='mb-6'>
        <label htmlFor="message" className='text-white block mt-4 text-sm font-medium'>
          Message
        </label>
        <textarea name="message" id="message" className='bg-[#18191E] mt-4 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
          placeholder="Let's talk about... "
        />
      </div>
      <button
        type='submit'
        className='bg-primary-500 hover:bg-primary-700 text-white font-medium py-2.5 rounded-lg w-full'>
        Send Message
      </button>
      {state.succeeded && (
        <p className='text-secondary-500 text-sm mt-2'>
          Email sent successfully
        </p>
      )}
    </form>
  </section>
)
}

export default EmailSection