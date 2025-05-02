import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';


/**
 * Server-side configuration for the Angular application.
 * 
 * This configuration extends the existing `appConfig` to include server-side rendering support.
 * The primary purpose is to enable Angular Universal (SSR) features on the server.
 */
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};


/**
 * Merges the client-side and server-side configurations.
 * 
 * The `mergeApplicationConfig` function combines the configurations from `appConfig` (client-side)
 * and `serverConfig` (server-side) to create a unified application configuration
 * that works for both environments.
 * 
 * @see {@link appConfig} for the client-side configuration.
 */
export const config = mergeApplicationConfig(appConfig, serverConfig);