import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScreensaverComponent } from './screensaver/screensaver.component';

@NgModule({
  declarations: [AppComponent, ScreensaverComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
