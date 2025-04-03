import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userDetails = {
    name: 'Angela Krstevska',
    bio1: "💻 Software engineering student passionate about AI, Laravel, and Vue.js, always eager to learn and solve complex problems.",
    bio2: "🎓 Third-year Computer Software Engineering student exploring Large Language Models and RAG, with plans for a master’s in AI & Data Science.",
    email: 'krstevska.angela23@gmail.com',
    profileImage: 'assets/angela.JPG',
    description: 'I am a dedicated software engineering student with a strong passion for AI and full-stack development. Proficient in Laravel, Vue.js, Java, and Spring Boot, I enjoy building innovative solutions and tackling complex challenges. Currently in my third year of Computer Software Engineering, I am exploring Large Language Models and Retrieval-Augmented Generation (RAG) as part of my capstone project. I thrive in collaborative environments and continuously seek opportunities to expand my skills. My goal is to pursue a master’s in AI & Data Science and contribute to cutting-edge projects that drive meaningful technological advancements.',
    experiences: [
      {
        title: 'Software Engineer Intern',
        company: 'Aztech - Skopje, Macedonia',
        year: 'June 2024 - September 2024',
        technologies: 'PHP, Laravel, Vue,js',
        achievements: [
          'Worked on an optical network management system managing routers, users, OLTs, and network configurations',
          'Developed backend functionalities for provisioning, monitoring, and troubleshooting network devices'
        ]
      },
      {
        title: 'Software Engineer Intern',
        company: 'Digimak - Strumica, Macedonia',
        year: 'June 2023 - September 2023',
        technologies: 'Vue.js, Laravel',
        achievements: [
          'Enhanced a football admin dashboard by developing a match simulator',
          'Implemented real-time event tracking and match period management for accurate simulations'
        ]
      },
      {
        title: 'Software Engineer Intern',
        company: 'Digimak - Strumica, Macedonia',
        year: 'June 2022 - September 2022',
        technologies: 'HTML, CSS, JavaScript',
        achievements: [
          'Developed a Chrome extension for football fans to follow their favorite club and team',
          'Created features for real-time updates and news used by sports teams for fan engagement'
        ]
      }
    ],
    projects: [
      {
        name: 'Edu-Dashboard',
        description: 'EduDashboard is an intuitive and customizable web application designed to manage and visualize educational data. It features a dynamic dashboard with widgets that users can customize according to their preferences. These widgets allow you to control what information is displayed, adjust the layout, and choose the widget sizes.',
        link: 'https://akrstevska.github.io/edu-dashboard/dashboard',
        thumbnail: 'assets/thumbnails/edu-dashboard.png'
      },
      {
        name: 'Edu-Dashboard API',
        description: 'This API enables seamless management and interaction with an online course platform, providing comprehensive tools for handling various educational activities. It allows instructors and students to efficiently manage courses, lessons, enrollments, progress tracking, forums, and assessments.',
        link: 'https://documenter.getpostman.com/view/19662009/2sB2cSi4WZ',
        thumbnail: 'assets/thumbnails/api.png'
      },
      {
        name: 'Theater Management System',
        description: 'The system allows users to easily book theater seats, view available shows, and reserve tickets in real-time using an interactive seating map. Admins can manage show details, review reservations, and approve them through a dedicated admin panel. The backend and frontend are both hosted on Azure for reliable performance and availability.',
        link: 'https://github.com/akrstevska/theater-seatbooking',
        thumbnail: 'assets/thumbnails/theater.png'
      }
    ],
    frontendTech: [

      { name: 'Vue.js', icon: 'assets/tech-icons/vue.svg' },
      { name: 'TypeScript', icon: 'assets/tech-icons/typescript.svg' },
      { name: 'Angular', icon: 'assets/tech-icons/angular.svg' },
      { name: 'Bootstrap', icon: 'assets/tech-icons/bootstrap.svg' },
    ],

    backendTech: [
      { name: 'PHP', icon: 'assets/tech-icons/php.svg' },
      { name: 'Java Spring Boot', icon: 'assets/tech-icons/spring-boot.svg' },
      { name: 'Python', icon: 'assets/tech-icons/python.svg' },
      { name: 'MySQL', icon: 'assets/tech-icons/mysql.svg' }
    ],

    toolsTech:[
      { name: 'Git', icon: 'assets/tech-icons/git.svg' },
      { name: 'GitHub', icon: 'assets/tech-icons/github.svg' },
      { name: 'Docker', icon: 'assets/tech-icons/docker.svg' },
      { name: 'Figma', icon: 'assets/tech-icons/figma.svg' },
    ],
    education:[
      {
        year: '2022 - Present',
        degree: 'Computer Software Engineering and Information Systems',
        institution: 'University American College, Skopje',
        field: 'Sofware Engineering',
        gpa: '3.91',
        details: true

      },
      {
        year: '2018 - 2022',
        degree: 'High School',
        institution: 'Jane Sandanski, Strumica',
        field: 'Science and Math Program',
        gpa: '4.0',
        details: true

      },


    ]
  };

  constructor() {}
}
