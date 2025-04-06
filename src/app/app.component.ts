import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import AOS from 'aos';
import 'aos/dist/aos.css'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    AOS.init();

    // if (isPlatformBrowser(this.platformId)) {
    //   // Nur im Browser ausführen!
    //   AOS.init();
    // }
  }
}