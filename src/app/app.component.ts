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


  /**
   * Lifecycle hook that is called when the component is initialized.
   * 
   * This method initializes the AOS (Animate On Scroll) library for scroll-based animations.
   * It is invoked when the app component is created and ensures that AOS is ready to
   * be used for animation effects in the application.
   */
  ngOnInit(): void {
    AOS.init(); // Initialize AOS (Animate On Scroll) library for animations

    // if (isPlatformBrowser(this.platformId)) {
    //   // Nur im Browser ausführen!
    //   AOS.init();
    // }
  }
}