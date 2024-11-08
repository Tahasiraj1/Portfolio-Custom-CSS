"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import "@/app/contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm("service_kb0095m", "template_drjojyg", e.currentTarget, "bTwY4Z7BY_xc4CM9q")
    .then((result) => {
      console.log("Message sent successfully:", result.text);
    }, (error) => {
      console.log("Failed to send message:", error.text);
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleProfileViews = (Link: string): void => {
    window.open(Link);
  };

  return (
<div className='contact-container'>
  <div className='contact-title-container'>
    <motion.div initial={{ x: 30 }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }}>
      <h1 className='contact-title'>Let&rsquo;s Connect</h1>
    </motion.div>
  </div>
  <form onSubmit={handleSubmit} className='contact-form'>
    <Label htmlFor='name'>Name:</Label>
    <Input
      id='name'
      name='name'
      type='name'
      placeholder='Enter your name'
      value={formData.name}
      onChange={handleChange}
      required
      className='contact-input'
    />
    
    <Label className='contact-label' htmlFor='email'>Email:</Label>
    <Input
      id='email'
      name='email'
      type='email'
      placeholder='Enter your email'
      value={formData.email}
      onChange={handleChange}
      required
      className='contact-input'
    />

    <Label className='contact-label' htmlFor='message'>Message:</Label>
    <Textarea
      id='message'
      name='message'
      placeholder='Enter your message'
      rows={3}
      value={formData.message}
      onChange={handleChange}
      required
      className='contact-textarea'
    />

    <Button type='submit' className='contact-button'>Submit</Button>
  </form>
  
  <div className='follow-title-container'>
    <motion.div initial={{ x: 30 }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }}>
      <h2 className='follow-title'>Follow Me</h2>
    </motion.div>
  </div>

  <div className='flex justify-center gap-8'>
    <Button onClick={() => handleProfileViews("https://www.linkedin.com/in/taha-siraj-521b512b7/")} className='social-button'>
      <Linkedin size={60} className='social-icon' />
    </Button>
    <Button onClick={() => handleProfileViews("https://github.com/Tahasiraj1")} className='social-button'>
      <Github size={60} className='social-icon' />
    </Button>
  </div>
  
  <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
    <p className='contact-profile'>
      Stay connected and join my journey!<br/><br/>
      ✦ Connect with me on <strong>LinkedIn</strong> to stay updated on my professional growth, tech insights, and exciting projects I&rsquo;m working on.<br/><br/>
      ✦ Follow me on <strong>GitHub</strong> where I share open-source contributions, coding challenges, and the latest projects I&rsquo;m developing.
    </p>
  </motion.div>
</div>

  );
};

export default Contact;