import React from 'react';
import Image from 'next/image';

const footer = () => {
  return (
    <footer className='footer border z-10 border-[#33353F] border-l-transparent text-white'>
      <div className='container p-12 flex justify-between'>
      <div>
      <Image
          src="/images/Mr Abdoul.jpg"
          width={100}
          height={15}
          alt='ceci est le nom de Mr Abdoul'
          className='' />
      </div>
        <p className='text-slate-600'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default footer