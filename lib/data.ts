export type SkillTier = "Advanced" | "Proficient" | "Familiar";

export const tierWidth: Record<SkillTier, number> = {
  Advanced: 92,
  Proficient: 72,
  Familiar: 50,
};

export interface Skill {
  name: string;
  tier: SkillTier;
}

export interface SkillCategory {
  category: string;
  icon: "frontend" | "backend" | "database" | "ai" | "code" | "tools";
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "frontend",
    skills: [
      { name: "Next.js", tier: "Advanced" },
      { name: "React.js", tier: "Advanced" },
      { name: "TypeScript", tier: "Advanced" },
      { name: "Tailwind CSS", tier: "Advanced" },
      { name: "HTML5/CSS3", tier: "Proficient" },
      { name: "Responsive Design", tier: "Proficient" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "backend",
    skills: [
      { name: "Node.js", tier: "Advanced" },
      { name: "Express.js", tier: "Proficient" },
      { name: "REST APIs", tier: "Proficient" },
      { name: "Python", tier: "Proficient" },
      { name: "API Integration", tier: "Proficient" },
      { name: "Middleware", tier: "Familiar" },
    ],
  },
  {
    category: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "MongoDB", tier: "Advanced" },
      { name: "PostgreSQL", tier: "Proficient" },
      { name: "Vector Databases (FAISS)", tier: "Proficient" },
      { name: "Database Design", tier: "Proficient" },
      { name: "SQL/NoSQL", tier: "Proficient" },
      { name: "Firebase", tier: "Familiar" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "ai",
    skills: [
      { name: "Computer Vision (OpenCV)", tier: "Proficient" },
      { name: "RAG Systems", tier: "Proficient" },
      { name: "Agentic AI / LLM Agents", tier: "Proficient" },
      { name: "LangChain", tier: "Proficient" },
      { name: "Neural Networks", tier: "Familiar" },
      { name: "Supervised & Unsupervised Learning", tier: "Familiar" },
      { name: "Classical ML (KNN, K-Means, Random Forest)", tier: "Familiar" },
    ],
  },
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", tier: "Proficient" },
      { name: "JavaScript", tier: "Proficient" },
      { name: "OOP Concepts", tier: "Proficient" },
      { name: "Data Structures", tier: "Proficient" },
      { name: "Algorithms", tier: "Proficient" },
      { name: "Java", tier: "Familiar" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "tools",
    skills: [
      { name: "Git", tier: "Proficient" },
      { name: "GitHub", tier: "Proficient" },
      { name: "VS Code", tier: "Familiar" },
    ],
  },
];

export const marqueeTech = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "LangChain",
  "OpenCV",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "PostgreSQL",
  "Express.js",
  "Git",
];

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Car-Bike Marketplace",
    desc: "A single platform to buy, sell, and explore cars and bikes with ease.",
    tech: ["Next.js 14", "TypeScript", "MongoDB", "Tailwind"],
    image: "/carbike.png",
    link: "https://car-bike-marketplace.vercel.app/",
  },
  {
    title: "Rimsha Lab",
    desc: "Rimsha Lab is a trusted diagnostic laboratory providing accurate and reliable medical test services.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "TypeScript", "Tailwind CSS"],
    image: "/rimshalabfrontend.png",
    link: "https://rimsha-lab-frontend.vercel.app/",
  },
  {
    title: "Prescripto",
    desc: "Prescripto is a digital platform for managing and organizing medical prescriptions and health records.",
    tech: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
    image: "/prescriptofrontend.png",
    link: "https://prescripto-xi-eosin.vercel.app/",
  },
  {
    title: "Rimsha Lab Admin",
    desc: "The administrative dashboard for managing operations, tests, and patient records at Rimsha Lab.",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    image: "/rimshalabadmin.png",
    link: "https://rimsha-lab-admin.vercel.app/login",
  },
  {
    title: "Prescripto Admin",
    desc: "The backend dashboard for managing prescriptions, users, and health data on the Prescripto platform.",
    tech: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
    image: "/prescriptoadmin.png",
    link: "https://prescripto-vr29.vercel.app/",
  },
];

export interface EducationEntry {
  level: string;
  institution: string;
  degree: string;
  duration: string;
  status?: string;
  location: string;
  logo: string;
  logoInitial: string;
  highlights: string[];
}

export const educationData: EducationEntry[] = [
  {
    level: "University",
    institution: "COMSATS University Islamabad, Lahore Campus",
    degree: "Bachelor of Science in Software Engineering",
    duration: "2023 - 2027 (Expected)",
    status: "6th Semester (Current)",
    location: "Lahore, Pakistan",
    logo: "/comsats-logo.png",
    logoInitial: "CU",
    highlights: [
      "Focus: Software Engineering, Web/App Development & AI/ML",
      "Active in Programming & Development Clubs",
      "Coursework: Data Structures, Algorithms, Web Development",
      "Database Systems, Software Engineering",
    ],
  },
  {
    level: "College",
    institution: "Defence Degree College For Boys",
    degree: "Intermediate in Computer Science",
    duration: "2021 - 2023",
    location: "Lahore, Pakistan",
    logo: "/college-logo.png",
    logoInitial: "DD",
    highlights: [
      "Computer Science & Mathematics Focus",
      "Participated in Science & Technology Exhibitions",
      "Developed foundational programming skills",
    ],
  },
  {
    level: "School",
    institution: "Fauji Foundation Model School, Lahore Cantt",
    degree: "Science",
    duration: "2009 - 2021",
    location: "Lahore, Pakistan",
    logo: "/school-logo.png",
    logoInitial: "FF",
    highlights: [
      "Science Stream with Computer Studies",
      "Active participant in academic competitions",
      "Built strong foundation in sciences",
    ],
  },
];

export interface ExperienceEntry {
  role: string;
  company?: string;
  duration: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    role: "Next.js Developer Intern",
    company: "Developers INN",
    duration: "June 2025 - August 2025",
    type: "Industrial Training",
    location: "Lahore, Pakistan",
    description: "Gained industrial experience on real-time projects using modern web technologies.",
    responsibilities: [
      "Developed and maintained Next.js applications for enterprise clients",
      "Collaborated with senior developers on full-stack solutions",
      "Implemented responsive UI components with Tailwind CSS",
      "Integrated REST APIs and third-party services",
      "Participated in Agile development processes and code reviews",
    ],
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Node.js", "Git"],
  },
  {
    role: "IT Specialist",
    company: "Rimsha Lab",
    duration: "2023 - Present",
    type: "Part-time",
    location: "Lahore, Pakistan",
    description: "Managed IT infrastructure support.",
    responsibilities: [
      "Maintained and troubleshooted lab IT systems and networks",
      "Provided technical support to staff and clients",
      "Implemented basic automation scripts for lab processes",
    ],
    technologies: ["IT Support", "Technical Support"],
  },
  {
    role: "AI/ML & Agentic Systems Projects",
    duration: "2024 - Present",
    type: "Personal Projects",
    location: "Self-directed",
    description:
      "Building computer vision and retrieval-augmented generation projects, now moving into agentic AI — LLM-driven agents that plan, use tools, and carry out multi-step tasks on their own.",
    responsibilities: [
      "Building computer vision models for image classification and object detection with OpenCV",
      "Designing RAG pipelines that ground LLM responses in real documents to cut down hallucination",
      "Experimenting with agentic AI systems — LLM agents that plan, call tools, and execute multi-step workflows",
      "Building backend APIs and vector-store integrations to support AI-powered features",
      "Applying classical ML algorithms (KNN, K-Means, Random Forest) to structured data problems",
    ],
    technologies: ["Python", "OpenCV", "LangChain", "RAG", "Node.js", "MongoDB"],
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  courses?: string[];
  signatory?: string;
  verifyUrl: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    title: "Advanced Computer Vision with TensorFlow",
    issuer: "DeepLearning.AI · Coursera",
    date: "August 2026",
    signatory: "Laurence Moroney, Lead AI Advocate, Google",
    verifyUrl: "https://coursera.org/verify/BD8UQWVTZNFU",
    image: "/computervision-1.png",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI · Coursera",
    date: "July 2026",
    courses: [
      "Neural Networks and Deep Learning",
      "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      "Structuring Machine Learning Projects",
      "Convolutional Neural Networks",
      "Sequence Models",
    ],
    signatory: "Andrew Ng, Founder, DeepLearning.AI",
    verifyUrl: "https://coursera.org/verify/specialization/7FLGRJ25HLJZ",
    image: "/deeplearning-1.png",
  },
  {
    title: "AI & LLM Engineering Mastery — GenAI, RAG Complete Guide",
    issuer: "Packt · Coursera",
    date: "July 2026",
    courses: [
      "Foundations of AI, LLMs, and Development Environments",
      "Advanced Prompt Engineering and Memory Management",
      "Building and Fine-Tuning LLM Applications",
    ],
    verifyUrl: "https://coursera.org/verify/specialization/Y89C7GZ68BPW",
    image: "/aillm-1.png",
  },
];

export const heroRoles = [
  "Full-Stack Web Developer",
  "AI/ML Engineer",
  "Agentic AI Developer",
  "Software Engineer",
];

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Shipped", value: 10, suffix: "+" },
  { label: "Technologies", value: 5, suffix: "+" },
];

export const contactInfo = {
  name: "Mubeen Ahmed",
  email: "ahmedqazimubeen@gmail.com",
  phone: "+923284161846",
  location: "Lahore, Punjab, Pakistan",
  resume: "/Mubeen_Ahmed_1Page.pdf",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/mubeen-ahmed-79aa742b7/",
  github: "https://github.com/mubeenahmedqazi",
  facebook: "https://www.facebook.com/mubeen.ahmed.33671",
  instagram: "https://www.instagram.com/m.mubeenahmedqazi/",
};

export const aboutText =
  "I'm a Software Engineering student at COMSATS University and a full-stack developer who's spent the last year moving deeper into AI/ML engineering. I build production web apps with Next.js and React, but most of my recent work has been on the AI side — computer vision, retrieval-augmented generation, and right now, agentic AI systems that can plan and carry out multi-step tasks on their own. I like sitting at that intersection: shipping something that works end-to-end and making it genuinely intelligent.";

export const aboutKeyPoints = [
  "Full-Stack Web Development (Next.js & React)",
  "AI/ML Engineering — Computer Vision & RAG",
  "Agentic AI & LLM-Powered Systems",
  "API Development & Integration",
];

export const coreTech = ["Next.js", "React.js", "TypeScript", "Python", "Node.js", "LangChain"];

export const currentFocus =
  "Designing agentic AI systems — LLM agents with tool use, memory, and multi-step planning — built on top of RAG pipelines and computer vision fundamentals.";

export const visionText =
  "To grow into a senior AI/ML engineer who builds full-stack products with genuinely intelligent systems at their core — combining solid software engineering with computer vision, RAG, and agentic AI to create tools that do real, autonomous work.";

export const visionPillars = [
  { title: "Technical Excellence", desc: "Write clean, production-grade code across the full stack and the AI systems built on top of it" },
  { title: "Real-World Impact", desc: "Ship products and AI features that solve problems people actually have" },
  { title: "Continuous Growth", desc: "Keep pace with fast-moving AI research — currently deep in agentic systems and RAG" },
];

export const visionFocusAreas = ["Full-Stack Development", "Agentic AI Systems", "RAG & Computer Vision"];
