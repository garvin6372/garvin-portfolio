import { Project, Experience, Skill, UserProfile, Testimonial, Achievement } from './types';

export const CURRENT_USER: UserProfile = {
  username: 'garvin_dholakiya',
  fullName: 'Garvin Dholakiya',
  title: 'AI Workflow Expert | Vibe Coder',
  tagline: 'AI Automation | n8n • Make.com • Python • Node.js',
  bio: 'AI Automation Engineer | AI Agents & Workflow Architect 🤖\nBuilding smart automation systems to help businesses work faster.\nMission: Automate boring work & unlock efficiency with AI. 🚀',
  avatarUrl: 'https://ui-avatars.com/api/?name=Garvin+Dholakiya&background=0095f6&color=fff&size=200',
  availability: 'open',
  location: 'Gujarat, India',
  workingHours: '10 AM – 8 PM IST',
  stats: {
    projects: 25,
    experience: '3+ Years',
    techStack: 15,
    liveApps: 12,
  },
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: "Delivered on time and exceeded expectations. The AI automation workflow saved us 20 hours a week.",
    author: "Client",
    role: "SaaS Founder"
  }
];

export const CURRENT_STATUS = {
  emoji: '🤖',
  text: 'Building AI Agents using ChatGPT & Vector DBs'
};

export const SKILLS: Skill[] = [
  {
    name: 'Python',
    category: 'backend',
    color: 'bg-yellow-50 text-yellow-700',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
  },
  {
    name: 'Node.js',
    category: 'backend',
    color: 'bg-green-50 text-green-700',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
  },
  {
    name: 'n8n',
    category: 'ai',
    color: 'bg-red-50 text-red-600',
    icon: 'https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png'
  },
  {
    name: 'Make',
    category: 'ai',
    color: 'bg-purple-50 text-purple-600',
    icon: 'https://images.ctfassets.net/un655fb9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg'
  },
  {
    name: 'AI Agents',
    category: 'ai',
    color: 'bg-green-50 text-green-600',
    icon: 'https://cdn-icons-png.flaticon.com/512/8943/8943377.png'
  },
  {
    name: 'LLMs',
    category: 'ai',
    color: 'bg-indigo-50 text-indigo-700',
    icon: 'https://cdn-icons-png.flaticon.com/512/10065/10065796.png'
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    color: 'bg-blue-50 text-blue-600',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    color: 'bg-blue-50 text-blue-600',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
  },
  {
    name: 'React',
    category: 'frontend',
    color: 'bg-blue-100 text-blue-800',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  },
  {
    name: 'Next.js',
    category: 'frontend',
    color: 'bg-gray-50 text-gray-900',
    icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
  },
  {
    name: 'NestJS',
    category: 'backend',
    color: 'bg-red-50 text-red-600',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/NestJS_logo.svg'
  },
  {
    name: 'Express',
    category: 'backend',
    color: 'bg-gray-100 text-gray-800',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
  },
  {
    name: 'FastAPI',
    category: 'backend',
    color: 'bg-teal-50 text-teal-600',
    icon: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png'
  },
  {
    name: 'Laravel',
    category: 'backend',
    color: 'bg-red-50 text-red-600',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg'
  },
  {
    name: 'CodeIgniter',
    category: 'backend',
    color: 'bg-orange-50 text-orange-600',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/CodeIgniter_logo.svg'
  },
  {
    name: 'PHP',
    category: 'backend',
    color: 'bg-gray-100 text-gray-700',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg'
  },
  {
    name: 'APIs',
    category: 'backend',
    color: 'bg-gray-100 text-gray-700',
    icon: 'https://cdn-icons-png.flaticon.com/512/2867/2867308.png'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    role: 'Freelance AI Automation Engineer',
    company: 'Freelance',
    period: 'Feb 2025 - Present',
    description: 'Building smart automation systems and AI-powered agents. Specializing in end-to-end workflow automation to save time and reduce costs for businesses.',
    logo: 'https://ui-avatars.com/api/?name=FL&background=f3f4f6&color=374151&size=100',
  },
  {
    id: 'exp2',
    role: 'Software Developer',
    company: 'Hidden Brains InfoTech',
    period: 'Nov 2024 - Present',
    description: 'Developing scalable software solutions. Combining engineering foundations with cutting-edge AI automation.',
    logo: 'https://ui-avatars.com/api/?name=HB&background=f3f4f6&color=374151&size=100',
  },
  {
    id: 'exp3',
    role: 'Software Developer',
    company: 'Keyntech Technologies Pvt. Ltd.',
    period: 'Mar 2023 - Nov 2024',
    description: 'Developed full-stack web applications and integrated complex APIs. Focused on product-focused builds and scalable architecture.',
    logo: 'https://ui-avatars.com/api/?name=KT&background=f3f4f6&color=374151&size=100',
  },
  {
    id: 'exp4',
    role: 'PHP Web Developer',
    company: 'TREESHA INFOTECH',
    period: 'Dec 2022 - Mar 2023',
    description: 'Backend development and web application maintenance.',
    logo: 'https://ui-avatars.com/api/?name=TI&background=f3f4f6&color=374151&size=100',
  },
  {
    id: 'exp5',
    role: 'PHP Web Developer',
    company: 'Ficuslot Innovation Pvt. Ltd.',
    period: 'Sep 2022 - Dec 2022',
    description: 'Started career working on web apps and gamified products using PHP and Python.',
    logo: 'https://ui-avatars.com/api/?name=FI&background=f3f4f6&color=374151&size=100',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'intro-post',
    title: 'Hi, I\'m Garvin! 👋',
    description: 'AI Workflow Expert & Vibe Coder. I build smart automation systems that help businesses work faster & smarter.',
    longDescription: "I specialize in turning manual processes into seamless automated systems using AI. From ChatGPT agents to complex n8n workflows, I help founders and teams unlock real business efficiency. Let's connect if you want to automate your business!",
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    technologies: ['AI Automation', 'n8n', 'Python'],
    demoUrl: '#',
    repoUrl: '#',
    likes: 1240,
    comments: 128,
    date: 'Pinned',
    type: 'update',
    category: 'All'
  },
  {
    id: 'proj1',
    title: 'Co Working Saas',
    description: 'Scalable co-working platform built with React, Node.js, and PHP.',
    longDescription: 'Designed and developed a full-featured co-working management system. Implemented desk and meeting room booking using advanced scheduling logic. Integrated PHP backends for core functionality and Node.js for real-time booking features.',
    imageUrl: '/assets/project_images/project_1_1.png',
    images: [
      '/assets/project_images/project_1_1.png',
      '/assets/project_images/project_1_2.png',
      '/assets/project_images/project_1_3.png',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    demoUrl: '#',
    repoUrl: '#',
    likes: 842,
    comments: 45,
    date: '1d ago',
    type: 'project',
    category: 'Projects'
  },
  {
    id: 'proj2',
    title: 'Jinnity Ai Automation',
    description: 'AI-driven business automation using n8n, Make, and LLMs.',
    longDescription: 'Created intelligent business automation solutions. Leveraged LLMs (ChatGPT) and custom AI agents to automate complex multi-step workflows, reducing manual effort significantly by connecting various SaaS tools through n8n and Make.com.',
    imageUrl: '/assets/project_images/project_2_1.png',
    images: [
      '/assets/project_images/project_2_1.png',
      '/assets/project_images/project_2_2.png',
      '/assets/project_images/project_2_3.png',
      '/assets/project_images/project_2_4.png',
    ],
    technologies: ['n8n', 'Make.com', 'LLMs', 'AI Agents'],
    demoUrl: '#',
    repoUrl: '#',
    likes: 615,
    comments: 32,
    date: '3d ago',
    type: 'project',
    category: 'Case Studies'
  },
  {
    id: 'proj3',
    title: 'Custom Dynamic Portfolio',
    description: 'High-performance portfolio built with Next.js, NestJS, and TypeScript.',
    longDescription: 'Built a high-performance, SEO-optimized portfolio website. Features a dynamic content management system with NestJS backend and Next.js frontend, ensuring a seamless user experience and easy updates through a custom dashboard.',
    imageUrl: '/assets/project_images/project_3_1.png',
    images: [
      '/assets/project_images/project_3_1.png',
      '/assets/project_images/project_3_2.png',
      '/assets/project_images/project_3_3.png',
    ],
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'Tailwind'],
    demoUrl: '#',
    repoUrl: '#',
    likes: 423,
    comments: 28,
    date: '1w ago',
    type: 'project',
    category: 'Projects'
  },
  {
    id: 'proj4',
    title: 'RealEstate Booking System',
    description: 'Comprehensive property system using Laravel, FastAPI, and Express.',
    longDescription: 'Engineered a comprehensive real estate platform. Utilized Laravel for core business logic, FastAPI for high-performance data processing services, and Express for handling micro-integrations and real-time notifications.',
    imageUrl: '/assets/project_images/project_4_1.png',
    images: [
      '/assets/project_images/project_4_1.png',
    ],
    technologies: ['Express', 'MySQL', 'Node.js'],
    demoUrl: '#',
    repoUrl: '#',
    likes: 310,
    comments: 15,
    date: '2w ago',
    type: 'project',
    category: 'UI Experiments'
  },
  {
    id: 'proj5',
    title: 'Bulk SMS & Marketing Automation',
    description: 'Scalable AI-powered bulk SMS and customer engagement platform.',
    longDescription: 'Built a multi-tenant bulk SMS platform with integrated AI for message optimization and sentiment analysis. Features include automated drip campaigns, lead qualification via SMS, and real-time analytics dashboards.',
    imageUrl: '/assets/project_images/ai_workflows/bulk_sms_automation_1768751892418.png',
    images: ['/assets/project_images/ai_workflows/bulk_sms_automation_1768751892418.png'],
    technologies: ['Node.js', 'Python', 'Twilio API', 'n8n'],
    demoUrl: '#',
    repoUrl: '#',
    likes: 524,
    comments: 42,
    date: '3d ago',
    type: 'project',
    category: 'Projects'
  },
  {
    id: 'proj6',
    title: 'AI Bulk Image Generator',
    description: 'High-speed automated image generation using Stable Diffusion and Midjourney APIs.',
    longDescription: 'Developed a headless workflow for generating thousands of brand-consistent images. Integrated with multiple LLMs for prompt engineering and Midjourney/SDXL for high-quality visual output.',
    imageUrl: '/assets/project_images/ai_workflows/ai_bulk_image_gen_1768751912289.png',
    images: ['/assets/project_images/ai_workflows/ai_bulk_image_gen_1768751912289.png'],
    technologies: ['Python', 'FastAPI', 'Stable Diffusion', 'Make.com'],
    demoUrl: '#',
    repoUrl: '#',
    likes: 712,
    comments: 58,
    date: '1w ago',
    type: 'project',
    category: 'Projects'
  },
  {
    id: 'proj7',
    title: 'Multi-Channel Social Auto-Poster',
    description: 'Automated content distribution across Instagram, YouTube, X, and LinkedIn.',
    longDescription: 'An all-in-one AI scheduler that creates, optimizes, and posts content across all major social platforms. Uses AI to adapt captions for each platform\'s unique audience and optimal posting times.',
    imageUrl: '/assets/project_images/ai_workflows/social_media_autoposter_1768751928505.png',
    images: ['/assets/project_images/ai_workflows/social_media_autoposter_1768751928505.png'],
    technologies: ['n8n', 'Make.com', 'OpenAI', 'Next.js'],
    demoUrl: '#',
    repoUrl: '#',
    likes: 845,
    comments: 64,
    date: '2w ago',
    type: 'project',
    category: 'Case Studies'
  },
  {
    id: 'proj8',
    title: 'Intelligent Support Chatbot',
    description: '24/7 AI customer support bot with deep knowledge base integration.',
    longDescription: 'Custom-built support agent capable of handling 80% of routine queries. Integrated with company documentation using RAG (Retrieval-Augmented Generation) for accurate, context-aware responses.',
    imageUrl: '/assets/project_images/ai_workflows/ai_customer_chatbot_ui_1768751942674.png',
    images: ['/assets/project_images/ai_workflows/ai_customer_chatbot_ui_1768751942674.png'],
    technologies: ['ChatGPT', 'LangChain', 'Pinecone', 'Next.js'],
    demoUrl: '#',
    repoUrl: '#',
    likes: 932,
    comments: 87,
    date: '3w ago',
    type: 'project',
    category: 'Projects'
  },
  {
    id: 'proj9',
    title: 'Custom Enterprise LLM Assistant',
    description: 'Secure, private LLM assistant tailored for enterprise data and workflows.',
    longDescription: 'A private AI ecosystem that integrates with enterprise databases and internal tools. Ensures data privacy while providing powerful AI capabilities for internal team productivity and automation.',
    imageUrl: '/assets/project_images/ai_workflows/enterprise_llm_assistant_1768751962926.png',
    images: ['/assets/project_images/ai_workflows/enterprise_llm_assistant_1768751962926.png'],
    technologies: ['Python', 'Llama 3', 'HuggingFace', 'FastAPI'],
    demoUrl: '#',
    repoUrl: '#',
    likes: 1105,
    comments: 92,
    date: '1mo ago',
    type: 'project',
    category: 'Startup'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'Hackathon Winner',
    organization: 'Global AI Hack 2023',
    date: 'Dec 2023',
    icon: '🏆'
  },
  {
    id: 'a2',
    title: 'Certified Dev',
    organization: 'Meta Frontend Cert',
    date: 'Aug 2023',
    icon: '📜'
  },
  {
    id: 'a3',
    title: 'Top Rated',
    organization: 'Upwork',
    date: '2024',
    icon: '⭐'
  }
];