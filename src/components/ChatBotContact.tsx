'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
import '@/styles/About.css';
import '@/styles/theme.css';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

type ConversationStep = 'initial' | 'name' | 'email' | 'message' | 'success';

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-1 p-3"
    >
      <Bot className="w-4 h-4 text-red-400" />
      <div className="flex space-x-1 ml-2">
        <motion.div
          className="w-2 h-2 bg-gray-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

const ChatBubble: React.FC<{
  message: Message;
  isLast?: boolean;
}> = ({ message, isLast }) => {
  const isBot = message.type === 'bot';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div className={`max-w-sm md:max-w-md lg:max-w-lg flex items-start space-x-2 ${!isBot && 'flex-row-reverse space-x-reverse'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isBot 
            ? 'bg-red-900/30 border border-red-500/30' 
            : 'bg-gray-700/30 border border-gray-500/30'
        }`}>
          {isBot ? (
            <Bot className="w-4 h-4 text-red-400" />
          ) : (
            <User className="w-4 h-4 text-gray-400" />
          )}
        </div>

        {/* Message Bubble */}
        <div
          className={`glass-card rounded-2xl px-4 py-3 ${
            isBot
              ? 'bg-gray-800/20 border border-gray-700/30'
              : 'bg-red-900/20 border border-red-500/30'
          } ${isLast && !isBot ? 'animate-pulse' : ''}`}
        >
          <p className={`text-sm leading-relaxed ${
            isBot ? 'text-gray-300' : 'text-red-200'
          }`}>
            {message.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ChatBotContact: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<ConversationStep>('initial');
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addMessage = (content: string, type: 'bot' | 'user') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (content: string, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(content, 'bot');
    }, delay);
  };

  const initializeChat = () => {
    addBotMessage("👋 Hi there! I'm here to help you get in touch. What's your name?", 500);
    setCurrentStep('name');
  };

  const handleInputSubmit = async () => {
    if (!currentInput.trim()) return;

    const userInput = currentInput.trim();
    addMessage(userInput, 'user');
    setCurrentInput('');

    switch (currentStep) {
      case 'name':
        setFormData(prev => ({ ...prev, name: userInput }));
        addBotMessage(`Nice to meet you, ${userInput}! 📧 What's your email address?`);
        setCurrentStep('email');
        break;

      case 'email':
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userInput)) {
          addBotMessage("Hmm, that doesn't look like a valid email. Could you try again? 🤔");
          return;
        }
        setFormData(prev => ({ ...prev, email: userInput }));
        addBotMessage(`Perfect! Now, what would you like to tell us, ${formData.name}? 💭`);
        setCurrentStep('message');
        break;

      case 'message':
        setFormData(prev => ({ ...prev, message: userInput }));
        setIsSubmitting(true);
        
        // Simulate form submission
        addBotMessage("🚀 Got it! Your message has been sent successfully.", 800);
        
        setTimeout(() => {
          addBotMessage(`Thanks for reaching out, ${formData.name}! We'll get back to you soon. ✨`, 2000);
          setCurrentStep('success');
          setIsSubmitting(false);
        }, 2800);
        
        // Here you would typically submit to your backend
        await submitForm({ ...formData, message: userInput });
        break;
    }
  };

  const submitForm = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit');
      }
      
      console.log('Form submitted successfully:', result);
      
    } catch (error) {
      console.error('Form submission error:', error);
      addBotMessage("Oops! Something went wrong. Please try again later. 😅");
      setIsSubmitting(false);
      setCurrentStep('message'); // Allow retry
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleInputSubmit();
    }
  };

  useEffect(() => {
    if (currentStep === 'initial') {
      initializeChat();
    }
  }, []);

  useEffect(() => {
    if (inputRef.current && currentStep !== 'success') {
      inputRef.current.focus();
    }
  }, [currentStep, messages]);

  const shouldShowInput = currentStep !== 'initial' && currentStep !== 'success';

  return (
    <div className="h-full flex flex-col max-w-2xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-8 mb-8"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-900/30 border border-red-500/30 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Chat with us</h3>
            <p className="text-sm text-gray-400">We'd love to hear from you</p>
          </div>
        </div>
      </motion.div>

      {/* Chat Container */}
      <div className="flex-1 glass-card rounded-2xl p-8 flex flex-col min-h-0">
        {/* Messages Area */}
        <div className="flex-1 min-h-0 mb-8">
          <div className="h-full max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-gray-800 pr-2">
            <div className="space-y-2 pb-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <ChatBubble
                    key={message.id}
                    message={message}
                    isLast={index === messages.length - 1}
                  />
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start mb-4"
                >
                  <div className="max-w-sm flex items-start space-x-2">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-900/30 border border-red-500/30 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="glass-card rounded-2xl bg-gray-800/20 border border-gray-700/30">
                      <TypingIndicator />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area - Fixed Position */}
        <div className="flex-shrink-0">
          <AnimatePresence>
            {shouldShowInput && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-gray-800/20 border border-gray-700/30 rounded-xl p-4"
              >
                <div className="flex items-center space-x-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={
                      currentStep === 'name' ? 'Type your name...' :
                      currentStep === 'email' ? 'Type your email...' :
                      currentStep === 'message' ? 'Type your message...' : 
                      'Type your response...'
                    }
                    className="flex-1 bg-gray-800/30 border border-gray-700/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-colors"
                    disabled={isSubmitting}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleInputSubmit}
                    disabled={!currentInput.trim() || isSubmitting}
                    className="bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-xl p-3 transition-colors"
                    style={{ backgroundColor: !currentInput.trim() || isSubmitting ? undefined : '#A10000' }}
                  >
                    <Send className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success State */}
          {currentStep === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="text-4xl mb-3">🎉</div>
              <p className="text-gray-400 text-sm">
                Thanks for chatting with us! We&apos;ll be in touch soon.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBotContact;
