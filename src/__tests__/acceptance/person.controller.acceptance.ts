import {Client, expect} from '@loopback/testlab';
import {GettingStartedApplication} from '../..';
import {setupApplication} from './test-helper';

describe('PersonController', () => {
  let app: GettingStartedApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /person/count', async () => {
    const res = await client.get('/person/count').expect(200);
    expect(res.body.count).to.equal(0);
  });
});
