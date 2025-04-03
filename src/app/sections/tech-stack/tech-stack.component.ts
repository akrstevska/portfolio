import { Component } from '@angular/core';
import {GlobalService} from '../../service/global.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  imports: [
    NgForOf
  ],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  userDetails: any;

  constructor(private globalService: GlobalService) {
    this.userDetails = this.globalService.userDetails;
  }




  ngOnInit(): void {
  }
}
