import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';


/**
 * Defines the routes for the application.
 * 
 * Each route maps a URL path to a specific component in the application.
 * The Angular Router uses this configuration to navigate between views.
 */
export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'imprint', component: ImprintComponent }
];