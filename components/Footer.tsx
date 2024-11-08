import React from 'react';
import { Dot, Linkedin, Instagram, Github } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import "@/app/footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-copyright'>
          <span>&copy; 2024</span>
          <Dot className='footer-dot' />
          <span>Taha Siraj</span>
          <Dot className='footer-dot' />
          <span>All rights reserved</span>
        </div>
        <div className='footer-social'>
          <Link href="https://www.linkedin.com/in/taha-siraj-521b512b7/" target='_blank'>
            <Linkedin size={26} className='footer-icon' />
          </Link>

          <Link href="https://www.instagram.com/taha__siraj/" target='_blank'>
            <Instagram size={26} className='footer-icon' />
          </Link>

          <Link href="https://github.com/Tahasiraj1" target='_blank'>
            <Github size={26} className='footer-icon' />
          </Link>

          <Link href="https://wa.me/923311245238" target='_blank'>
            <FaWhatsapp size={26} className='footer-icon' />
          </Link>
        </div>
    </footer>
  )
}

export default Footer;