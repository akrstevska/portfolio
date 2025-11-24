import { Component, HostListener } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { ChatComponent } from './sections/chat/chat.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';
import { EducationComponent } from './sections/education/education.component';

@Component({
  selector: 'app-root',
  imports: [ AboutComponent, ChatComponent, ExperienceComponent, ProjectsComponent, TechStackComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  activeSection = '';
  currentYear = new Date().getFullYear();
  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.closeNavbar();
  }

  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarContent');

    if (navbarToggler && navbarCollapse) {
      navbarToggler.classList.remove('collapsed');
      navbarCollapse.classList.remove('show');
    }
  }

  isActive(sectionId: string): boolean {
    const section = document.getElementById(sectionId);
    if (!section) return false;

    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['about', 'experience', 'tech-stack', 'education', 'projects'];
    let closestSection = '';
    let closestDistance = Infinity;

    for (let sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = sectionId;
        }
      }
    }

    this.activeSection = closestSection;
  }
}
