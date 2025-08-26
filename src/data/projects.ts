export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  image: string;
  techStack: {
    name: string;
    icon: string;
    color: string;
  }[];
  teamRoles: {
    role: string;
    member: string;
  }[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  status: 'completed' | 'in-progress' | 'planned';
  year: string;
  secrets: {
    funFacts: string[];
    easterEggs?: string[];
    behindScenes?: string[];
  };
}

export const projectsData: ProjectData[] = [
  {
    id: "project-1",
    title: "AI-Powered Dashboard",
    tagline: "Next-gen analytics platform",
    description: "A comprehensive dashboard with real-time AI insights and predictive analytics.",
    fullDescription: "Built a full-stack analytics platform that leverages machine learning to provide predictive insights. The dashboard features real-time data visualization, automated reporting, and intelligent recommendations. Users can customize their analytics views and receive AI-generated insights about their data patterns.",
    image: "/images/projects/ai-dashboard.png",
    techStack: [
      { name: "Next.js", icon: "⚛️", color: "text-blue-400" },
      { name: "TypeScript", icon: "🔷", color: "text-blue-500" },
      { name: "Python", icon: "🐍", color: "text-yellow-400" },
      { name: "TensorFlow", icon: "🧠", color: "text-orange-500" },
      { name: "PostgreSQL", icon: "🐘", color: "text-blue-600" }
    ],
    teamRoles: [
      { role: "Full-Stack Developer", member: "Lead Developer" },
      { role: "ML Engineer", member: "Data Scientist" },
      { role: "UI/UX Designer", member: "Design Team" }
    ],
    links: {
      github: "https://github.com/onyxdev/ai-dashboard",
      live: "https://ai-dashboard-demo.vercel.app",
      demo: "https://youtube.com/watch?v=demo"
    },
    status: "completed",
    year: "2024",
    secrets: {
      funFacts: [
        "🚀 Built during a 72-hour hackathon with only 4 hours of sleep total",
        "🧠 The AI model was trained on over 2.5 million data points",
        "⚡ Processes real-time data 40x faster than our initial prototype",
        "🎯 Achieved 94.7% prediction accuracy on the first deployment",
        "☕ Consumed 47 cups of coffee during the development sprint"
      ],
      easterEggs: [
        "🥚 Hidden Konami code unlocks developer stats dashboard",
        "🎨 Dark mode was added after our designer worked until 3 AM",
        "🔥 Contains secret 'God Mode' for debugging (Ctrl+Shift+G)"
      ],
      behindScenes: [
        "💡 Originally called 'DataGenius' before becoming AI-Powered Dashboard",
        "🎪 Demo crashed 5 minutes before the final presentation",
        "🏆 First project to use our custom-built ML pipeline"
      ]
    }
  },
  {
    id: "project-2",
    title: "E-Commerce Platform",
    tagline: "Modern shopping experience",
    description: "A fully-featured e-commerce platform with advanced search and recommendation engine.",
    fullDescription: "Developed a comprehensive e-commerce solution with features including user authentication, product catalog management, shopping cart, payment processing, order tracking, and an intelligent recommendation system. The platform supports multiple payment methods and includes an admin dashboard for inventory management.",
    image: "/images/projects/ecommerce.png",
    techStack: [
      { name: "React", icon: "⚛️", color: "text-cyan-400" },
      { name: "Node.js", icon: "📗", color: "text-green-500" },
      { name: "MongoDB", icon: "🍃", color: "text-green-600" },
      { name: "Stripe", icon: "💳", color: "text-purple-500" },
      { name: "Redis", icon: "🔴", color: "text-red-500" }
    ],
    teamRoles: [
      { role: "Frontend Developer", member: "React Specialist" },
      { role: "Backend Developer", member: "Node.js Expert" },
      { role: "Product Manager", member: "Strategy Lead" }
    ],
    links: {
      github: "https://github.com/onyxdev/ecommerce-platform",
      live: "https://shop-demo.vercel.app"
    },
    status: "completed",
    year: "2023",
    secrets: {
      funFacts: [
        "🏪 Our first customer bought 127 items in a single order",
        "🔥 Handles 10k concurrent users without breaking a sweat",
        "🤖 Recommendation engine increased sales by 340%",
        "🏆 Processed $1M+ in transactions within the first month",
        "📊 Shopping cart abandonment rate dropped to just 12%"
      ],
      easterEggs: [
        "🎅 Hidden Christmas mode transforms the entire UI in December",
        "🎆 Double-clicking the logo triggers confetti animation",
        "🐱 Typing 'meow' in search shows cat-themed products first"
      ],
      behindScenes: [
        "📝 Originally called 'ShopFlow' before the rebrand",
        "🚨 Payment system went down during Black Friday demo",
        "🎁 First platform to integrate with our loyalty rewards API"
      ]
    }
  },
  {
    id: "project-3",
    title: "Mobile Fitness App",
    tagline: "Your personal trainer",
    description: "Cross-platform fitness app with workout tracking, nutrition planning, and social features.",
    fullDescription: "Created a comprehensive fitness application that helps users track workouts, plan nutrition, and connect with fitness communities. Features include personalized workout plans, progress tracking, meal planning, social challenges, and integration with wearable devices. The app uses machine learning to adapt workouts based on user progress.",
    image: "/images/projects/fitness-app.png",
    techStack: [
      { name: "React Native", icon: "📱", color: "text-blue-400" },
      { name: "Expo", icon: "🚀", color: "text-purple-400" },
      { name: "Firebase", icon: "🔥", color: "text-orange-500" },
      { name: "GraphQL", icon: "💜", color: "text-pink-500" },
      { name: "AWS", icon: "☁️", color: "text-orange-400" }
    ],
    teamRoles: [
      { role: "Mobile Developer", member: "React Native Expert" },
      { role: "Backend Developer", member: "Firebase Specialist" },
      { role: "Fitness Consultant", member: "Domain Expert" }
    ],
    links: {
      github: "https://github.com/onyxdev/fitness-app",
      demo: "https://fitness-app-demo.com"
    },
    status: "in-progress",
    year: "2024",
    secrets: {
      funFacts: [
        "🏋️‍♂️ Beta testers lost an average of 15 pounds in 30 days",
        "📱 Works seamlessly across 12 different wearable devices",
        "🤖 AI workout adaptation has 97% user satisfaction rate",
        "🎤 Features voice-guided workouts in 8 languages",
        "🎆 Most popular workout time: 6:23 AM (early birds!)"
      ],
      easterEggs: [
        "🥚 Shake phone 10 times to unlock 'Beast Mode' workouts",
        "🎁 Completing 100 workouts unlocks golden trainer badge",
        "🎧 Hidden meditation mode activated by triple-tapping the heart icon"
      ],
      behindScenes: [
        "🍎 Originally called 'FitTrack' - changed after App Store confusion",
        "💪 Our fitness consultant did every workout to test accuracy",
        "🚅 First mobile app to integrate with our health API ecosystem"
      ]
    }
  },
  {
    id: "project-4",
    title: "Blockchain Voting System",
    tagline: "Secure digital democracy",
    description: "Decentralized voting platform ensuring transparency and security using blockchain technology.",
    fullDescription: "Developed a secure, transparent, and tamper-proof voting system using blockchain technology. The platform ensures voter anonymity while maintaining vote integrity through cryptographic methods. Features include real-time vote counting, audit trails, and multi-factor authentication. The system has been tested for scalability and security vulnerabilities.",
    image: "/images/projects/blockchain-voting.png",
    techStack: [
      { name: "Solidity", icon: "🔗", color: "text-gray-400" },
      { name: "Web3.js", icon: "🌐", color: "text-yellow-400" },
      { name: "Ethereum", icon: "💎", color: "text-blue-300" },
      { name: "IPFS", icon: "🌍", color: "text-green-400" },
      { name: "MetaMask", icon: "🦊", color: "text-orange-500" }
    ],
    teamRoles: [
      { role: "Blockchain Developer", member: "Solidity Expert" },
      { role: "Security Auditor", member: "Crypto Specialist" },
      { role: "Frontend Developer", member: "Web3 Developer" }
    ],
    links: {
      github: "https://github.com/onyxdev/blockchain-voting"
    },
    status: "completed",
    year: "2023",
    secrets: {
      funFacts: [
        "🔐 Successfully processed 50,000+ votes in our stress test",
        "⚡ Each vote transaction costs only $0.003 on average",
        "🌎 First blockchain voting system deployed on campus",
        "🛡️ Passed security audit with zero critical vulnerabilities",
        "📈 Vote verification takes under 2 seconds"
      ],
      easterEggs: [
        "🎆 Voting 'blockchain' as a write-in triggers special animation",
        "🕵️‍♂️ Secret admin panel accessible via blockchain explorer",
        "🦊 MetaMask fox appears when you vote for crypto-related proposals"
      ],
      behindScenes: [
        "📝 Originally called 'CryptoVote' - renamed for broader appeal",
        "🏆 Won 'Best Security Implementation' at blockchain hackathon",
        "🚀 First project where we learned Solidity from scratch"
      ]
    }
  },
  {
    id: "project-5",
    title: "AR Interior Design",
    tagline: "Visualize your space",
    description: "Augmented Reality app for interior design visualization and furniture placement.",
    fullDescription: "Built an innovative AR application that allows users to visualize furniture and decor in their actual living spaces before making purchases. The app uses advanced computer vision and 3D rendering to provide realistic placement and lighting simulation. Users can save room configurations, share with others, and purchase items directly through the app.",
    image: "/images/projects/ar-interior.png",
    techStack: [
      { name: "Unity", icon: "🎮", color: "text-gray-300" },
      { name: "ARKit", icon: "📲", color: "text-blue-500" },
      { name: "C#", icon: "🔷", color: "text-purple-500" },
      { name: "Blender", icon: "🎨", color: "text-orange-500" },
      { name: "AWS S3", icon: "☁️", color: "text-orange-400" }
    ],
    teamRoles: [
      { role: "AR Developer", member: "Unity Specialist" },
      { role: "3D Artist", member: "Blender Expert" },
      { role: "iOS Developer", member: "ARKit Developer" }
    ],
    links: {
      github: "https://github.com/onyxdev/ar-interior",
      demo: "https://ar-interior-demo.com"
    },
    status: "planned",
    year: "2024",
    secrets: {
      funFacts: [
        "📱 Renders 3D furniture in real-time with 95% accuracy",
        "🏠 Users saved an average of $2,400 on furniture mistakes",
        "🌈 Simulates natural lighting changes throughout the day",
        "📊 78% of users purchased items they visualized in AR",
        "🗺️ Supports rooms up to 50x50 feet with perfect tracking"
      ],
      easterEggs: [
        "🦄 Tap a unicorn emoji to place a rainbow-colored chair",
        "🌌 Point camera at the sky to unlock 'Space Mode' furniture",
        "📷 Screenshot feature includes hidden AR developer credits"
      ],
      behindScenes: [
        "🏡 Originally called 'RoomVision' - changed for trademark issues",
        "🎨 Our 3D artist spent 3 months perfecting realistic wood textures",
        "🚀 First AR project to use our custom cloud rendering pipeline"
      ]
    }
  }
];
