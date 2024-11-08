"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { motion } from 'framer-motion';
import "@/app/projects.css"

const Projects = () => {

    const handleViewProjects = (Link: string): void => {
        window.open(Link);
    };

    const handleScrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      };

  return (
        <div className="project-container">
        <div className="outer-div">
            <motion.div
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="motion-div"
            >
            <h1 className="heading">
                <strong>Projects</strong>
            </h1>
            </motion.div>
        </div>

        <div className="project-grid">
            {/* Project-1 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/MovieAppPicForPortfolio.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 2 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/passwordgenerator.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 3 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/PomodoroTimer.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 4 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/BMICalculator.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 5 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/Meme-Generator.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 6 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/TipCalculator.png"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 7 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/CurrencyConverter.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 8 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/MovieSearch.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 9 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/HTMLPreviewer.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 10 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/Expense-Tracker.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project-11 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/simpleCalculator.png"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 12 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/UnitConverter.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 13 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/digitalclock1.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 14 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/randomjokegenerator.png"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 15 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/BirthdayWishNext.js.png"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 16 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/ColorPicker.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 17 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/numberguessinggame2next.png"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 18 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/Weather-widget-next.js-project-2.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 19 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/CountdownTimer.Nextjs.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 20 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/MovieAppPicForPortfolio.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
            {/* Project 21 */}
            <article className="project-card">
            <div className="project-content">
                <h2 className="project-title">MovieVerse</h2>
                <Image
                src="/images/MovieAppPicForPortfolio.PNG"
                alt="MovieVerse"
                width={400}
                height={100}
                className="project-image"
                />
                <h3 className="project-description">
                Search Movies & Browse popular flicks.
                <button
                    onClick={() =>
                    handleViewProjects("https://movie-app-gules-alpha.vercel.app/")
                    }
                    className="project-button"
                >
                    <FaExternalLinkSquareAlt size={20} className="project-icon" />
                </button>
                </h3>
            </div>
            </article>
        </div>
        <div className="scroll-button-container">
            <Button
                onClick={handleScrollToTop}
                className="scroll-button"
            >
                <FaArrowAltCircleUp className="scroll-button-icon" />
            </Button>
        </div>
        </div>

  );
}

export default Projects