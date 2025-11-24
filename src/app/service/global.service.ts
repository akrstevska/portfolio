import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userDetails = {
    name: 'Angela Krstevska',
    bio1: "Software engineering graduate transitioning into AI and data science, focusing on practical machine learning and data‑driven systems.",
    bio2: "Currently pursuing an MSc in Artificial Intelligence and Data Science at the University of York (Europe Campus, Thessaloniki).",
    email: 'krstevska.angela23@gmail.com',
    profileImage: 'assets/profile2.jpg',
    description: 'Software engineering graduate specialising in AI and data science. I build data-driven applications with Python and modern web technologies, drawing on experience with large language models from my capstone project. I am now focused on applied machine learning, model evaluation, and deploying ML features to production.',
    experiences: [
      {
        title: 'Junior Software Engineer',
        company: 'Digimak - Remote',
        year: 'October 2025 - Present',
        type: 'junior',
        workType: 'Part-time',
        technologies: 'Python, Laravel, Vue.js',
        achievements: [
          'Developing full-stack web applications with modern technologies',
          'Building AI agent for optical network management using LLMs to analyze device logs and automate network optimization'
        ]
      },
      {
        title: 'Software Developer Intern',
        company: 'Digimak - Strumica, Macedonia',
        year: 'June 2025 - September 2025',
        type: 'intern',
        technologies: 'Python, Laravel, Vue.js',
        achievements: [
          'Created automation scripts for optical network management system',
          'Integrated LLM capabilities for intelligent log analysis'
        ]
      },
      {
        title: 'Software Engineer Intern',
        company: 'Aztech - Skopje, Macedonia',
        year: 'June 2024 - September 2024',
        type: 'intern',
        technologies: 'PHP, Laravel, Vue.js',
        achievements: [
          'Built optical network management system features',
          'Developed backend for network device provisioning'
        ]
      },
      {
        title: 'Software Engineer Intern',
        company: 'Digimak - Strumica, Macedonia',
        year: 'June 2023 - September 2023',
        type: 'intern',
        technologies: 'Vue.js, Laravel',
        achievements: [
          'Created football match simulator with real-time tracking'
        ]
      },
      {
        title: 'Software Engineer Intern',
        company: 'Digimak - Strumica, Macedonia',
        year: 'June 2022 - September 2022',
        type: 'intern',
        technologies: 'HTML, CSS, JavaScript',
        achievements: [
          'Built Chrome extension for sports fan engagement'
        ]
      }
    ],
    projects: [
      {
        name: 'LogAI',
        description: 'My capstone project using LLMs to analyze optical network device logs through natural language queries. Built with Flask and Python, it processes network events from ONUs and PON devices, offering multiple response styles (summary, detailed, critical, report). Features intelligent log filtering, metadata extraction, and automated report generation for network administrators to quickly identify and resolve issues.',
        link: 'https://github.com/akrstevska/capstone_project',
        thumbnail: 'assets/thumbnails/logai.png',
        technologies: ['Python', 'Flask', 'LLMs', 'FAISS']
      },
      {
        name: 'Edu-Dashboard',
        description: 'EduDashboard is an intuitive and customizable web application designed to manage and visualize educational data. It features a dynamic dashboard with widgets that users can customize according to their preferences. These widgets allow you to control what information is displayed, adjust the layout, and choose the widget sizes.',
        link: 'https://akrstevska.github.io/edu-dashboard/dashboard',
        thumbnail: 'assets/thumbnails/edu-dashboard.png',
        technologies: ['Angular', 'TypeScript', 'Bootstrap', 'CSS']
      },
      {
        name: 'Edu-Dashboard API',
        description: 'This API enables seamless management and interaction with an online course platform, providing comprehensive tools for handling various educational activities. It allows instructors and students to efficiently manage courses, lessons, enrollments, progress tracking, forums, and assessments.',
        link: 'https://documenter.getpostman.com/view/19662009/2sB2cSi4WZ',
        thumbnail: 'assets/thumbnails/api.png',
        technologies: ['JAVA', 'Spring Boot', 'PostgreSQL']
      },
      
    ],
    backendTech: [
      { name: 'Python', icon: 'assets/tech-icons/python.svg' },
      { name: 'PHP / Laravel', icon: 'assets/tech-icons/php.svg' },
      { name: 'Java Spring Boot', icon: 'assets/tech-icons/spring-boot.svg' },
      { name: 'MySQL / PostgreSQL', icon: 'assets/tech-icons/mysql.svg' },
    ],
    frontendTech: [
      { name: 'Vue.js', icon: 'assets/tech-icons/vue.svg' },
      { name: 'Angular', icon: 'assets/tech-icons/angular.svg' },
      { name: 'TypeScript', icon: 'assets/tech-icons/typescript.svg' },
      { name: 'Bootstrap / CSS', icon: 'assets/tech-icons/bootstrap.svg' },
    ],
    aiDataScienceTech: [
      { name: 'Large Language Models', icon: 'assets/tech-icons/llm.svg' },
      { name: 'RAG / FAISS', icon: 'assets/tech-icons/rag.svg' },
      { name: 'NLP / Text Processing', icon: 'assets/tech-icons/nlp.png' },
      { name: 'Pandas / NumPy', icon: 'assets/tech-icons/pandas-numpy.svg' },
    ],
    toolsTech:[
      { name: 'Git / GitHub', icon: 'assets/tech-icons/git.svg' },
      { name: 'Docker', icon: 'assets/tech-icons/docker.svg' },
      { name: 'CI/CD', icon: 'assets/tech-icons/cicd2.png' },
      { name: 'Figma', icon: 'assets/tech-icons/figma.svg' },
    ],
    education:[
      {
        year: '2025 - present',
        degree: 'Master of Science in Artificial Intelligence and Data Science',
        institution: 'University of York (Europe Campus, Thessaloniki)',
        field: 'Artificial Intelligence and Data Science',
        // gpa: '3.92',
        details: true
      },
      {
        year: '2022 - 2025',
        degree: 'Bachelor of Science in Computer Software Engineering and Information Systems',
        institution: 'University American College, Skopje',
        field: 'Sofware Engineering',
        gpa: '3.92',
        details: true

      },


    ]
  };

  constructor() {}
}
