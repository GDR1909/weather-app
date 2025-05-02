import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {


  /**
   * Injects the Angular Router for navigation control.
   * @param router Angular Router instance
   */
  constructor(private router: Router) {}


  /**
   * Lifecycle hook that is called after the component is initialized.
   * Navigates to the '/imprint' route and scrolls to the top of the page.
   */
  ngOnInit() {
    this.router.navigateByUrl('/imprint').then(() => {
      window.scrollTo(0, 0);
    });
  }
}