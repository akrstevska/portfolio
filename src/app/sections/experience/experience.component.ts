import { Component } from '@angular/core';
import {GlobalService} from '../../service/global.service';
import {NgForOf, NgIf, NgClass} from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  userDetails: any;

  constructor(private globalService: GlobalService) {
    this.userDetails = this.globalService.userDetails;
  }

}
