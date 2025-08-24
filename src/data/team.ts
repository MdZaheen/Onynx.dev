import { Github, Linkedin, Mail, Globe, type LucideIcon } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  fullBio: string;
  avatar: string;
  skills: string[];
  funFacts: string[];
  stats: {
    label: string;
    value: string;
    emoji: string;
  }[];
  socials: {
    label: string;
    href: string;
    icon: LucideIcon;
    color: string;
  }[];
}

export const teamMembers: Record<string, TeamMember> = {
  zaheen: {
    id: 'zaheen',
    name: 'ZAHEEN',
    title: 'The Silent Strategist',
    role: 'Frontend Developer & Designer',
    bio: 'A creative thinker who loves to design.',
    fullBio: `I am a student of B.Tech in Computer Science and Engineering at Indian Institute of Technology, Kharagpur. I am a member of the Robotics and Automation Club (RAC) and the Coding Club (CC) at IIT Kharagpur. Passionate about innovation, design systems, and AI-driven solutions for the real world.`,
    avatar: '/images/zaheen.png',
    skills: ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'UI/UX Design', 'System Design'],
    funFacts: [
      'Can code for 12 hours straight with just coffee ☕',
      'Has designed 50+ components from scratch',
      'Loves minimal, dark-themed interfaces',
      'Believes good animation makes everything better'
    ],
    stats: [
      { label: 'Projects', value: '25+', emoji: '🚀' },
      { label: 'Coffee Cups', value: '∞', emoji: '☕' },
      { label: 'Code Lines', value: '10k+', emoji: '💻' },
      { label: 'Design Hours', value: '500+', emoji: '🎨' }
    ],
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mohammed-zaheen-10a2a221b/',
        icon: Linkedin,
        color: '#0077B5'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/mdzaheen',
        icon: Github,
        color: '#333'
      },
      {
        label: 'Portfolio',
        href: '/zaheen',
        icon: Globe,
        color: '#A10000'
      },
      {
        label: 'Email',
        href: 'mailto:zaheen@onynx.dev',
        icon: Mail,
        color: '#EA4335'
      }
    ]
  },
  
  arfath: {
    id: 'arfath',
    name: 'ARFATH',
    title: 'The Backend Brain',
    role: 'Backend Developer & System Architect',
    bio: 'Knows how to make servers sing.',
    fullBio: `I am a student of B.E in Electronics and Electrical Engineering at Indian Institute of Technology, Kharagpur. I am a member of the Robotics and Automation Club (RAC) and the Coding Club (CC) at IIT Kharagpur. Passionate about backend development, systems architecture, and building scalable apps that power real-world solutions.`,
    avatar: '/images/arfath.png',
    skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'System Design', 'API Development'],
    funFacts: [
      'Has optimized database queries by 90% ⚡',
      'Can set up a server in under 10 minutes',
      'Debugging detective by day, gamer by night',
      'Believes in clean code and faster APIs'
    ],
    stats: [
      { label: 'APIs Built', value: '15+', emoji: '🔌' },
      { label: 'Servers Deployed', value: '30+', emoji: '🖥️' },
      { label: 'Database Queries', value: '1000+', emoji: '💾' },
      { label: 'Bug Fixes', value: '200+', emoji: '🐛' }
    ],
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/arfath-khan-80202929a/',
        icon: Linkedin,
        color: '#0077B5'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/arfath-ahmed',
        icon: Github,
        color: '#333'
      },
      {
        label: 'Portfolio',
        href: '/arfath',
        icon: Globe,
        color: '#A10000'
      },
      {
        label: 'Email',
        href: 'mailto:arfath@onynx.dev',
        icon: Mail,
        color: '#EA4335'
      }
    ]
  },
  
  mannan: {
    id: 'mannan',
    name: 'MANNAN',
    title: 'The Pixel Perfectionist',
    role: 'Frontend Developer & Animation Expert',
    bio: 'Frontend wizard with an eye for detail.',
    fullBio: `I am a passionate frontend developer studying at Indian Institute of Technology, Kharagpur. I specialize in creating beautiful, interactive user interfaces and smooth animations. Member of various tech clubs and always eager to learn new technologies and frameworks.`,
    avatar: '/images/mannan.png',
    skills: ['React', 'JavaScript', 'CSS3', 'SASS', 'Framer Motion', 'Three.js', 'WebGL', 'Animation'],
    funFacts: [
      'Can spot a 1px alignment issue from miles away 👁️',
      'Has created 100+ custom animations',
      'Perfectionist when it comes to UI details',
      'Loves experimenting with cutting-edge web tech'
    ],
    stats: [
      { label: 'Animations', value: '100+', emoji: '✨' },
      { label: 'UI Components', value: '75+', emoji: '🎯' },
      { label: 'Pixel Perfect', value: '100%', emoji: '📐' },
      { label: 'User Smiles', value: '∞', emoji: '😊' }
    ],
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mannan-dev/',
        icon: Linkedin,
        color: '#0077B5'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/Mannan007',
        icon: Github,
        color: '#333'
      },
      {
        label: 'Portfolio',
        href: '/mannan',
        icon: Globe,
        color: '#A10000'
      },
      {
        label: 'Email',
        href: 'mailto:mannan@onynx.dev',
        icon: Mail,
        color: '#EA4335'
      }
    ]
  }
};

export const team = teamMembers;
export default team;
