"use client"
import React from 'react'
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import "@/app/skills.css";

const Skills = () => {
  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  return (
    <div className='skills-container'>
        {/* HTML */}
        <article className='skill-article'>
          <div className='skill-header'>
            <ImHtmlFive className='skill-icon' size={60} style={{color: '#e34c26'}} />
            <h1 className='skill-title'>
              <strong>HTML</strong>
            </h1>
          </div>
          <h2 className='skill-description'>
            HTML (HyperText Markup Language) is the standard language for creating web pages.
          </h2>
          <h3 className='skill-proficiency'>
            <strong>Proficiency:</strong><br/>
            Advanced, with expertise in building structured and semantic websites.
          </h3>
          <h4 className='skill-experience'>
            <strong>Experience:</strong><br/>
            Used extensively in building fully responsive web pages and interactive web elements for over 10 projects.
          </h4>
        </article>
        {/* CSS */}
        <article className='skill-article'>
          <div className='skill-header'>
            <SiCss3 className='skill-icon' size={60} style={{color: '#264de4'}} />
            <h1 className='skill-title'>
              <strong>CSS</strong>
            </h1>
          </div>
          <h2 className='skill-description'>
            CSS (Cascading Style Sheets) is used to style and layout web pages.
          </h2>
          <h3 className='skill-proficiency'>
            <strong>Proficiency:</strong><br/>
            Advanced, with hands-on experience in creating responsive and modern UI designs using frameworks like Tailwind CSS and animations.
          </h3>
          <h4 className='skill-experience'>
            <strong>Experience:</strong><br/>
            Applied in projects for creating fully responsive designs with cross-browser compatibility.
          </h4>
        </article>
        {/* TypeScript */}
        <article className='skill-article'>
          <div className='skill-header'>
            <SiTypescript className='skill-icon' size={60} style={{color: '#007acc'}} />
            <h1 className='skill-title'>
              <strong>TypeScript</strong>
            </h1>
          </div>
          <h2 className='skill-description'>
            TypeScript is a typed superset of JavaScript that enhances code quality by providing static types.
          </h2>
          <h3 className='skill-proficiency'>
            <strong>Proficiency:</strong><br/>
            Intermediate, with in-depth knowledge of object-oriented programming principles and type-checking.
          </h3>
          <h4 className='skill-experience'>
            <strong>Experience:</strong><br/>
            Developed scalable and maintainable applications using TypeScript in multiple personal projects.
          </h4>
        </article>
        {/* React */}
        <article className='skill-article'>
          <div className='skill-header'>
            <FaReact className='skill-icon' size={60} style={{color: '#61dafb'}} />
            <h1 className='skill-title'>
              <strong>React</strong>
            </h1>
          </div>
          <h2 className='skill-description'>
            React is a JavaScript library for building user interfaces using components.
          </h2>
          <h3 className='skill-proficiency'>
            <strong>Proficiency:</strong><br/>
            Intermediate, with expertise in building reusable components, managing state with useState, and handling side effects with useEffect.
          </h3>
          <h4 className='skill-experience'>
            <strong>Experience:</strong><br/>
            Built interactive web applications like a weather widget, a password generator, a BMI calculator & many more using React.
          </h4>
        </article>
        {/* Next.js */}
        <article className='skill-article'>
          <div className='skill-header'>
            <RiNextjsFill className='skill-icon' size={60} style={{color: '#000000'}} />
            <h1 className='skill-title'>
              <strong>Next.js</strong>
            </h1>
          </div>
          <h2 className='skill-description'>
            Next.js is a React framework that enables server-side rendering and static site generation for optimal performance.
          </h2>
          <h3 className='skill-proficiency'>
            <strong>Proficiency:</strong><br/>
            Intermediate, proficient in building SEO-friendly web applications with API integration.
          </h3>
          <h4 className='skill-experience'>
            <strong>Experience:</strong><br/>
            Developed a weather widget project and worked on multiple projects focused on performance optimization using Next.js.
          </h4>
        </article>
        {/* Tailwind CSS */}
        <article className='skill-article'>
          <div className='skill-header'>
            <RiTailwindCssFill className='skill-icon' size={60} style={{color: '#06b6d4'}} />
            <h1 className='skill-title'>
              <strong>Tailwind CSS</strong>
            </h1>
          </div>
          <h2 className='skill-description'>
            Tailwind CSS is a utility-first CSS framework that allows for rapid UI development by providing low-level utility classes.
          </h2>
          <h3 className='skill-proficiency'>
            <strong>Proficiency:</strong><br/>
            Intermediate, with a strong grasp of building responsive and modern designs quickly using Tailwind&rsquo;s utility classes.
          </h3>
          <h4 className='skill-experience'>
            <strong>Experience:</strong><br/>
            Applied Tailwind CSS in various projects like a Movie Application and Password Generator to create responsive, mobile-first interfaces.
          </h4>
        </article>
        {/* Shadcn UI */}
        <article className='skill-article'>
          <div className='skill-header'>
            <SiShadcnui className='skill-icon' size={45} style={{color: '#000000'}} />
            <h1 className='skill-title'>
              <strong>Shadcn UI</strong>
            </h1>
          </div>
          <h2 className='skill-description'>
            Shadcn UI provides pre-built components with flexible styling options for building modern UIs using Tailwind CSS.
          </h2>
          <h3 className='skill-proficiency'>
            <strong>Proficiency:</strong><br/>
            Intermediate, with a focus on integrating complex UI components such as cards, input, select, buttons, and dialogs into React applications.
          </h3>
          <h4 className='skill-experience'>
            <strong>Experience:</strong><br/>
            Used Shadcn UI extensively in projects like a Tip Calculator and Pomodoro Timer to create user-friendly, stylish, and functional interfaces.
          </h4>
        </article>
        {/* Node.js */}
        <article className='skill-article'>
          <div className='skill-header'>
            <FaNodeJs className='skill-icon' size={60} style={{color: '#339933'}} />
            <h1 className='skill-title'>
              <strong>Node.js</strong>
            </h1>
          </div>
          <h2 className='skill-description'>
            Node.js is a JavaScript runtime built on Chrome&rsquo;s V8 engine, allowing you to build fast, scalable server-side applications.
          </h2>
          <h3 className='skill-proficiency'>
            <strong>Proficiency:</strong><br/>
            Intermediate, skilled in using Node.js for managing user interactions in command-line applications and performing asynchronous operations.
          </h3>
          <h4 className='skill-experience'>
            <strong>Experience:</strong><br/>
            Developed interactive CLI tools using inquirer and chalk for quizzes and user input processing.
          </h4>
        </article>
        <div className="scroll-top-container">
          <Button
            variant="ghost"
            size="icon"
            className='scroll-top-button'
            onClick={handleScrollToTop}
          >
            <FaArrowAltCircleUp size={40} className='scroll-top-icon' />
          </Button>
        </div>
    </div>
  );
}

export default Skills
