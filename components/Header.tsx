"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import "@/app/Header.css"

const Header = () => {
  return (
    <header className='header header-lg'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <Link href="/">
          <Image
            src="/images/profile1.jpeg"
            alt='Taha Siraj'
            width={70}
            height={100}
            className='header-profile-image'
          />
        </Link>
      </motion.div>
      <ul className='nav-list'>
      <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        >
        <Link href="/">
            <li className='nav-item nav-item-lg'>
                Home
            </li>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        >
            <Link href="/about">
            <li className='nav-item nav-item-lg'>
                About
            </li>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
            <Link href="/projects">
            <li className='nav-item nav-item-lg'>
                Projects
            </li>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        >
            <Link href="/skills">
            <li className='nav-item nav-item-lg'>
                Skills
            </li>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        >
            <Link href="/contact">
            <li className='nav-item nav-item-lg'>
                Contact
            </li>
            </Link>
        </motion.div>
      </ul>
    </header>
  );
}

export default Header;
