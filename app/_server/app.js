import { createApp, createIdentityProvider } from '@kottster/server';
import schema from '../../kottster-app.json';

/* 
 * For security, consider moving the secret data to environment variables.
 * See https://kottster.app/docs/deploying#before-you-deploy
 */
export const app = createApp({
  schema,
  secretKey: 'OJs9TJyk29xBAXVDUEPIbgDYfUEjKr1b',
  kottsterApiToken: 'RXaReLu2GeFnlUBD6U58zeDKbLMBvaYL',

  /*
   * The identity provider configuration.
   * See https://kottster.app/docs/app-configuration/identity-provider
   */
  identityProvider: createIdentityProvider('sqlite', {
    fileName: 'app.db',

    passwordHashAlgorithm: 'bcrypt',
    jwtSecretSalt: 'ZiWVNBksf9pPsOAJ',
    
    /* The root admin user credentials */
    rootUsername: 'RavenAdmin',
    rootPassword: 'Bismillah@22',
  }),
});