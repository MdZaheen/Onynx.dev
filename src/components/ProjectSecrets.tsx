'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ProjectData } from '@/data/projects';
import { HelpCircle, X, Sparkles, Eye, Code, Zap } from 'lucide-react';
import '@/styles/About.css';
import '@/styles/theme.css';

interface ProjectSecretsProps {
  project: ProjectData;
  index: number;
  isLeft: boolean;
}

const ProjectSecrets: React.FC<ProjectSecretsProps> = ({ project, index, isLeft }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<'funFacts' | 'easterEggs' | 'behindScenes'>('funFacts');
  const secretsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(secretsRef, { once: true, amount: 0.3 });

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (secretsRef.current && !secretsRef.current.contains(event.target as Node)) {
        if (isRevealed) {
          setIsRevealed(false);
        }
      }
    };

    if (isRevealed) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isRevealed]);

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2 + 0.1,
      ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number]
      }
    }
  };

  const revealVariants = {
    collapsed: {
      height: 220,
      width: 180,
      transition: { 
        duration: 0.4, 
        ease: [0.645, 0.045, 0.355, 1] as [number, number, number, number],
        staggerChildren: 0.1
      }
    },
    revealed: {
      height: 'auto',
      width: 320,
      transition: { 
        duration: 0.5, 
        ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    },
    revealed: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.2 }
    }
  };

  const handleToggle = () => {
    setIsRevealed(!isRevealed);
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'funFacts': return <Sparkles className="w-4 h-4" />;
      case 'easterEggs': return <Eye className="w-4 h-4" />;
      case 'behindScenes': return <Code className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'funFacts': return 'Fun Facts';
      case 'easterEggs': return 'Easter Eggs';
      case 'behindScenes': return 'Behind Scenes';
      default: return 'Fun Facts';
    }
  };

  const getCurrentSecrets = () => {
    return project.secrets[currentCategory] || [];
  };

  return (
    <motion.div
      ref={secretsRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative ${isLeft ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}
    >
      <motion.div
        variants={revealVariants}
        initial="collapsed"
        animate={isRevealed ? "revealed" : "collapsed"}
        className="glass-card neon-edge mystery-glow rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
        whileHover={{ scale: isRevealed ? 1 : 1.02 }}
        style={{ minHeight: '220px' }}
        role="button"
        tabIndex={0}
        aria-expanded={isRevealed}
        aria-controls={`secrets-content-${project.id}`}
        aria-label={`${isRevealed ? 'Hide' : 'Reveal'} project secrets for ${project.title}`}
      >
        {!isRevealed ? (
          // Mystery State
          <div className="relative h-full flex flex-col items-center justify-center p-6 scanlines">
            <motion.div
              className="question-pulse text-6xl mb-4"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: [0.645, 0.045, 0.355, 1]
              }}
            >
              <HelpCircle className="w-16 h-16 text-red-400" style={{ color: '#A10000' }} />
            </motion.div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2 glitch-text-secrets" data-text="PROJECT SECRETS">
                PROJECT SECRETS
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Hidden stories await...
              </p>
              <div className="text-xs text-red-400 font-medium" style={{ color: '#A10000' }}>
                <Zap className="w-3 h-3 inline mr-1" />
                CLICK TO REVEAL
              </div>
            </div>

            {/* Hologram sweep effect */}
            <div className="hologram absolute inset-0 rounded-2xl pointer-events-none" />
          </div>
        ) : (
          // Revealed State
          <motion.div
            id={`secrets-content-${project.id}`}
            variants={contentVariants}
            className="relative p-6 h-full"
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsRevealed(false);
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400 transition-colors z-20"
              aria-label="Close secrets"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white mb-2 glitch-text-secrets" data-text={project.title}>
                {project.title}
              </h3>
              <div className="text-xs text-red-400 font-medium" style={{ color: '#A10000' }}>
                <Sparkles className="w-3 h-3 inline mr-1" />
                SECRET ARCHIVES
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex space-x-1 mb-4 bg-gray-800/30 rounded-lg p-1">
              {(Object.keys(project.secrets) as Array<keyof typeof project.secrets>).map((category) => (
                <button
                  key={category}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentCategory(category);
                  }}
                  className={`flex-1 flex items-center justify-center px-2 py-1 rounded text-xs font-medium transition-all ${
                    currentCategory === category
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                  style={currentCategory === category ? { backgroundColor: '#A10000' } : {}}
                >
                  {getIcon(category)}
                  <span className="ml-1 hidden sm:inline">{getCategoryTitle(category)}</span>
                </button>
              ))}
            </div>

            {/* Secrets List */}
            <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-gray-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {getCurrentSecrets().map((secret, idx) => (
                    <motion.div
                      key={idx}
                      className="reveal-delay"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="glass-card p-3 rounded-lg border border-gray-700/30 hover:border-red-400/30 transition-colors">
                        <p 
                          className="text-sm text-gray-300 glitch-text-secrets leading-relaxed" 
                          data-text={secret}
                        >
                          {secret}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom indicator */}
            <div className="mt-4 flex items-center justify-center">
              <div className="flex space-x-1">
                {Array.from({ length: getCurrentSecrets().length }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-1 h-1 rounded-full bg-red-400/60"
                    style={{ backgroundColor: 'rgba(161, 0, 0, 0.6)' }}
                  />
                ))}
              </div>
            </div>

            {/* Scanlines overlay for revealed state */}
            <div className="scanlines absolute inset-0 rounded-2xl pointer-events-none opacity-30" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectSecrets;
