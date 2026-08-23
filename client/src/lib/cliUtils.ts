// --- cliUtils.ts ---
export const personalData = () => [
  "👋 Hi, I'm Vittesh Arora.",
  "Full Stack Developer | MERN Stack Specialist | Problem Solver | AI Agent Developer",
  "I build fast, scalable & meaningful web experiences.",
  "As a Full Stack Developer, I build scalable web and mobile apps with clean engineering and user-first design.",
  "Beyond the stack, I work in agentic AI — LangChain, LangGraph, RAG, tool calling, and MCP — to build intelligent, context-aware workflows."
];
  
  export const getWhatIDo = () => `
  WHAT I DO
  =========
  
  As a Full Stack Developer, I blend logic and design to build scalable and user-focused products. My work spans multiple disciplines:
  
  1. SOFTWARE ENGINEERING
     Experience in building scalable and efficient software systems with modern engineering practices.
  
  2. AGENTIC AI
     Designing intelligent agents and workflows with LangChain, LangGraph, RAG, tool calling, and MCP — from retrieval-augmented pipelines to autonomous, context-aware applications.
  
  3. WEB DEVELOPMENT
     Proficient in crafting responsive, dynamic websites and web apps using React, Next.js, and modern tooling.
  
  4. FRONTEND
     Skilled in creating intuitive, accessible user interfaces with pixel-perfect design and interactivity.
  
  5. BACKEND
     Capable of building REST APIs, handling databases, and managing server-side logic using Node.js and Supabase.
  `;
  
  export const getProjectDetails = (name: string): string[] => {
    const projects: Record<string, string[]> = {
      sanchaya: [
        `Sanchaya (Web + Mobile Platform)`,
        `→ Smart Inventory & Spoilage Optimization System`,
        `→ Built using React.js, React Native, Node.js, PostgreSQL, Facebook Prophet`,
        ``,
        `Features:`,
        `- AI-based demand forecasting`,
        `- Spoilage simulation modeling`,
        `- Optimized inventory routing`,
        `- Admin and store dashboards`,
        `- PWA-compatible mobile support`,
        ``,
        `Highlights:`,
        `- Centralized control simulation`,
        `- Accurate spoilage prediction`,
        `- Scalable architecture`,
        `- Live Link:`,
        `  https://sanchaya-web.web.app/`,
      ],
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
      ],
      flex: [
        `Flex (Mobile App)`,
        `→ AI-Powered Fitness and Nutrition Tracker`,
        `→ Built using React Native, Node.js, Express.js, MongoDB, OpenAI API`,
        ``,
        `Features:`,
        `- Personalized workout and diet plans`,
        `- AI calorie & water intake tracker`,
        `- Equipment-aware fitness routines`,
        `- Clean mobile-first design`,
        ``,
        `Highlights:`,
        `- Real-time AI health feedback`,
        `- Offline-first support`,
        `- Tailored for multiple body types`,
        `- Built with full MERN architecture`
      ],
      aurex: [
        `Aurex (Stock Portfolio Intelligence Platform)`,
        `→ Full-stack platform for portfolio management, holdings tracking, and ML-driven analytics`,
        `→ Built using Angular, TypeScript, Go, Gorilla Mux, PostgreSQL, Python, Docker, CI/CD`,
        ``,
        `Features:`,
        `- User authentication (JWT)`,
        `- Portfolio management`,
        `- Holdings tracking`,
        `- Portfolio analytics`,
        `- ML-based insights`,
        ``,
        `Highlights:`,
        `- Modular Go REST API architecture`,
        `- Angular frontend with PostgreSQL backend`,
        `- Python ML service integration`,
        `- Docker & CI/CD deployment pipeline`,
        `- GitHub:`,
        `  https://github.com/aroravittesh/wealthscope`,
      ]
    };
  
    return projects[name.toLowerCase()] || ["❌ Project not found. Try: sanchaya, carbonmitra, echoes, cookie, flex, or aurex."];
  };
  
  
  export const skills = () => [
    'Languages: C++, JavaScript, TypeScript, Python, Java',
    'Frameworks: React.js, React Native, Node.js, Express.js, Next.js, Tailwind',
    'Databases: MySQL, MongoDB, PostgreSQL',
    'Cloud & Tools: AWS, GCP, Git, GitHub, VS Code, MS Office',
    'AI & Agentic Systems: LangChain, LangGraph, RAG, AI Agents, Tool Calling, MCP',
    'Expertise: DSA, OOPS, SE, OS, REST APIs, ML Basics'
  ];
  
  export const experience = () => [
    '💼 Software Developer Intern — RePut.ai',
    'Bengaluru, Karnataka, India | June 2026 – August 2026',
    '',
    '• Engineered an enterprise carbon accounting platform for Scope 1–3 emissions tracking with Angular dashboards featuring plant-wise analytics, scope breakdowns, multi-facility management, and sustainability reporting.',
    '• Designed and maintained 100+ REST API endpoints using Node.js, Express.js, and PostgreSQL for multi-tenant operations, JWT/MFA authentication, role-based access control, and AWS S3/SES integrations.',
    '• Delivered ESG compliance capabilities (BRSR, GRI, TCFD, SASB, CBAM, PCF) with AI-powered emission-factor enrichment via OpenAI, anomaly detection, hotspot analysis, and automated forecasting workflows.'
  ];

  export const education = () => [
    '🎓 MS in Computer Science',
    'University of Florida — January 2026 to December 2027',
    'Gainesville, Florida, United States',
    'GPA: 3.77',
    '',
    '🎓 B.Tech in Computer Science Engineering',
    'Bennett University — Sep 2022 to Jun 2026',
    'Greater Noida, UP, India',
    'CGPA: 8.52',
    '',
    'Solved 380+ questions on LeetCode, TUF+, and GFG'
  ];  
  
  export const extras = () => [
    'FullStack BU – Core Member',
    'Managed yearly tech fest i-Cosmic at Bennett University'
  ];
  
  export const contact = () => [
    '📧 Email: vittesharora04@gmail.com',
    '📱 Phone: +91-9460947980, +1 (352) 301-5269',
    '📍 Gainesville, Florida, United States'
  ];
  