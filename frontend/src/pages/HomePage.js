import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from '../components/About';
import PreviousWork from '../components/PreviousWork';
import ProjectCardOverlay from '../components/ProjectCardOverlay';
import insync from '../images/InSync.png';
import './ProjectsPage.css';
import useLenis from '../hooks/useLenis';

gsap.registerPlugin(ScrollTrigger);

const insyncProject = {
  title: 'InSync',
  date: 'Jan 2026',
  image: insync,
  subtitle: 'Web Design and Development',
  progress: 30,
};

const HomePage = () => {
  useLenis();
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const insyncCards = self.selector('.insync-card');
      if (insyncCards.length > 0) {
        const insyncCard = insyncCards[0];
        const imageWrapper = insyncCard.querySelector('.project-image-wrapper');

        gsap.fromTo(
          imageWrapper,
          {
            height: '260px',
          },
          {
            height: '600px',
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: insyncCard,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            },
          }
        );
      }
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={main}>
      <About />
      <PreviousWork />
      <div className="featured-project-container">
        <h2 style={{ textAlign: 'center' }}>
            Featured Project
        </h2>
        <div className="project-card insync-card relative">
          <div className="project-image-wrapper">
            <img src={insyncProject.image} alt={`${insyncProject.title} logo`} className="project-image" />
          </div>
          
          <ProjectCardOverlay title={insyncProject.title} subtitle={insyncProject.subtitle} progress={insyncProject.progress} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

