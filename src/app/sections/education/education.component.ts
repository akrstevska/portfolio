import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {GlobalService} from '../../service/global.service';

@Component({
  selector: 'app-education',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  userDetails: any;

  constructor(private globalService: GlobalService) {
    this.userDetails = this.globalService.userDetails;
  }
}
