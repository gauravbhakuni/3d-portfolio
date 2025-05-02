import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useEffect(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const ProjectCard = ({ imageSrc, imageAlt, title, description, link }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div
        className="project"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="image-wrapper relative overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300"
            style={{
              backdropFilter: isHovered ? 'blur(5px)' : 'none', // Conditional backdrop-filter
            }}
            animate={{
              backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
            }}
          >
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg font-semibold px-4 py-2 rounded border border-white/50 opacity-0 transition-opacity"
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              Visit Site
            </motion.a>
          </motion.div>
        </div>
        {title && <h2>{title}</h2>}
        {description && <p className="text-white-50 md:text-xl">{description}</p>}
      </div>
    );
  };

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <ProjectCard
              imageSrc="/images/project1.png"
              imageAlt="Photography Portfolio"
              title="The Visual Diary: My Photography Portfolio"
              description="Explore a curated collection of my photographic work, specializing in capturing the unique beauty of elopements and beyond."
              link="#" // Replace with actual link
            />
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <ProjectCard
              imageSrc="/images/project2.png"
              imageAlt="Nike Shoe Destination"
              title="Discover Your Next Pair: The Ultimate Nike Shoe Destination"
              link="#"
            />
            <ProjectCard
              imageSrc="/images/project3.png"
              imageAlt="CodeCollab App"
              title="CodeCollab: Code Together, Create Together"
              description="Real-time collaborative coding platform with built-in chat and instant code execution for seamless teamwork."
              link="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
