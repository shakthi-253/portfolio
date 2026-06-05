export const personalInfo = {
  name: "V Shakthi Saravanan",
  title: "Software & Data Enthusiast",
  email: "shakthi2538@gmail.com",
  phone: "+918610685291",
  location: "Puducherry, India",
  linkedin: "https://linkedin.com/in/shakthisaravanan",
  github: "https://github.com/shakthi-253",
  summary:
    "Motivated Computer Science student with strong skills in full-stack web development, API integration, and backend development using HTML, CSS, JavaScript, React, Python, and SQL databases. Familiar with cybersecurity principles, secure API usage, and web security practices. Passionate about building secure, scalable, and user-friendly applications while exploring modern technologies in AI, IoT, and cybersecurity.",
};

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRMIST",
    score: "CGPA: 9.7 (CURRENT)",
    type: "college",
  },
  {
    degree: "HSC (CBSE)",
    institution: "Achariya Bala Siksha Mandir",
    score: "87.6%",
    type: "school",
  },
  {
    degree: "SSLC (CBSE)",
    institution: "Achariya Bala Siksha Mandir",
    score: "80.4%",
    type: "school",
  },
];

export const experience = [
  {
    company: "Infosys Springboard",
    role: "Intern",
    description: "Internship focusing on Python technology stack",
    points: [
      "Actively participated in the Internship 6.0 program and completed assignments focused on detecting fake job postings using NLP techniques",
      "Gained practical exposure to text processing, classification methods, and real-world dataset handling",
    ],
  },
  {
    company: "Eaton",
    role: "Intern",
    description: "Internship focusing on data management",
    points: [
      "Gained hands-on experience in data management and developed proficiency in Microsoft tools including Power BI, Excel, and other data applications",
    ],
  },
];

export const skills = [
  {
    category: "Programming",
    icon: "💻",
    color: "from-violet-500 to-purple-600",
    items: ["Python", "C"],
  },
  {
    category: "AI & Machine Learning",
    icon: "🤖",
    color: "from-blue-500 to-cyan-600",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Prompt Engineering",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
  {
    category: "Web Development",
    icon: "🌐",
    color: "from-emerald-500 to-teal-600",
    items: ["HTML", "CSS", "React.js", "REST APIs", "Flask"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "from-orange-500 to-amber-600",
    items: ["MySQL", "SQL"],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    color: "from-pink-500 to-rose-600",
    items: ["Data Analysis", "Business Intelligence", "SAP Analytics Cloud", "Google Analytics"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "📦",
    color: "from-indigo-500 to-blue-600",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch"],
  },
  {
    category: "Tools & Technologies",
    icon: "🛠️",
    color: "from-slate-500 to-gray-600",
    items: ["GitHub", "VS Code", "N8N", "Docker", "AWS Basics"],
  },
  {
    category: "Core Concepts",
    icon: "🧠",
    color: "from-teal-500 to-cyan-600",
    items: ["Data Structures & Algorithms", "OOP", "API Integration", "IoT Systems", "DBMS"],
  },
];

export const projects = [
  {
    title: "AI-Powered Ambulance Tracking & Smart Traffic Clearance System",
    shortTitle: "AI Ambulance Tracker",
    emoji: "🚑",
    color: "from-red-500 to-orange-600",
    description:
      "An IoT-based emergency response system to track ambulances in real time using GPS modules and ESP32 microcontrollers.",
    points: [
      "Developed an IoT-based emergency response system to track ambulances in real time using GPS modules and ESP32 microcontrollers.",
      "Integrated Google Maps API to provide optimized routes and estimate ambulance arrival time (ETA).",
      "Implemented an automated traffic signal control mechanism that prioritizes ambulance movement by switching signals to green when an ambulance approaches an intersection.",
      "Built a web-based monitoring dashboard for hospitals and control rooms to track ambulance location, route status, and patient transport progress.",
      "Improved emergency response efficiency by enabling faster ambulance movement through traffic congestion.",
    ],
    tags: ["IoT", "ESP32", "Google Maps API", "GPS", "Python", "React"],
  },
  {
    title: "JobCheck – Detecting Fake Job Posts Using NLP",
    shortTitle: "JobCheck NLP",
    emoji: "🔍",
    color: "from-blue-500 to-indigo-600",
    description:
      "A Natural Language Processing model to detect fraudulent job postings and improve online job portal security.",
    points: [
      "Developed a Natural Language Processing (NLP) model to detect fraudulent job postings and improve online job portal security.",
      "Performed data preprocessing techniques including tokenization, stop-word removal, and text normalization on job description datasets.",
      "Applied TF-IDF vectorization to convert textual data into numerical features for machine learning models.",
      "Implemented classification algorithms to predict whether a job posting is genuine or fake.",
      "Evaluated model performance using metrics such as accuracy, precision, and recall to improve prediction reliability.",
    ],
    tags: ["NLP", "TF-IDF", "Python", "Scikit-learn", "Machine Learning"],
  },
  {
    title: "AI-Driven Course Allocation System",
    shortTitle: "Course Allocator",
    emoji: "🎓",
    color: "from-emerald-500 to-teal-600",
    description:
      "A full-stack web application to automate course allocation for faculty members in educational institutions.",
    points: [
      "Designed and developed a full-stack web application to automate course allocation for faculty members in educational institutions.",
      "Built the backend using Node.js to manage scheduling logic and handle faculty preferences and course constraints.",
      "Integrated a MySQL database for storing faculty information, course data, and allocation results.",
      "Developed an interactive React.js dashboard that allows administrators to manage course assignments and monitor allocation results.",
      "Reduced manual scheduling conflicts by implementing automated allocation logic.",
    ],
    tags: ["React.js", "Node.js", "MySQL", "Full-Stack", "REST APIs"],
  },
];

export const certifications = [
  { name: "NPTEL – Introduction to IoT", issuer: "NPTEL", icon: "📡" },
  { name: "NPTEL – Cloud Computing", issuer: "NPTEL", icon: "☁️" },
  { name: "Infosys Springboard – Python Technology Stack", issuer: "Infosys", icon: "🐍" },
  { name: "SAP Certified – Data Analyst – SAP Analytics Cloud", issuer: "SAP", icon: "📊" },
  { name: "AICTE EduSkill – Google AI-ML Virtual Internship", issuer: "AICTE", icon: "🤖" },
  { name: "Google Analytics Certification", issuer: "Google", icon: "📈" },
  { name: "AICTE EduSkill – Python Full Stack Development", issuer: "AICTE", icon: "💻" },
];

export const achievements = [
  {
    title: "ProtoThon 1.0 Winner",
    description: "Conducted at SRMIST, TRICHY",
    icon: "🏆",
    color: "from-yellow-400 to-amber-500",
  },
  {
    title: "Smart India Hackathon 2025",
    description: "Participant",
    icon: "🇮🇳",
    color: "from-orange-400 to-red-500",
  },
];

export const deploymentSteps = [
  {
    step: 1,
    title: "Prerequisites",
    icon: "📋",
    color: "from-blue-500 to-cyan-600",
    commands: [],
    description: "Ensure you have the following installed on your machine:",
    items: ["Node.js (v18 or higher)", "npm or yarn", "Git", "A GitHub account"],
  },
  {
    step: 2,
    title: "Clone & Setup",
    icon: "⬇️",
    color: "from-violet-500 to-purple-600",
    description: "Clone the repository and install dependencies:",
    commands: [
      "git clone https://github.com/shakthi-253/portfolio.git",
      "cd portfolio",
      "npm install",
    ],
    items: [],
  },
  {
    step: 3,
    title: "Run Locally",
    icon: "🖥️",
    color: "from-emerald-500 to-teal-600",
    description: "Start the development server:",
    commands: ["npm run dev"],
    items: ["Opens at http://localhost:5173", "Hot reload enabled for development"],
  },
  {
    step: 4,
    title: "Build for Production",
    icon: "🏗️",
    color: "from-orange-500 to-amber-600",
    description: "Create an optimized production build:",
    commands: ["npm run build"],
    items: ["Output goes to the /dist folder", "Minified and optimized for performance"],
  },
  {
    step: 5,
    title: "Deploy to Vercel (Recommended)",
    icon: "🚀",
    color: "from-slate-600 to-gray-800",
    description: "Deploy easily with Vercel:",
    commands: [
      "npm install -g vercel",
      "vercel login",
      "vercel --prod",
    ],
    items: [
      "Or connect your GitHub repo at vercel.com",
      "Automatic deployments on every git push",
      "Free SSL certificate included",
      "Custom domain support available",
    ],
  },
  {
    step: 6,
    title: "Deploy to GitHub Pages",
    icon: "🐙",
    color: "from-gray-700 to-gray-900",
    description: "Alternative: Deploy to GitHub Pages:",
    commands: [
      "npm install -D gh-pages",
      'Add "homepage": "https://shakthi-253.github.io/portfolio" to package.json',
      'Add "predeploy": "npm run build" and "deploy": "gh-pages -d dist" scripts',
      "npm run deploy",
    ],
    items: [
      "Free hosting via GitHub Pages",
      "URL format: username.github.io/repo-name",
    ],
  },
  {
    step: 7,
    title: "Deploy to Netlify",
    icon: "🌐",
    color: "from-teal-500 to-cyan-600",
    description: "Another great option – Netlify:",
    commands: [
      "npm install -g netlify-cli",
      "npm run build",
      "netlify deploy --prod --dir=dist",
    ],
    items: [
      "Or drag & drop /dist folder at app.netlify.com",
      "Continuous deployment from Git",
      "Free custom domain & SSL",
    ],
  },
];
