import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.css'],
})
export class ScreensaverComponent implements OnInit {
  screensaverActive = false;
  // screensaverColor = '#000'; // Default color
  idleTime = 2 // In seconds
  mousetimeout: any;

  constructor() {}

  ngOnInit(): void {
    document.addEventListener('mousemove', () => {
      clearTimeout(this.mousetimeout);

      if (this.screensaverActive) {
        this.stopScreensaver();
      }

      this.mousetimeout = setTimeout(() => {
        this.showScreensaver();
      }, 1000 * this.idleTime);
    });
  }

  showScreensaver(): void {
    this.screensaverActive = true;
    // this.screensaverColor = this.getRandomColor();
  }

  stopScreensaver(): void {
    this.screensaverActive = false;
  }

  // getRandomColor(): string {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }
}
