import { GettingStartedApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { GettingStartedApplication };

export async function main(options: ApplicationConfig = {}) {
  options.rest.port = 9090;
  options.rest.host = '0.0.0.0';

  const app = new GettingStartedApplication(options);

  console.info('***Options: ', options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
