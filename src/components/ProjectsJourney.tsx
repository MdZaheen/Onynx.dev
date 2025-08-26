'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projectsData, ProjectData } from '@/data/projects';
import { ChevronDown, ChevronUp, ExternalLink, Github, Play, Calendar, Users, Code2 } from 'lucide-react';
import '@/styles/About.css';
import '@/styles/theme.css';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  isLeft: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isLeft }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      y: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const expandVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'planned':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative w-full max-w-md ${isLeft ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}
    >
      {/* Project Card */}
      <motion.div
        className="glass-card rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.02, y: -5 }}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-6xl opacity-50">🚀</div>
          </div>
          {/* Status Badge */}
          <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-purple-400 text-sm font-medium">{project.tagline}</p>
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <Calendar className="w-3 h-3 mr-1" />
              {project.year}
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-800/50 border border-gray-700/50 ${tech.color}`}
              >
                <span className="mr-1">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs text-gray-500 flex items-center">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center py-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span className="mr-2">{isExpanded ? 'Show Less' : 'Show More'}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </motion.div>
          </button>
        </div>
      </motion.div>

      {/* Expanded Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            variants={expandVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="mt-4 glass-card rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="p-6">
              {/* Full Description */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                  <Code2 className="w-4 h-4 mr-2" />
                  PROJECT DETAILS
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Complete Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Tech Stack</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700/30 ${tech.color}`}
                    >
                      <span className="text-lg mr-2">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Roles */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Team & Roles
                </h4>
                <div className="space-y-2">
                  {project.teamRoles.map((role, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 px-3 bg-gray-800/30 rounded-lg">
                      <span className="text-sm font-medium text-gray-300">{role.role}</span>
                      <span className="text-xs text-gray-400">{role.member}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium text-white transition-colors border border-gray-600"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium text-white transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TimelineNode: React.FC<{ index: number; isActive: boolean }> = ({ index, isActive }) => {
  return (
    <motion.div
      className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
        isActive 
          ? 'border-red-400 shadow-lg' 
          : 'bg-gray-700 border-gray-600'
      }`} style={isActive ? { backgroundColor: '#A10000', boxShadow: '0 0 15px rgba(161, 0, 0, 0.5)' } : {}} />
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
        isActive 
          ? 'animate-ping' 
          : ''
      }`} style={isActive ? { backgroundColor: 'rgba(161, 0, 0, 0.3)' } : {}} />
    </motion.div>
  );
};

const ScrollProgress: React.FC<{ currentProject: number; totalProjects: number }> = ({ 
  currentProject, 
  totalProjects 
}) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {Array.from({ length: totalProjects }).map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx <= currentProject
                ? 'shadow-lg'
                : 'bg-gray-700'
            }`}
            style={idx <= currentProject ? { 
              backgroundColor: '#A10000', 
              boxShadow: '0 0 10px rgba(161, 0, 0, 0.5)' 
            } : {}}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectsJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Track which project is currently in view
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - containerRect.top) / (containerRect.height + windowHeight)));
      
      const projectIndex = Math.floor(scrollProgress * projectsData.length);
      setCurrentProject(Math.min(projectIndex, projectsData.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="projects" 
      className="relative bg-transparent text-white overflow-hidden" 
      style={{ 
        fontFamily: 'var(--font-lexend)'
      }}
    >
      <div className="container mx-auto px-6 relative z-10 pt-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-lexend)' }}>
            Project <span className="text-red-500" style={{ color: '#A10000' }}>Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Follow our development story through innovative projects that push the boundaries of technology
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2 hidden md:block">
            <motion.div
              ref={timelineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-500 via-red-600 to-gray-500 origin-top"
              style={{ height: timelineHeight, background: 'linear-gradient(to bottom, #A10000, #ff3333, #666666)' }}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800 md:hidden">
            <motion.div
              className="absolute top-0 left-0 w-full origin-top"
              style={{ height: timelineHeight, background: 'linear-gradient(to bottom, #A10000, #ff3333, #666666)' }}
            />
          </div>

          {/* Projects */}
          <div className="space-y-32 md:space-y-20">
            {projectsData.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Timeline Node - Hidden on mobile */}
                <div className="hidden md:block">
                  <TimelineNode index={index} isActive={index <= currentProject} />
                </div>

                {/* Mobile Timeline Node */}
                <div className="md:hidden absolute left-8 top-8 transform -translate-x-1/2">
                  <TimelineNode index={index} isActive={index <= currentProject} />
                </div>

                {/* Project Card */}
                <div className={`md:grid md:grid-cols-2 md:gap-12 items-start ${
                  index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                } pl-16 md:pl-0`}>
                  {/* Card */}
                  <div className={index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}>
                    <ProjectCard 
                      project={project} 
                      index={index} 
                      isLeft={index % 2 === 0} 
                    />
                  </div>
                  
                  {/* Spacer for desktop zig-zag */}
                  <div className={`hidden md:block ${
                    index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <ScrollProgress currentProject={currentProject} totalProjects={projectsData.length} />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Own Journey?</h3>
          <p className="text-gray-400 mb-8">Let's collaborate on something amazing together</p>
          <button className="brand-button px-8 py-3 rounded-full font-semibold">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsJourney;
