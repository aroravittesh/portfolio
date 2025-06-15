// --- cliUtils.ts ---
export const personalData = () => [
    "👋 I'm Vittesh Arora, a Full Stack Developer.",
    'Driven by curiosity and built with purpose.',
    'Passionate about fast, scalable & meaningful web experiences.'
  ];
  
  export const getWhatIDo = () => `
  WHAT I DO
  =========
  
  As a Full Stack Developer, I blend logic and design to build scalable and user-focused products. My work spans multiple disciplines:
  
  1. SOFTWARE ENGINEERING
     Experience in building scalable and efficient software systems with modern engineering practices.
  
  2. WEB DEVELOPMENT
     Proficient in crafting responsive, dynamic websites and web apps using React, Next.js, and modern tooling.
  
  3. FRONTEND
     Skilled in creating intuitive, accessible user interfaces with pixel-perfect design and interactivity.
  
  4. BACKEND
     Capable of building REST APIs, handling databases, and managing server-side logic using Node.js and Supabase.
  `;
  
  export const getProjectDetails = (name: string): string[] => {
    const projects: Record<string, string[]> = {
      carbonmitra: [
        `CARBONMITRA (Web App)`,
        `→ Web Application to Help Coal Mines Achieve Carbon Neutrality`,
        `→ Built using React.js, Node.js, Express.js, MongoDB, OpenAI API`,
        ``,
        `Features:`,
        `- Quantify carbon emissions with precision`,
        `- Tailored carbon neutrality strategies`,
        `- Data visualization for actionable insights`,
        `- Operational efficiency monitoring`,
        `- Compliance tracking and reporting`,
        ``,
        `Highlights:`,
        `- Aligned with India's Net Zero mission`,
        `- Scalable MERN Stack architecture`,
        `- AI-powered recommendations`,
        `- Real-time emissions tracking`
      ],
      echoes: [
        `Echoes (Mobile App)`,
        `→ AI-Powered Landmark Exploration Mobile App`,
        `→ Built using React Native, MongoDB, Node.js, Express.js, Google Maps API, OpenAI API`,
        ``,
        `Features:`,
        `- Real-time landmark detection using geolocation`,
        `- AI-generated descriptions via GPT-4`,
        `- Interactive quizzes and badge system`,
        `- Google Maps integration`,
        `- Offline caching for visited locations`,
        ``,
        `Highlights:`,
        `- Gamified exploration experience`,
        `- Cross-platform support`,
        `- Smart fallback to city info`,
        `- Badge system for achievements`
      ],
      cookie: [
        `Cookie (AI Chatbot)`,
        `→ AI Chatbot for College FAQs and Automation`,
        `→ Built using MERN Stack, Power Virtual Agents, SharePoint`,
        ``,
        `Features:`,
        `- Handles 100+ FAQs`,
        `- Context-aware conversation`,
        `- Dynamic knowledge base`,
        `- Real-time updates`,
        ``,
        `Highlights:`,
        `- Streamlined admin workflows`,
        `- Highly scalable`,
        `- SharePoint secured`,
        `- Personalized responses`
      ]
    };
    return projects[name.toLowerCase()] || ["❌ Project not found. Try: carbonmitra, echoes, or cookie."];
  };
  
  export const skills = () => [
    'Languages: C++, Python, Java, JavaScript, TypeScript',
    'Frameworks: React.js, React Native, Node.js, Express.js, Tailwind',
    'Databases: MySQL, MongoDB',
    'Cloud & Tools: GCP, Git, GitHub, VS Code, MS Office',
    'Expertise: DSA, OOPS, SE, OS, REST APIs, ML Basics'
  ];
  
  export const education = () => [
    '🎓 B.Tech in CSE, Bennett University (2022 - 2026)',
    'CGPA: 8.3',
    'Solved 320+ questions on LeetCode, GFG, and TUF+'
  ];
  
  export const extras = () => [
    'FullStack BU – Core Member',
    'Managed yearly tech fest i-Cosmic at Bennett University'
  ];
  
  export const contact = () => [
    '📧 Email: vittesharora04@gmail.com',
    '📱 Phone: +91-9460947980',
    '📍 Bengaluru, Karnataka, India'
  ];
  