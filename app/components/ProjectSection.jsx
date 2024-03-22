"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import TabButton from './TabButton';


const projectData = [
    {
        id: 1,
        title: "Js Portfolio Website",
        description: "Projet 1 description",
        image: "/imgProjects/img1.png",
        alt: "suis img1",
        tag: ["All", "Web"],
        gitUrl: "/"
    },
    {
        id: 2,
        title: "Todo liste",
        description: "Projet 2 description",
        image: "/imgProjects/img2.png",
        tag: ["All", "web", "Mobile"],
        gitUrl: "/"
    },
    {
        id: 3,
        title: "Calculator Website",
        description: "Projet 3 description",
        image: "/imgProjects/img3.png",
        tag: ["All", "Web"],
        gitUrl: "/"
    },
    {
        id: 4,
        title: "React Login page Website",
        description: "Projet 4 description",
        image: "/imgProjects/img4.png",
        tag: ["All", "Web"],
        gitUrl: "/"
    },
    {
        id: 5,
        title: "React  Website",
        description: "Projet 5 description",
        image: "/imgProjects/img5.png",
        tag: ["All", "web", "Mobile"],
        gitUrl: "/"
    },
    {
        id: 6,
        title: "js jeux Website",
        description: "Projet 6 description",
        image: "/imgProjects/img6.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "/"

    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const handelTagChange = (newTag) =>{
        setTag(newTag);
    };
    const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
    )

  return (
    <>
    <h1 id='project' className='text-4xl font-blod text-white mb-4'>My Projects </h1> 
    <div  className='text-white flex flex-row justify-center items-center grap-2 py-6'>
        <ProjectTag 
            onClick={handelTagChange} 
            name="All" 
            isSelected={tag === "All"}
        />
        <ProjectTag 
            onClick={handelTagChange} 
            name="Web" 
            isSelected={tag === "Web"}
        />
        <ProjectTag 
            onClick={handelTagChange} 
            name="Mobile" 
            isSelected={tag === "Mobile"}
        />
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
            <ProjectCard key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            alt={project.alt}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
        />))}
    </div>
    </>
  )
}

export default ProjectSection