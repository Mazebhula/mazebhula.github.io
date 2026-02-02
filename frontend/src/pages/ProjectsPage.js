import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectsPage.css';
import resume from '../images/resume_builder.png';
import insync from '../images/InSync.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Resume updater',
    date: 'Dec 2025',
    description: 'Resume updater is a free, open-source, web-based resume builder created to offer a powerful alternative to paid resume services. Built with Next.js, React (TypeScript), Material-UI, and Tailwind CSS, it features PDF resume parsing with pdf-parse to automatically populate fields, a dynamic editor for personal details, work experience, education, skills, and projects, multiple customizable templates, efficient state management via React Context, and high-quality client-side PDF generation using html2pdf.js.',
    image: resume
  }
];

const ProjectsPage = () => {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const cards = self.selector('.project-card');
      cards.forEach((card) => {
        const image = card.querySelector('.project-image');

        gsap.fromTo(
          image,
          {
            y: 40,
            scale: 1.85,
          },
          {
            y: -40,
            scale: 1.15,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div className="projects-container" ref={main}>
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={`${project.title} logo`} className="project-image" />
            </div>
            <h2>{project.title}</h2>
            <p className="project-date">{project.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;