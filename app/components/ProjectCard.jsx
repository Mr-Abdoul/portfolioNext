import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ imgUrl, name, description, gitUrl, image }) => {
  // const img = require(`../../public${imgUrl}`);
 
  return (
    <>
      <div>
        <div className='h-52 md:h-72 rounded-xl relative group bg-no-repeat  bg-contain bg-center ' style={{ backgroundImage: `url(${image.url})` }}>
        
          <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 '>
            {/* <Link href={gitUrl} className='h-14 w-14  rounded-full  border-[#ADB7BE] hover:border-white group/link'>
              <CodeBracketIcon className='h-10 w-10  text-[#ADB7BE] absolute top-1/2 transform -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
            </Link> */}
            
          </div>
        </div>
        <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
          <h5 className='text-xl font-semibold mb-2'>{name}</h5>
          <p className='text-[#ADB7BE]'>{description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard