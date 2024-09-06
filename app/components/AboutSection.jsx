"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                 <li>Javascript</li>
                 <li>React</li>
                 <li>Next.js</li>
                <li>Node.js</li>
                <li>Typescripte</li>
                <li>Express.js</li>
                <li>Tailwind css</li>
                <li>Html</li>
                <li>css</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Codeloccol</li>
                <li>OpenClassRoom</li>
                <li>Coursera</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='list-disc pl-2'>
                <li>OpenClassRoom</li>
                <li>Google Professional cloud Developer</li>
                <li>Coursera</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useState();

    const handelTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:grap-16 sm:py-16'>
                <img src={"/images/me3.jpg"} alt='codeloccol-image' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-blod text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a full stack web developer with a passion for creating interactive and responsive web application. I have experience working with Javascript, React, Node.js, PHP, HTML, CSS and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton
                            selectTab={() => handelTabChange("skills")}
                            active={tab === "skills"}>
                            {""}
                            Skills {""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handelTabChange("education")}
                            active={tab === "education"}>
                            {""}
                            Edication {""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handelTabChange("certification")}
                            active={tab === "certification"}>
                            {""}
                            Certifications {""}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection