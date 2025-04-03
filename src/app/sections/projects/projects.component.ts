import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {GlobalService} from '../../service/global.service';

@Component({
  selector: 'app-projects',
    imports: [
        NgForOf,

    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  userDetails: any;

  constructor(private globalService: GlobalService) {
    this.userDetails = this.globalService.userDetails;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const projectCards = document.querySelectorAll('.project-card');

      projectCards.forEach(card => {
        const description = card.querySelector('.card-text.color-secondary') as HTMLElement;

        if (description) {
          const originalWhiteSpace = description.style.whiteSpace;
          const originalOverflow = description.style.overflow;

          description.style.whiteSpace = 'normal';
          description.style.overflow = 'visible';

          const isLongDescription = description.scrollHeight > description.clientHeight + 10; // Adding buffer

          description.style.whiteSpace = originalWhiteSpace;
          description.style.overflow = originalOverflow;

          if (isLongDescription) {
            (card as HTMLElement).classList.add('has-long-description');
          }
        }
      });
    }, 100);
  }



}
