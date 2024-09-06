"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/my cv.png'; // Chemin vers ton fichier PDF dans le répertoire public
        link.download = 'my cv.png'; // Nom du fichier lors du téléchargement
        link.click();
    };

    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className='mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'>
                            Hello, I am {""}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Mr.Abdoul',
                                1000,
                                'Web Developer',
                                1000,
                                'Designer',
                                1000,
                                'Mantor',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-base sm:text-lg mb-6 lg:text-xl'>
                        Enthusiastic about coding and passionate about emerging technologies, 
                        I am a developer with a deep passion for creating innovative solutions, 
                        I am committed to tackling development challenges with creativity and precision, 
                        Always eager to learn and take on new challenges.
                    </p>
                    <div>
                        {/* <button className='px-6 py-3 w-fullsm w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 to-secondary-800 hover:bg-slate-200 text-white'>
                            Hire Me
                        </button> */}
                        <button
                            onClick={handleDownload} // Appel de la fonction pour télécharger le PDF
                            className='px-1 py-1 w-fullsm w-fit rounded-full bg-gradient-to-br from-primary-600 to-secondary-800 hover:bg-slate-800 text-white mt-3'
                        >
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Download CV
                            </span>
                        </button>
                        </div>
                        </div> 
                        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className='rounded bg-[#181818] w-[200px] h-[200px] lg:w-[200px] lg:h-[150px] relative'>
                        <img
                            src="/images/me2.jpg"
                            width={200}
                            height={200}
                            className='absolute translate   -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            alt="S'affiche quand l'image n'est pas disponible"
                        />
                    </div>
                </div>
                    
                
            </div>
        </section>
    );

    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className='mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'>
                            Hello, I am {""}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Mr.Abdoul',
                                1000,
                                'Web Developer',
                                1000,
                                'Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className=' text-base sm:text-lg mb-6 lg:text-xl'>
                        Enthusiastic about coding and passionate about emerging technologies, 
                        I am a developer with a deep passion for creating innovative solutions, 
                        I am committed to tackling development challenges with creativity and precision, 
                        Always eager to learn and take on new challenges.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-fullsm
                    w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 to-secondary-800  hover:bg-slate-200 text-white'>
                            Hire Me
                        </button>
                        <button className='px-1 py-1  w-fullsm
                    w-fit rounded-full bg-gradient-to-br from-primary-600 to-secondary-800 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> Dowload CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className='rounded bg-[#181818] w-[200px] h-[200px] lg:w-[200px] lg:h-[150px] relative'>
                        <img
                            src="/images/me2.jpg"
                            width={200}
                            height={200}
                            className='absolute translate   -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            alt="S'affiche quand l'image n'est pas disponible"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
