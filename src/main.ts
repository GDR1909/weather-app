import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


/**
 * Bootstraps the Angular application using the root component and app configuration.
 * Logs an error if bootstrapping fails.
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));