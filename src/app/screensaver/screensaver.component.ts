import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.css'],
})
export class ScreensaverComponent implements OnInit {
  screensaverActive = false;
  idleTime = 2; // In seconds
  mousetimeout: any;
  keyboardTimeout: any;

  constructor() {}

  ngOnInit(): void {
    document.addEventListener('mousemove', () => {
      clearTimeout(this.mousetimeout);
      clearTimeout(this.keyboardTimeout);

      if (this.screensaverActive) {
        this.stopScreensaver();
      }

      this.mousetimeout = setTimeout(() => {
        this.showScreensaver();
      }, 1000 * this.idleTime);
    });

    document.addEventListener('keydown', () => {
      clearTimeout(this.keyboardTimeout);
      clearTimeout(this.mousetimeout);

      if (this.screensaverActive) {
        this.stopScreensaver();
      }

      this.keyboardTimeout = setTimeout(() => {
        this.showScreensaver();
      }, 1000 * this.idleTime);
    });
  }

  showScreensaver(): void {
    this.screensaverActive = true;
  }

  stopScreensaver(): void {
    this.screensaverActive = false;
  }
}
