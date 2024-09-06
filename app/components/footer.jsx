import React from 'react';
import Image from 'next/image';

const footer = () => {
  return (
    <footer className='footer border z-10 border-[#33353F] border-l-transparent text-white'>
      <div className='container p-12 flex justify-between'>
      <div>
   <button>
   <Image
          src="/images/Mr Abdoul.jpg"
          width={80}
          height={10}
          alt='ceci est le nom de Mr Abdoul'
          className='' />
   </button>
      </div>
      <p>© 2024 Hi i'm Abdourahamane</p>
        <p className='text-slate-600'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default footer