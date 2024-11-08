"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import "@/app/home.css"

const Home = () => {

  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  return (
    <main className='main'>
      {/* Intro */}
      <section id='intro' className='intro'>
        <div className='intro-text'>
          <h1 className='intro-heading'>
            Hello!<br/>
            I&rsquo;m Taha Siraj.<br/>
            A Web Developer,<br/>
            Exploring the<br/>
            Realm of<br/>
            Generative AI.
          </h1>
        </div>
        <Image
          src="/images/profile.jpeg"
          alt='Taha Siraj'
          width={200}
          height={100}
          className='intro-image'
        />
      </section>
      {/* About */}
      <section id='about'>
        <div className='about-header'>
          <motion.div
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='about-title'>
              <strong>About Me</strong>
            </h2>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className='about-text'>
            I am a dedicated Web developer currently honing my skills at Governor Initiative of Artificial Inteligence. My focus is on building robust and scalable web applications, driven by a deep passion for coding and problem-solving. 💻
            <br/>
            <br/>
            With a keen interest in Generative AI, I am consistently striving to expand my knowledge and expertise in this exciting field. My journey is marked by a commitment to continuous learning and innovation, aiming to create impactful and efficient solutions.
          </p>
        </motion.div>
      </section>
      {/* Skills */}
      <section id='skills' className='skills-section'>
      <div className='skills-header'>
        <motion.div
          initial={{ x: 40 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='skills-title'>
            <strong>Skills</strong>
          </h2>
        </motion.div>
      </div>
      <div className='skills-container'>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
        >
          <ImHtmlFive className='skill-icon skill-icon-html skill-icon-animation' size={60} />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 150 }}
        >
          <SiCss3 className='skill-icon skill-icon-css skill-icon-animation' size={60} />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 150 }}
        >
          <FaNodeJs className='skill-icon skill-icon-nodejs skill-icon-animation' size={60} />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, type: 'spring', stiffness: 150 }}
        >
          <SiTypescript className='skill-icon skill-icon-typescript skill-icon-animation' size={60} />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, type: 'spring', stiffness: 150 }}
        >
          <FaReact className='skill-icon skill-icon-react skill-icon-animation' size={60} />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', stiffness: 150 }}
        >
          <RiNextjsFill className='skill-icon skill-icon-nextjs skill-icon-animation' size={60} />
        </motion.div>            
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.7, type: 'spring', stiffness: 150 }}
        >
          <RiTailwindCssFill className='skill-icon skill-icon-tailwind skill-icon-animation' size={60} />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.9, type: 'spring', stiffness: 150 }}
        >
          <SiShadcnui className='skill-icon skill-icon-shadcn skill-icon-animation' size={45} />
        </motion.div>
      </div>
      </section>
      {/* Projects */}
      <div className='projects-header'>
        <motion.div
          initial={{ x: 40 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='projects-title'>
            <strong>Projects</strong>
          </h2>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section id='projects' className='projects-container'>
          <div className='projects-grid-wrapper'>
            <div className='projects-grid'>
              {/* Project-1 */}
              <article className='project-article'>
                <h2 className='project-title'>
                  MovieVerse
                </h2>
                <Image
                  src="/images/MovieAppPicForPortfolio.PNG"
                  alt='Movie App'
                  width={400}
                  height={100}
                  className='project-image'
                />
                <h3 className='project-description'>Search Movies & Browse popular flicks.
                  <Link href="https://movie-app-gules-alpha.vercel.app/"
                    target="_blank"
                    prefetch={false}
                  >
                    <FaExternalLinkSquareAlt className='project-link-icon' />
                  </Link>
                </h3>
              </article>
              {/* Project-2 */}
              <article className='project-article'>
                <h2 className='project-title'>Password Generator</h2>
                <Image
                  src="/images/passwordgenerator.PNG"
                  alt='Password Generator'
                  width={400}
                  height={100}
                  className='project-image'
                />
                <h3 className='project-description'>Create a secure password with just few clicks.
                  <Link href="https://password-generator-project-9-next-js.vercel.app/"
                    target="_blank"
                    prefetch={false}  
                  >
                    <FaExternalLinkSquareAlt className='project-link-icon' />
                  </Link>
                </h3>
              </article>
              {/* Project-3 */}
              <article className='project-article'>
                <h2 className='project-title'>Pomodoro Timer</h2>
                <Image
                  src="/images/PomodoroTimer.PNG"
                  alt='Pomodoro Timer'
                  width={400}
                  height={100}
                  className='project-image'
                />
                <h3 className='project-description'>Transforms time into a valuable ally.
                  <Link href="https://pomodoro-timer-project-14-next-js.vercel.app/"
                    target="_blank"
                    prefetch={false}  
                  >
                    <FaExternalLinkSquareAlt className='project-link-icon' />
                  </Link>
                </h3>
              </article>
              {/* Project-4 */}
              <article className='project-article'>
                <h2 className='project-title'>BMI Calculator</h2>
                <Image
                  src="/images/BMICalculator.PNG"
                  alt='BMI Calculator'
                  width={400}
                  height={100}
                  className='project-image'
                />
                <h3 className='project-description'>Easily calculate your BMI.
                  <Link href="https://bmi-calculator-project-11-next-js.vercel.app/"
                    target="_blank"
                    prefetch={false}  
                  >
                    <FaExternalLinkSquareAlt className='project-link-icon' />
                  </Link>
                </h3>
              </article>
            </div>
            <div className='view-more-button-container'>
              <Link href="/projects">
                <Button
                  type='button'
                  className='view-more-button'
                >View More</Button>
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
      <div className="scroll-to-top-container">
        <Button
          variant="ghost"
          size="icon"
          className='scroll-to-top-button'
          onClick={handleScrollToTop}
        >
          <FaArrowAltCircleUp size={40} className='scroll-to-top-icon' />
        </Button>
      </div>
    </main>
  )
}

export default Home