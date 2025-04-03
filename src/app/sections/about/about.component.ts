import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {GlobalService} from '../../service/global.service';
@Component({
  selector: 'app-about',
  imports: [
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('buttonHover', [
      state('normal', style({
        transform: 'scale(1)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      })),
      state('hovered', style({
        transform: 'scale(1.05)',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ])
  ]
})
export class AboutComponent {
  buttonState = 'normal';

  onMouseEnter() {
    this.buttonState = 'hovered';
  }

  onMouseLeave() {
    this.buttonState = 'normal';
  }
  userDetails: any;

  constructor(private globalService: GlobalService) {
    this.userDetails = this.globalService.userDetails;
  }
}
