import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userDetails = {
    name: 'Angela Krstevska',
    bio: "Some bio",
    email: 'krstevska.angela23@gmail.com',
    profileImage: 'assets/angela.JPG',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    experiences: [
      { title: 'Frontend Developer', company: 'ABC Tech', year: '2021 - Present' },
      { title: 'UI/UX Designer', company: 'XYZ Studios', year: '2019 - 2021' },
      { title: 'Web Developer Intern', company: 'StartUp Hub', year: '2018 - 2019' }
    ],
    projects: [
      {
        name: 'Edu-Dashboard',
        description: 'This is the description of Project One. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distrib',
        link: 'https://akrstevska.github.io/edu-dashboard/dashboard',
        thumbnail: 'assets/thumbnails/edu-dashboard.png'
      },
      {
        name: 'Project Two',
        description: 'This is the description of Project Two.',
        link: 'https://link-to-project2.com',
        thumbnail: 'assets/thumbnails/edu-dashboard.png'
      },
      {
        name: 'Project Three',
        description: 'This is the description of Project Three.',
        link: 'https://link-to-project3.com',
        thumbnail: 'assets/thumbnails/edu-dashboard.png'
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
      { name: 'VS Code', icon: 'assets/tech-icons/vs-code.svg' },
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
        gpa: '3.91',
        details: true

      },


    ]
  };

  constructor() {}
}
