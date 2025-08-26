'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ChatBotContact from '@/components/ChatBotContact';
import { Mail, MapPin, Clock, Code, Zap, Users } from 'lucide-react';
import '@/styles/About.css';
import '@/styles/theme.css';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@onyxdev.com",
      description: "Drop us a line anytime"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location", 
      content: "Remote First",
      description: "Working globally, delivering locally"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      content: "24-48 Hours",
      description: "We'll get back to you quickly"
    }
  ];

  const services = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Web Development",
      description: "Modern, scalable web applications"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "UI/UX Design",
      description: "Intuitive and beautiful interfaces"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Consulting",
      description: "Technical strategy and guidance"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-2xl p-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let&apos;s Build Something{' '}
          <span className="text-red-400" style={{ color: '#A10000' }}>
            Amazing
          </span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Ready to bring your ideas to life? We&apos;re here to help you create 
          exceptional digital experiences that make an impact.
        </p>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-card rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
        <div className="space-y-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/20 border border-gray-700/30 hover:border-red-500/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-red-900/30 border border-red-500/30 rounded-xl flex items-center justify-center text-red-400">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-red-300 font-medium mb-1">{item.content}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="glass-card rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">What We Do</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/20 border border-gray-700/30"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-red-900/30 border border-red-500/30 rounded-lg flex items-center justify-center text-red-400">
                {service.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="glass-card rounded-2xl p-8 text-center"
      >
        <h3 className="text-xl font-bold text-white mb-3">Ready to Start?</h3>
        <p className="text-gray-400 mb-4">
          Use the chat on the right to tell us about your project. 
          We&apos;ll get back to you within 24 hours!
        </p>
        <div className="inline-flex items-center text-red-400 text-sm font-medium">
          <Zap className="w-4 h-4 mr-2" />
          Fast • Professional • Reliable
        </div>
      </motion.div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden font-[family-name:var(--font-primary)]">
      {/* Main Container */}
      <div className="relative z-10 px-6 py-12 min-h-screen max-w-7xl mx-auto">
        
        {/* Desktop Two-Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 min-h-screen">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center">
            <ContactInfo />
          </div>

          {/* Right Column - Chat */}
          <div className="flex flex-col justify-center min-h-screen py-12">
            <ChatBotContact />
          </div>
        </div>

        {/* Mobile/Tablet Stacked Layout */}
        <div className="lg:hidden space-y-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Build Something{' '}
              <span className="text-red-400" style={{ color: '#A10000' }}>
                Amazing
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Ready to bring your ideas to life? Chat with us below or check out our contact information.
            </p>
          </motion.div>

          {/* Chat Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="min-h-[600px]"
          >
            <ChatBotContact />
          </motion.div>

          {/* Contact Info for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
