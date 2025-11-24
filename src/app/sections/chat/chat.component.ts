import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, OnDestroy {
  isChatOpen = false;

  ngOnInit() {
    this.adjustChatPosition();
  }

  ngOnDestroy() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.adjustChatPosition();
  }

  adjustChatPosition() {
    const footer = document.querySelector('footer');
    const chatWidget = document.querySelector('.chat-widget') as HTMLElement;
    
    if (footer && chatWidget) {
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If footer is visible in viewport
      if (footerRect.top < windowHeight) {
        const distanceFromBottom = windowHeight - footerRect.top + 20; // 20px gap
        chatWidget.style.bottom = `${distanceFromBottom}px`;
      } else {
        chatWidget.style.bottom = '20px'; // Default position
      }
    }
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
}
