"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from "./NavLink";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Project",
        path: "#project",
    },
    {
        title: "Contact",
        path: "#contact",
    }
];
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className='fixed w-full mx-auto border border-[#33353F] top-0  z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    <Image
                        src="/images/Mr Abdoul.jpg"
                        width={100}
                        height={15}
                        alt='ceci est le nom de Mr Abdoul'
                        className='' />
                </Link>
                <div className=" mobile-menu block md:hidden">
                    <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white'>
                        <Bars3Icon className='h-5 w-5' />
                    </button>
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    )
}

export default Navbar