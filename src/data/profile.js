export const profile = {
  name: "Sumit Kumar Gupta",
  role: "Software Engineer",
  location: "Kathmandu, Nepal",
  email: "sg065387@gmail.com",
  links: {
    linkedin: "https://np.linkedin.com/in/sumit-gupta-814879189",
    github: "https://github.com/Sum1t01",
    leetcode: "https://leetcode.com/u/Sum1t01/",
  },
};

export const bio = `I'm a software engineer - L2 at Shipsy, where I build mobile
experiences for logistics teams — mostly Kotlin, Jetpack Compose, and Kotlin
Multiplatform. I grew up in Kathmandu, moved to Delhi on a scholarship from
the Indian Council for Cultural Relations to study Computer Engineering at
DTU, and somewhere in there got interested in how software actually behaves
for the people using it. That's still mostly what I care about at work.`;

export const experience = [
  {
    role: "Software Engineer L2",
    org: "Shipsy",
    location: "Gurugram, India",
    period: "May 2026 — Present",
    points: [
      "Reduced app crashes by 50% through performance optimization and proactive technical debt resolution.",
      "Improved platform stability and reliability across core mobile workflows serving enterprise logistics customers.",
      "Led telemetry instrumentation for critical application flows, accelerating production issue detection and diagnosis.",
      "Minimized data loss and improved app responsiveness through architecture and resource-management enhancements.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Shipsy",
    location: "Gurugram, India",
    period: "June 2024 — Apr 2026",
    points: [
      "Revamped the Shipsy Field Ops app using Jetpack Compose and Kotlin Multiplatform, driving 100% onboarding of new customers.",
      "Onboarded Aramex, DPD Poland, Heineken, and Teleport through custom mobile solutions, contributing to a $2M+ ARR deal closure.",
      "Built and maintained AppFlowV2, reducing client-specific development effort by 50%+.",
      "Developed and maintained enterprise mobile applications as part of the core mobile engineering team.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Delhi Technological University",
    location: "New Delhi, India",
    period: "Dec 2023 — June 2024",
    points: [
      "Worked in the Machine Learning Research Laboratory under Prof. Anil Singh Parihar.",
      "Built a low-light action recognition dataset containing 6,000+ video clips of human actions.",
      "Carried out data collection, processing, standardization, and analysis.",
    ],
  },
  {
    role: "Undergraduate Scholar",
    org: "Indian Council for Cultural Relations",
    location: "New Delhi, India",
    period: "Aug 2020 — Jul 2024",
    points: [
      "Fostered teaching and learning among international students at DTU, helping them integrate into academic life.",
      "Bridged the gap between school and college-level education for international students in key foundational subjects.",
      "Organized cultural and educational events with ICCR to support cross-cultural exchange.",
    ],
  },
];

export const education = [
  {
    school: "Delhi Technological University",
    location: "New Delhi, India",
    degree: "B.Tech in Computer Engineering, Minor in Machine Learning",
    period: "Aug 2020 — May 2024",
    detail: "GPA: 9.13 / 10.00",
    coursework:
      "Artificial Intelligence, Machine Learning, Neural Networks, Deep Learning, Pattern Recognition, Computer Vision, Distributed Systems",
  },
  {
    school: "Nepal Mega College",
    location: "Kathmandu, Nepal",
    degree: "High School",
    period: "2017 — 2019",
    detail: "GPA: 3.92 / 4.00",
  },
];

export const projects = [
  {
    name: "RealEstate",
    stack: "Jetpack Compose, Kotlin, Express, React, MongoDB",
    period: "June 2024 — Present",
    points: [
      "A full-stack web and Android app for buying and selling real estate over a marketplace.",
      "JWT authentication, Google OAuth, and Firebase integration.",
      "CRUD operations, profile editing, listing management, and image uploads.",
    ],
  },
  {
    name: "AutoSketch",
    stack: "Python, TensorFlow, Image Processing",
    period: "June 2022 — Present",
    points: [
      "A U-NET autoencoder that converts a photo into its sketch.",
      "Used image augmentation to expand the training set.",
    ],
  },
];

export const skills = [
  {
    label: "Languages",
    items: ["Java", "Kotlin", "Python", "C/C++", "SQL"],
  },
  {
    label: "Frameworks",
    items: [
      "Jetpack Compose",
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "Spring Boot",
      "PyTorch",
    ],
  },
  {
    label: "Tools",
    items: [
      "Git",
      "Android Studio",
      "Xcode",
      "DevRev",
      "Crashlytics",
      "OpenSearch",
      "BigQuery",
      "Cursor",
      "Claude",
    ],
  },
];

export const publications = [
  {
    title: "Performance analysis of action recognition models under low-light condition",
    venue: "International Conference on Intelligent Computing and Communication Techniques",
    year: "2025",
    coauthors: "Prof. Anil Singh Parihar, Sahal Shrestha",
    summary:
      "Investigated the limitations of action recognition models in low-light environments. Built a custom dataset and evaluated models with the MMAction2 toolkit — the results point to a need for low-light-inclusive datasets and models that hold up across lighting conditions.",
  },
];

export const achievements = [
  {
    title: "Star Performer",
    org: "Shipsy",
    location: "Gurugram, India",
    period: "Mar 2025 — Jun 2025",
    points: [
      "Recognized for exceptional performance in Q4 2025, delivering under tight timelines.",
      "Onboarded Shipsy's largest customer, Aramex, by shipping the end-to-end Driver's Self Task Onboarding feature within a week.",
      "Supported the on-ground pilot with real-time changes based on feedback, ensuring seamless adoption.",
      "Contributed to the clustering feature and the DPD Poland on-ground pilot in parallel.",
    ],
  },
  {
    title: "Star Team Performer",
    org: "Shipsy",
    location: "Gurugram, India",
    period: "Mar 2025 — Jun 2025",
    points: [
      "Recognized for consistently meeting 90%+ sprint objectives under tight deadlines while resolving technical debt.",
      "Collaborated across Product and Backend to ensure timely feature delivery.",
    ],
  },
  {
    title: "Atal Bihari Vajpayee General Scholarship Scheme (ABVGSS)",
    org: "Indian Council for Cultural Relations",
    location: "New Delhi, India",
    period: "Aug 2020 — May 2024",
    points: [
      "Fully funded undergraduate scholarship, selected on recommendation from the Embassy of India, Kathmandu.",
      "Covered tuition, a living allowance, a book allowance, and a monthly stipend for four years.",
    ],
  },
  {
    title: "Merit Scholarship for Academic Excellence",
    org: "Delhi Technological University",
    location: "New Delhi, India",
    period: "2022",
    points: ["Awarded for the highest CGPA in the 1st-year A2 section at DTU."],
  },
  {
    title: "National Topper — Grade 12",
    org: "National Examinations Board",
    location: "Kathmandu, Nepal",
    period: "2019",
    points: [
      "Achieved the highest GPA (3.92/4.00) in the 12th-grade board exams in Nepal.",
    ],
  },
  {
    title: "Academic Excellence Award",
    org: "National Examinations Board",
    location: "Kathmandu, Nepal",
    period: "2016 — 2019",
    points: [
      "Received full tuition reimbursement from 9th to 12th grade for outstanding academic performance.",
    ],
  },
];

export const extracurricular = [
  {
    title: "Learning Spanish",
    detail: "Self-initiated language learning through online courses.",
  },
  {
    title: "Math and Science Tutor",
    detail: "Tutored high school students, improving grades by 15%.",
  },
  {
    title: "Desh Ke Mentor",
    detail:
      "Semester-long mentorship program, guiding grade 10–12 students on careers and everyday choices.",
  },
];

// Site chrome — nav items, social links, and every other piece of copy
// rendered on the page. Icon *components* are chosen in the components
// themselves (a rendering concern) via the `key` below, not stored here.

export const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const socials = [
  { key: "github", label: "GitHub", href: profile.links.github },
  { key: "linkedin", label: "LinkedIn", href: profile.links.linkedin },
  { key: "leetcode", label: "LeetCode", href: profile.links.leetcode },
];

export const highlights = [
  {
    key: "mobile",
    title: "Mobile Development",
    description:
      "Native Android and iOS apps built with Kotlin Multiplatform and Compose Multiplatform — from clean architecture to production features used by enterprise logistics teams.",
  },
  {
    key: "ml",
    title: "Machine Learning",
    description:
      "Computer vision and deep learning research, including a low-light action recognition dataset built and benchmarked in PyTorch using the MMAction2 toolkit.",
  },
  {
    key: "backend",
    title: "Backend",
    description:
      "Spring Boot services in Kotlin — the backend layer behind the mobile products I ship end to end.",
  },
];

export const content = {
  brandInitials: "SG",
  ctaLabel: "Contact Me",
  downloadCvLabel: "Download CV",
  hero: {
    eyebrow: "Hi, I'm",
    headline: "Sumit",
    tagline:
      "A Software Engineer specializing in mobile app development, with a strong research background in Machine Learning, Deep Learning, Image Processing, and Computer Vision, plus working experience with backend systems in Spring Boot.",
    scrollLabel: "Scroll",
  },
  about: {
    eyebrow: "About",
    heading: "A bit about me",
    educationLabel: "Education",
    extracurricularLabel: "Outside of work",
    skillsLabel: "Toolkit",
  },
  experience: {
    eyebrow: "Experience",
    heading: "Where I've worked",
  },
  achievements: {
    eyebrow: "Achievements",
    heading: "Awards and recognition",
  },
  projects: {
    eyebrow: "Projects",
    heading: "Things I've built",
    publicationsLabel: "Publications",
  },
  contact: {
    eyebrow: "Contact",
    headingLead: "Have something worth building?",
    headingTail: "Let's talk.",
    formIntro: "Send a message and I'll get back to you soon.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "What's on your mind?",
    submitLabel: "Send Message",
    sendingLabel: "Sending...",
    successMessage: "Thanks — your message is on its way. I'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again, or reach out on socials below.",
  },
  footer: {
    tagline: "Building things at the intersection of mobile and machine learning.",
    navLabel: "Navigate",
    socialsLabel: "Elsewhere",
    backToTop: "Back to top",
    copyright: (year) => `© ${year} ${profile.name}. All rights reserved.`,
  },
};
