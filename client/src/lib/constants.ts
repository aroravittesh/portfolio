export const PERSONAL_INFO = {
  name: "Vittesh Arora",
  title: "Full Stack Developer",
  subtitle: "MERN Stack Specialist",
  email: "vittesharora04@gmail.com",
  phone: "+91-9460947980",
  location: "Bengaluru, Karnataka, India",
  university: "Bennett University",
  degree: "B.Tech Computer Science Engineering",
  expectedGraduation: "June 2026",
  problemsSolved: "370+",
  linkedIn: "https://linkedin.com/in/vittesh-arora",
  github: "https://github.com/aroravittesh",
  leetcode: "https://leetcode.com/u/vittesharora",
  resume: "https://drive.google.com/file/d/14_pTrgUpJy5TWQJtgvgl_Ifo3bum1IoO/view?usp=sharing?usp=sharing"
};

export const TYPING_TEXTS = [
  "Full Stack Developer",
  "MERN Stack Specialist", 
  "Problem Solver",
  "Tech Innovator"
];

export const SKILLS = [
  {
    category: "Programming Languages",
    icon: "fas fa-code",
    skills: [
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "fas fa-layer-group",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    category: "Databases",
    icon: "fas fa-database",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "Cloud & Tools",
    icon: "fas fa-cloud",
    skills: [
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "MS Office", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftoffice.svg" },
    ],
  },
  {
    category: "Technical Expertise",
    icon: "fas fa-cogs",
    skills: [
      { name: "Data Structures & Algorithms", icon: "" },
      { name: "OOPS", icon: "" },
      { name: "Software Engineering", icon: "" },
      { name: "Operating Systems", icon: "" },
      { name: "REST APIs", icon: "" },
      { name: "Machine Learning Basics", icon: "" },
    ],
  },
];


export const PROJECTS = [
  {
    id: "carbonmitra",
    title: "CARBONMITRA",
    subtitle: "Web Application to Help Coal Mines Achieve Carbon Neutrality",
    description: "A comprehensive web application designed to assist Indian coal mines in achieving carbon neutrality and optimizing sustainability efforts. The platform provides advanced analytics and strategic recommendations aligned with India's Net Zero mission.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
    features: [
      "Quantify carbon emissions with precision",
      "Deliver tailored carbon neutrality strategies", 
      "Data visualization for actionable insights",
      "Operational efficiency monitoring",
      "Compliance tracking and reporting"
    ],
    highlights: [
      "Aligned with India's Net Zero mission",
      "Scalable MERN Stack architecture",
      "AI-powered recommendations",
      "Real-time emissions tracking"
    ],
    category: "Sustainability",
    color: "emerald"
  },
  {
    id: "echoes",
    title: "Echoes",
    subtitle: "AI-Powered Landmark Exploration Mobile App",
    description: "An innovative mobile application that revolutionizes landmark exploration using GPT-4 and real-time geolocation to generate contextual, site-specific descriptions and interactive experiences.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "MongoDB", "Node.js", "Express.js", "Google Maps API", "OpenAI API"],
    features: [
      "Real-time landmark detection using geolocation",
      "AI-generated descriptions via GPT-4",
      "Interactive quizzes and achievement system",
      "Google Maps integration for navigation",
      "Offline caching for visited locations"
    ],
    highlights: [
      "Gamified exploration experience",
      "Cross-platform mobile compatibility", 
      "Intelligent fallback to city information",
      "Achievement badge system"
    ],
    category: "Mobile App",
    color: "cyan"
  },
  {
    id: "cookie",
    title: "Cookie",
    subtitle: "AI Chatbot for College FAQs and Automation",
    description: "An intelligent AI-powered chatbot solution designed to automate college-related queries and administrative tasks. The system handles over 100 FAQs with high accuracy and contextual understanding.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["MERN Stack", "Power Virtual Agents", "SharePoint"],
    features: [
      "Automated FAQ resolution for 100+ queries",
      "Context-aware conversational interface",
      "Dynamic knowledge base management",
      "Multi-domain scalability",
      "Real-time content updates"
    ],
    highlights: [
      "Streamlined administrative workflows",
      "Scalable to any industry domain",
      "Secure SharePoint integration", 
      "Personalized response system"
    ],
    category: "AI Chatbot",
    color: "rose"
  }
];

export const ACHIEVEMENTS = [
  {
    value: "30+",
    label: "Problems Solved",
    description: "LeetCode, TUF+, GeeksforGeeks",
    color: "cosmic-cyan"
  },
  {
    value: "3+",
    label: "Major Projects",
    description: "MERN Stack & AI",
    color: "cosmic-coral"
  },
  {
    value: "2026",
    label: "Expected Graduation",
    description: "Bennett University",
    color: "cosmic-teal"
  },
  {
    value: "1+",
    label: "Years Experience",
    description: "Full Stack Development",
    color: "purple-400"
  }
];

export const TECHNOLOGIES = [
  { name: "React.js", icon: "fab fa-react", color: "cosmic-cyan" },
  { name: "Node.js", icon: "fab fa-node-js", color: "emerald-400" },
  { name: "MongoDB", icon: "fas fa-database", color: "cosmic-teal" },
  { name: "Python", icon: "fab fa-python", color: "yellow-400" },
  { name: "AI/ML", icon: "fas fa-brain", color: "cosmic-coral" },
  { name: "GCP", icon: "fab fa-google", color: "blue-400" }
];
