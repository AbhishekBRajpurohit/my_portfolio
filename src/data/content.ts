export const siteConfig = {
  name: "Abhishek Rajpurohit",
  title: "Abhishek Rajpurohit | Portfolio",
  description:
    "3rd-year CS (IoT & Cybersecurity) student building full-stack and AI-driven applications, with hands-on ML experience in threat intelligence.",
  url: "https://abhishekrajpurohit.dev",
  email: "abhishekbrajpurohit@hotmail.com",
  phone: "+91 9483439601",
  github: "https://github.com/AbhishekBRajpurohit",
  linkedin: "https://linkedin.com/in/abhishek-rajpurohit-328089404",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "Java", "Motoko"],
  },
  {
    category: "Frameworks",
    items: ["React", "Tailwind CSS", "Node.js", "Express.js", "Flask"],
  },
  {
    category: "Machine Learning & Data",
    items: [
      "scikit-learn",
      "pandas",
      "NumPy",
      "Prophet",
      "statsmodels",
      "Matplotlib",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "Linux",
      "VS Code",
      "Streamlit",
      "joblib",
      "ReportLab",
      "python-docx",
    ],
  },
];

export const experience = [
  {
    role: "Tech Intern",
    company: "Defspace (BSERC)",
    location: "Bangalore (Remote)",
    period: "Jun 2026 — Jul 2026",
    bullets: [
      "Built an AI-based Military Threat Intelligence system for detecting and classifying threats from structured/sensor data using scikit-learn ML models.",
      "Used pandas and NumPy for data preprocessing, and Streamlit with Plotly/Folium to build an interactive dashboard for visualizing classification results.",
    ],
  },
];

export const projects = [
  {
    title: "AI Military Threat Intelligence",
    description:
      "Machine learning system for detecting and classifying military threats from structured/sensor data. Results visualized through an interactive Streamlit dashboard with a Global Threat Map, Country Analysis, Attack Prediction, Threat Level scoring, Forecasting, AI Intelligence insights, and a Data Explorer.",
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "Streamlit", "Plotly", "Folium"],
    github:
      "https://github.com/AbhishekBRajpurohit/ai_military_threatintelligence",
    image: null,
  },
  {
    title: "NyayBot AI (Frontend)",
    description:
      "Frontend for an AI-powered legal assistant helping Indian undertrial prisoners and NGOs access legal information. Supports Hindi, Kannada, Tamil and more with case-analysis chat, lawyer directory, report generation, and history/alerts.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/AbhishekBRajpurohit/nyaybot-frontend",
    image: "/projects/nyaybot.jpg",
  },
  {
    title: "NyayBot AI (Backend)",
    description:
      "Backend API powering NyayBot AI — handles FIR analysis, bail-probability prediction, and lawyer-matching logic for the multilingual legal assistant. Built on the PERN stack.",
    tech: ["Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/AbhishekBRajpurohit/nyaybot-backend",
    image: null,
  },
  {
    title: "Real-Time Network Intrusion Detection",
    description:
      "Live network monitoring dashboard that captures packets in real time and flags anomalies. Displays packets captured, alerts raised, and IPs blocked, with a live traffic trend chart and tables for recent alerts and traffic.",
    tech: ["Python", "Streamlit", "Networking", "ML Classification"],
    github:
      "https://github.com/AbhishekBRajpurohit/network_intrusion_detection_system",
    image: "/projects/nids.jpg",
  },
  {
    title: "VoiceGuard AI Defense",
    description:
      "AI-driven voice security tool that detects AI-generated/deepfake or spoofed audio and flags suspicious voice input. Features live mic capture, AASIST spectro-temporal analysis, and a multi-stage detection pipeline for defending against voice-based social engineering.",
    tech: ["Python", "Machine Learning", "Audio Processing"],
    github: "https://github.com/AbhishekBRajpurohit/voiceguard-ai-defense",
    image: "/projects/voiceguard.jpg",
  },
  {
    title: "dKeeper ICP",
    description:
      "Decentralized note-keeping app deployed on the Internet Computer blockchain with censorship-resistant, tamper-proof storage. Backend canister in Motoko enables on-chain CRUD operations. React frontend integrates via DFX framework.",
    tech: ["Motoko", "React", "ICP/DFX", "Internet Computer"],
    github: "https://github.com/AbhishekBRajpurohit/dkeeper-icp",
    image: null,
  },
];

export const certifications = [
  {
    title: "Full Stack Web Development (Internship)",
    issuer: "Decode Lab Tech",
    year: "2026",
  },
  {
    title: "Python and Java",
    issuer: "Infosys Springboard",
    year: "",
  },
  {
    title: "IoT",
    issuer: "NPTEL",
    year: "",
  },
];

export const hackathons = [
  {
    name: "HackOasis",
    project: "PrivacyManager",
    venue: "IEDC, Dayananda Sagar College of Engineering, Bangalore",
    date: "December 2024",
    description:
      "Participated in a 24-hour hackathon; received notable recognition from peers and judges.",
    tech: [],
  },
  {
    name: "Aventus 3.0",
    project: "Resume Generator",
    venue: "PES University, Bangalore",
    date: "April 2025",
    description:
      "Built a generative AI-powered resume generator that produces valid, structured LaTeX and renders it into downloadable PDFs via a Flask web server. Ranked top 10 in the code relay competition.",
    tech: ["Python", "Flask", "LaTeX"],
  },
];
