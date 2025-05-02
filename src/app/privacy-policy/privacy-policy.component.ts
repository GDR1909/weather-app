import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {


  /**
   * Injects the Angular Router to control navigation.
   * 
   * @param router Angular Router instance
   */
  constructor(private router: Router) {}


  /**
   * OnInit lifecycle hook.
   * Ensures the user is on the correct route and scrolls the window to the top.
   */
  ngOnInit() {
    this.router.navigateByUrl('/privacy-policy').then(() => {
      window.scrollTo(0, 0);
    });
  }
}