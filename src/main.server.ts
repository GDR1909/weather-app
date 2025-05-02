import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';


/**
 * Bootstraps the Angular application on the server side.
 * This function initializes the Angular app and provides the configuration.
 */
const bootstrap = () => bootstrapApplication(AppComponent, config);


/**
 * Exports the bootstrap function to be used as the entry point for server-side rendering.
 */
export default bootstrap;