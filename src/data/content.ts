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
      "Machine learning system for detecting and classifying military threats from structured and sensor data. Visualized through an interactive Streamlit dashboard with global threat mapping, attack predictions, threat level scoring, and intelligence insights.",
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "Streamlit", "Plotly", "Folium"],
    github:
      "https://github.com/AbhishekBRajpurohit/ai_military_threatintelligence",
    image: "/projects/threat-intelligence.jpg",
  },
  {
    title: "NyayBot AI (Frontend)",
    description:
      "Frontend for an AI-powered legal assistant helping Indian undertrial prisoners and NGOs access legal information. Supports multiple Indian languages with case-analysis chat, lawyer directory, report generation, and alerts.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/AbhishekBRajpurohit/nyaybot-frontend",
    image: "/projects/nyaybot.jpg",
  },
  {
    title: "NyayBot AI (Backend)",
    description:
      "Backend REST API powering NyayBot AI — handles FIR analysis, bail-probability prediction, and lawyer-matching logic for the multilingual legal assistant. Built on the PERN stack with PostgreSQL.",
    tech: ["Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/AbhishekBRajpurohit/nyaybot-backend",
    image: "/projects/nyaybot-backend.jpg",
  },
  {
    title: "Real-Time Network Intrusion Detection",
    description:
      "Live network monitoring dashboard that captures packets in real time and flags anomalies. Displays packets captured, alerts raised, and IPs blocked with live traffic trends and alert inspection tables.",
    tech: ["Python", "Streamlit", "Networking", "ML Classification"],
    github:
      "https://github.com/AbhishekBRajpurohit/network_intrusion_detection_system",
    image: "/projects/nids.jpg",
  },
  {
    title: "VoiceGuard AI Defense",
    description:
      "AI-driven voice security tool that detects AI-generated, deepfake, or spoofed audio. Features live mic capture, AASIST spectro-temporal analysis, and a multi-stage detection pipeline to defend against voice-based social engineering.",
    tech: ["Python", "Machine Learning", "Audio Processing"],
    github: "https://github.com/AbhishekBRajpurohit/voiceguard-ai-defense",
    image: "/projects/voiceguard.jpg",
  },
  {
    title: "dKeeper ICP",
    description:
      "Decentralized note-keeping app deployed on the Internet Computer blockchain with censorship-resistant, tamper-proof storage. Backend canister in Motoko enables on-chain CRUD operations with no centralized database.",
    tech: ["Motoko", "React", "ICP/DFX", "Internet Computer"],
    github: "https://github.com/AbhishekBRajpurohit/dkeeper-icp",
    image: "/projects/dkeeper-icp.jpg",
  },
];

export const certifications = [
  {
    title: "Certificate of Def-Space Programme 2026",
    issuer: "Bharat Space Education Research Centre (BSERC)",
    subIssuer: "Skill India · ISRO Ecosystem",
    period: "June 19 to August 9, 2026",
    year: "2026",
    credentialId: "BSERC-DSI-2026-1611",
    description:
      "Def Space Summer Internship Programme 2026 under the theme 'Responsible Innovation for Inclusive Growth', covering comprehensive exposure to Defence and Space technologies.",
    image: "/certificates/defspace-bserc-certificate.jpg",
    pdf: "/certificates/defspace-bserc-certificate.pdf",
    tags: ["Defence Tech", "Space Technologies", "AI Threat Intel", "Research"],
    featured: true,
  },
  {
    title: "Virtual Internship — Full Stack Development",
    issuer: "DecodeLabs",
    subIssuer: "Global Internship Credential",
    period: "June 15, 2026 — July 15, 2026",
    year: "2026",
    credentialId: "FSD073559",
    description:
      "Successfully completed the DecodeLabs Virtual Internship Program in Full Stack development, demonstrating hands-on problem-solving skills across real-world projects and collaborative development.",
    image: "/certificates/decodelabs-certificate.jpg",
    pdf: "/certificates/decodelabs-certificate.pdf",
    tags: ["Full Stack", "Web Development", "Software Engineering"],
    featured: true,
  },
  {
    title: "Python and Java Programming",
    issuer: "Infosys Springboard",
    subIssuer: "Enterprise Learning Certification",
    period: "",
    year: "2025",
    credentialId: "Verified",
    description:
      "Comprehensive programming certification covering Object-Oriented Programming (OOP), data structures, algorithms, and practical application building in Python and Java.",
    image: null,
    pdf: null,
    tags: ["Python", "Java", "OOP", "Data Structures"],
    featured: false,
  },
  {
    title: "Internet of Things (IoT)",
    issuer: "NPTEL",
    subIssuer: "National Programme on Technology Enhanced Learning",
    period: "",
    year: "2025",
    credentialId: "Verified",
    description:
      "Certification in IoT architectures, embedded sensors, wireless network protocols, edge computing, and real-time sensor data telemetry.",
    image: null,
    pdf: null,
    tags: ["IoT", "Embedded Systems", "Sensors", "Networking"],
    featured: false,
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
