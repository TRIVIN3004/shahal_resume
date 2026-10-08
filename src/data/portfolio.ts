export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  models?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  problem: string;
  objective: string;
  approach: string;
  methodology: string[];
  results: string[];
  futureImprovements: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: 'Coursera' | 'VOIS';
  category: string;
  iconName: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  details?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Najeeb Shahal S",
    shortName: "NS",
    tagline: "AI & ML DEVELOPER | ASSOCIATE SECURITY ENGINEER",
    heroHeading: "Hi, I'm Najeeb Shahal S.",
    heroSubheading: "AI/ML Professional, Security Engineer & Python Developer",
    shortBio: "Artificial Intelligence and Machine Learning professional with hands-on experience across cybersecurity, Python development, machine learning, robotics, web development and UI/UX.",
    aboutIntro: "I am an Artificial Intelligence and Machine Learning professional with hands-on experience across cybersecurity, Python development, machine learning, robotics, web development and UI/UX. Experienced in developing academic AI/ML solutions, working with data preprocessing and model development, and contributing to technology-driven product environments. Strong interest in practical software engineering, problem solving, security-oriented systems and emerging AI technologies.",
    phone: "+91 9843019801",
    email: "najeebshahal07@gmail.com",
    location: "Coimbatore, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/najeebshahal07",
    resumeUrl: "/shahal_resume.pdf",
    languages: ["English", "Tamil", "Malayalam"],
    roles: [
      "Associate Security Engineer",
      "AI & Machine Learning Developer",
      "Python Developer"
    ],
    floatingBadges: [
      { text: "AI / ML", icon: "Brain" },
      { text: "Security Eng", icon: "Shield" },
      { text: "Python", icon: "Code2" }
    ]
  },

  skills: {
    programming: [
      { name: "Python", level: "Primary", highlight: true, icon: "Terminal" },
      { name: "C++", level: "Core", highlight: false, icon: "Code" }
    ],
    database: [
      { name: "MySQL", level: "Database", highlight: true, icon: "Database" }
    ],
    dataAi: [
      { name: "Machine Learning", highlight: true, icon: "Cpu" },
      { name: "Artificial Intelligence", highlight: true, icon: "Brain" },
      { name: "NLP", highlight: true, icon: "FileText" },
      { name: "Scikit-learn", highlight: true, icon: "Network" },
      { name: "Pandas", highlight: true, icon: "Layers" },
      { name: "NLTK", highlight: true, icon: "BookOpen" },
      { name: "Matplotlib", highlight: false, icon: "BarChart3" }
    ],
    otherTools: [
      { name: "MS Word", icon: "FileCode" },
      { name: "MS Excel", icon: "Sheet" }
    ],
    softSkills: [
      { name: "Problem Solving", desc: "Algorithmic thinking and analytical debugging" },
      { name: "Teamwork", desc: "Collaborative project delivery and cross-functional coordination" },
      { name: "Communication", desc: "Clear technical and presentation skills" },
      { name: "Adaptability", desc: "Rapid adoption of emerging tech stacks and methodologies" }
    ],
    languages: [
      { name: "English", level: "Professional" },
      { name: "Tamil", level: "Native / Fluent" },
      { name: "Malayalam", level: "Fluent" }
    ]
  },

  projects: [
    {
      id: "sleep-health-prediction",
      title: "Sleep Health & Lifestyle Prediction Using Machine Learning",
      category: "Machine Learning & Healthcare",
      description: "Developed a machine learning model to predict sleep quality using lifestyle factors including BMI, stress level and physical activity.",
      highlights: [
        "Data preprocessing",
        "Feature selection",
        "Exploratory Data Analysis",
        "Model comparison",
        "Prediction"
      ],
      models: ["Random Forest", "SVM"],
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      problem: "Irregular sleep patterns and chronic sleep disorders significantly affect physical health and mental cognitive performance, often driven by overlooked daily lifestyle parameters.",
      objective: "To design and train a supervised machine learning system capable of classifying and predicting sleep quality indices based on correlated personal lifestyle metrics.",
      approach: "Conducted thorough Exploratory Data Analysis (EDA) to understand distribution and relationships between lifestyle indicators (BMI, stress levels, daily physical exertion) and sleep quality metrics.",
      methodology: [
        "Dataset cleaning and normalization of continuous physiological and habit variables.",
        "Feature selection to identify primary lifestyle predictors impacting sleep score.",
        "Comparative benchmark evaluation across multiple classification algorithms including Random Forest and Support Vector Machines (SVM).",
        "Performance evaluation and hyperparameter optimization for optimal prediction accuracy."
      ],
      results: [
        "Identified stress levels and BMI as highly influential determinants of sleep quality.",
        "Trained robust Random Forest and SVM models providing predictive classification for preventative health insights."
      ],
      futureImprovements: [
        "Integrate real-time wearable sensor streams (heart rate variability, sleep stages).",
        "Deploy an interactive web-based lifestyle assessment dashboard for end users."
      ]
    },
    {
      id: "electricity-anomaly-detection",
      title: "Intelligent Abnormal Electricity Usage Detection System",
      category: "AI & Anomaly Detection",
      description: "Built an AI/ML-based system to identify abnormal electricity consumption patterns and unusual usage spikes.",
      highlights: [
        "Electricity usage analysis",
        "Anomaly detection",
        "Data preprocessing",
        "Pattern analysis",
        "Energy monitoring"
      ],
      technologies: ["Python", "Machine Learning"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      problem: "Unnoticed anomalies in power grids or facility consumption lead to energy wastage, equipment degradation, and unexpected power outages.",
      objective: "To formulate an automated intelligent monitoring framework that flags unusual electricity consumption spikes and irregular usage patterns in real time.",
      approach: "Preprocessed historical and periodic energy consumption logs, establishing baseline usage behaviors to detect statistical deviations and anomalous surges.",
      methodology: [
        "Continuous consumption timeseries data preprocessing and noise reduction.",
        "Pattern recognition of cyclic baseline energy loads across varying time frames.",
        "Implementation of anomaly detection machine learning techniques to isolate irregular spikes.",
        "Automated alerts generation pipeline for proactive power optimization."
      ],
      results: [
        "Successful identification of outlier consumption spikes differing from standard usage cycles.",
        "Applied preprocessing and pattern analysis techniques to support energy monitoring and reduce electricity wastage."
      ],
      futureImprovements: [
        "Integration with IoT smart meter telemetry for real-time live inferencing.",
        "Adding predictive load forecasting to anticipate future capacity demand."
      ]
    },
    {
      id: "nlp-text-summarization",
      title: "Text Summarization with Python",
      category: "Natural Language Processing",
      description: "Developed an NLP-based text summarization tool using preprocessing, tokenization and keyword extraction techniques with NLTK.",
      highlights: [
        "Text preprocessing",
        "Tokenization",
        "Keyword extraction",
        "Automatic summarization"
      ],
      technologies: ["Python", "NLTK", "NLP"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      problem: "The rapid growth of textual digital documents demands efficient tools to distill lengthy articles into concise, actionable summaries without losing key semantic context.",
      objective: "To create an automated Natural Language Processing summarization engine that processes long-form text and outputs structured, representative summaries.",
      approach: "Utilized foundational NLP processing pipelines with NLTK to evaluate sentence importance through tokenization, frequency scoring, and keyword weight distributions.",
      methodology: [
        "Text normalization including lowercase conversion, punctuation removal, and stopword filtering.",
        "Sentence and word tokenization to structure raw linguistic data.",
        "Keyword extraction and frequency matrix formulation to score sentence relevance.",
        "Extraction of top-ranked sentences to form a coherent condensed summary."
      ],
      results: [
        "Generated readable extractive summaries capturing core article highlights efficiently.",
        "Significantly reduced reading time while preserving salient information points."
      ],
      futureImprovements: [
        "Integrate transformer-based abstractive summarization architectures.",
        "Support multi-document summarization and PDF/URL automated ingestion."
      ]
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Associate Security Engineer",
      company: "Techard Solutions",
      location: "Bengaluru",
      period: "2026 – Present",
      description: [
        "Contributing to the development and testing of security-focused software products and technology solutions.",
        "Working with product and engineering teams to understand requirements, develop solutions and support product implementation."
      ],
      tags: ["Security Engineering", "Software Products", "Testing", "Product Implementation", "Cybersecurity"]
    },
    {
      id: "exp-2",
      role: "Robotics Intern",
      company: "Emglitz Technologies",
      location: "Coimbatore",
      period: "Dec 2024 – Jan 2025",
      description: [
        "Developed practical problem-solving skills through robotics and automation activities.",
        "Assisted in sensor integration and hardware-software interaction for IoT-based systems."
      ],
      tags: ["Robotics", "Automation", "IoT", "Sensor Integration", "Hardware/Software"]
    },
    {
      id: "exp-3",
      role: "UI/UX Development Intern",
      company: "Magora Info Tech",
      location: "Coimbatore",
      period: "May 2024 – Jun 2024",
      description: [
        "Designed user-friendly interfaces and wireframes for web applications with focus on usability and responsive layouts.",
        "Collaborated on improving usability and interface structure."
      ],
      tags: ["UI/UX", "Wireframing", "Responsive Design", "Usability", "Interface Architecture"]
    },
    {
      id: "exp-4",
      role: "Web Development Using Python Intern",
      company: "Nexus Global Solutions",
      location: "Coimbatore",
      period: "May 2024 – Jun 2024",
      description: [
        "Developed basic web applications using Python and web technologies.",
        "Worked on front-end and back-end concepts with database connectivity.",
        "Improved understanding of website functionality and debugging techniques."
      ],
      tags: ["Python", "Web Development", "Backend", "Database Connectivity", "Debugging"]
    }
  ] as Experience[],

  research: {
    title: "Automatic Autopilot Activation During Pilot G-Force Unconsciousness",
    journal: "International Journal of Research Publication and Reviews (IJRPR)",
    citation: "Volume 7, Issue 4 | Apr 2026",
    description: "Proposed an automated aviation safety system designed to activate autopilot during pilot unconsciousness caused by extreme G-force.",
    domain: "Aviation Safety & Autonomous Systems",
    tags: ["Journal Publication", "IJRPR 2026", "AI", "Automation", "Aviation Safety"],
    details: {
      motivation: "High-performance maneuvers can subject pilots to acute G-induced Loss of Consciousness (G-LOC), presenting critical flight hazards.",
      concept: "Conceptualized an intelligent bio-telemetry and flight dynamics monitoring system that continuously evaluates pilot responsiveness and aircraft spatial trajectory.",
      mechanism: "Upon detecting physiological indicators of pilot incapacitation or prolonged unresponsive command states under high G-loads, the system triggers automated autopilot activation to stabilize altitude and ensure flight path recovery.",
      impact: "Enhances pilot survivability and prevents catastrophic flight loss through autonomous emergency handovers."
    }
  },

  certifications: [
    {
      id: "cert-1",
      title: "Develop a Free Website with WordPress",
      issuer: "Coursera",
      category: "Web Development",
      iconName: "Globe"
    },
    {
      id: "cert-2",
      title: "AI Engineering",
      issuer: "Coursera",
      category: "Artificial Intelligence",
      iconName: "Cpu"
    },
    {
      id: "cert-3",
      title: "Generative AI for Software Development",
      issuer: "Coursera",
      category: "Generative AI",
      iconName: "Sparkles"
    },
    {
      id: "cert-4",
      title: "AI Design Challenges",
      issuer: "VOIS",
      category: "AI Problem Solving",
      iconName: "Brain"
    },
    {
      id: "cert-5",
      title: "Exploratory Data Analyst",
      issuer: "VOIS",
      category: "Data Analysis",
      iconName: "BarChart"
    },
    {
      id: "cert-6",
      title: "Neural Network in Python",
      issuer: "VOIS",
      category: "Deep Learning",
      iconName: "Network"
    }
  ] as Certification[],

  education: [
    {
      id: "edu-1",
      degree: "B.Sc. Artificial Intelligence & Machine Learning",
      institution: "Sri Krishna Adithya College of Arts and Science",
      location: "Coimbatore",
      period: "2023 – 2026",
      score: "80%",
      details: "Comprehensive coursework in Artificial Intelligence, Machine Learning Algorithms, Python Programming, Database Management Systems, and Statistical Modeling."
    },
    {
      id: "edu-2",
      degree: "Higher Secondary",
      institution: "Islamiyah Matriculation Higher Secondary School",
      location: "Coimbatore",
      period: "2022 – 2023",
      score: "74%",
      details: "Focus on foundational science and mathematics."
    }
  ] as Education[]
};
